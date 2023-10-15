/* eslint-disable no-unused-vars */
import TypoSecond from './TypoSecond';

/* eslint-disable react/prop-types */
export default function SectionInfo({ image, typoSecond, children }) {
  return (
    <>
      <div className="w-full lg:w-6/12 mt-10 lg:mt-0">
        <img src={image} />
      </div>
      <div className="w-full lg:w-6/12">
        <div className="mb-14">{typoSecond}</div>

        <div className="mt-8 text-base font-semibold flex items-center space-x-3 justify-end">
          <p>
            <a href="#">Service Detail</a>
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
    </>

    // <div className="flex flex-col-reverse lg:flex-row justify-between items-center mb-32">
    // <div className="w-full lg:w-6/12 mt-10 lg:mt-0">
    //   <img src={image} />
    // </div>
    // <div className="w-full lg:w-6/12">
    //   <div className="mb-14">{typoSecond}</div>

    //   <div className="mt-8 text-base font-semibold flex items-center space-x-3 justify-end">
    //     <p>
    //       <a href="#">Service Detail</a>
    //     </p>
    //     <svg
    //       width="20"
    //       height="20"
    //       viewBox="0 0 20 20"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         d="M4.1665 10H15.8332"
    //         stroke="white"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //       <path
    //         d="M10 4.16675L15.8333 10.0001L10 15.8334"
    //         stroke="white"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //     </svg>
    //   </div>
    // </div>
    // </div>
  );
}

{
  /* <TypoSecond
            title="Ui Design"
            subtitle="Don't let your idea get caught by others, design a prototype for your idea"
            description="Delegate your ideas as quickly as possible, create beautiful designs and vivid prototypes."
            classname="mx-0"
          /> */
}
