import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { TextField } from 'formik-material-ui';
import { loginStyles } from './LoginStyles';
import toast from 'react-hot-toast';
import { useAppDispatch } from '../../app/hooks';
import { loginSuccess } from '../../features/User/userSlice';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { Autocomplete } from '@react-google-maps/api';

const Login = () => {
  const classes = loginStyles();
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(loginSuccess('kanyecope@gmail.com'));
  }
  return (
    <Container style={{ width: 700, height: 'auto', marginTop: 180 }}>
      <CssBaseline />
      <Card>
        <CardContent style={{ width: '50%', margin: '0 auto' }}>
          <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={async (values, actions: FormikHelpers<any>) => {
              try {
                toast.success(`${values}`);
                actions.resetForm();
                return new Promise((res) => setTimeout(res, 2000));
              } catch (error) {
                console.log(error);
              }
            }}
          >
            {({ values, errors, isSubmitting, submitForm }) => (
              <Form autoComplete="off">
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <Typography>Login to System</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      name="username"
                      variant="outlined"
                      label="username"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      name="password"
                      variant="outlined"
                      label="password"
                      type="password"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: 30 }}>
                  <Button
                    variant="contained"
                    onClick={handleClick}
                    disabled={isSubmitting}
                    color={'secondary'}
                    startIcon={
                      isSubmitting ? (
                        <CircularProgress size="0.9rem" />
                      ) : undefined
                    }
                  >
                    {isSubmitting ? 'submitting' : 'submit'}
                  </Button>
                </Grid>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
