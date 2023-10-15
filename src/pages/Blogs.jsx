import ButtonSecondary from '../components/ButtonSecondary';
import CardBlog from '../components/CardBlog';
import Layout from '../components/Layout';
import TypoMain from '../components/TypoMain';

export default function Blog() {
  return (
    <Layout>
      <section className="container mx-auto px-5 lg:px-0">
        <div className="flex flex-col items-center justify-center text-center border-b border-white/10 pb-24 mt-24 mb-24">
          <TypoMain
            title="Blog"
            subtitle="Get precise knowledge wherever you are"
          />
        </div>

        <CardBlog />

        <div className="flex items-center justify-center mx-auto mt-24 mb-20">
          <ButtonSecondary>Load More</ButtonSecondary>
        </div>
      </section>
    </Layout>
  );
}
