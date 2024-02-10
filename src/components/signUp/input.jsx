import { Col, FloatingLabel, Form } from "react-bootstrap";

export const isValid = (formik, field) =>
  formik.touched[field] && !formik.errors[field];
export const isInValid = (formik, field) =>
  formik.touched[field] && formik.errors[field];


  // export function FeedbackMessage({ type, children }) {
  //   return <Form.Control.Feedback type={type}>{children}</Form.Control.Feedback>;
  // }

export function Input(props) {
  const { id, label, error, onChange,type } = props;
  // const { id, label, error, className,valid, invalid, onChange, type,placeholder } = props;

  //Signup sayfasindaki her form elementi icin ortak bir kontrol mekanizmasi olusturmus olduk

  return (

//       <FloatingLabel
//         controlId={id}
//         label={label}
//         className={className}
//       >
//         <Form.Control
//           type={type}
//           placeholder={placeholder}
//           onChange={onChange}
//           isValid={valid}
//           isInvalid={invalid}
//         />
//  <FeedbackMessage type="invalid">{error}</FeedbackMessage>
//       </FloatingLabel>


    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        id={id}
        className={error ? "form-control is-invalid" : "form-control"}
        onChange={onChange}
        type={type}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
}
