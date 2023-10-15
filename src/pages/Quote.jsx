import FormSend from '../components/FormSend';
import Layout from '../components/Layout';
import TypoMain from '../components/TypoMain';

export default function Quote() {
  return (
    <Layout>
      <section className="container mx-auto mt-24 flex flex-col lg:flex-row items-center justify-between mb-32 px-5 lg:px-0">
        <div className="text-left mb-20 lg:mb-0">
          <TypoMain
            title="send qoute"
            subtitle="Tell us about your problem and how we can help"
            description="We are happy to help you, tell us what is the problem with your company, and we are ready to answer these problems. It usually takes a few minutes for us to respond."
            classname2="lg:w-[430px]"
          />
          <button className="px-12 py-4 bg-white/10 text-white text-base font-semibold rounded">
            Ask Us
          </button>
        </div>

        <FormSend
          field1="Name"
          field2="Email"
          field3="Company"
          field4="Company Size"
          field5="Tell Us  Your Problem"
          btnform="Send Quote"
          type="email"
        />
      </section>
    </Layout>
  );
}
