/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function TypoMain({
  title,
  subtitle,
  description,
  classname1,
  classname2,
  classname3,
}) {
  return (
    <>
      <h2
        className={`uppercase text-base font-semibold text-green mb-3 ${classname3}`}
      >
        {title}
      </h2>
      <h1
        className={`text-4xl font-bold mb-6 w-full lg:w-[500px] ${classname1}`}
      >
        {subtitle}
      </h1>
      <p
        className={`text-base font-medium w-full lg:w-[540px] text-white/60 leading-relaxed mb-10 ${classname2}`}
      >
        {description}
      </p>
    </>
  );
}
