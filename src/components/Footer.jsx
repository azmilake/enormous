import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row container mx-auto py-10 px-5 lg:px-0 space-y-12 lg:space-y-0">
      <div className="w-full lg:w-3/12 flex flex-col space-y-4 lg:space-y-0">
        <div className="flex space-x-3 items-center mb-5">
          <img src="/icon-footer.svg" />
          <h2 className="font-bold text-2xl">
            <Link to="/">Enormous</Link>
          </h2>
        </div>
        <div className="w-8/12">
          <p className="text-base text-paragraf/60">
            Copyright &copy; 2023 Enormous inc.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-3/12">
        <div className="mb-6 text-base uppercase font-semibold">
          <h1>Services</h1>
        </div>
        <div className="flex flex-col space-y-4 text-paragraf/60">
          <p>
            <a href="#" className="hover:underline">
              Web Development
            </a>
          </p>
          <p>
            <a href="#" className="hover:underline">
              App Development
            </a>
          </p>
          <p>
            <a href="#" className="hover:underline">
              UI Design
            </a>
          </p>
          <p>
            <a href="#" className="hover:underline">
              Consultation
            </a>
          </p>
          <p>
            <a href="#" className="hover:underline">
              Maintenance
            </a>
          </p>
        </div>
      </div>
      <div className="w-full lg:w-3/12">
        <div className="mb-6 text-base uppercase font-semibold">
          <h1>Company</h1>
        </div>
        <div className="flex flex-col space-y-4 text-paragraf/60">
          <p>
            <a href="#" className="hover:underline">
              About
            </a>
          </p>
          <p>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </p>
          <p>
            <a href="#" className="hover:underline">
              Send Quote
            </a>
          </p>
          <p>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </p>
          <p>
            <a href="#" className="hover:underline">
              Term of Service
            </a>
          </p>
          <p>
            <a href="#" className="hover:underline">
              Jobs
            </a>
          </p>
        </div>
      </div>
      <div className="w-full lg:w-3/12">
        <div className="mb-6 text-base uppercase font-semibold">
          <h1>Resources</h1>
        </div>
        <div className="flex flex-col space-y-4 text-paragraf/60">
          <p>
            <a href="#" className="hover:underline">
              Support
            </a>
          </p>
          <p>
            <a href="#" className="hover:underline">
              Documentation
            </a>
          </p>
          <p>
            <a href="#" className="hover:underline">
              License
            </a>
          </p>
          <p>
            <a href="#" className="hover:underline">
              Sitemap
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
