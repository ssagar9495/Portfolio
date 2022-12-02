import { array, object, string, number } from "yup";

export const contactSchema = object().shape({
  email: string().email("Invalid email").required("Required"),
  phone: number().typeError("Invalid phone number").required("Required"),
  name: string().required("Name can't be empty"),
});
