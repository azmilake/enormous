import AccordionBody from './AccordionBody';
import AccordionData from '../utils/faqpage.json';

export default function Accordion() {
  return (
    <section className="container mx-auto mb-32 font-jakarta px-5 lg:px-0">
      <div className="accordion">
        {AccordionData.map(({ title, content }) => (
          <AccordionBody title={title} content={content} key={title} />
        ))}
      </div>
    </section>
  );
}
