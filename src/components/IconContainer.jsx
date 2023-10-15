/* eslint-disable react/prop-types */
export default function IconContainer({
  icon,
  name,
  desc,
  classname,
  classname2,
}) {
  return (
    <div className={`flex items-center space-x-6 mb-8 ${classname}`}>
      <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center">
        <img src={icon} alt={name} />
      </div>
      <div>
        <p className="text-base text-paragraf/60 font-semibold mb-1">{name}</p>
        <p className={`text-xl font-bold ${classname2}`}>{desc}</p>
      </div>
    </div>
  );
}
