import React, { useEffect,useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ProductService from '../services/ProductService';
import { ProductModel } from '../models/responses/ProductModel';

type Props = {}

const ProductDetail = (props: Props) => {
  
    //const location = useLocation();
    const params = useParams<{id:string}>();
    const [product, setProduct] = useState<ProductModel>()

    useEffect(() => {
      //let query = new URLSearchParams(location.search)
      console.log(params);
      if (params.id) {
        ProductService.getById(parseInt(params.id)).then(response => {
            setProduct(response.data)
        })
      }
    }, [])
    

  return (
    <div>{product?.title}</div>
  )
}

export default ProductDetail