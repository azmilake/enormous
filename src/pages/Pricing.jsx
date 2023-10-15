import CardPricing from '../components/CardPricing';
import Faq from '../components/Faq';
import Layout from '../components/Layout';
import TypoMain from '../components/TypoMain';

export default function Pricing() {
  return (
    <Layout>
      <section className="container mx-auto mt-24 px-5 lg:px-0">
        <div className="flex flex-col items-center justify-center text-center border-b border-white/10 pb-24">
          <TypoMain
            title="Pricing"
            subtitle="What do you need? Choose a service that can help you"
          />
        </div>

        <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-5 mt-24 mb-28">
          <CardPricing
            title="UI Design"
            price="1200"
            description={[
              '10 design pages',
              'Well-documented',
              '4 revisions',
              '$100/additional page',
            ]}
          />
          <CardPricing
            title="Development"
            price="5000"
            description={[
              'Web & Mobile',
              'Well-documented',
              '8 revisions',
              '$1000/additional feature',
            ]}
          />
          <CardPricing
            title="Maintenance"
            price="3000"
            description={[
              'Daily backup',
              '3 hours of maintenance',
              'Including fixing',
              '$50/additional hour',
            ]}
          />
        </div>

        <Faq />
      </section>
    </Layout>
  );
}
