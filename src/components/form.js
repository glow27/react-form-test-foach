import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Input } from './input';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateAccBtn } from './button';
import { useHistory } from 'react-router-dom';
import {
  Checkbox,
  FormControlLabel,
  Grid,
  FormHelperText,
  MenuItem,
  TextField,
} from '@material-ui/core';

const schema = yup.object().shape({
  fName: yup
    .string()
    .min(2, 'input is too short')
    .max(12, 'input is too long')
    .required('required'),
  lName: yup
    .string()
    .min(2, 'input is too short')
    .max(12, 'input is too long')
    .required('required'),
  email: yup.string().email('wrong format').required('email is required'),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref('email'), null], 'emails must match'),
  phone: yup
    .string()
    .length(11, 'wrong format')
    .matches(/[0-9]/, 'wrong format')
    .required('phone is required'),
  password: yup
    .string()
    .min(8, 'at least 8 characters')
    .max(12, 'input is too long')
    .required('email is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'passwords must match'),
  confirmation: yup
    .bool()
    .required('The terms and conditions must be accepted.')
    .oneOf([true], 'Field must be checked'),
  invest: yup.string().required('required'),
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '470px',
    background: '#fff',
    padding: '70px 48px 90px 44px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  header: {
    marginBottom: '50px',
    fontFamily: 'Playfair Display, serif',
    fontWeight: '700',
  },
  confirmationCheckbox: {
    marginTop: '10px',
  },
  text1: {
    fontFamily: 'Lato',
    fontWeight: '700',
    fontSize: '14px',
  },
  text2: {
    fontFamily: 'Lato',
    fontSize: '14px',
  },
}));

export const Form = () => {
  const styles = useStyles();
  const history = useHistory();
  const { register, errors, handleSubmit, formState, control } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const { isValid } = formState;

  const onSubmit = (data) => {
    history.push('/dashboard');
  };

  return (
    <>
      <form
        noValidate
        className={styles.root}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography component="h1" variant="h5" className={styles.header}>
          Sign up
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Input
              ref={register}
              id="fName"
              type="text"
              label="Fisrt Name"
              name="fName"
              error={!!errors.fName}
              helperText={errors?.fName?.message}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              ref={register}
              id="lName"
              type="text"
              label="Last Name"
              name="lName"
              error={!!errors.lName}
              helperText={errors?.lName?.message}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              ref={register}
              id="phone"
              type="tel"
              label="Phone number"
              name="phone"
              error={!!errors.phone}
              helperText={errors?.phone?.message}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="invest"
              label="Amount to invest"
              required
              style={{ top: '15px' }}
              select
              fullWidth
              variant="outlined"
              as={
                <TextField>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </TextField>
              }
              defaultValue=" "
              control={control}
              rules={{ required: true }}
            />
          </Grid>
          <Input
            ref={register}
            id="email"
            type="email"
            label="Email"
            name="email"
            error={!!errors.email}
            helperText={errors?.email?.message}
            required
          />
          <Input
            ref={register}
            id="confirmEmail"
            type="email"
            label="Confirm Email"
            name="confirmEmail"
            error={!!errors.confirmEmail}
            helperText={errors?.confirmEmail?.message}
            required
          />
          <Input
            ref={register}
            id="password"
            type="password"
            label="Password"
            name="password"
            error={!!errors.password}
            helperText={errors?.password?.message}
            required
          />
          <Input
            ref={register}
            id="confirmPassword"
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            error={!!errors.confirmPassword}
            helperText={errors?.confirmPassword?.message}
            required
          />
        </Grid>
        <FormControlLabel
          className={styles.confirmationCheckbox}
          control={
            <Checkbox
              name="confirmation"
              variant="confirmation"
              inputRef={register}
              color="primary"
              error={!!errors.confirmation}
              helperText={errors?.confirmation?.message}
            />
          }
          label={
            <Typography className={styles.text1}>
              I certify that I am 18 years of age or older, and I agree to the
              Terms of Service and Privacy Policy.
            </Typography>
          }
        ></FormControlLabel>
        <FormHelperText>
          <Typography color="secondary">
            {errors?.confirmation?.message}
          </Typography>
        </FormHelperText>

        <FormControlLabel
          className={styles.confirmationCheckbox}
          control={
            <Checkbox
              name="updates"
              variant="updates"
              color="primary"
              inputRef={register}
            />
          }
          label={
            <Typography className={styles.text2}>
              I would like to receive important information and periodic news
              updates.
            </Typography>
          }
        />
        {isValid ? <CreateAccBtn /> : <CreateAccBtn disabled />}
      </form>
    </>
  );
};
