import DataResponse from '../utils/response.json';

export default function Response() {
  return (
    <div className="flex flex-col items-center justify-center lg:w-[680px] mx-auto">
      <h1 className="text-3xl font-bold mb-24">Response</h1>

      {DataResponse.map(({ image, name, date, comment, id }) => (
        <div
          className="flex mb-12 border-b border-white/10 pb-10 lg:pb-0"
          key={id}
        >
          <div className="w-48 h-48 mr-5 lg:mr-0">
            <img src={image} />
          </div>
          <div className="space-y-5">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="text-paragraf/60 text-sm">{date} min ago</p>
            </div>
            <div className="text-base">
              <p>{comment}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
