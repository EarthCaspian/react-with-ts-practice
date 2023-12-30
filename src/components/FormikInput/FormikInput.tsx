import { ErrorMessage, Field } from 'formik'
import React from 'react'

type Props = {
    label:string;
    name:string;
    type?:string; //type: string | undefined
}

const FormikInput = (props: Props) => {
  return (
    <div className="mb-3">
					<label className="form-label">{props.label}</label>
					<Field type={props.type || "text"} name={props.name} className="form-control" />
                    <ErrorMessage name={props.name}>
                        {(message)=> <p className='text-danger'>{message}</p> }
                    </ErrorMessage>
				</div>
  )
}

export default FormikInput