import React from "react";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
}));

const Step2 = () => {
  const classes = useStyles();

  return (
    <>
      <div className="step2">
        <h4>MANAGER</h4>
        <div className="mt-3">
          <Grid container spacing={3}>
            <Grid item xs={4} sm={4} xl={4} md={4} className="d-flex">
              <PersonIcon className="material-person-icon" />
              <TextField
                variant="filled"
                id="outlined-basic"
                placeholder="Manager Name"
              />
            </Grid>
            <Grid item xs={4} sm={4} xl={4} md={4} className="d-flex">
              <PersonIcon className="material-person-icon" />
              <TextField
                variant="filled"
                id="outlined-basic"
                placeholder="Manager Name"
              />
            </Grid>
            <Grid item xs={4} sm={4} xl={4} md={4} className="d-flex">
              <EmailIcon className="material-person-icon" />
              <TextField
                variant="filled"
                id="outlined-basic"
                placeholder="Manager Name"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
export default Step2;
