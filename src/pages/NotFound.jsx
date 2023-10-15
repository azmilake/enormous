import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import TypoMain from '../components/TypoMain';

export default function NotFound() {
  return (
    <Layout>
      <section className="container mx-auto flex flex-col items-center justify-center mt-32 mb-32 text-center px-5 lg:px-0">
        <TypoMain
          title="error"
          subtitle="The page you are looking for is not on this website, please check again"
          description="The system cannot find the page you are looking for, maybe you have the wrong path or the page has been deleted."
          classname2="lg:w-[450px]"
          classname3="text-red-500"
        />
        <Link to="/">
          <button className="px-12 py-4 bg-white/10 text-white text-base font-semibold rounded">
            Back to Home
          </button>
        </Link>
      </section>
    </Layout>
  );
}
