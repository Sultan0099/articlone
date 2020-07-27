import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ProfileForm from '../components/profile/ProfileForm';

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100vh",
    marginTop: 30,
    marginBottom: 30,
    flexGrow: 1,
  },

}));

export default function CreateProfile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ProfileForm />
    </div>
  );
}
