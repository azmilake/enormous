import { useState } from 'react';
import Layout from '../components/Layout';
import TypoMain from '../components/TypoMain';
import CardProjectDesktop from '../components/CardProjectDesktop';
import CardProjectMobile from '../components/CardProjectMobile';
import ButtonSecondary from '../components/ButtonSecondary';

export default function Project() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <Layout>
      <section className="container mx-auto mt-24 mb-20 px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-white/10 pb-20">
          <div>
            <TypoMain
              title="Projects"
              subtitle="We have completed many amazing projects that you will not believe"
            />
          </div>
          <div className="relative">
            <button
              className="py-2 px-5 flex items-center border border-white/10 rounded text-white/40 space-x-9"
              onClick={() => setDropdown(!dropdown)}
            >
              <p>Technology</p>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 6.75L9 11.25L13.5 6.75"
                  stroke="white"
                  strokeOpacity="0.4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="pl-5"
                />
              </svg>
            </button>

            {dropdown && (
              <div className="absolute w-full bg-white/40 rounded p-5 top-12 ">
                <ul className="space-y-5">
                  <li>
                    <a href="#" className="hover:underline">
                      Education
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Technology
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Media
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Business
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Company
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 space-x-0 lg:space-x-10 mb-10 lg:mb-16">
            <CardProjectMobile />
            <CardProjectDesktop />
          </div>
          <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 space-x-0 lg:space-x-10">
            <CardProjectDesktop />
            <CardProjectMobile />
          </div>
          <div className="flex justify-center mt-20">
            <ButtonSecondary>Load More</ButtonSecondary>
          </div>
        </div>
      </section>
    </Layout>
  );
}
