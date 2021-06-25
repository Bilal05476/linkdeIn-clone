import "./ServicesPage.css";
import { BsThreeDots } from "react-icons/bs";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";
import { useEffect, useState } from "react";

const ServicesPage = () => {
  const [{ user }] = useStateValue();
  const getUserData = db.collection("users").doc(user.uid);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    return getUserData.get().then((doc) => {
      setUserName(doc.data().name);
    });
  }, [user, getUserData]);
  return (
    <div className="servicesPage">
      <div className="ad">
        <small>
          Ad <BsThreeDots />{" "}
        </small>
      </div>
      <div className="services">
        <small className="text-center">
          {userName}
          {user?.displayName}, showcase your services
        </small>
        <div className="servicesImages">
          <img className="servicesProfile" src={user?.photoURL} alt="profile" />
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
