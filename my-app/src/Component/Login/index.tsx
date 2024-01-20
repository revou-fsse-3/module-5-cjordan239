import React, { useState } from 'react';
import { useFormik, Field, ErrorMessage, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import Input from '../Input';
import styles from './styles/style-login.module.css';

interface LoginFormValues {
  [key: string]: string;
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<LoginFormValues>({
    email: '',
    password: '',
  });

  const handleLogin = async (values: LoginFormValues) => {
    try {
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch('https://mock-api.arikmpt.com/api/user/login', requestOptions);
      if (response.ok) {
        const responseData = await response.json();
        console.log('Login berhasil:', responseData);
        router.push('/home');
      } else {
        const errorData = await response.json();
        console.error('Login gagal:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Email tidak valid').required('Email harus diisi'),
        password: Yup.string().required('Password harus diisi'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        if (Object.keys(values).some((key) => values[key] === '')) {
          setSubmitting(false);
        } else {
          setFormData({ ...formData, ...values });
          handleLogin(values);
        }
      }}
    >
      <Form className={styles['login-form']}>
        <h1 className={styles['login-header']}>Login Page</h1>

        <label htmlFor="email" className={styles['form-label']}>
          Email:
        </label>
        <Field as={Input} className={styles['form-input']} type="email" id="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="span" className={styles['error-message']} />

        <label htmlFor="password" className={styles['form-label']}>
          Password:
        </label>
        <Field as={Input} className={styles['form-input']} type="password" id="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="span" className={styles['error-message']} />

        <button type="submit" className={styles['submit-button']}>
          Login
        </button>

        <span className={styles['text-white']}> or </span>

        <button type="button" className={styles['secondary-button']}>
          Register
        </button>

        <span className={styles['forgot-password']}>Forgot Your Password</span>
      </Form>
    </Formik>
  );
};

export default Login;
