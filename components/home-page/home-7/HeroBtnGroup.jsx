import { useState } from "react";
import ModalVideo from "react-modal-video";

const HeroBtnGroup = () => {
  const options = [
    {
      value: "IOS & Android",
      label: "IOS & Android",
      icon: "/images/icon/icon_22.svg",
    },
    {
      value: "Mac & Windows",
      label: "Mac & Windows",
      icon: "/images/icon/icon_23.svg",
    },
  ];

  // const [isOpen, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (event, value) => {
    event.preventDefault();
    setSelectedValue(value);
    setShowDropdown(false);
  };

  return (
    <>
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="M9CNNbq7AHY"
        // https://www.youtube.com/watch?v=M9CNNbq7AHY
        onClose={() => setOpen(false)}
      /> */}

      <div className="d-sm-flex align-items-center" style={{marginTop:"50px"}}>
        <div
          className="fancybox video-icon tran3s mb-25 d-flex align-items-center order-sm-last"
          // onClick={() => setOpen(true)}
          role="button"    
          style={{cursor:"pointer", color:"#fff", borderColor:"white", marginTop:"0px"}}
        >
          <i className="bi bi-play videobtn" style={{border: "1px solid white", borderRadius:"50%", width:"50px", height:"50px", fontSize:"32px"}} />
          <div className="ps-3">
            <span className="d-block fs-15 text-uppercase" style={{textAlign:"start"}} >Watch</span>
            <strong className="fs-18 fw-normal tx-dark d-block" style={{color:"white"}}>
              Intro Video
            </strong>
          </div>
        </div>

        {/* <div
          className="dropdown download-btn d-inline-block mb-25 me-4 order-sm-first"
          onClick={toggleDropdown}
        >
            <a href="/contact" style={{backgroundColor:"white", width:"140px", height:"50px", borderRadius:"50px", paddingTop:"12px", fontWeight:"500"}}>
            Contact Us
            </a>

        </div> */}
      </div>
    </>
  );
};

export default HeroBtnGroup;
