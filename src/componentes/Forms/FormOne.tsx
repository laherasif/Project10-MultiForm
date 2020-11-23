import React from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as yup from 'yup'
import './style.css'
import TextField from "@material-ui/core/TextField";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      width: "50%",
      margin: "0 auto",
      padding: "4vh",
      boxShadow:'0 0 12px blue'
    },
    fields: {
      marginBottom: "2vh",
    }
  })
)

interface props {
  handleNext: () => void
}

const FormOne: React.FC<props> = ({ handleNext }) => {
  const classes = useStyles();
return (
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
    }}
    validationSchema={yup.object({
      firstName: yup
        .string()
        .required("This field is required")
        .max(20, "Name should not be more than 20 characters"),
      lastName: yup
        .string()
        .required("This field is required")
        .max(20, "Name should not be more than 20 characters"),
     
    })}
    onSubmit={(values) => {
     setTimeout(() => {
       
       handleNext();
     }, 500);
    }}
  >
    {(formik) => {
      return (
        <Form className={classes.wrapper} autoComplete="off">
          <Field
            error={formik.errors.firstName && formik.touched.firstName}
            className={classes.fields}
            name="firstName"
            as={TextField}
            label="First Name"
            helperText={<ErrorMessage name="firstName" />}
          />
          <Field
            error={formik.errors.lastName && formik.touched.lastName}
            className={classes.fields}
            name="lastName"
            as={TextField}
            label="Last Name"
            helperText={<ErrorMessage name="lastName" />}
          />
          
          <button className="btn btn-primary"  type="submit">
            Next
            </button>
        </Form>
      );
    }}
  </Formik>
)
  };

export default FormOne;