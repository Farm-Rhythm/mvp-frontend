import { useEffect, useRef, useState } from "react";

import { Button } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const BUTTON = {
  root: {
    fontFamily: "karla-Italic",
    textTransform: "none",
    color: "white",
  },
};

const dialogTheme = createMuiTheme({
  typography: {
    fontFamily: "Karla-Regular",
  },
});

const CONTRACTS_DATA = {
  termsOfUse: {
    title: "Terms of Use",
    content: "...content Terms of Use...",
  },
  privacyPolicy: {
    title: "Privacy Policy",
    content: "...content Privacy Policy...",
  },
};

const Contracts = () => {
  const [open, setOpen] = useState(false);
  const [contractType, setContratType] = useState("termsOfUse");

  const handleClickOpen = (contractType) => {
    setContratType(contractType);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  console.log(CONTRACTS_DATA[contractType].title);

  return (
    <>
      <Button style={BUTTON.root} onClick={() => handleClickOpen("termsOfUse")}>
        Terms of Use
      </Button>
      -
      <Button
        style={BUTTON.root}
        onClick={() => handleClickOpen("privacyPolicy")}
      >
        Privacy Policy
      </Button>
      <ThemeProvider theme={dialogTheme}>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">
            {CONTRACTS_DATA[`${contractType}`].title}
          </DialogTitle>
          <DialogContent dividers>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
              className="text-justify"
            >
              <p className="font-weight-bold text-center">
                {CONTRACTS_DATA[`${contractType}`].content}
              </p>
              {[...new Array(50)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join("\n")}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Accept</Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </>
  );
};

export default Contracts;
