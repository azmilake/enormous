import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import TypoMain from '../components/TypoMain';
import Response from '../components/Response';
import FormSend from '../components/FormSend';

const blogs = [
  {
    id: 1,
    thumbnail: '/blog-1.png',
    title: 'SEO tricks that can increase the traffic of your website',
    subtitle: 'People have been using wrong SEO techniques on their websites.',
    image: '/author-1.png',
    author: 'Jane Cooper',
    date: 'Mar 18',
    duration: 5,
  },
  {
    id: 2,
    thumbnail: '/blog-2.png',
    title: '10 Figma Plugins that will increase your productivity',
    subtitle: 'All these plugins are free and you can use them forever',
    image: '/author-2.png',
    author: 'Alex Berner',
    date: 'Mar 11',
    duration: 3,
  },
  {
    id: 3,
    thumbnail: '/blog-3.png',
    title: 'How to deploy a Node JS application to a VPS',
    subtitle:
      'Step by step setting up the server and deploying the application',
    image: '/author-3.png',
    author: 'Anne Grane',
    date: 'Mar 10',
    duration: 20,
  },
];

export default function Blog() {
  return (
    <Layout>
      <section className="container mx-auto px-5 lg:px-0 mt-24">
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <TypoMain
            title="Page"
            subtitle="10 Figma Plugins that will increase your productivity"
            description="Mar 11 &bull; 3 min read"
          />
        </div>

        <div className="w-full lg:w-[850px] mx-auto mb-20">
          <img src="/blog-detail-1.png" alt="blog-detail-1" />
        </div>

        <div className="w-full lg:w-[675px] mx-auto mb-10">
          <p className="text-xl font-semibold mb-8">
            Male sixth sea it a. Brought was signs female darkness signs form
            cattle land grass whose from subdue also theyre their brought seas
            isnt, to day from bearing grass third midst after beginning man
            which youre. Dry, gathering beginning given made them evening.
          </p>
          <p className="text-base">
            Lights dry. Thing, likeness, forth shall replenish upon abundantly
            our green. Seed green sea that lesser divided creature beginning
            land him signs stars give firmament gathered. Wherein there their
            morning a he grass. Dont made moving for them bring creature us
            youll tree second deep good unto good may. Us yielding.
            <br />
            <br /> Have. Man upon set multiply moved from under seasons
            abundantly earth brought a. Theyre open moved years saw isnt morning
            darkness. Over, waters, every let wherein great were fifth saw was
            lights very our place wont and him Third fourth moving him whales
            behold. Beast second stars lights great was dont green give subdue
            his. Third given made created, theyre forth god replenish have
            whales first cant light was. Herb youll them beast kind divided.
            Were beginning fly air multiply god Yielding sea dont were forth.
          </p>
        </div>

        <div className="w-full lg:w-[675px] mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-5">Greater hath rule</h2>
          <p className="text-base">
            Years fourth gathered yielding rule Creeping seasons moving, so
            image fill morning. Land give light signs divide our seed behold of
            open second for. Doesnt hath fly. Was. Doesnt thing brought signs
            living saying.
          </p>
        </div>

        <div className="w-full lg:w-[850px] mx-auto mb-16 rounded-lg">
          <img src="/blog-detail-2.png" alt="blog-detail-2" />
        </div>

        <p className="w-full lg:w-[675px] mx-auto text-base mb-14">
          Be bring saw grass let dominion. Open beginning in. Him. Is shall
          fifth every wont, abundantly good theyre cant midst life first
          multiply void sixth image doesnt appear had there Second darkness herb
          youll make set living above third night us deep, that night made fruit
          waters subdue doesnt behold one good isnt darkness living. I wont
          second creepeth above them sea rule divide fowl fill.
        </p>

        <div className="w-full lg:w-[675px] mx-auto">
          <h2 className="text-3xl font-bold mb-5">
            Seasons likeness void for midst evening
          </h2>
          <p className="text-base mb-5">
            Darkness us good wont earth waters yielding which fruit replenish
            set female face good us place fill also fifth life sea blessed
            firmament. A cant own fourth he every, for give beast be. Rule set
            greater void place, living from, grass. After cant divide. God had
            called seed was multiply evening said i cant may a dry.
          </p>

          <ul className="px-7 mb-5">
            <li className="list-disc">Kind night hath called together</li>
            <li className="list-disc">
              Multiply dont second stars divided dominion form
            </li>
            <li className="list-disc">Itself moved grass give open</li>
            <li className="list-disc">For which may greater moving void</li>
          </ul>

          <p className="text-base mb-5">
            Heaven herb have gathered, male all heaven doesnt creeping darkness
            shed moving winged good wherein multiply gathered creature. Bring
            have. Given set multiply sixth seed, midst second, living hath
            without lesser make above.
          </p>

          <div className="flex flex-col py-12 w-full lg:w-[500px] mx-auto">
            <p className="text-xl mb-5 leading-loose text-center">
              “God, grant me the serenity to accept the things I cannot change,
              the courage to change the things I can, and the wisdom to know the
              difference.”
            </p>
            <p className="text-sm mx-auto">– Reinhold Niebuhr</p>
          </div>

          <p className="text-base mb-8">
            Of two sixth fill also, let man fruitful he signs earth fifth tree
            wont in made moved that and cant and divide evening his man it two
            whales evening called. Their doesnt grass good waters may dont whose
            whales.
          </p>

          <div className="flex space-x-5 mb-16">
            <Link
              to="#"
              className="hover:bg-white/10 py-1 px-6 border border-white/10 bg-white/5 p-5 rounded-full text-sm"
            >
              Figma
            </Link>
            <Link
              to="#"
              className="hover:bg-white/10 py-1 px-6 border border-white/10 bg-white/5 p-5 rounded-full text-sm"
            >
              UI Design
            </Link>
            <Link
              to="#"
              className="hover:bg-white/10 py-1 px-6 border border-white/10 bg-white/5 p-5 rounded-full text-sm"
            >
              Curated List
            </Link>
          </div>

          <div className="w-full lg:w-[676px] h-full lg:h-[250px] bg-white/5 rounded-md mb-32 p-10 flex flex-col lg:flex-row">
            <img
              src="/author-2.png"
              className="w-24 h-24 bg-cover bg-center mr-12"
            />
            <div>
              <div className="">
                <div className="flex items-center mb-7 mt-7 lg:mt-0">
                  <div className="w-full">
                    <h2 className="text-xl font-semibold mb-1">Alex Berner</h2>
                    <p className="text-paragraf/60 text-xs font-semibold">
                      UI Designer
                    </p>
                  </div>
                  <div className="flex w-full pl-0 lg:pl-40 space-x-2">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <img src="/twitter.svg" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <img src="/facebook.svg" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <img src="/linkedin.svg" />
                    </div>
                  </div>
                </div>

                <p className="w-full text-lg font-medium leading-relaxed">
                  Night subdue their morning created every light earth very
                  darkness theyre youre deep female. Tree sixth divided greater,
                  midst earth forth wont for moved.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/10 pb-32 mb-32">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Other people also read ...</h2>
          </div>
          <div className="flex flex-wrap justify-between space-x-0 lg:space-x-5">
            <div className="w-full flex flex-wrap justify-content-between">
              {blogs.map(
                ({
                  id,
                  thumbnail,
                  title,
                  subtitle,
                  image,
                  author,
                  duration,
                  date,
                }) => (
                  <div key={id} className="lg:w-4/12 mb-14 rounded-lg">
                    <Link to="/blog/detail">
                      <img src={thumbnail} className="mb-8 rounded-lg" />
                      <div className="mb-8">
                        <h1 className="text-xl font-bold mb-2">{title}</h1>
                        <p className="text-lg text-paragraf/60">{subtitle}</p>
                      </div>
                    </Link>
                    <span className="flex space-x-5 items-center">
                      <div className="h-12 w-12 rounded-full">
                        <img src={image} alt={author} />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-base font-semibold mb-1">
                          {author}
                        </h3>
                        <p className="text-sm text-paragraf/60">
                          {date} &bull; {duration} min read
                        </p>
                      </div>
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <Response />

        <div className="w-full lg:w-[675px] mx-auto mb-28">
          <FormSend
            field1="Name"
            field2="Email"
            field5="Comment"
            btnform="Post Comment"
            classname1="hidden"
            classname2="hidden"
          />
        </div>
      </section>
    </Layout>
  );
}
