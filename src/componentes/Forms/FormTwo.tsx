import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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

interface Props {
  handleNext: () => void
}

const FormTwo: React.FC<Props> = ({ handleNext }) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{email: '' , confrmEamil : '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email()
          .required('Field Required'),
          confrmEamil: Yup.string()
          .oneOf([Yup.ref('email'), ""], 'Eamil are not Matched')
          .required('Field Required')
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          // setSubmitting(false);
          handleNext()
        }, 400);
      }}
    >
      {(formik) => {
      return (
        <Form className={classes.wrapper} autoComplete="off">
          <Field
            error={formik.errors.email && formik.touched.email}
            className={classes.fields}
            name="email"
            as={TextField}
            label="Email Adress"
            helperText={<ErrorMessage name="email" />}
          />
          <Field
            error={formik.errors.confrmEamil && formik.touched.confrmEamil}
            className={classes.fields}
            name="confrmEamil"
            as={TextField}
            label="Confrom Eamil"
            helperText={<ErrorMessage name="confrmEamil" />}
          />
          
          <button className="btn btn-primary"  type="submit">
            Next
            </button>
        </Form>
      );
    }}
    </Formik>
  );
};

export default FormTwo;
