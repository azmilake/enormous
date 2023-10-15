import Layout from '../components/Layout';
import TypoMain from '../components/TypoMain';
import FormSend from '../components/FormSend';
import IconContainer from '../components/IconContainer';

export default function Contact() {
  return (
    <>
      <Layout>
        <section className="container mx-auto flex flex-col lg:flex-row items-center mt-24 mb-32 px-5 lg:px-0">
          <div className="text-left mb-20 lg:mb-0">
            <TypoMain
              title="contact"
              subtitle="We love receiving messages from you, we are waiting for it."
              classname1="lg:w-[440px]"
            />
            <IconContainer
              icon="/phone-icon.svg"
              name="Phone"
              desc="+62 1234 8921"
              classname="mt-12"
            />
            <IconContainer
              icon="/mail-icon.svg"
              name="Email"
              desc="support@enormous.svg"
            />
          </div>

          <FormSend
            field1="Name"
            field2="Email"
            field3="Company"
            field4="Company Size"
            field5="Tell Us  Your Problem"
            btnform="Send Message"
            type="email"
          />
        </section>
      </Layout>
    </>
  );
}
