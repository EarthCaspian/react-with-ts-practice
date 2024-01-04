import { Formik , Form} from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { passwordRule } from '../../utils/validation/customValidationRules';
import FormikInput from '../../components/FormikInput/FormikInput';
import ColorForm from '../../components/ColorForm/ColorForm';

type Props = {}

interface ProductAddForm {
    title:string,
    description:string,
    price:number,
    stock:number;
    colorId:number;
}

const ProductAdd = (props: Props) => {
    const initialValues: ProductAddForm = {
        title:"",
        description:"",
        price: 0,
        stock:0,
        colorId:0,
    }

const validationSchema = Yup.object({
    title:Yup.string()
    .required("Please fill in the title, it's required")
    .min(2)
    .max(50)
    .test("is-strong",
    "Bu alan en az 1 büyük, 1 küçük harf ve 1 numerik değer içermelidir",
    passwordRule
    ),
    description:Yup.string().required().min(5).max(300),
    price:Yup.number().min(0),
    stock:Yup.number().min(0).integer(),
    colorId: Yup.number().min(1)
})

  return (
    <div className="container mt-5">
        <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={(values) => {console.log(values);}}>
            <Form>
				
                <FormikInput name='title' label='Title'/>
                <FormikInput name='description' label='Description'/>
                <FormikInput name='price' label='Price' type='number'/>
                <FormikInput name='stock' label='In stock' type='number'/>
                <ColorForm colors={[{ id: 1, name: 'Red' }, { id: 2, name: 'Black' }, { id: 3, name: 'White' }]}/>

				<button type="submit" className="btn btn-primary mt-2">
					Add Product
				</button>
			</Form>
        </Formik>
			
		</div>
  )
}

export default ProductAdd
