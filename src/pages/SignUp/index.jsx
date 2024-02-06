import { useState } from "react";

export function SignUp() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [gender, setGender] = useState();
  const [birthDate, setBirthDate] = useState();

  //   const onChangeFirstName = (event) => {
  //     setFirstName(event.target.value);
  //   };

  //   console.log(firstName);
  return (
    <div className="container">
      <div className="col-lg-6 offset-lg-3 col-sm-8 offset-sm-2">
        <form className="card">
          <div className="text-center card-header">
            <h1>Sign Up</h1>
          </div>
          <div className="card-body">
            <div>
              <label htmlFor="firstName">Firstname</label>
              <input
                id="firstName"
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lastName">Lastname</label>
              <input
                id="lastName"
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="passwordRepeat">Password Repeat</label>
              <input
                id="passwordRepeat"
                type="password"
                onChange={(event) => setPasswordRepeat(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="phone"
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="gender">Gender</label>
              <input
                id="gender"
                onChange={(event) => setGender(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="birthDate">Birthdate</label>
              <input
                id="birthDate"
                onChange={(event) => setBirthDate(event.target.value)}
              />
            </div>
            <button disabled={!password || password !== passwordRepeat}>
              Sign Up
            </button>
            {/* Password yoksa veya password-passwordRepeat esit degilse disable et */}
          </div>
        </form>
      </div>
    </div>
  );
}
