/* eslint-disable react/prop-types */
export default function ButtonPrimary({ children, classname }) {
  return (
    <button
      className={` ${classname} px-12 py-4 bg-btnPrimary text-white rounded text-base font-semibold flex-shrink-0`}
    >
      {children}
    </button>
  );
}
