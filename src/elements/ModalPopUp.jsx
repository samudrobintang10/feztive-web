import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Box, Typography } from "@mui/material";
import { Children } from "react";

// Modal use Material UI Components with dynamic children
function ModalPopUp({ open, onClose, children }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </Modal>
  );
}

export default ModalPopUp;
