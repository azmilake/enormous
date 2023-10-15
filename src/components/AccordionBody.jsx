/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function AccordionBody({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item shadow-lg border-b border-white/5 font-semibold text-base">
      <div
        className="accordion-title bg-transparent text-white shadow-orange-50 w-full h-16 flex justify-between items-center p-2 lg:p-6 cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <button className="transition-all duration-500 px-5 text-xl font-bold">
          {title}
        </button>
        <button>
          {isActive ? (
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 7L7 1L1 7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 1L7 7L1 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
      {isActive && (
        <div className="accordion-content w-full bg-transparent text-paragraf/60 pb-10 px-10 text-base font-normal">
          {content}
        </div>
      )}
    </div>
  );
}
