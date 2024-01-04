import React from "react";
import { ErrorMessage, Field } from "formik";

type Color = {
  id: number;
  name: string;
};

type Props = {
  colors: Color[];
};

const ColorForm: React.FC<Props> = ({ colors }) => {
  return (
    <>
      <Field as="select" className="form-select" name="colorId">
        {colors.map((color) => (
          <option key={color.id} value={color.id}>
            {color.name}
          </option>
        ))}
      </Field>
      <ErrorMessage name="colorId">
        {(message) => {
          return <p className="text-danger">{message}</p>;
        }}
      </ErrorMessage>
    </>
  );
};

export default ColorForm;
