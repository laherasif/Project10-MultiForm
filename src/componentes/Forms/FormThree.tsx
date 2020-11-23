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

const FormThree: React.FC<Props> = ({ handleNext }) => {
  const classes = useStyles();

  return (
    <Formik
    initialValues={{password: '' ,ConnformPasswod:''  }}
    validationSchema={Yup.object({
      password: Yup.string()
        .required('Password Field Required')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
          ),
        ConnformPasswod: Yup.string()
        .required('Conform Password Field Required')
        .oneOf([Yup.ref('password'), ""], 'Password Must Matched')
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
            error={formik.errors.password && formik.touched.ConnformPasswod}
            className={classes.fields}
            name="password"
            type="password"
            as={TextField}
            label="Password"
            helperText={<ErrorMessage name="password" />}
          />
          <Field
            error={formik.errors.ConnformPasswod && formik.touched.ConnformPasswod}
            className={classes.fields}
            type="password"
            name="ConnformPasswod"
            as={TextField}
            label="ReEnter Password"
            helperText={<ErrorMessage name="ConnformPasswod" />}
          />
          
          <button className="btn btn-primary"  type="submit">
            Submit
            </button>
        </Form>
      );
    }}
    </Formik>
  );
};

export default FormThree;