import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const IntroAbout = () => {
  const [isOpen, setOpen] = useState(false);
  const cardsData = [
    {
      id: 1,
      cardNo: "card-one",
      title: "Happier",
      subtitle: "Customers",
    },
    {
      id: 2,
      title: "30+",
      cardNo: "card-two",
      subtitle: "Insurance Item",
    },
    {
      id: 3,
      title: "Saller Leads",
      cardNo: "card-three",
      subtitle: "Who are listing soon",
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-12 order-md-last">
          <div className="top-banner text-center">
            <h5 className="tx-dark mb-20" style={{ textAlign: "start", color: "#ffbe0b" }}>ABOUT US</h5>
            <h2 className="tx-dark mb-20" style={{ textAlign: "start", fontSize: "50px" }}><span style={{ color: "#09A6F3" }}>Travel</span> Expense App</h2>
            <p className="text-md tx-dark opacity-75 mb-30 lg-mb-20 order-md-first" style={{ textAlign: "start" }}>
              With KAISPE travel expense app, users can quickly capture, and store
              receipts using their mobile devices and then use the app to create and
              submit expense reports. The app also provides a variety of configurable
              workflows to streamline the approval process, including automated
              notifications, escalation rules, and reminders.
            </p>
            <p className="text-md tx-dark opacity-75 mb-30 lg-mb-20" style={{ textAlign: "start" }}>
              In addition, the business expense app allows businesses to set and
              enforce expense policies, which can help ensure that all expenses comply
              with company guidelines and local regulations.
            </p>
          </div>
          {/* /.text-wrapper */}
        </div>
        {/* End .col */}

        <div className="col-xl-7 col-lg-7 col-md-12  " data-aos="fade-up">
          <div className="img-holder d-lg-inline-flex position-relative zn2 pb-45 xl-pb-90 expenseImage">
            <img
              src="/images/shape/shape_135.svg"
              alt="shape"
              className="lazy-img"
            />
            <Image
              width={520}
              height={732}
              layout="intrinsic"
              src="/images/heading1.png"
              className="lazy-img avatar-img"
              alt="man"
            />

            {/* {cardsData.map((item) => (
                <div
                  className={`card-style ${item.cardNo} d-flex justify-content-center`}
                  key={item.id}
                >
                  <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-check-lg" />
                  </div>
                  <div className="ps-2 ps-lg-4">
                    <h3>{item.title}</h3>
                    <p className="fs-20 tx-dark m0">{item.subtitle}</p>
                  </div>
                </div>
              ))} */}
            {/* /.card */}
          </div>
        </div>
        {/* End .col-xl-7 */}
      </div>
    </>
  );
};

export default IntroAbout;
