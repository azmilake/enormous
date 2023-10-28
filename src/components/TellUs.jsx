import { Link } from 'react-router-dom'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'

export default function TellUs() {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row justify-between items-center mb-24 border-t border-t-white/10 border-b border-b-white/10 py-12 px-5 lg:px-0">
      <div className="font-bold text-3xl w-full lg:w-6/12 mb-7 lg:mb-0 text-center lg:text-left">
        <h1>Weve prepared everything, its time for you to tell the problem</h1>
      </div>
      <div className="flex lg:space-x-5 space-x-2">
        <Link to="/quote">
          <ButtonPrimary>Send Qoute</ButtonPrimary>
        </Link>
        <Link to="/faq">
          <ButtonSecondary>Ask Us</ButtonSecondary>
        </Link>
      </div>
    </section>
  )
}
