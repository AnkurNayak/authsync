const { permanentRedirect } = require("next/navigation");

const FormikBasePage = () => {
  permanentRedirect("/formik/sign-in");
};

export default FormikBasePage;
