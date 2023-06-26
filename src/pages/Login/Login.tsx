import { useNavigate } from "react-router-dom";
import { createUser } from "../../redux/states/user";
import { getMorty } from "../../services";
import { useDispatch } from "react-redux";
import { PrivateRoutes } from "../../models";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser(result));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (error) {}
  };
  return (
    <div>
      <h2>Hola este es el login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
};
export default Login;
