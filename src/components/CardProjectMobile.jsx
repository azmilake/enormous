import { Link } from 'react-router-dom';

export default function CardProjectMobile() {
  return (
    <div className="w-full lg:w-6/12 text-center">
      <div className="w-full bg-cardProject h-[440px] rounded mb-10 p-10">
        <div className="w-40 h-7 rounded-full bg-white/5 mx-auto mb-3"></div>
        <div className="w-24 h-8 rounded-full bg-white/5 mx-auto mb-[72px]"></div>
        <div className="w-48 h-64 bg-white/5 mx-auto my-auto rounded-t-3xl"></div>
      </div>
      <h3 className="text-xl font-bold">The Mobile App Landing Page</h3>
      <p className="text-paragraf/60 text-base">
        A landing page for mobile app
      </p>
      <Link to="/project/detail">
        <button className="px-7 py-2 border rounded-full mt-10 text-sm">
          Detail
        </button>
      </Link>
    </div>
  );
}
