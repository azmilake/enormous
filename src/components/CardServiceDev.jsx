/* eslint-disable react/prop-types */
export default function CardServiceDev({ icon, name }) {
  return (
    <div className="w-full bg-white/5 border border-white/10 p-5 flex items-center space-x-5 rounded">
      <img src={icon} />
      <h2 className="text-base font-semibold">{name}</h2>
    </div>
  );
}
