/* eslint-disable react/prop-types */
export default function CardServiceDesign({ image, title, desc }) {
  return (
    <div className="w-6/12 bg-white/5 p-5 rounded border border-white/10">
      <div className="flex items-center space-x-4 mb-5">
        <img src={image} />
        <h2 className="text-base font-semibold">{title}</h2>
      </div>
      <div className="">
        <p className="text-paragraf/60 text-sm">{desc}</p>
      </div>
    </div>
  );
}
