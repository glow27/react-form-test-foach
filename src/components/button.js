import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: 'Lato',
    fontWeight: '700',
  },
}));

export const CreateAccBtn = ({ ...props }) => {
  const styles = useStyles();

  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      className={styles.root}
      {...props}
    >
      Create Account
    </Button>
  );
};
