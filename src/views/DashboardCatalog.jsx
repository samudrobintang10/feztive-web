import { List, ListItem, ListItemText } from "@mui/material";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUpload,
  faCloudUploadAlt,
  faFileUpload,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import FileInput from "../elements/FileInput";
import CheckboxInput from "../elements/CheckboxInput";

function DashboardCatalog() {
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
    console.log(formData);
  };

  return (
    <div className="dashboard catalog">
      <section className="verification-menu">
        <div className="flex justify-between py-24 gap-x-10">
          <div className="w-4/12 p-10 border-secondary-grey border-2 rounded-2xl h-fit">
            <h4 className="font-inter font-semibold">Verification process</h4>
            <List sx={{ listStyle: "decimal", paddingLeft: 2 }}>
              <ListItem
                sx={{ display: "list-item", padding: 0 }}
                className="font-inter"
              >
                <h4 className="font-inter">
                  Input your full name based on KTP
                </h4>
              </ListItem>
              <ListItem
                sx={{ display: "list-item", padding: 0 }}
                className="font-inter"
              >
                <h4 className="font-inter">Input photo of KTP</h4>
              </ListItem>
              <ListItem
                sx={{ display: "list-item", padding: 0 }}
                className="font-inter"
              >
                <h4 className="font-inter">
                  Input photo of half body with KTP
                </h4>
              </ListItem>
              <ListItem
                sx={{ display: "list-item", padding: 0 }}
                className="font-inter"
              >
                <h4 className="font-inter">Read and accept privacy policy</h4>
              </ListItem>
              <ListItem
                sx={{ display: "list-item", padding: 0 }}
                className="font-inter"
              >
                <h4 className="font-inter">
                  Wait for 1 x 24 Hour until our admin verify your data
                </h4>
              </ListItem>
            </List>
          </div>
          <div className="w-8/12 p-10 border-secondary-grey border-2 rounded-2xl">
            <form onSubmit={handleSubmit}>
              <div className="pb-9">
                <h2 className="font-inter font-semibold text-3xl">
                  Verification Buyer
                </h2>
                <h4 className="text-tertiary-grey">
                  Upload this data to be verified as buyer
                </h4>
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
      </section>
    </div>
  );
}

export default DashboardCatalog;
