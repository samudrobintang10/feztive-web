import { List, ListItem } from "@mui/material";
import Input from "../elements/Input";
import Button from "../elements/Button";
import {useState } from "react";
import FileInput from "../elements/FileInput";
import CheckboxInput from "../elements/CheckboxInput";
import VerificationPng from "../assets/images/verification.png";

function DashboardCatalog() {
  const [waitingForVerification, setWaitingForVerification] = useState(false);
  const [rejectNotes, setRejectNotes] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    ktpPhoto: {},
    ktpPhotoBlob: "",
    halfBodyWithKtpPhoto: {},
    halfBodyWithKtpPhotoBlob: "",
  });

  // Handler input value changes on Image
  const handleImageChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
      [name + "Blob"]: URL.createObjectURL(value),
    });
  };

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
    setWaitingForVerification(true);
    // setRejectNotes(
    //   "Your KTP & half-body photo still blur. Fullname still different with KTP"
    // );
  };

  return (
    <div className="dashboard catalog">
      <section className="verification-menu">
        {!waitingForVerification && (
          <div className="grid lg:flex lg:justify-between justify-items-center py-8 lg:py-24 gap-10">
            <div className="lg:w-4/12 lg:p-10 p-5 border-secondary-grey border-2 rounded-2xl h-fit">
              <h5 className="font-inter font-semibold pb-2 lg:text-base">
                Verification {rejectNotes === "" ? "process" : "need to revise"}
              </h5>
              {rejectNotes === "" && (
                <List sx={{ listStyle: "decimal", paddingLeft: 2 }}>
                  <ListItem
                    sx={{ display: "list-item", padding: 0 }}
                    className="font-inter lg:text-base text-xs"
                  >
                    <h6 className="font-inter lg:text-base">
                      Input your full name based on KTP
                    </h6>
                  </ListItem>
                  <ListItem
                    sx={{ display: "list-item", padding: 0 }}
                    className="font-inter lg:text-base text-xs"
                  >
                    <h6 className="font-inter lg:text-base">
                      Input photo of KTP
                    </h6>
                  </ListItem>
                  <ListItem
                    sx={{ display: "list-item", padding: 0 }}
                    className="font-inter lg:text-base text-xs"
                  >
                    <h6 className="font-inter lg:text-base">
                      Input photo of half body with KTP
                    </h6>
                  </ListItem>
                  <ListItem
                    sx={{ display: "list-item", padding: 0 }}
                    className="font-inter lg:text-base text-xs"
                  >
                    <h6 className="font-inter lg:text-base">
                      Read and accept privacy policy
                    </h6>
                  </ListItem>
                  <ListItem
                    sx={{ display: "list-item", padding: 0 }}
                    className="font-inter lg:text-base text-xs"
                  >
                    <h6 className="font-inter lg:text-base">
                      Wait for 1 x 24 Hour until our admin verify your data
                    </h6>
                  </ListItem>
                </List>
              )}
              {rejectNotes !== "" && (
                <h6 className="font-inter text-primary-red lg:text-xl">
                  {rejectNotes}
                </h6>
              )}
            </div>
            <div className="lg:w-8/12 lg:p-10 p-5 border-secondary-grey border-2 rounded-2xl">
              <form onSubmit={handleSubmit}>
                <div className="pb-9">
                  <h4 className="font-inter font-semibold lg:text-3xl">
                    Verification Seller
                  </h4>
                  <h6 className="text-tertiary-grey lg:text-base">
                    Upload this data to be verified as seller
                  </h6>
                </div>
                <div className="grid gap-y-9">
                  <Input
                    placeholder={"Fullname on KTP"}
                    name={"fullName"}
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  <FileInput
                    placeholder={"KTP Photo"}
                    name={"ktpPhoto"}
                    handleImageChange={handleImageChange}
                    file={formData.ktpPhotoBlob}
                    fileName={formData.ktpPhoto.name}
                  />
                  <FileInput
                    placeholder={"Half Body with KTP photo"}
                    name={"halfBodyWithKtpPhoto"}
                    handleImageChange={handleImageChange}
                    file={formData.halfBodyWithKtpPhotoBlob}
                    fileName={formData.halfBodyWithKtpPhoto.name}
                  />
                  <CheckboxInput
                    placeholder={"Read privacy policy, terms, and conditions"}
                  />
                  <Button placeholder={"Upload"} isBig isPurple isSubmit />
                </div>
              </form>
            </div>
          </div>
        )}
        {waitingForVerification && (
          <div className="grid justify-items-center lg:py-16 py-20">
            <div className="lg:w-5/12 grid gap-y-4">
              <img src={VerificationPng} alt="verification.png" />
              <h5 className="font-semibold text-center lg:text-2xl">
                You already upload data. Wait for 1x24 hour for our admin verify
                your data as buyer
              </h5>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default DashboardCatalog;
