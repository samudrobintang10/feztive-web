import React, { useRef, useState } from "react";
import Button from "../elements/Button";
import Input from "../elements/Input";
import { Link } from "react-router-dom";
import Toast from "../elements/Toast";
import ModalPopUp from "../elements/ModalPopUp";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";
import { SwipeableDrawer } from "@mui/material";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);
  const [openResetPasswordModal, setOpenResetPasswordModal] = useState(false);
  const [openResetPasswordDrawer, setOpenResetPasswordDrawer] = useState(false);

  const { setUser, setToken } = useStateContext();

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
    };
    // setOpenAlert(true);

    setErrors(null);
    axiosClient
      .post("/users/login", payload)
      .then(({ data }) => {
        // setUser(data.user);
        setToken(data.accessToken);
      })
      .catch((err) => {
        const response = err.response;
        setErrors(response.data.error)
        setOpenAlert(true);
      });
  };

  // Handler open modal reset password modal
  const handleOpenResetPasswordModal = (ev) => {
    ev.preventDefault(); // Prevent default action from form
    setOpenResetPasswordModal(true);
  };

  // Handler on Reset Password modal close
  const handleCloseResetPasswordModal = () => {
    setOpenResetPasswordModal(false);
  };

  // Handler open modal reset password drawer (phone)
  const handleOpenResetPasswordDrawer = (ev) => {
    ev.preventDefault(); // Prevent default action from form
    setOpenResetPasswordDrawer(true);
  };

  // Handler close modal reset password drawer (phone)
  const handleCloseResetPasswordDrawer = (ev) => {
    ev.preventDefault(); // Prevent default action from form
    setOpenResetPasswordDrawer(false);
  };

  // Handler on Alert
  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <div className="login-page lg:grid lg:justify-items-center">
      <Toast
        open={openAlert}
        onClose={handleCloseAlert}
        title={"Error"}
        description={errors}
      />
      <ModalPopUp
        open={openResetPasswordModal}
        onClose={handleCloseResetPasswordModal}
      >
        <div className="reset-password grid justify-items-center w-screen">
          <div className="px-10 py-10 rounded-xl bg-white w-4/12">
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
              <div className="grid grid-cols-2 gap-x-4">
                <Button
                  placeholder={"Cancel"}
                  isSecondary
                  isPurple
                  onClick={handleCloseResetPasswordModal}
                />
                <Button placeholder={"Send"} isPurple isSubmit />
              </div>
            </form>
          </div>
        </div>
      </ModalPopUp>
      <SwipeableDrawer
        anchor={"bottom"}
        open={openResetPasswordDrawer}
        onClose={handleCloseResetPasswordDrawer}
        onOpen={handleOpenResetPasswordDrawer}
      >
        <div className="reset-password">
          <div className="px-10 py-10 rounded-xl bg-white">
            <form onSubmit={handleSubmit}>
              <h1 className="font-semibold text-sm mb-1">Reset Password</h1>
              <h6 className="font-normal text-quinary-grey">
                Input your email to see reset link
              </h6>
              <div className="content-login mt-6 mb-10 grid gap-y-9">
                <Input
                  placeholder={"Email"}
                  isEmail
                  name={"email"}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-y-4">
                <Button
                  placeholder={"Cancel"}
                  isSecondary
                  isPurple
                  onClick={handleCloseResetPasswordDrawer}
                />
                <Button placeholder={"Send"} isPurple isSubmit />
              </div>
            </form>
          </div>
        </div>
      </SwipeableDrawer>
      <div className="lg:w-1/2 lg:px-10 py-5 px-5 border border-secondary-grey rounded-xl">
        <form onSubmit={handleSubmit}>
          <h1 className="font-semibold lg:text-3xl mb-1 text-base">Login</h1>
          <h6 className="font-normal text-quinary-grey lg:text-base">
            Login to see all services that we have!
          </h6>
          <div className="content-login lg:mt-9 mt-6 grid lg:gap-y-9 gap-y-6">
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
          <div className="lg:hidden">
            <h6
              className="w-full text-right mt-2 mb-12 text-quinary-grey cursor-pointer lg:text-base"
              onClick={handleOpenResetPasswordDrawer}
            >
              Forgot Password?
            </h6>
          </div>
          <div className="invisible lg:visible">
            <h6
              className="w-full text-right mt-2 mb-12 text-quinary-grey cursor-pointer lg:text-base"
              onClick={handleOpenResetPasswordModal}
            >
              Forgot Password?
            </h6>
          </div>
          <Button placeholder={"Login"} isBig isPurple isSubmit />
          <h6 className="w-full text-center mt-4 text-quinary-grey lg:text-base">
            Doesn’t have account?&nbsp;
            <Link to={"/register"}>
              <span className="text-primary-blue font-semibold">Sign Up</span>
            </Link>
          </h6>
        </form>
      </div>
    </div>
  );
}

export default Login;
