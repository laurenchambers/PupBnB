import { demoUserLogin } from "../../store/session";
import "./LoginForm.css";
import { useDispatch } from "react-redux";

const DemoLogin = () => {
  const dispatch = useDispatch();

  const demoLogin = async () => {
    dispatch(demoUserLogin());
  };
  return (
    <div className="login__form">
      <button
        className="login__form-submit-button"
        type="submit"
        onClick={demoLogin}
      >
        Demo Login
      </button>
    </div>
  );
};

export default DemoLogin;
