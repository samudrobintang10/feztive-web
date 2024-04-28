import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Snackbar, Alert, AlertTitle } from "@mui/material";

// Toast use Material UI Components with dynamic on title and status

function Toast({ open, onClose, title, description }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
    >
      <Alert severity="error">
        <AlertTitle>
          <h4 className="font-semibold">{title}</h4>
        </AlertTitle>
        {description}
      </Alert>
    </Snackbar>
  );
}

export default Toast;
