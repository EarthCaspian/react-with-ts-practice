import React from 'react'
import { ProductModel } from '../models/responses/ProductModel'
import { Link } from 'react-router-dom'
import ProductService from '../services/ProductService';
import { HttpStatusCode } from 'axios';

type Props = {
    product:ProductModel;
    onDelete: (id:number) => void;
    title?: string; //optional
}

const ProductCard = (props: Props) => {

    const deleteProduct = async () => {
        let response = await ProductService.delete(props.product.id)
        console.log(response);
        if(response.status = HttpStatusCode.Ok){
            props.onDelete(props.product.id)
            alert("Successfully deleted.")
        }
    }

  return (
    <div className="card">
			<img src={props.product.thumbnail} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.product.title}</h5>
				<p className="card-text">{props.product.description}</p>
                <p>{props.product.price}</p>
				<Link
					to={"/product-detail/" + props.product.id}
					className="btn btn-primary"
				>
					Details
				</Link>
				<button onClick={()=> {deleteProduct()}} className="btn btn-danger ms-3">Delete</button>
			</div>
		</div>
  )
}

export default ProductCard;