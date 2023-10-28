import CardServiceDev from '../components/CardServiceDev'
import CardServiceDesign from '../components/CardServiceDesign'
import Layout from '../components/Layout'
import ServiceCard from '../components/ServiceCard'
import TypoMain from '../components/TypoMain'
import TypoSecond from '../components/TypoSecond'

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

        <ServiceCard imageSrc="/service-1.png" position="left">
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
        </ServiceCard>

        <ServiceCard imageSrc="/service-2.png" position="right">
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
        </ServiceCard>

        <ServiceCard imageSrc="/service-3.png" position="left">
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
        </ServiceCard>
      </section>
    </Layout>
  )
}
