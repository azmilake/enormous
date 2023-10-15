import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
export default function CardSectionRight({
  image,
  children,
  classname,
  classname2,
}) {
  return (
    <div
      className={`flex flex-col-reverse lg:flex-row justify-between items-center ${classname}`}
    >
      <div className="w-full lg:w-6/12 mt-10 lg:mt-0">
        <img src={image} />
      </div>
      <div className="w-full lg:w-6/12">
        {children}
        <div
          className={`mt-8 text-base font-semibold flex items-center space-x-3 justify-end ${classname2}`}
        >
          <p>
            <Link to="/service/detail">Service Detail</Link>
          </p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.1665 10H15.8332"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 4.16675L15.8333 10.0001L10 15.8334"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
