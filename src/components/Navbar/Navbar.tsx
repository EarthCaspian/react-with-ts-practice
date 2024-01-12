import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { clearCart } from "../../store/reducksTKSlice";


type Props = {};

const Navbar = (props: Props) => {

  const cartState = useSelector((state:any) => state.cart);
  // console.log(cartState);

  const authContext: any = useContext(AuthContext);
  // console.log(authContext);

  const dispatch = useDispatch()
  const handleClear = () => {
    dispatch(clearCart())
  }

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
            <li className="btn-group">
            <button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Cart
              <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartState.cartItems ? cartState.cartItems.length : 0}
									<span className="visually-hidden">unread messages</span>
								</span>
            </button>
            <ul className="dropdown-menu">
                {cartState.cartItems.map((item: any, index: number) => (
                  <li key={index}>
                    <Link className="dropdown-item" to={`/product-detail/${item.product.id}`}>
                      {item.product.title}
                    </Link>
                  </li>
                ))}
                  <li><hr className="dropdown-divider"/></li>
                  <li><button className="btn btn-success" onClick={handleClear}>Clear Cart</button></li>
            </ul>
          </li>
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
