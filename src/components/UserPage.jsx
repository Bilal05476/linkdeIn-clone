import "./UserPage.css";

const UserPage = () => {
  return (
    <div className="userPage">
      <img
        className="pageCover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOpohMUNHMDmoa6h0EWbt_jiHZ_LjkOS5nXGoiIlX_gSzHVxtaHv3ArBvAKnInsjAwlZk&usqp=CAU"
        alt="cover"
      />
      <img
        className="pageProfile"
        src="https://dynamic.brandcrowd.com/asset/logo/9971bc9b-9d51-4b42-beca-b3ffe882efcd/logo?v=637102751107770000"
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
