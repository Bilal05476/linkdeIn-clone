import "./UserPage.css";

const UserPage = () => {
  return (
    <div className="userPage">
      <img
        className="pageCover"
        src="https://images.template.net/wp-content/uploads/2014/11/Natural-Facebook-Cover-Photo.jpg"
        alt="cover"
      />
      <img
        className="pageProfile"
        src="https://media-exp1.licdn.com/dms/image/C5603AQEQl3TdXRZAxQ/profile-displayphoto-shrink_100_100/0/1561463236720?e=1629936000&v=beta&t=s-fGyByCn8y7cn8DnUjlwactRwosFBXbA-4SbQrcILs"
        alt="profile"
      />
      <div className="pageInfo">
        <h4 className="pageName">Page Name</h4>
        <hr style={{ margin: "10px 20px", marginRight: "150px" }} />
        <div className="pageAnalytics">
          <div className="pageNotification">
            <p>Page notifications</p>
            <strong>12</strong>
          </div>
          <div className="pageViews">
            <p>Page Visitors</p>
            <strong>48</strong>
          </div>
        </div>
        <hr className="mb-0" />
        <div
          className="discover text-center py-3"
          style={{ fontSize: "0.7rem" }}
        >
          See visitor analytics
        </div>
      </div>
    </div>
  );
};

export default UserPage;
