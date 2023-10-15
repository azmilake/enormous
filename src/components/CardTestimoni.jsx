/* eslint-disable react/prop-types */
export default function CardTestimoni({ image, name, company, testimoni }) {
  return (
    <div className="w-full lg:w-4/12 p-14 rounded bg-white/5 flex justify-center flex-col items-center text-center h-[450px]">
      <div className="flex flex-col items-center">
        <img src={image} className="w-24 h-24 mb-5" />
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm text-paragraf/60">{company}</p>
      </div>
      <p className="text-paragraf/60 mt-8">{testimoni}</p>
    </div>
  );
}
