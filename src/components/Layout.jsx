/* eslint-disable react/prop-types */
import Navbar from './Navbar';
import Footer from './Footer';
import TellUs from './TellUs';

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen font-poppins bg-default text-white">
        <Navbar />
        {children}
        <TellUs />
        <Footer />
      </div>
    </>
  );
}
