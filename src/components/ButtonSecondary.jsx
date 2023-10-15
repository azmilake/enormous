/* eslint-disable react/prop-types */
export default function ButtonSecondary({ children, classname }) {
  return (
    <button
      className={`px-12 py-4 bg-white/10 text-white rounded text-base font-semibold flex-shrink-0 ${classname}`}
    >
      {children}
    </button>
  );
}
