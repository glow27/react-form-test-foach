import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { updateStatus } from '../redux/actionCreators';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FFFFFF',
    border: '1px solid #1EAAFC',
    borderRadius: '5px',
    margin: theme.spacing(2),
    width: '80%',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  avatar: {
    background: '#D8D8D8',
    border: '1px solid #979797',
    width: '162px',
    height: '162px',
    borderRadius: '50%',
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(3),
    flexShrink: 0
  },
  photo: {
    width: '123px',
    height: '123px',
  },
  text1: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
    fontSize: 30,
    color: 'rgba(144, 144, 144, 1)',
  },
  text2: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
    fontSize: 30,
    width: '70%',
    color: 'rgba(116, 116, 116, 1)',
    marginTop: theme.spacing(3),
  },
}));

export const Card = (props) => {
  const styles = useStyles();
  const { name, position, onVacation } = props.empl;
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(updateStatus(name));
  };

  return (
    <>
      <div className={styles.root}>
        <div className={styles.avatar}>
          <Avatar className={styles.photo} />
        </div>
        <div>
          <Typography className={styles.text1}>{name}</Typography>
          <Typography className={styles.text2}>{position}</Typography>
          <FormControlLabel
            control={
              <Switch
                checked={onVacation}
                onChange={() => {
                  handleChange();
                }}
                name="vacationStatus"
                color="primary"
              />
            }
            label="On vacation"
          />
        </div>
      </div>
    </>
  );
};
