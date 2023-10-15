/* eslint-disable react/prop-types */
export default function TypoSecond({
  title,
  subtitle,
  description,
  classname,
}) {
  return (
    <>
      <h2 className="uppercase text-green text-base font-semibold mb-1 tracking-wider">
        {title}
      </h2>
      <h1
        className={`text-white text-3xl font-bold mb-7 leading-relaxed w-full lg:w-[500px] mx-auto ${classname}`}
      >
        {subtitle}
      </h1>
      <p className="text-base text-paragraf/60 leading-relaxed">
        {description}
      </p>
    </>
  );
}
