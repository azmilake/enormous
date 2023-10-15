import Accordion from '../components/Accordion';
import Layout from '../components/Layout';
import TypoMain from '../components/TypoMain';

export default function Faq() {
  return (
    <Layout>
      <section className="container mx-auto px-5 lg:px-0">
        <div className="flex flex-col text-center items-center justify-center mt-24 mb-24 border-white/10 pb-24 border-b">
          <TypoMain
            title="Pricing"
            subtitle="Frequently asked questions, maybe the same as yours"
          />
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <nav
              className="flex flex-col"
              aria-label="Tabs"
              role="tablist"
              data-hs-tabs-vertical="true"
            >
              <button
                type="button"
                className="hs-tab-active:text-white dark:hs-tab-active:text-white pr-4 inline-flex items-center gap-2 text-base font-semibold bg-white/5 py-3 px-10 border-b border-white/10 whitespace-nowrap text-paragraf/60 hover:text-white active"
                id="vertical-tab-with-border-item-1"
                data-hs-tab="#vertical-tab-with-border-1"
                aria-controls="vertical-tab-with-border-1"
                role="tab"
              >
                General
              </button>
              <button
                type="button"
                className="hs-tab-active:text-white dark:hs-tab-active:text-white pr-4 inline-flex items-center gap-2 text-base font-semibold bg-white/5 py-3 px-10 border-b border-white/10 whitespace-nowrap text-paragraf/60 hover:text-white active"
                id="vertical-tab-with-border-item-2"
                data-hs-tab="#vertical-tab-with-border-2"
                aria-controls="vertical-tab-with-border-2"
                role="tab"
              >
                Transaction
              </button>
              <button
                type="button"
                className="hs-tab-active:text-white dark:hs-tab-active:text-white pr-4 inline-flex items-center gap-2 text-base font-semibold bg-white/5 py-3 px-10 border-b border-white/10 whitespace-nowrap text-paragraf/60 hover:text-white active"
                id="vertical-tab-with-border-item-3"
                data-hs-tab="#vertical-tab-with-border-3"
                aria-controls="vertical-tab-with-border-3"
                role="tab"
              >
                Maintenance
              </button>
              <button
                type="button"
                className="hs-tab-active:text-white dark:hs-tab-active:text-white pr-4 inline-flex items-center gap-2 text-base font-semibold bg-white/5 py-3 px-10 border-b border-white/10 whitespace-nowrap text-paragraf/60 hover:text-white active"
                id="vertical-tab-with-border-item-4"
                data-hs-tab="#vertical-tab-with-border-4"
                aria-controls="vertical-tab-with-border-4"
                role="tab"
              >
                License
              </button>
              <button
                type="button"
                className="hs-tab-active:text-white dark:hs-tab-active:text-white pr-4 inline-flex items-center gap-2 text-base font-semibold bg-white/5 py-3 px-10 whitespace-nowrap text-paragraf/60 hover:text-white active"
                id="vertical-tab-with-border-item-5"
                data-hs-tab="#vertical-tab-with-border-5"
                aria-controls="vertical-tab-with-border-5"
                role="tab"
              >
                Technology
              </button>
            </nav>
          </div>

          <div className="ml-0 lg:ml-3 w-full">
            <div
              id="vertical-tab-with-border-1"
              role="tabpanel"
              aria-labelledby="vertical-tab-with-border-item-1"
            >
              <p className="text-gray-500 dark:text-gray-400">
                <Accordion />
              </p>
            </div>
            <div
              id="vertical-tab-with-border-2"
              className="hidden"
              role="tabpanel"
              aria-labelledby="vertical-tab-with-border-item-2"
            >
              <p className="text-gray-500 dark:text-gray-400">
                <Accordion />
              </p>
            </div>
            <div
              id="vertical-tab-with-border-3"
              className="hidden"
              role="tabpanel"
              aria-labelledby="vertical-tab-with-border-item-3"
            >
              <p className="text-gray-500 dark:text-gray-400">
                <Accordion />
              </p>
            </div>
            <div
              id="vertical-tab-with-border-4"
              className="hidden"
              role="tabpanel"
              aria-labelledby="vertical-tab-with-border-item-3"
            >
              <p className="text-gray-500 dark:text-gray-400">
                <Accordion />
              </p>
            </div>
            <div
              id="vertical-tab-with-border-5"
              className="hidden"
              role="tabpanel"
              aria-labelledby="vertical-tab-with-border-item-3"
            >
              <Accordion />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
