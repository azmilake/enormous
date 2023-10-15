/* eslint-disable react/prop-types */
export default function CardService({ icon, service, description }) {
  return (
    <div className="w-full lg:w-4/12 space-x-1 bg-white/5 text-white p-10 rounded">
      <img src={icon} className="mb-7" />
      <h2 className="mb-2 text-lg font-bold">{service}</h2>
      <p className="text-paragraf/60 text-base">{description}</p>
    </div>
  );
}
