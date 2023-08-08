  const AppBanner = () => {
    const features = [
      "Automate Expense Management",
      "Improve Efficiency",
      "Real-time Expense Tracking",
      "Increased Visibility",
      "Policy Compliance",
      "Multi-Currency Support",
      "Customizable Approval Workflows",

    ];

    const buttons = [
      {
        // platform: "Google play",
        icon: "images/download.png",
        className: "windows-button",
      },
      // {
      //   platform: "App store",
      //   icon: "images/icon/apple-black.svg",
      //   className: "ios-button",
      // },
    ];

    return (
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="block-style-seven wow fadeInLeft">
            <div className="title-style-one">
              {/* <div className="sc-title text-uppercase">MOBILE APP</div> */}
              <h3 className="main-title fw-500 tx-dark m0" style={{fontSize:"40px"}}>
              <span style={{color:"#09A6F3"}}>Benefits </span> of Integrating Expense Report App for Dynamics 365
              </h3>
            </div>
            <p className="fs-20 pt-30 pb-30 lg-pb-20">
            Integrating an Expense Report app can provide numerous benefits if you re using Dynamics 365 for your business operations. Here are some of the key benefits: 
            </p>
            <ul className="style-none list-item">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            {/* End list */}

            <div className="d-sm-flex align-items-center  mt-55 lg-mt-30">
              {buttons.map((button, index) => (
                <a
                  href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispellc.kspteapp-am?tab=Overview"
                  target="_blank"
                  className={`d-flex align-items-center ${button.className}`}
                  key={index}
                >
                  <img src={button.icon} alt="" className="lazy-img icon" style={{width:"150px"}}/>
                  <div>
                    {/* <span>Get it on</span> */}
                    <strong>{button.platform}</strong>
                  </div>
                </a>
              ))}
            </div>
            {/* /.platform-button-group-three */}
          </div>
          {/* /.block-style-seven */}
        </div>
        {/* End col-6 */}

        <div className="col-lg-6 wow fadeInRight">
          <div className="illustration-holder position-relative pt-50 pb-50 pe-md-5 lg-mt-80">
            <img
              src="images/final_image_3.png"
              alt=""
              className="lazy-img main-img ms-auto"
            />
            {/* <img
              src="images/final_image_3.png"
              alt=""
              className="lazy-img screen-two"
            /> */}
            <img
              src="images/shape/shape_139.svg"
              alt=""
              className="lazy-img shapes shape-one"
            />
            <img
              src="images/shape/shape_140.svg"
              alt=""
              className="lazy-img shapes shape-two"
            />
          </div>{" "}
          {/* /.illustration-holder */}
        </div>
      </div>
    );
  };

  export default AppBanner;
