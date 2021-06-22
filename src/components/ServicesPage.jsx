import "./ServicesPage.css";
import { BsThreeDots } from "react-icons/bs";

const ServicesPage = () => {
  return (
    <div className="servicesPage">
      <div className="ad">
        <small>
          Ad <BsThreeDots />{" "}
        </small>
      </div>
      <div className="services">
        <small>User, showcase your services</small>
        <div className="servicesImages">
          <img
            className="servicesProfile"
            src="https://media-exp1.licdn.com/dms/image/C5603AQEQl3TdXRZAxQ/profile-displayphoto-shrink_100_100/0/1561463236720?e=1629936000&v=beta&t=s-fGyByCn8y7cn8DnUjlwactRwosFBXbA-4SbQrcILs"
            alt="profile"
          />
          <img
            className="servicesProfile"
            src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg?size=626&ext=jpg"
            alt="services"
          />
        </div>
        <p className="findClient">Find new clients with a free service page</p>
        <button className="started">Get Started</button>
      </div>
    </div>
  );
};
export default ServicesPage;
