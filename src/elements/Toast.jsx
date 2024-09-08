import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Snackbar, Alert, AlertTitle } from "@mui/material";
import { ToastContext } from "../contexts/ToastContext";
import { useContext } from "react";

// Toast use Material UI Components with dynamic on title and status

function Toast() {
  const { toast, hideToast } = useContext(ToastContext);
  
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={toast.open}
      autoHideDuration={toast.duration}
      onClose={hideToast}
    >
      <Alert severity={toast.severity} onClose={hideToast}>
        <AlertTitle>
          <h4 className="font-semibold">{toast.title}</h4>
        </AlertTitle>
        {toast.description}
      </Alert>
    </Snackbar>
  );
}

export default Toast;
