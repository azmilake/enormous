import CardSectionLeft from '../components/CardSectionLeft';
import CardSectionRight from '../components/CardSectionRight';
import Layout from '../components/Layout';
import TypoMain from '../components/TypoMain';
import TypoSecond from '../components/TypoSecond';

export default function HowWeWork() {
  return (
    <Layout>
      <section className="container mx-auto mt-24 px-5 lg:px-0">
        <div className="flex flex-col justify-center items-center text-center pb-20 border-b border-white/10 mb-20">
          <TypoMain
            title="How We Work"
            subtitle="We have a workflow that allows the job to be delivered well"
          />
        </div>

        <CardSectionRight
          image="/service-4.png"
          classname="mb-24"
          classname2="hidden"
        >
          <div className="mb-14">
            <TypoSecond
              title="Step 01"
              subtitle="Let's talk about your company's problems first"
              description="After submitting the quote form, we will review the data, then we will contact you. You can discuss with our team regarding your problem and find a solution to that problem.

              In this step, you will discuss what application to build."
              classname="mx-0"
            />
          </div>
        </CardSectionRight>

        <CardSectionLeft
          image="/service-5.png"
          classname="mb-28"
          classname2="hidden"
        >
          <TypoSecond
            title="Step 02"
            subtitle="Doing planning, design and development until everything is finished"
            description="When everything is agreed upon, our team will make plans related to the application that will be created. Starting from analysis, design, to development.

            In this step, the application is 100% complete."
            classname="mx-0"
          />
        </CardSectionLeft>

        <CardSectionRight
          image="/service-6.png"
          classname="mb-40"
          classname2="hidden"
        >
          <div className="mb-14">
            <TypoSecond
              title="Step 03"
              subtitle="The project is complete and we ship all the project assets, and access to the server"
              description="We will be responsible for delivering all the project assets to you, don't worry. These assets include, design files, source code, server access, and so on.

              In this step, everything is done and the contract ends."
              classname="mx-0 lg:w-[430px]"
            />
          </div>
        </CardSectionRight>
      </section>
    </Layout>
  );
}
