import CardSectionLeft from '../components/CardSectionLeft';
import CardSectionRight from '../components/CardSectionRight';
import CardServiceDesign from '../components/CardServiceDesign';
import CardServiceDev from '../components/CardServiceDev';
import Layout from '../components/Layout';
import TypoMain from '../components/TypoMain';
import TypoSecond from '../components/TypoSecond';

export default function Services() {
  return (
    <Layout>
      <section className="container mx-auto mt-24 px-5 lg:px-0">
        <div className="flex flex-col justify-center items-center text-center pb-20 border-b border-white/10 mb-20">
          <TypoMain
            title="Services"
            subtitle="We are here to help solve your company's problems"
          />
        </div>

        <CardSectionRight image="/service-1.png" classname="mb-24">
          <div className="mb-14">
            <TypoSecond
              title="Ui Design"
              subtitle="Don't let your idea get caught by others, design a prototype for your idea"
              description="Delegate your ideas as quickly as possible, create beautiful designs and vivid prototypes."
              classname="mx-0"
            />
          </div>
          <div className="flex space-x-5">
            <CardServiceDesign
              image="/card-icon-service-1.png"
              title="Beautiful Design"
              desc="Create a modern design for your idea."
            />
            <CardServiceDesign
              image="/card-icon-service-2.png"
              title="Card Name"
              desc="Create vivid prototypes for your designs."
            />
          </div>
        </CardSectionRight>

        <CardSectionLeft
          image="/service-2.png"
          classname="mb-28"
          classname2="hidden"
        >
          <TypoSecond
            title="Development"
            subtitle="Create solutions to repetitive problems, design applications and access anywhere!"
            description="Just tell us your repetitive problem or the primitive method used today, and we will create a digital solution."
            classname="mx-0"
          />
          <div className="flex flex-col mt-14 lg:space-y-5 space-y-0">
            <CardServiceDev
              icon="/card-icon-service-3.png"
              name="Mobile App Development"
            />
            <CardServiceDev
              icon="/card-icon-service-4.png"
              name="Desktop App Development"
            />
            <CardServiceDev
              icon="/card-icon-service-5.png"
              name="Web Development"
            />
          </div>
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
        </CardSectionLeft>

        <CardSectionRight image="/service-3.png" classname="mb-40">
          <div className="mb-14">
            <TypoSecond
              title="Maintanance"
              subtitle="Think of your server as your own child, taking care of it every day"
              description="We will back up your servers every day, clean them every week, upgrade them when there is an update."
              classname="mx-0 lg:w-[430px]"
            />
            <div className="flex flex-col space-y-5 mt-7">
              <div className="flex space-x-8">
                <div className="flex space-x-6 items-center">
                  <div className="h-12 w-12 rounded bg-white/10 flex justify-center items-center">
                    <img src="/card-icon-service-6.png" />
                  </div>
                  <h2 className="text-base font-semibold">Back up every day</h2>
                </div>
                <div className="flex space-x-6 items-center">
                  <div className="h-12 w-12 rounded bg-white/10 flex justify-center items-center">
                    <img src="/card-icon-service-7.png" />
                  </div>
                  <h2 className="text-base font-semibold">Upgrade</h2>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex space-x-6 items-center">
                  <div className="h-12 w-12 rounded bg-white/10 flex justify-center items-center">
                    <img src="/card-icon-service-8.png" />
                  </div>
                  <h2 className="text-base font-semibold">
                    Cleaning every week
                  </h2>
                </div>
                <div className="flex space-x-6 items-center">
                  <div className="h-12 w-12 rounded bg-white/10 flex justify-center items-center">
                    <img src="/card-icon-service-9.png" />
                  </div>
                  <h2 className="text-base font-semibold">Fixing error</h2>
                </div>
              </div>
            </div>
          </div>
        </CardSectionRight>
      </section>
    </Layout>
  );
}
