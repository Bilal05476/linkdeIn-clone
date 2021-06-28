import Logo from "../img/logo.png";
import { useStateValue } from "../StateProvider";

const AuthFooter = () => {
  const [{ toggleTheme }] = useStateValue();
  return (
    <div className={toggleTheme ? "authFooterLight" : "authFooter"}>
      <img src={Logo} width="2%" alt="logo" />
      <small className="mx-2">&copy; 2020 </small>
      <small className="mx-2">About</small>
      <small className="mx-2">Accessibility</small>
      <small className="mx-2">User Agreement</small>
      <small className="mx-2">Privacy Policy</small>
      <small className="mx-2">Cookie Policy</small>
      <small className="mx-2">Copyright Policy</small>
      <small className="mx-2">Brand Policy</small>
      <small className="mx-2">Guest Controls</small>
      <small className="mx-2">Community Guidelines</small>
    </div>
  );
};

export default AuthFooter;
