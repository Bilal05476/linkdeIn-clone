import "./ViewProUserAbout.css";
import { useStateValue } from "../StateProvider";

const ViewProUserAbout = () => {
  const [{ toggleTheme }] = useStateValue();
  return (
    <div className={toggleTheme ? "viewUserAboutLight" : "viewUserAbout"}>
      <h5>About</h5>
      <p className="m-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet error
        fugiat maxime hic sit, illo vero mollitia dolore, officia aspernatur
        molestias nam quidem quod alias totam laboriosam ut quisquam asperiores?
      </p>
    </div>
  );
};

export default ViewProUserAbout;
