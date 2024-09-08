import { List, ListItem } from "@mui/material";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { useState, useContext, useEffect } from "react";
import FileInput from "../elements/FileInput";
import CheckboxInput from "../elements/CheckboxInput";
import VerificationPng from "../assets/images/verification.png";
import { ToastContext } from "../contexts/ToastContext";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";

function DashboardCatalog() {
  const [waitingForVerification, setWaitingForVerification] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rejectNotes, setRejectNotes] = useState("");
  const [checkedTerms, setCheckedTerms] = useState(false);
  const { showToast } = useContext(ToastContext);
  const { user, token, notification, setUser, setToken, setNotification } =
    useStateContext();

  const [formData, setFormData] = useState({
    fullName: "",
    ktpPhoto: {},
    ktpPhotoBlob: "",
    halfBodyWithKtpPhoto: {},
    halfBodyWithKtpPhotoBlob: "",
  });

  // handling checkbox and make upload button work
  const handleCheckboxChange = (event) => {
    setCheckedTerms(event.target.checked);
  };

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

  const getUserDetail = async (token) => {
    try {
      const response = await axiosClient.get("/users/get-user-details", {
        headers: {
          "X-Authorization": token,
        },
      });
      setUser(response.data.detail);
    } catch (error) {
      const response = err.response;
      showToast("Error", response.data.error, "error");
    }
  };

  const getValidationData = async (valid_id) => {
    const payload = {
      validationId: valid_id,
    };
    axiosClient
      .post("/users/validation/get", payload)
      .then(({ data }) => {
        console.log(data)
        if (data.status === "PENDING") {
          setWaitingForVerification(true);
        } else if (data.status === "REJECTED") {
          setRejectNotes(data.remarks);
          setFormData({
            fullName: data.idNumber,
            ktpPhoto: {},
            ktpPhotoBlob: data.idPhoto,
            halfBodyWithKtpPhoto: {},
            halfBodyWithKtpPhotoBlob: data.selfiePhoto,
          });
        }
      })
      .catch((err) => {
        const response = err.response;
      });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault(); // Prevent default action from form
    setLoading(true);
    // setWaitingForVerification(true);

    const ktpPhotoRef = ref(
      storage,
      `images/ktpPhoto/${formData.ktpPhoto.name + v4()}`
    );
    const halfBodyWithKtpPhotoRef = ref(
      storage,
      `images/halfBodyWithKtpPhoto/${formData.halfBodyWithKtpPhoto.name + v4()}`
    );

    // Upload the KTP photo
    uploadBytes(ktpPhotoRef, formData.ktpPhoto).then((ktpSnapshot) => {
      getDownloadURL(ktpSnapshot.ref).then((ktpUrl) => {
        // Upload the half-body with KTP photo
        uploadBytes(
          halfBodyWithKtpPhotoRef,
          formData.halfBodyWithKtpPhoto
        ).then((selfieSnapshot) => {
          getDownloadURL(selfieSnapshot.ref).then((selfieUrl) => {
            // Now that we have the download URLs, we can construct the payload

            if (user?.validations[0]?.validationId) {
              const payload = {
                validationId: user?.validations[0]?.validationId,
                idNumber: formData.fullName,
                idPhoto: ktpUrl,
                selfiePhoto: selfieUrl,
              };
              axiosClient
                .post("/users/validation/update", payload)
                .then(({ data }) => {
                  getUserDetail(token);
                  showToast("Success", "Your Data is on Updated", "success");
                  setLoading(false);
                  setWaitingForVerification(true);
                })
                .catch((err) => {
                  const response = err.response;
                  showToast("Error", response.data.error, "error");
                  setLoading(false);
                });
            } else {
              const payload = {
                userId: user.userId,
                idNumber: formData.fullName,
                idPhoto: ktpUrl,
                selfiePhoto: selfieUrl,
              };
              axiosClient
                .post("/users/validation/create", payload)
                .then(({ data }) => {
                  getUserDetail(token);
                  showToast(
                    "Success",
                    "Your Data is on Verification!",
                    "success"
                  );
                  setLoading(false);
                  setWaitingForVerification(true);
                })
                .catch((err) => {
                  const response = err.response;
                  showToast("Error", response.data.error, "error");
                  setLoading(false);
                });
            }
          });
        });
      });
    });
  };

  useEffect(() => {
    getValidationData(user?.validations[0]?.validationId);
  }, []);

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
                    handleChange={handleCheckboxChange}
                    checked={checkedTerms}
                  />
                  <Button
                    placeholder={"Upload"}
                    isBig
                    isDisabled={!checkedTerms}
                    isPurple
                    isSubmit
                    isLoading={loading}
                  />
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
