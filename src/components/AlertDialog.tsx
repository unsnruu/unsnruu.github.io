import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface AlertDialogProps {
  alert: boolean;
  setAlert: React.Dispatch<React.SetStateAction<boolean>>;
  handleClickTrue: () => void;
}

export default function AlertDialog({
  alert,
  setAlert,
  handleClickTrue,
}: AlertDialogProps) {
  const handleClose = () => {
    setAlert(false);
  };
  const handleClickAgree = () => {
    handleClose();
    handleClickTrue();
  };
  const handleClickDisagree = () => {
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={alert}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"정말 내용을 보시겠습니까?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ wordBreak: "keep-all" }}
          >
            해당 내용은 <span style={{ color: "#ba000d" }}>블라인드 채용</span>
            과 관련된 민감한 정보가 포함되어 있습니다.
            <br />
            내용을 보시려면 "동의" 버튼을 눌러주세요.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClickDisagree}
            variant={"outlined"}
            color={"error"}
          >
            취소
          </Button>
          <Button onClick={handleClickAgree} variant={"outlined"} autoFocus>
            동의
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
