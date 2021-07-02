import "./AddFeedSec.css";
import { useStateValue } from "../StateProvider";
import FeedDetails from "./FeedDetails";
import { FaLongArrowAltRight } from "react-icons/fa";

const PeopleAlsoViewed = () => {
  const [{ toggleTheme }] = useStateValue();
  return (
    <div
      className={toggleTheme ? "addFeedSecLight" : "addFeedSec"}
      style={{ marginTop: "10px" }}
    >
      <div className="addToFeed">
        <h6 className="mb-0">People also viewed</h6>
      </div>
      <div className="feedDiv d-flex flex-column">
        <FeedDetails
          img="https://media-exp1.licdn.com/dms/image/C560BAQG65FKCQaB5Lg/company-logo_100_100/0/1622819998556?e=1632355200&v=beta&t=wrMW5XV3XhrrYRM4ZX5HscStQUF0OpDTXY63PZiYwxI"
          title="Murtaza Ali "
          company="ReactJs Developer . 2nd"
          button="Connect"
        />
        <FeedDetails
          img="https://media-exp1.licdn.com/dms/image/C4E0BAQGzWgfg22tHBQ/company-logo_100_100/0/1621519581295?e=1632355200&v=beta&t=wy0oUfK1lJzWNEzhoGDWoHJ2z5awyPDY99gDyl9G9x8"
          title="Ahmed Rajput"
          company="Creative Designer . 2nd"
          button="Connect"
        />
        <FeedDetails
          img="https://media-exp1.licdn.com/dms/image/C4E03AQEMDSJSAbInBw/profile-displayphoto-shrink_100_100/0/1603310740179?e=1629936000&v=beta&t=6whd6hlfVz06GwAD6M8jeizU99hYCujJQRE7HXGo1I8"
          title="Philip Alexander"
          company="Hr Executive Manager  . 2nd"
          button="Connect"
        />
        <small>
          View all recommendations <FaLongArrowAltRight className="ml-2" />
        </small>
      </div>
    </div>
  );
};

export default PeopleAlsoViewed;
