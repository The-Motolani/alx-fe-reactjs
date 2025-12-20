import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
    >
      <Form>
        <h2>Create an Account</h2>

        <FaRegEnvelope />
        <Field type="text" name="username" placeholder="Username" />
        <ErrorMessage name="username" component="p" style={{ color: "red" }} />

        <FaRegEnvelope className="input-icon" />
        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="p" style={{ color: "red" }} />

        <MdLockOutline />
        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="p" style={{ color: "red" }} />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
