import Seo from "../components/common/Seo";
import BlockContact from "../components/contact/BlockContact";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import DefaultFooter from "../components/footer/DefaultFooter";
// import DefaulHeader from "../components/header/DefaulHeader";
import DefaulHeader from "../components/header/ExpenseHeader";
import Subsribe from "../components/home-page/home-7/Subsribe";
import Link from "next/link";
import Social from "../components/home-page/home-7/Social";
import Service1 from "../components/services/Service1";
import Features from "../components/home-page/home-7/Features4";
import Footer from "../components/footer/Footer";
const contact = () => {
  return (
    <>
      <Seo pageTitle="Expense App | Features" />

      <DefaulHeader />

      <div className="fancy-feature-seven pt-200 lg-pt-100 expensefeature">
        <div className="container" style={{marginTop:"100px"}}>
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-8"  style={{marginTop:"-60px"}} data-aos="fade-right">
              <div className="title-style-four text-center text-lg-start" >
                <h2 className="main-title fw-500 tx-dark m0" style={{color:"white"}}>
                  Our Application <span>Features.</span>
                </h2>
                <p className="text-lg text-center text-lg-start md-pt-30 m0" style={{fontStyle:"italic", fontSize:"20px", color:"white"}}>
              KAISPE Expense App is a cloud-based solution that automates travel and business expense management.
              </p>
              </div>
              {/* /.title-style-four */}
            </div>
            {/* End .col-6 */}
            {/* <div className="col-lg-6 ms-auto" data-aos="fade-left">
             
            </div> */}
            {/* End .col-6 */}
          </div>
        </div>
        {/* End .container */}

        <div className="container pt-50 lg-pt-10" style={{backgroundColor:"white",  marginTop:"70px", borderRadius:"30px", marginBottom:"200px"}}>
          <div className="row gx-xxl-5">
            <Features />
          </div>
        </div>
        {/* /.container */}
      </div>


      {/* <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">
                        Have Any Project?
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        Don’t hesitate to send us message.
                      </h2>
                    </div>
                  </div>
        

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link
                      href="/contact"
                      className="btn-twentyOne fw-500 tran3s"
                    >
                      Get Started Today!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div> */}

      
      {/* <DefaultFooter /> */}

      <div className="footer-style-ten theme-basic-footer zn2 position-relative back">
        <div className="container ">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-4 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo_white.png" alt="logo" width={140} />
                  </Link>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                KAISPE has been providing solutions and services to customers using Microsoft Dynamics, Azure, Power platform, Oracle NetSuite, mobile and web app development. 
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                  © {new Date().getFullYear()} {" "}
                  <a  href="https://www.kaispe.com/" target="_blank" style={{color:"#4980FF"}}>KAISPE</a> inc.
                </p>
              </div>

              <div className="col-lg-4 footer-intro mb-40">
                <div className="logo">
                  <h5 className="footer-title text-white fw-500">Email Address</h5>
                </div>
                
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                <i className="fas fa-envelope text-white" style={{marginRight:"15px"}}></i>  info@kaispe.com
                </p>
                <h5 className="footer-title text-white fw-500">Contact Number</h5>
            
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                <i className="fas fa-phone-alt text-white" style={{marginRight:"15px"}}></i> USA : (+1)-315-791-4472 <br></br>
                <i className="fas fa-phone-alt text-white" style={{marginRight:"15px"}}></i>   PAK : (+92)-213-432-6085
                </p>
              
              </div>
              <Footer />
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
        {/* End .container */}
        {/* <img
          src="/images/assets/ils_13.png"
          alt="illustration"
          className="lazy-img illustration-one"
          data-aos="fade-left"
        />
        <img
          src="/images/assets/ils_14.png"
          alt="illustration"
          className="lazy-img illustration-two"
          data-aos="fade-right"
        /> */}
      </div>

    </>
  );
};

export default contact;
