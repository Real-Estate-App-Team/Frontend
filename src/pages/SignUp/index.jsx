import { useEffect, useMemo, useState } from "react";
import signUp from "./signUp";
import { Input } from "../../components/signUp/input";

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
      if (axiosError.response?.data) { //Request gönderim islemi sirasinda request serverden yanit alamazsa
        if (axiosError.response.status === 400) { //Response 400 hatasi iceriyorsa
          setErrors(axiosError.response.data.validationErrors); //Response icerisindeki validasyon hatasini goster
        }else {
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

  return (
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
            </div> */}
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
              <div className="alert alert-success text-center">{successMessage}</div>
            )}
            {generalError && (
              <div className="alert alert-danger text-center">{generalError}</div>
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
  );
}
