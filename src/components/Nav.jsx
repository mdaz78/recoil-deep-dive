import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/easy-bits")}>Easy Bits</button>
      <button onClick={() => navigate("/atom-family")}>
        Atom Family or Selector Family
      </button>
    </div>
  );
};

export default Nav;
