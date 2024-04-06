import React, { useRef, useState } from "react";
import Button from "../elements/Button";
import Input from "../elements/Input";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handler input value changes
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler sending form
  const handleSubmit = (ev) => {
    ev.preventDefault(); // Prevent default action from form
    console.log(formData); // Call on Submit
  };

  return (
    <div className="login-page grid justify-items-center">
      <div className="w-1/2 px-10 py-5 border border-secondary-grey rounded-xl">
        <form onSubmit={handleSubmit}>
          <h1 className="font-semibold text-3xl mb-1">Login</h1>
          <h4 className="font-normal text-quinary-grey">
            Login to see all services that we have!
          </h4>
          <div className="content-login mt-9 grid gap-y-9">
            <Input
              placeholder={"Email"}
              isEmail
              name={"email"}
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              placeholder={"Password"}
              isPassword
              name={"password"}
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <Link to={"/password/reset"}>
            <h4 className="w-full text-right mt-2 mb-12 text-quinary-grey">
              Forgot Password?
            </h4>
          </Link>
          <Button placeholder={"Login"} isBig isPurple isSubmit />
          <h4 className="w-full text-center mt-4 text-quinary-grey">
            Doesn’t have account?&nbsp;
            <Link to={"/register"}>
              <span className="text-primary-blue font-semibold">Sign Up</span>
            </Link>
          </h4>
        </form>
      </div>
    </div>
  );
}

export default Login;
