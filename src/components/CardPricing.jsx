/* eslint-disable react/prop-types */
export default function CardPricing({ title, price, description }) {
  return (
    <div
      className={`w-full lg:w-4/12 bg-white/5 rounded-2xl p-12 mb-5 lg:mb-0`}
    >
      <div className="flex justify-between">
        <h2 className="text-base font-bold">{title}</h2>
        <span>
          <p className="text-paragraf/60 text-xs mb-2">Starting from</p>
          <h1 className="font-bold text-4xl">{price}$</h1>
        </span>
      </div>
      <hr className="my-9" />
      <div className="flex flex-col items-center space-y-5 text-base font-medium mb-12">
        {description.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <button className="w-full bg-white text-black py-5 rounded text-base font-semibold">
        Detail
      </button>
    </div>
  );
}
