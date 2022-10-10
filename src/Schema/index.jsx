import * as Yup from 'yup';

export const formValidate = Yup.object({
  firstName: Yup.string().min(2).max(25).required('Please enter your name'),
  fatherName: Yup.string()
    .min(2)
    .max(25)
    .required('Please enter your father name'),
  address: Yup.string().min(5).max(50).required('Please enter Address'),
  AadharNumber: Yup.number().min(12).required('Please enter correct Number'),
  AccountNumber: Yup.number().min(12).required('Please enter Bank Number'),
  PanNumber: Yup.string().min(6).required('Please enter correct Number'),
  Mobile: Yup.number().min(10).required('Invalid Number'),
  email: Yup.string().email().required('Please enter your email'),
});
