import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

// The default of this FileInput elements is isPrimary and isNormal

function FileInput({
  placeholder,
  file,
  fileName,
  handleImageChange,
  name
}) {
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (ev) => {
    hiddenFileInput.current.click();
  };

  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (ev) => {
    const fileUploaded = ev?.target?.files[0];
    handleImageChange(ev.target.name, fileUploaded)
    // setFile(URL.createObjectURL(fileUploaded));
    // setFileName(fileUploaded.name);
  };

  return (
    <div className="input-file grid gap-y-2">
      <h6 className="font-semibold lg:text-base">{placeholder}</h6>
      <button className="border-2 border-dashed border-tertiary-grey rounded-xl py-10" onClick={handleClick}>
        <div className="grid gap-y-2 place-content-center">
          {file && (
            <div className="grid gap-y-2">
              <img src={file} className="w-10/12 justify-self-center" />
              <h4 className="font-inter">{fileName}</h4>
            </div>
          )}
          {!file && (
            <div className="uploader">
              <FontAwesomeIcon
                icon={faFileUpload}
                className="text-black text-xl justify-self-center"
              />
              <h4 className="font-inter">Upload image</h4>
            </div>
          )}
        </div>
      </button>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }}
        name={name}
      />
    </div>
  );
}

export default FileInput;
