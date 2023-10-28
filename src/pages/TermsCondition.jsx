import Layout from '../components/Layout'
import TypoMain from '../components/TypoMain'

export default function TermsCondition() {
  return (
    <Layout>
      <section className="container mx-auto px-5 lg:px-0 mt-24">
        <div className="flex flex-col items-center text-center border-b border-white/10 pb-16 mb-24">
          <TypoMain
            title="Page"
            subtitle="Terms & Conditions"
            description="Updated at 2021-05-06"
          />
        </div>
        <div className="text-base w-full lg:w-[670px] mx-auto mb-28">
          <p>
            By accessing and placing an order with Collosal, you confirm that
            you are in agreement with and bound by the terms of service
            contained in the Terms & Conditions outlined below. These terms
            apply to the entire website and any email or other type of
            communication between you and Collosal.
            <br />
            <br /> Under no circumstances shall Collosal team be liable for any
            direct, indirect, special, incidental or consequential damages,
            including, but not limited to, loss of data or profit, arising out
            of the use, or the inability to use, the materials on this site,
            even if Collosal team or an authorized representative has been
            advised of the possibility of such damages. If your use of materials
            from this site results in the need for servicing, repair or
            correction of equipment or data, you assume any costs thereof.{' '}
            <br />
            <br />
            Collosal will not be responsible for any outcome that may occur
            during the course of usage of our resources. We reserve the rights
            to change prices and revise the resources usage policy in any
            moment.
            <br />
            <br />
          </p>

          <h1 className="font-bold text-3xl mb-3 mt-10">License</h1>
          <p>
            Collosal grants you a revocable, non-exclusive, non- transferable,
            limited license to download, install and use the website strictly in
            accordance with the terms of this Agreement. <br /> <br /> These
            Terms & Conditions are a contract between you and Collosal grants
            you a revocable, non-exclusive, non- transferable, limited license
            to download, install and use the website strictly in accordance with
            the terms of this Agreement.
          </p>
        </div>
      </section>
    </Layout>
  )
}
