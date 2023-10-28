import CardService from '../components/CardService'
import Layout from '../components/Layout'
import TypoMain from '../components/TypoMain'
import TypoSecond from '../components/TypoSecond'
import DataService from '../utils/serviceDetail.json'

import Faq from '../components/Faq'
import ServiceCard from '../components/ServiceCard'

const rows = []
let currentRow = []
for (let i = 0; i < DataService.length; i++) {
  currentRow.push(DataService[i])
  if (currentRow.length === 3 || i === DataService.length - 1) {
    rows.push(currentRow)
    currentRow = []
  }
}

export default function ServiceDetail() {
  return (
    <Layout>
      <section className="container mx-auto mt-24 px-5 lg:px-0">
        <div className="flex flex-col justify-center items-center text-center border-b border-white/10 pb-24 mb-20">
          <TypoMain
            title="Development"
            subtitle="Solve your company's repetitive problems by designing apps"
          />
        </div>

        <ServiceCard imageSrc="/service-2.png" position="left">
          <TypoSecond description="Just tell us your repetitive problem or the primitive method used today, and we will create a digital solution.We can build you a website, a mobile app and a desktop app. All types of applications have a good security system, are easy to maintain, and are high speed." />
          <ul className="space-y-3 mt-10">
            <li className="flex items-center space-x-5">
              <div className="h-2 w-2 bg-white"></div>
              <p className="text-base font-semibold">
                Avoid potential bugs with unit testing
              </p>
            </li>
            <li className="flex items-center space-x-5">
              <div className="h-2 w-2 bg-white"></div>
              <p className="text-base font-semibold">
                Removing unused code will speed up the application
              </p>
            </li>
            <li className="flex items-center space-x-5">
              <div className="h-2 w-2 bg-white"></div>
              <p className="text-base font-semibold">
                The modern design pleases the users
              </p>
            </li>
            <li className="flex items-center space-x-5">
              <div className="h-2 w-2 bg-white"></div>
              <p className="text-base font-semibold">
                A good UX will not disappoint users
              </p>
            </li>
          </ul>
        </ServiceCard>

        <div className="mt-32 mb-32">
          <div className="flex flex-col items-center justify-center text-center">
            <TypoSecond
              title="Features"
              subtitle="Here's what you will get when purchasing this service"
            />
          </div>

          <div>
            {rows.map((row, index) => (
              <div
                className="flex flex-col lg:flex-row justify-center space-y-5 lg:space-y-0 space-x-0 lg:space-x-5 mb-4"
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
        </div>

        <Faq />
      </section>
    </Layout>
  )
}
