export interface ProductModel {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[];
}

//json to ts - convert json object to ts interface
// copy exact object => paste with ctrl + alt  + v 