export default function CardMobile() {
  return (
    <div className="w-6/12 bg-white/40 h-[440px] relative flex justify-center p-10">
      <div className="absolute mb-10">
        <div className="h-20 w-5 bg-yellow-200 mb-3"></div>
        <div className="h-20 w-5 bg-yellow-200"></div>
      </div>
      <div className="w-48 h-96 bg-yellow-600 absolute bottom-0 mt-96"></div>
    </div>
  );
}
