import { Outlet, Link } from "react-router-dom";
import { ReactComponent as TeamrdxLogo } from "../../asset/logo-rectangle.svg";

import "./navigation.style.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <TeamrdxLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link to="/shop">SHOP</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
