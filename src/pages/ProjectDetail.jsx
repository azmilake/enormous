import CardProjectDesktop from '../components/CardProjectDesktop';
import CardProjectMobile from '../components/CardProjectMobile';
import Layout from '../components/Layout';
import TypoMain from '../components/TypoMain';
import TypoSecond from '../components/TypoSecond';

export default function ProjectDetail() {
  return (
    <Layout>
      <section className="container mx-auto mt-24 px-5 lg:px-0">
        <div className="flex flex-col justify-center items-center text-center border-b border-white/5 pb-20 mb-16">
          <TypoMain
            title="Project Detail"
            subtitle="The Desktop App Landing Page"
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-10 border-b border-white/5 pb-32 mb-32">
          <CardProjectDesktop classname="hidden" />

          <div className="flex flex-col w-full lg:w-6/12 space-y-14">
            <p className="text-paragraf/60 text-base flex">
              Something has always existed. According to physics, there can
              never be true physical nothingness—though there can be times when
              existence resembles nothing.
            </p>
            <div className="flex flex-col space-y-10 pb-0 lg:pb-10">
              <div className="flex flex-col">
                <h2 className="text-sm text-paragraf/60 mb-2 uppercase">
                  Category
                </h2>
                <h2 className="text-base font-semibold">Development</h2>
              </div>
              <div className="flex flex-col">
                <h2 className="text-sm text-paragraf/60 mb-2 uppercase">
                  Client
                </h2>
                <h2 className="text-base font-semibold">Acme, Inc</h2>
              </div>
              <div className="flex flex-col">
                <h2 className="text-sm text-paragraf/60 mb-2 uppercase">
                  Technology
                </h2>
                <h2 className="text-base font-semibold">
                  JavaScript, HTML, CSS
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-36">
          <div className="flex flex-col items-center justify-center text-center">
            <TypoSecond title="Projects" subtitle="Other Amazing Projects" />
          </div>
          <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-5 space-y-10 lg:space-y-0">
            <CardProjectMobile />
            <CardProjectDesktop />
          </div>
        </div>
      </section>
    </Layout>
  );
}
