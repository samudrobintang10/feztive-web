import React, { useRef, useState, useContext } from "react";
import Button from "../elements/Button";
import Input from "../elements/Input";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../axios-client";
import { ToastContext } from "../contexts/ToastContext";

function Register() {
  const navigate = useNavigate();
  const { showToast } = useContext(ToastContext);
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
    const payload = {
      email: formData.email,
      password: formData.password,
      phoneNumber: formData.phone_number,
      firstName: formData.first_name,
      lastName: formData.last_name
    };
    
    axiosClient
      .post("/users/register", payload)
      .then(({ data }) => {
        showToast("Success", "Account Created! Please log in using the username and password you have registered!", "success");
        navigate('/login');
      })
      .catch((err) => {
        const response = err.response;
        setToastTitle("Error");
        setToastDescription(response.data.error);
        setOpenAlert(true);
      });
  };

  // Handler on Alert
  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <div className="register-page lg:grid lg:justify-items-center mb-12">
      <div className="lg:w-1/2 lg:px-10 py-5 px-5 border border-secondary-grey rounded-xl">
        <form onSubmit={handleSubmit}>
          <h1 className="font-semibold lg:text-3xl mb-1 text-base">Register</h1>
          <h6 className="font-normal text-quinary-grey lg:text-base">
            Register to setup your account!
          </h6>
          <div className="content-register mt-9 mb-12 grid lg:gap-y-9 gap-y-6">
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
          <h6 className="w-full text-center mt-4 text-quinary-grey lg:text-base">
            Already have account?&nbsp;
            <Link to={"/login"}>
              <span className="text-primary-blue font-semibold">Sign in</span>
            </Link>
          </h6>
        </form>
      </div>
    </div>
  );
}

export default Register;
