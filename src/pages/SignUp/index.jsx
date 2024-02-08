import { useEffect, useMemo, useState } from "react";
import signUp from "./signUp";
// import { Input, isInValid, isValid } from "../../components/signUp/input";
import {
  Button,
  Card,
  CardHeader,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import ReactInputMask from "react-input-mask-next";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { isInValid, isValid } from "../../helpers/functions/forms";


export function SignUp() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [gender, setGender] = useState();
  const [birthDate, setBirthDate] = useState();

  const [apiProgress, setApiProgress] = useState(false);
  const [successMessage, setSuccessMessage] = useState();
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState();

  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    gender: "",
    email: "",
    password: "",
    passwordRepeat: "",
    phone: "",
    birthDate: "",
    firstName: "",
    lastName: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    gender: Yup.string()
      .required("Required")
      .oneOf(["MALE", "FEMALE"], "UNKNOWN"),
    birthDate: Yup.date().required("Required"),
    phone: Yup.string()
      .required("Required"),
      // .matches(/\d{3}-\d{3}-\d{4}/g, "Invalid phone number"),
    email: Yup.string().required("Required").min(8, "At least 6 characters"),
    password: Yup.string()
      .required("Required")
      .min(8, "At least 8 characters")
      .matches(/[a-z]+/g, "One lowercase char")
      .matches(/[A-Z]+/g, "One uppercase char")
      .matches(/[\d+]+/g, "One number"),
    passwordRepeat: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  useEffect(() => {
    setErrors(function (lastErrors) {
      return {
        ...lastErrors,
        firstName: undefined,
      };
    }); //Kullanici ilgili alanlari doldurunca hata mesaji silinecek
  }, [firstName]);

  useEffect(() => {
    setErrors(function (lastErrors) {
      return {
        ...lastErrors,
        lastName: undefined,
      };
    });
  }, [lastName]);

  useEffect(() => {
    setErrors(function (lastErrors) {
      return {
        ...lastErrors,
        email: undefined,
      };
    });
  }, [email]);

  useEffect(() => {
    setErrors(function (lastErrors) {
      return {
        ...lastErrors,
        password: undefined,
      };
    });
  }, [password]);

  useEffect(() => {
    setErrors(function (lastErrors) {
      return {
        ...lastErrors,
        phone: undefined,
      };
    });
  }, [phone]);

  useEffect(() => {
    setErrors(function (lastErrors) {
      return {
        ...lastErrors,
        gender: undefined,
      };
    });
  }, [gender]);

  useEffect(() => {
    setErrors(function (lastErrors) {
      return {
        ...lastErrors,
        birthDate: undefined,
      };
    });
  }, [birthDate]);

  //   const onChangeFirstName = (event) => {
  //     setFirstName(event.target.value);
  //   };
  //   console.log(firstName);
  
  const onSubmit = async (event) => {
    event.preventDefault(); // prevents ile browserin default formdan tetiklenerek refresh özelligini kapatmis oluyoruz
    setSuccessMessage();
    setGeneralError();
    setApiProgress(true);

    try {
      const response = await signUp({
        firstName,
        lastName,
        email,
        password,
        phone,
        gender,
        birthDate,
      });
      setSuccessMessage(response.data.friendlyMessage.description);
      //asagidaki then,catch,finally kullanimini await ile yapabiliriz
      // .then((response) => {
      //   setSuccessMessage(response.data.message);
      // })
      // .finally(() => setApiProgress(false));
      console.log(response.data.errorMessages);
    } catch (axiosError) {
      console.log(axiosError);
      //400 hata mesaji iceriyorsa validasyon hatasini göster
      if (axiosError.response?.data) {
        //Request gönderim islemi sirasinda request serverden yanit alamazsa
        if (axiosError.response.status === 400) {
          //Response 400 hatasi iceriyorsa
          setErrors(axiosError.response.data.validationErrors); //Response icerisindeki validasyon hatasini goster
        } else {
          // 400 hatasi yoksa hata mesaji göster
          setGeneralError(axiosError.response.data.errorMessages); //Backend den gelen hata mesaji(email,telefon mevcut hatalari)
        }
      } else {
        setGeneralError(axiosError.response.data.errorMessages);
      }
    } finally {
      setApiProgress(false);
    }
  };

  //UseMemo hook u ile sadece ilgili alanlarda degisiklik oldugunda kontrol yaptiriyoruz. Aksi durumda her islemde bu kontrolü yapacaktir.
  const passwordRepeatError = useMemo(() => {
    if (password && password !== passwordRepeat) {
      // console.log("always running");
      return "Passwords mismatch";
    }
    return "";
  }, [password, passwordRepeat]);

  const handleCancel = () => {
    formik.resetForm();
    // dispatch(setOperation(null));
};

const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
});


  return (
    <>
      <Container>
        <Card className="my-5">
          <CardHeader className="text-center">
            <h1>Sign Up</h1>
          </CardHeader>
          <Card.Body>
            <Card.Title></Card.Title>
            <Form noValidate onSubmit={onSubmit}>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                <Col>
                  <FloatingLabel
                    controlId="firstName"
                    label="First Name"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder=""
                      {...formik.getFieldProps("firstName")}
                      isValid={isValid(formik, "firstName")}
                      isInvalid={isInValid(formik, "firstName")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.firstName}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="lastName"
                    label="Last Name"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder=""
                      {...formik.getFieldProps("lastName")}
                      isValid={isValid(formik, "lastName")}
                      isInvalid={isInValid(formik, "lastName")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.lastName}
                    </Form.Control.Feedback>
                  </FloatingLabel> 
                </Col>

                <Col>
                  <FloatingLabel
                    controlId="email"
                    label="Email"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder=""
                      {...formik.getFieldProps("email")}
                      isValid={isValid(formik, "email")}
                      isInvalid={isInValid(formik, "email")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.email}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Col>

                <Col>
                  <FloatingLabel controlId="floatingSelect" label="Gender">
                    <Form.Select
                      aria-label="Select gender"
                      {...formik.getFieldProps("gender")}
                      isValid={isValid(formik, "gender")}
                      isInvalid={isInValid(formik, "gender")}
                    >
                      <option>Select gender</option>
                      <option value="FEMALE">Female</option>
                      <option value="MALE">Male</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.gender}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Col>

                <Col>
                  <FloatingLabel
                    controlId="birthDate"
                    label="Birthdate"
                    className="mb-3"
                  >
                    <Form.Control
                      type="date"
                      placeholder=""
                      {...formik.getFieldProps("birthDate")}
                      isValid={isValid(formik, "birthDate")}
                      isInvalid={isInValid(formik, "birthDate")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.birthDate}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Col>

                <Col>
                  <FloatingLabel
                    controlId="phone"
                    label="Phone (XXX-XXX-XXXX)"
                    className="mb-3"
                  >
                    <Form.Control
                      as={ReactInputMask}
                      mask="999-999-9999"
                      type="text"
                      placeholder="Phone (XXX-XXX-XXXX)"
                      {...formik.getFieldProps("phone")}
                      isValid={isValid(formik, "phone")}
                      isInvalid={isInValid(formik, "phone")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.phone}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Col>

                <Col>
                  <FloatingLabel
                    controlId="password"
                    label="Password"
                    className="mb-3"
                  >
                    <Form.Control
                      type="password"
                      placeholder=""
                      {...formik.getFieldProps("password")}
                      isValid={isValid(formik, "password")}
                      isInvalid={isInValid(formik, "password")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.password}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Col>

                <Col>
                  <FloatingLabel
                    controlId="passwordRepeat"
                    label="Confirm Password"
                    className="mb-3"
                  >
                    <Form.Control
                      type="password"
                      placeholder=""
                      {...formik.getFieldProps("passwordRepeat")}
                      isValid={isValid(formik, "passwordRepeat")}
                      isInvalid={isInValid(formik, "passwordRepeat")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.passwordRepeat}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Col>
              </Row>
              <Row>
      
                {successMessage && (
                <Col className="alert alert-success text-center">
                  {successMessage}
                </Col>
              )}

              {generalError && (
                <Col className="alert alert-danger text-center">
                  {generalError}
                </Col>
              )}
                
         
              </Row>
              <Row>
                <Col className="text-center my-3">
                  <Button variant="warning" type="button">
                    Cancel
                  </Button>
                  <Button
                    variant="success"
                    type="submit"
                    // disabled={!(formik.dirty && formik.isValid) || loading}
                    className="ms-3"
                  >
                    Register
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>

{/*}
      <div className="container">
        <div className="col-lg-6 offset-lg-3 col-sm-8 offset-sm-2">
          <form className="card my-3" onSubmit={onSubmit}>
            <div className="text-center card-header">
              <h1>Sign Up</h1>
            </div>
            <div className="card-body">
              <Input
                id="firstName"
                label="First Name"
                error={errors.firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />

              {/* Ortak mekanizmaya gectikten sonra sadece bizim verdigimiz
            parametreleri dolduruyoruz yukarida.*/
              /* <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                firstName
              </label>
              <input
                id="firstName"
                className={
                  errors.firstName ? "form-control is-invalid" : "form-control"
                }
                onChange={(event) => setFirstName(event.target.value)}
              />
              <div className="invalid-feedback">
                {errors?.firstName && (
                  <p className="text-danger">{errors.firstName}</p>
                )}
              </div>
            </div> 
              <Input
                id="lastName"
                label="Last Name"
                error={errors.lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
              <Input
                id="email"
                label="Email"
                error={errors.email}
                onChange={(event) => setEmail(event.target.value)}
                // type="email"
              />
              <Input
                id="password"
                label="Password"
                error={errors.password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
              />
              <Input
                id="passwordRepeat"
                label="Password Repeat"
                error={passwordRepeatError}
                onChange={(event) => setPasswordRepeat(event.target.value)}
                type="password"
              />
              <Input
                id="phone"
                label="Phone"
                error={errors.phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <Input
                id="gender"
                label="Gender"
                error={errors.gender}
                onChange={(event) => setGender(event.target.value)}
              />
              <Input
                id="birthDate"
                label="Birth Date"
                error={errors.birthDate}
                onChange={(event) => setBirthDate(event.target.value)}
              />
              {successMessage && (
                <div className="alert alert-success text-center">
                  {successMessage}
                </div>
              )}
              {generalError && (
                <div className="alert alert-danger text-center">
                  {generalError}
                </div>
              )}
              <div className="text-center">
                <button
                  className="btn btn-primary my-3"
                  disabled={
                    apiProgress || !password || password !== passwordRepeat
                  }
                >
                  {apiProgress && (
                    <span
                      className="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    ></span>
                  )}
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      */}
    </>
  );
}
