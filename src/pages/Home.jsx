import { Link } from 'react-router-dom'
import ButtonPrimary from '../components/ButtonPrimary'
import ButtonSecondary from '../components/ButtonSecondary'
import CardPricing from '../components/CardPricing'
import CardProjectDesktop from '../components/CardProjectDesktop'
import CardProjectMobile from '../components/CardProjectMobile'
import CardService from '../components/CardService'
import CardTestimoni from '../components/CardTestimoni'
import Client from '../components/Client'
import Layout from '../components/Layout'
import TypoMain from '../components/TypoMain'
import TypoSecond from '../components/TypoSecond'
import DataService from '../utils/serviceHome.json'
import ServiceCard from '../components/ServiceCard'
import CardServiceDev from '../components/CardServiceDev'

const rows = []
let currentRow = []
for (let i = 0; i < DataService.length; i++) {
  currentRow.push(DataService[i])
  if (currentRow.length === 3 || i === DataService.length - 1) {
    rows.push(currentRow)
    currentRow = []
  }
}

export default function Home() {
  return (
    <>
      <Layout>
        <section className="container mx-auto flex flex-col justify-center items-center text-center mt-24 mb-24 px-5 lg:px-0">
          <div className="w-full lg:w-[600px] flex flex-col justify-center items-center">
            <TypoMain
              title="client-development driven"
              subtitle="We Design. We Develop. We Ship. In The Same Day."
              description="We are committed to not making clients wait. We will deliver the work as quickly as possible. Even on the same day. Even so, we do not reduce the quality of our work."
            />
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-4">
              <Link to="/quote">
                <ButtonPrimary>Send Qoute</ButtonPrimary>
              </Link>
              <ButtonSecondary>Learn More</ButtonSecondary>
            </div>
          </div>
        </section>

        <section className="container mx-auto flex flex-col lg:flex-row space-y-5 lg:space-y-0 space-x-0 lg:space-x-5 mb-14 px-5 lg:px-0">
          <div>
            {rows.map((row, index) => (
              <div
                className="flex flex-col lg:flex-row justify-center space-x-0 space-y-5 lg:space-y-0 lg:space-x-5 mb-4"
                key={index}
              >
                {row.map((service, index) => (
                  <CardService
                    key={index}
                    icon={service.icon}
                    service={service.service}
                    description={service.description}
                  />
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto mb-32">
          <Client />
        </section>

        <section className="container mx-auto flex flex-col-reverse lg:flex-row justify-between items-center mb-32 px-5 lg:px-0">
          <div className="w-full lg:w-6/12">
            <img src="/bg-work.png" />
          </div>
          <div className="w-full lg:w-6/12 mb-14 lg:mb-0">
            <TypoSecond
              title="how we work?"
              subtitle="Everything is well planned, well designed and developed wholeheartedly"
              description="Careful planning makes us confident, developed with best practices so that the project can be maintained. We always test projects before they are shipped."
            />
          </div>
        </section>

        {/* our team */}
        <section className="container mx-auto flex flex-col lg:flex-row space-x-0 lg:space-x-6 justify-between items-center border-b border-b-white/10 pb-20 mb-60 px-5 lg:px-0">
          <div className="w-full lg:w-6/12 mb-20 lg:mb-0">
            <TypoSecond
              title="Our Team"
              subtitle="We're a team of designers, engineers and analysts"
              description="Our team consists of many creative people. We are committed to maintaining quality work as well as speed. These creative people work together to create maximum work results."
            />

            <Link to="/about">
              <ButtonSecondary classname="mt-12">See Our Teams</ButtonSecondary>
            </Link>
          </div>
          <div className="w-full lg:w-6/12">
            <img src="/bg-ourteam.png" />
          </div>
        </section>

        <section className="container mx-auto mb-28 px-5 lg:px-0">
          <div className="flex flex-col w-full lg:w-5/12 justify-center items-center text-center mx-auto mb-16">
            <TypoSecond
              title="Projects"
              subtitle="We have completed many amazing projects that you will not believe"
            />
          </div>
          <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-10 space-y-14 lg:space-y-0">
            <CardProjectMobile />
            <CardProjectDesktop />
          </div>
        </section>

        <section className="mb-32 bg-bgSection h-full lg:h-[900px] w-full lg:w-[1300px] mx-auto rounded-3xl lg:p-28 px-5">
          <div className="text-center w-full lg:w-[500px] mx-auto mb-16">
            <TypoSecond
              title="Get Started"
              subtitle="What do you need? Choose a service that can help you"
            />
          </div>
          <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-5">
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
        </section>

        <section className="w-full lg:w-[1300px] mx-auto mb-28 px-5 lg:px-0">
          <div className="text-center mb-24">
            <TypoSecond
              title="Testimonial"
              subtitle="What do our clients say that we never let down?"
            />
          </div>

          <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-10 space-y-5 lg:space-y-0">
            <CardTestimoni
              image="/testi1.png"
              name="Courtney Henry"
              company="Biffco Enterprises Ltd."
              testimoni="Very easy to use. I made back the purchase price in just 48
                hours! Its great. Its is both attractive and highly adaptable."
            />
            <CardTestimoni
              image="/testi2.png"
              name="Esther Howard"
              company="Abstergo Ltd."
              testimoni="Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."
            />
            <CardTestimoni
              image="/testi3.png"
              name="Ronald Richards"
              company="Barone LLC."
              testimoni="I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "
            />
          </div>
        </section>

        <section className="container mx-auto mt-24 px-5 lg:px-0">
          <ServiceCard imageSrc="/service-1.png" position="left">
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

          <ServiceCard imageSrc="/service-1.png" position="right">
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

          <ServiceCard imageSrc="/service-1.png" position="left">
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
        </section>
      </Layout>
    </>
  )
}
