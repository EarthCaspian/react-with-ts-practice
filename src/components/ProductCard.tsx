import React from 'react'
import { ProductModel } from '../models/responses/ProductModel'
import { Link } from 'react-router-dom'
import ProductService from '../services/ProductService';
import { HttpStatusCode } from 'axios';
import { useDispatch } from 'react-redux';
//import { addToCart } from '../store/actions/cartActions';
import { addToCart } from '../store/reducksTKSlice';

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

    const dispatch = useDispatch();
    const addProductToCart = () => {
        dispatch(addToCart(props.product))
    }

  return (
    <div className="card p-2 h-100">
			<img src={props.product.thumbnail} className="card-img-top" style={{objectFit:"cover", height:"200px"}} alt="..."/>
			<div className="card-body">
				<h5 className="card-title">{props.product.title}</h5>
				<p className="card-text">{props.product.description.substring(0, 70)}{props.product.description.length > 70 ? "..." : ""}</p>
                <p>{props.product.price}</p>
				<Link
					to={"/product-detail/" + props.product.id}
					className="btn btn-primary"
				>
					Details
				</Link>
                <button onClick={addProductToCart} className='btn btn-secondary'>Add To Cart</button>
				<button onClick={()=> {deleteProduct()}} className="btn btn-danger ms-3">Delete</button>
			</div>
		</div>
  )
}

export default ProductCard;