import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

type Props = {};

const Navbar = (props: Props) => {

  const cartState = useSelector((state:any) => state.cart);
  console.log(cartState);

  const authContext: any = useContext(AuthContext);
  console.log(authContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/product-add"}>
                Add
              </Link>
            </li>
            {!authContext.isAuthenticated && (
							<li className="nav-item">
								<button
									className="nav-link"
									onClick={() => {
										authContext.setIsAuthenticated(true);
									}}
								>
									Login
								</button>
							</li>
						)}
						{authContext.isAuthenticated && (
							<li className="nav-item">
								<Link className="nav-link" to={"/"}>
									Welcome
								</Link>
							</li>
						)}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
