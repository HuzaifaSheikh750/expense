import Link from "next/link";
import Image from "next/image";


const featureData = [
  {
    id: 1,
    icon: "/images/features/expensis.png",
    title: "Streamlined Expense Reporting for Employees ",
    text: "Our app allows employees to create expense reports and submit them for review easily. This eliminates the need for manual processes, saving time and reducing the risk of errors.",
    backgroundColor: "#FFEBDB",
  },
  {
    id: 2,
    icon: "/images/features/configuration.png",
    title: "Flexible Expense Category Configuration for Itemized Reporting",
    text: "Our app allows for flexible configuration of expense categories and an easy itemization of each category. This makes it easy to customize the app to fit the unique needs of your business.",
    backgroundColor: "#E0F8F8",
  },
  {
    id: 3,
    icon: "/images/features/recept.png",
    title: "Receipt Attachment with Real-Time Camera and Pre-Captured Image Upload ",
    text: "Travel expense management solution allows real-time receipt attachment via mobile device camera or pre-captured receipts. This eliminates the need for manual data entry, saving time and reducing the risk of errors.",
    backgroundColor: "#F7EDFF",
  },
  {
    id: 4,
    icon: "/images/features/Multi_Currency.png",
    title: "Sales Tax Calculation and Multi-currency Support ",
    text: "Our app includes sales tax calculation and multi-currency support, making it easy to manage expenses across different currencies and comply with local tax regulations. ",
    backgroundColor: "#FFEBDB",
  },
  {
    id: 5,
    icon: "/images/features/Multi_Language.png",
    title: "Multi-language and Multi-site Features",
    text: "Expense management solution includes multi-language and multi-site features, making it accessible to businesses around the world. ",
    backgroundColor: "#E0F8F8",
  },
  {
    id: 6,
    icon: "/images/features/categories.png",
    title: "Expense Policies for Expense Categories ",
    text: "Our app includes expense policies for expense categories, ensuring that all expenses comply with your company's policies.",
    backgroundColor: "#F7EDFF",
  },
  {
    id: 7,
    icon: "/images/features/workflow.png",
    title: "Flexible Approval Workflow Configuration Options  ",
    text: "This business travel management app includes flexible approval workflow configuration options, allowing for seamless expense reporting and approval processes.",
    backgroundColor: "#F7EDFF",
  },
  {
    id: 8,
    icon: "/images/features/Recall_history.png",
    title: "Recall and Workflow History Functionalities ",
    text: "Our app includes recall and workflow history functionalities, allowing easy tracking of all expense reports and their approval status. This makes it easy to identify any issues and address them quickly.",
    backgroundColor: "#F7EDFF",
  },



];

const FeatureCard = ({ icon, title, text, backgroundColor }) => {
  return (
    <div className="card-style-four text-center position-relative mt-40 xs-mt-20">
      <div
        className="icon rounded-circle m-auto d-flex align-items-center justify-content-center"
        
      >
        <img src={icon} alt="icon" className="lazy-img" style={{width:"50px", height:"50px"}}/>
      </div>
      <h4 className="fw-500 mt-35 mb-25">
        <a href="#" className="tran3s tx-dark">
          {title}
        </a>
      </h4>
      <p className="mb-10" style={{textAlign:"justify"}}>{text}</p>
      {/* <a href="#">
        <img src="/images/icon/icon_05.svg" alt="icon" className="lazy-img" />
      </a> */}
      
    </div>
  );
};

const Features = () => {
  return (
    <>
      {featureData.map((feature) => (
        <div
          key={feature.id}
          className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
          data-aos="fade-up"
          data-aos-delay={feature.id * 100}
        >
          <FeatureCard
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
            backgroundColor={feature.backgroundColor}
          />
        </div>
      ))}
    </>
  );
};

export default Features;
