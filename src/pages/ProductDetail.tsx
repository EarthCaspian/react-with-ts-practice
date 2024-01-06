import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductService from "../services/ProductService";
import { ProductModel } from "../models/responses/ProductModel";
import { Link } from "react-router-dom";

type Props = {};

const ProductDetail = (props: Props) => {
  //const location = useLocation();
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductModel>();

  useEffect(() => {
    //let query = new URLSearchParams(location.search)
    console.log(params);
    if (params.id) {
      ProductService.getById(parseInt(params.id)).then((response) => {
        setProduct(response.data);
      });
    }
  }, []);

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center align-items-center">
        <div className="card w-50 text-center">
          <img src={product?.thumbnail} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product?.title}</h5>
            <p className="card-text">{product?.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{product?.price}</li>
            <li className="list-group-item">{product?.brand}</li>
            <li className="list-group-item">{product?.category}</li>
          </ul>
          <div className="card-body">
            <Link to={"/"} className="card-link">
              Card link
            </Link>
            <Link to={"/"} className="card-link">
              Another link
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
