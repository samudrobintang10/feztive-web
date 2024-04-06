import React, { useRef, useState } from "react";
import Button from "../elements/Button";
import Input from "../elements/Input";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone_number: "",
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
    <div className="register-page grid justify-items-center mb-12">
      <div className="w-1/2 px-10 py-5 border border-secondary-grey rounded-xl">
        <form onSubmit={handleSubmit}>
          <h1 className="font-semibold text-3xl mb-1">Register</h1>
          <h4 className="font-normal text-quinary-grey">
            Register to setup your account!
          </h4>
          <div className="content-register mt-9 mb-12 grid gap-y-9">
            <Input
              placeholder={"Email"}
              isEmail
              name={"email"}
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              placeholder={"Phone Number"}
              isNumber
              name={"phone_number"}
              value={formData.phone_number}
              onChange={handleChange}
            />
            <Input
              placeholder={"First Name"}
              name={"first_name"}
              value={formData.first_name}
              onChange={handleChange}
            />
            <Input
              placeholder={"Last Name"}
              name={"last_name"}
              value={formData.last_name}
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
          <Button placeholder={"Register"} isBig isPurple isSubmit />
          <h4 className="w-full text-center mt-4 text-quinary-grey">
            Already have account?&nbsp;
            <Link to={"/login"}>
              <span className="text-primary-blue font-semibold">Sign in</span>
            </Link>
          </h4>
        </form>
      </div>
    </div>
  );
}

export default Register;
