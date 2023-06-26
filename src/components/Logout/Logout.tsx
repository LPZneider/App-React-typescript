import { useNavigate } from "react-router-dom";
import { resetUser } from "../../redux/states/user";
import { PublicRoutes } from "../../models";
import { useDispatch } from "react-redux";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch(resetUser());
    navigate(PublicRoutes.LOGIN, { replace: true });
  };
  return <button onClick={LogOut}>Logout</button>;
};
export default Logout;
