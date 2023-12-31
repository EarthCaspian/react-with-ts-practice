import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProductService  from '../services/ProductService'
import { ProductModel } from '../models/responses/ProductModel'

type Props = {}

export const Homepage = (props: Props) => {


    const [products, setProducts] = useState<ProductModel[]>([]);

	useEffect(() => {
		fetchProducts();
	}, []);

    const onProductDelete = (id:number) => {
        setProducts(products.filter(i => i.id !== id));
    }

	const fetchProducts = () => {
		ProductService.getAll().then((response: any) => {
			setProducts(response.data.products);
		});
	};

    return (
		<div className="container mt-3">
			<div className="row">
				{products.map(product => (
					<div className="col-lg-3 col-md-6 col-12 mb-5" key={product.id}>
						<ProductCard onDelete={onProductDelete} product={product} />
					</div>
				))}
			</div>
		</div>
	);
}