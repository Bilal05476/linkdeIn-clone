import "./AddFeedSec.css";
import FeedDetails from "./FeedDetails";
import { TiInfoLarge } from "react-icons/ti";
import { FaLongArrowAltRight } from "react-icons/fa";

const AddFeedSec = () => {
  return (
    <div className="addFeedSec">
      <div className="addToFeed d-flex align-items-center">
        <h6 className="mb-0">Add to your feed</h6>
        <TiInfoLarge style={{ marginLeft: "100px" }} />
      </div>
      <div className="feedDiv d-flex flex-column">
        <FeedDetails
          img="https://media-exp1.licdn.com/dms/image/C560BAQG65FKCQaB5Lg/company-logo_100_100/0/1622819998556?e=1632355200&v=beta&t=wrMW5XV3XhrrYRM4ZX5HscStQUF0OpDTXY63PZiYwxI"
          title="HackerRank"
          company="Company . Computer Software"
        />
        <FeedDetails
          img="https://media-exp1.licdn.com/dms/image/C4E0BAQGzWgfg22tHBQ/company-logo_100_100/0/1621519581295?e=1632355200&v=beta&t=wy0oUfK1lJzWNEzhoGDWoHJ2z5awyPDY99gDyl9G9x8"
          title="Careers In Dubai"
          company="Company . Marketing & Advertising"
        />
        <FeedDetails
          img="https://media-exp1.licdn.com/dms/image/C4E03AQEMDSJSAbInBw/profile-displayphoto-shrink_100_100/0/1603310740179?e=1629936000&v=beta&t=6whd6hlfVz06GwAD6M8jeizU99hYCujJQRE7HXGo1I8"
          title="Carlos Alexander"
          company="Company . Consultant and Managing"
        />
        <small>
          View all recommendations <FaLongArrowAltRight className="ml-2" />
        </small>
      </div>
    </div>
  );
};
export default AddFeedSec;
