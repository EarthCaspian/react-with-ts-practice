import { Formik , Form, Field, ErrorMessage} from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { passwordRule } from '../../utils/validation/customValidationRules';
import FormikInput from '../../components/FormikInput/FormikInput';

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

                {/* make component */}
                <Field as="select" className="form-select" name="colorId">
                    <option value={0}>Color Picker</option>
                    <option value={1}>Red</option>
                    <option value={2}>Black</option>
                    <option value={3}>White</option>
                </Field>
                <ErrorMessage name='colorId'>
                    {(message) => { return <p className='text-danger'>{message}</p> }}
                </ErrorMessage>


                {/* <div className="mb-3">
					<label className="form-label">Title</label>
					<Field type="text" name='title' className="form-control" />
                    <ErrorMessage name='title'>
                        {(message)=> <p className='text-danger'>{message}</p> }
                    </ErrorMessage>
				</div> */}


				{/* <div className="mb-3">
					<label className="form-label">Product Description</label>
					<Field type="text" name='description' className="form-control" />
                    <ErrorMessage name='description'>
                        {(message)=> <p className='text-danger'>{message}</p> }
                    </ErrorMessage>
				</div>

				<div className="mb-3">
					<label className="form-label">Price</label>
					<Field type="text" name='price' className="form-control" />
                    <ErrorMessage name='price'>
                        {(message)=> <p className='text-danger'>{message}</p> }
                    </ErrorMessage>
				</div>

				<div className="mb-3">
					<label className="form-label">In stock</label>
					<Field type="text" name='stock' className="form-control" />
                    <ErrorMessage name='stock'>
                        {(message)=> <p className='text-danger'>{message}</p> }
                    </ErrorMessage>
				</div> */}

				<button type="submit" className="btn btn-primary mt-2">
					Add Product
				</button>
			</Form>
        </Formik>
			
		</div>
  )
}

export default ProductAdd
