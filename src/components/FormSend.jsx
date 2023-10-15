import ButtonPrimary from './ButtonPrimary';

/* eslint-disable react/prop-types */
export default function FormSend({
  field1,
  field2,
  field3,
  field4,
  field5,
  btnform,
  type,
  classname1,
  classname2,
}) {
  return (
    <div className="bg-white/10 p-8 w-full">
      <div className="flex items-center space-x-2 lg:space-x-10 mb-7">
        <div className="w-6/12 flex flex-col">
          <label className="text-sm text-paragraf/60 mb-1">{field1}</label>
          <input className="bg-transparent border border-white/10 rounded py-2" />
        </div>
        <div className="w-6/12 flex flex-col">
          <label className="text-sm text-paragraf/60 mb-1">{field2}</label>
          <input
            type={`${type} ?? 'text' : ${type}`}
            className="bg-transparent border border-white/10 rounded py-2"
          />
        </div>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10 mb-7">
        <div className={`w-6/12 flex flex-col ${classname1}`}>
          <label className="text-sm text-paragraf/60 mb-1">{field3}</label>
          <input className="bg-transparent border border-white/10 rounded py-2" />
        </div>
        <div className={`w-6/12 flex flex-col ${classname2}`}>
          <label className="text-sm text-paragraf/60 mb-1">{field4}</label>
          <input className="bg-transparent border border-white/10 rounded py-2" />
        </div>
      </div>
      <div>
        <label className="text-sm text-paragraf/60 mb-1">{field5}</label>
        <textarea className="w-full h-32 bg-transparent border border-white/10 rounded py-2"></textarea>
      </div>
      <ButtonPrimary classname="w-full mt-7">{btnform}</ButtonPrimary>
    </div>
  );
}
