import Link from "next/link";
import Seo from "../../components/common/Seo";
import Footer from "../../components/footer/Footer";
import DefaulHeader from "../../components/home-page/home-6/Header";
import AppBanner from "../../components/home-page/home-1/AppBanner";
import Banner from "../../components/home-page/home-1/Banner";
import Block from "../../components/home-page/home-1/Block";
import Blog from "../../components/home-page/home-1/Blog";
import ContactForm from "../../components/home-page/home-1/ContactForm";
import Feature from "../../components/home-page/home-1/Feature";
import Hero from "../../components/home-page/home-1/Hero";
import IntroAbout from "../../components/home-page/home-1/IntroAbout";
import Service from "../../components/home-page/home-1/Service";
import Testimonial from "../../components/home-page/home-1/Testimonial";
import WhyChoose from "../../components/home-page/home-1/WhyChoose"; 
import FeatureBlock from "../../components/home-page/home-3/FeatureBlock";
import IntroAction from "../../components/home-page/home-4/IntroAction";
import IntroVideo from "../../components/home-page/home-4/IntroVideo";
import Counter from "../../components/home-page/home-4/Counter";
import LogoGroup from "../../components/home-page/home-7/LogoGroup";

const Insurance = () => {
  return (
    <>
      <Seo pageTitle="Expense Report" />
      {/* <!-- 
      =============================================
			Theme Default Menu
			============================================== 	
      --> */}
      <div className="huzaifa">
      <DefaulHeader />
      {/* <!-- 
			=============================================
			Theme Hero Banner
			============================================== 
			--> */}
      <Hero />
      </div>
      {/* <!-- 
			=============================================
				Feature Section Thirty Four
			============================================== 
			--> */}
      {/* <div className="fancy-feature-thirtyFour mt-50">
        <div className="container">
          <div className="row gx-xxl-5">
            <Feature />
          </div>
        </div>
      </div> */}
      {/* <!-- /.fancy-feature-thirtyFour --> */}
      {/*
			=====================================================
				Feature Section Thirty Five
			=====================================================
			*/}
      <div className="fancy-feature-thirtyFive mt-90 md-mt-70">
        <div className="container" data-aos="fade-up">
          <Banner />
          {/* /.top-banner */}
        </div>
        {/* End .container */}

        <div className="bg-wrapper mt-150 pt-100 lg-mt-80 lg-pt-70">
          <div className="container">
            <IntroAbout />
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-feature-thirtyFive */}

       {/* <div className="fancy-feature-thirtyFour mt-50">
        <div className="container">
          <div className="row gx-xxl-5">
            <Feature />
          </div>
        </div>
      </div> */}


      {/* 
			=============================================
				Feature Section Thirty Six
			============================================== 
			*/}
      <div className="fancy-feature-thirtySix mt-190 lg-mt-140">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="title-style-one text-center text-lg-start mb-40 md-mb-20"
                  data-aos="fade-right"
                >
                  <h4 style={{color:"#ffbe0b"}}> KEY FEATURES</h4>
                  <h2 className="main-title fw-500 tx-dark m0">
                  Our Application <span style={{color:"#09A6F3"}}>Features</span>.
                  </h2>
                </div>
              </div>

              <div className="col-lg-7">
                <div
                  className="title-style-one text-center text-lg-start mb-40 md-mb-20"
                  data-aos="fade-right"
                >
                 <p style={{marginTop:"50px"}}>KAISPE Expense App is a cloud-based solution that automates travel and business 
                   expense management. It radically decreases the time needed to capture receipts, 
                   make expense reports, configure expense policies, and get them approved using 
                   several workflow configuration options.</p>
                </div>   
              </div>
            </div>
            <div className="row">
              <Feature />
            </div>
            <div className="text-center md-mt-50">
                <button className="btn btn-primary" style={{backgroundColor:"#11213E",borderColor:"#11213E",color:"#fff",borderRadius:"50px",padding:"10px 30px", marginTop:"50px"}}>
                  {/* <a href="/Features">View All Features</a> */}
                  <Link
                      href="/Features"
                      className="fw-500 tran3s"
                    >
                      View All Features
                    </Link>
                  </button>  
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>

  

      {/* /.fancy-feature-thirtySix */}
      {/* <div className=" position-relative zn2 pt-90 pb-50 lg-pt-50 lg-pb-10 huzi" style={{marginTop:"100px", borderRadius:"50px"}}>
        <div className="container" style={{borderRadius:"80px"}}>
          <div className="row gx-xxl-5">
            <FeatureBlock />
          </div>
        </div> */}
        {/* <img
          src="/images/shape/shape_148.svg"
          alt="shape"
          className="shapes shape-one lazy-img"
        />
        <img
          src="/images/shape/shape_149.svg"
          alt="shape"
          className="shapes shape-two lazy-img"
        />
        <img
          src="/images/shape/shape_150.svg"
          alt="shape"
          className="shapes shape-three lazy-img"
        />
        <img
          src="/images/shape/shape_151.svg"
          alt="shape"
          className="shapes shape-four lazy-img"
        /> */}
      {/* </div> */}
      
    
      
      {/* 
			=============================================
				Feature Section Thirty Seven
			============================================== 
			*/}
      {/* <div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 ms-auto order-lg-last"
              data-aos="fade-left"
            >
              <div className="ps-lg-5 ms-xxl-3">
                <div className="title-style-one mb-40">
                  <div className="sc-title text-uppercase">Why Choose Us</div>
                  <h2 className="main-title fw-500 tx-dark m0">
                    What makes us the best.
                  </h2>
                </div>
                <WhyChoose />
              </div>
            </div>
            <div className="col-xxl-5 col-lg-6 order-lg-first">
              <Block />
            </div>
          </div>
        </div>
      </div> */}
      {/* /.fancy-feature-thirtySeven */}

      {/*=====================================================
				Feedback Section Eleven
			=====================================================
			*/}


      {/* <div
        className="feedback-section-eleven position-relative mt-200 pt-100 pb-70 lg-mt-120 lg-pt-70 lg-pb-50"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20">
            <h2 className="main-title fw-500 tx-dark m0">Client Feedback</h2>
          </div>
        </div>
        <div className="inner-content">
          <div className="feedback_slider_seven">
            <Testimonial />
          </div>
        </div>
      </div> */}


      {/* /.feedback-section-eleven */}
      {/* =============================================
				Feature Section Thirty Eight
			============================================== 
			*/}
      {/* <div className="fancy-feature-thirtyEight mt-140 lg-mt-100">
        <div className="container">
          <AppBanner />
        </div>
      </div> */}

<div
        className="fancy-short-banner-sixteen  mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40 ">
            <div className="row  ">
              <div className="col-xl-10 col-md-11 m-auto ">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      {/* <div className="sc-title fs-18 pb-10">
                        Have Any Project?
                      </div> */}
                      <h2 className="main-title fw-500 text-white m0">
                      Try out the <span style={{color:"#09A6F3"}}> KAISPE </span>Expense Report management app today!
                      </h2>
                    </div>
                  </div>
                  {/* End .col-6 */}

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link
                      href="/contact"
                      className="btn-twentyOne fw-500 tran3s"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>

      {/* /.fancy-feature-thirtyEight */}

      <div className="fancy-feature-thirtyEight mt-140 lg-mt-100">
        <div className="container">
          <AppBanner />
        </div>
     
      </div>

      <div className="fancy-feature-fifteen  mt-140 lg-mt-70">
        <img
          src="/images/shape/shape_76.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <div className="container">
          {/* <IntroAction /> */}
          <IntroVideo />
          <Counter />
        </div>
      </div>



      {/*=====================================================
				Fancy Short Banner Thirteen
			=====================================================
			*/}
      <div
        className="fancy-short-banner-thirteen pt-170 pb-170 mt-130 lg-mt-100 lg-pt-80 lg-pb-80 "
        data-aos="fade-up"
      >
        <div className="container">
            <div className="row">
                <div className="row align-items-center" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <h2 style={{textAlign:"center"}}>Get it from Microsoft AppSource</h2>
                  <a href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispellc.kspteapp-am?tab=Overview" target="_blank" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <img src="/images/Microsoft_button.png" alt="shape" className="lazy-img icon img-fluid" style={{width:"200px", height:"55px", marginTop:"20px"}}/>
                  </a>
                </div>                                              
              </div>
        </div>
      </div>


      {/* /.fancy-short-banner-thirteen */}
      {/* =============================================
		   Blog Section Three
		   ============================================== */}
      <div className="blog-section-three mt-140 mb-170 lg-mt-100 lg-mb-100">
        <div className="container">
          <div className="position-relative">
            <div className="row align-items-end">
              <div className="col-sm-8">
                <div
                  className="title-style-one text-center text-sm-start pb-40 lg-pb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">Our Blog</h2>
                </div>
                {/* /.title-style-one */}
              </div>
            </div>
            {/* /.row */}
            <div className="row gx-xxl-5">
              <Blog />
            </div>
            {/* /.row */}
            <div className="text-center xs-mt-40">
              <Link
                href="/blog/blog-v2"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                See All Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /.blog-section-three */}


      <div className="partner-section-two position-relative mt-225 mb-250 md-mt-120 md-mb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6" data-data-aos="fade-right">
              <div className="title-style-four">
                <div className="sc-title-two" style={{ color: "orange" }}>
                  Our Partners
                </div>
                <h2 className="main-title fw-500 tx-dark m0">
                  Our Trusted Partners.
                </h2>
              </div>
              {/* /.title-style-four */}
              <p className="fs-20 pt-30 pe-xxl-5">
              KAISPE always believe in building strategic business relationship with partners around the world. Together with 
              our partners, we can provide the solutions our customers are looking for to grow their business and capture the 
              market.
              </p>
            </div>
          </div>
        </div>
        {/* /.container */}

        <div className="logo-wrapper d-flex flex-wrap justify-content-center align-items-center">
          <LogoGroup />
        </div>
        <img
          src="/images/shape/shape_49.svg"
          alt="logo"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_50.svg"
          alt="logo"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_51.svg"
          alt="logo"
          className="lazy-img shapes shape-three"
        />
      </div>


      {/*
			=====================================================
				Footer
			=====================================================
			*/}

      {/* add images */}
      <div className="footer-style-ten theme-basic-footer zn2 position-relative back">
        <div className="container ">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-4 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/Expense_Logo.png" alt="logo" width={140} />
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
                info@kaispe.com
                </p>
                <h5 className="footer-title text-white fw-500">Contact Number</h5>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                     USA : (+1)-315-791-4472 <br></br>
                     PAK : (+92)-213-432-6085
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
      {/* /.footer-style-ten */}
    </>
  );
};

export default Insurance;
