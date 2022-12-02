import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import FormInput from "../../component/formInput";
import Button from "../../component/button";
import HeadsetIcon from "@mui/icons-material/Headset";
import AOS from "aos";
import "aos/dist/aos.css";
import { Formik } from "formik";
import { contactSchema } from "../../constants/formSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  });

  const submitForm = (payload) => {
    toast.success("Form Submit Successfully");
  };
  return (
    <div id="contact" className={styles.mainContainer}>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <div className={styles.aboutHeading}>
        <HeadsetIcon style={{ fontSize: "35px" }} />
        <div className={styles.textStyle}>
          Get In<span>Touch</span>
        </div>
      </div>
      <div className={styles.middleContainer}>
        <div className={`row ${styles.rowStyles}`}>
          <div class={`col-lg ${styles.imageContainer}`}>
            <img src={IMAGES.CONTACT} className={styles.contactImage} />
          </div>
          <div
            data-aos="fade-down"
            className={`col-lg ${styles.formContainer}`}
          >
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                message: "",
              }}
              enableReinitialize
              validationSchema={contactSchema}
              onSubmit={(values, { resetForm }) => {
                submitForm(values);
                resetForm();
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <FormInput
                    type="text"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.name}
                    errors={errors}
                    touched={touched}
                  />
                  <div className={styles.errorColor}>
                    {errors.name && touched.name ? errors.name : <div></div>}
                  </div>
                  <FormInput
                    type="email"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.email}
                    errors={errors}
                    touched={touched}
                  />
                  <div className={styles.errorColor}>
                    {errors.email && touched.email ? errors.email : <></>}
                  </div>
                  <FormInput
                    type="number"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.phone}
                    errors={errors}
                    touched={touched}
                  />
                  <div className={styles.errorColor}>
                    {errors.phone && touched.phone ? errors.phone : <></>}
                  </div>

                  <FormInput
                    type="textarea"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.message}
                    errors={errors}
                    touched={touched}
                  />
                  <div className={styles.buttonContainer}>
                    <Button type="submit" label="Submit" buttonType={true} />
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
