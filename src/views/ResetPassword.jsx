import React, { useRef, useState } from "react";
import Button from "../elements/Button";
import Input from "../elements/Input";
import { Link } from "react-router-dom";

function ResetPassword() {
  const [formData, setFormData] = useState({
    email: "",
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
    <div className="reset-password-page grid justify-items-center">
      <div className="w-1/2 px-10 py-5 border border-secondary-grey rounded-xl">
        <form onSubmit={handleSubmit}>
          <h1 className="font-semibold text-3xl mb-1">Reset Password</h1>
          <h4 className="font-normal text-quinary-grey">
            Input your email to see reset link
          </h4>
          <div className="content-login mt-9 mb-12 grid gap-y-9">
            <Input
              placeholder={"Email"}
              isEmail
              name={"email"}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <Button placeholder={"Send"} isBig isPurple isSubmit />
          <h4 className="w-full text-center mt-4 text-quinary-grey">
            Back to&nbsp;
            <Link to={"/login"}>
              <span className="text-primary-blue font-semibold">Sign In</span>
            </Link>
            &nbsp;page
          </h4>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
