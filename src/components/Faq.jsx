import { Link } from 'react-router-dom';
import FaqData from '../utils/faq.json';
import TypoSecond from './TypoSecond';

const rows = [];
let currentRow = [];
for (let i = 0; i < FaqData.length; i++) {
  currentRow.push(FaqData[i]);
  if (currentRow.length === 2 || i === FaqData.length - 1) {
    rows.push(currentRow);
    currentRow = [];
  }
}

export default function Faq() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <TypoSecond
        title="Faq"
        subtitle="Frequently asked questions, maybe the same as yours"
      />

      <div className="mt-20 text-left flex flex-col space-y-10 lg:space-y-12">
        {rows.map((row, index) => (
          <div
            className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-8 space-y-10 lg:space-y-0"
            key={index}
          >
            {row.map((faq, index) => (
              <div className="w-full lg:w-6/12" key={index}>
                <h2 className="font-bold text-xl mb-3">{faq.question}</h2>
                <p className="text-paragraf/60 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center text-center mt-24 mb-28">
        <p className="text-base font-bold">
          Didnt find an answer?{' '}
          <span className="underline text-btnPrimary">
            <Link to="/faq">Do not hesitate to ask!</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
