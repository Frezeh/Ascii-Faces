import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Sort } from "@material-ui/icons";
import { DialogModal } from "./Dialog";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    fontFamily: "cursive",
  },
  toolbar: {
    marginRight: 10,
  },
  appBar: {
    backgroundColor: "purple",
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 20,
    color: "white",
    marginLeft: 10,
  },
}));

const SortValue = ['id', 'price', 'size'];

function NavBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(SortValue[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <img
            width={"100"}
            src={"https://creatella.ventures/wp-content/uploads/2016/03/creatella-logo.png"}
            alt={"Logo"}
          />
          <h1 className={classes.heading}>{"Creatella Faces"}</h1>
        </Toolbar>
        <IconButton color="inherit" onClick={handleClickOpen}>
          <Sort />
        </IconButton>
        <DialogModal
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
      </AppBar>
    </div>
  );
}

export default NavBar;
