import Client from '../components/Client'
import Layout from '../components/Layout'
import ServiceCard from '../components/ServiceCard'
import TypoMain from '../components/TypoMain'
import TypoSecond from '../components/TypoSecond'
import DataTeam from '../utils/team.json'

const rows = []
let currentRow = []
for (let i = 0; i < DataTeam.length; i++) {
  currentRow.push(DataTeam[i])
  if (currentRow.length === 3 || i === DataTeam.length - 1) {
    rows.push(currentRow)
    currentRow = []
  }
}

export default function About() {
  return (
    <Layout>
      <section className="container mx-auto px-5 lg:px-0">
        <div className="mt-24 border-b border-white/10 pb-32">
          <ServiceCard imageSrc="/about-pic.png" position="left">
            <TypoMain
              title="About"
              subtitle="We are creative, smart and hardworking people"
              description="Several creative people gather in the same place - that's Collosal. We collaborate to produce the best results, loved by clients and comfortable for users. Here we maintain togetherness even though with different backgrounds, all the people here are already experts in their respective fields."
              classname="-mx-0.5"
            />
          </ServiceCard>
        </div>

        <div className="flex flex-col justify-center items-center text-center mt-20">
          <TypoSecond
            title="Statistic"
            subtitle="In 3 years we reached 8 countries, 193 clients and earning $100k USD"
            classname="lg:w-[420px]"
          />
        </div>

        <div className="mb-14 mt-24 bg-white/5 flex items-center flex-col md:flex-row justify-between space-y-5 md:space-y-0 p-5 md:p-12 rounded lg:px-28">
          <div className="flex items-center space-x-5 lg:space-x-10 ">
            <div className="w-16 h-16 rounded bg-white/5 flex items-center justify-center">
              <img src="/statistik-icon-1.png" alt="statistik-1" />
            </div>
            <div className="">
              <h2 className="text-4xl font-bold">8</h2>
              <p className="text-base font-bold text-paragraf/60">Countries</p>
            </div>
          </div>
          <div className="border-r border-white/5"></div>
          <div className="flex items-center space-x-5 lg:space-x-10">
            <div className="w-16 h-16 rounded bg-white/5 flex items-center justify-center">
              <img src="/statistik-icon-2.png" alt="statistik-2" />
            </div>
            <div className="">
              <h2 className="text-4xl font-bold">193</h2>
              <p className="text-base font-bold text-paragraf/60">Clients</p>
            </div>
          </div>
          <div className="border-r border-white/5"></div>
          <div className="flex items-center space-x-5 lg:space-x-10">
            <div className="w-16 h-16 rounded bg-white/5 flex items-center justify-center">
              <img src="/statistik-icon-3.png" alt="statistik-3" />
            </div>
            <div className="">
              <h2 className="text-4xl font-bold">$100k</h2>
              <p className="text-base font-bold text-paragraf/60">Earning</p>
            </div>
          </div>
        </div>

        <Client />

        <div className="mt-28 mb-32">
          <div className="flex flex-col items-center justify-center text-center mb-24">
            <TypoSecond
              title="Our Team"
              subtitle="Meet the team! All creative people are here"
              classname="lg:w-[390px]"
            />
          </div>

          <div className="flex flex-col space-y-8">
            {rows.map((row, index) => (
              <div
                className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-5 space-y-8 lg:space-y-0 mb-4"
                key={index}
              >
                {row.map((teamMember, index) => (
                  <div className="bg-white/5 lg:w-4/12 rounded" key={index}>
                    <img
                      src={teamMember.image}
                      alt={teamMember.name}
                      className="w-full"
                    />
                    <div className="p-7 px-10">
                      <h2 className="text-lg font-bold mb-2">
                        {teamMember.name}
                      </h2>
                      <p className="text-paragraf/60 text-sm font-semibold">
                        {teamMember.position}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
