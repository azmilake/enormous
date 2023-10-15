import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Project from './pages/Project';
import Services from './pages/Services';
import HowWeWork from './pages/HowWeWork';
import ServiceDetail from './pages/ServiceDetail';
import Pricing from './pages/Pricing';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';
import Blogs from './pages/Blogs';
import TermsCondition from './pages/TermsCondition';
import Faq from './pages/Faq';
import Blog from './pages/Blog';

function App() {
  return (
    <>
      {/* <div className="h-screen bg-default relative mb-96">
        <p className="container mx-auto text-4xl font-bold text-white">
          Hallo Saya Indonesia
        </p>

        <div className="absolute h-[780px] w-[780px] rounded-full bg-yellow-500/10 blur-3xl -left-40 top-28"></div>
        <div className="absolute h-[780px] w-[780px] rounded-full bg-emerald-300/10 blur-3xl right-[780px] -top-28 -z-5"></div>
        <div className="absolute h-[780px] w-[780px] rounded-full bg-rose-500/10 blur-3xl right-32 -top-20 z-10"></div>
      </div> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/detail" element={<ProjectDetail />} />
          <Route path="/service" element={<Services />} />
          <Route path="/service/detail" element={<ServiceDetail />} />
          <Route path="/howwework" element={<HowWeWork />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/detail" element={<Blog />} />
          <Route path="/termscondition" element={<TermsCondition />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
