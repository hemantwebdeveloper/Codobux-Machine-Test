import * as yup from 'yup';

export const fillFormSchema = yup.object().shape({
  firstName:yup.string().required('Full name is required!'),
  lastName:yup.string().required('Last name is required!'),
  email:yup.string().email().required('Email is required!'),
  date: yup
    .string()
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(19|20)\d{2}$/,
      'Date must be in the format DD-MM-YYYY and be a valid date'
    )
    .required('Date is required!'),
  time: yup
    .string()
    .matches(
      /^([01]\d|2[0-3]):([0-5]\d)$/,
      'Time must be in the format HH:MM'
    )
    .required('Time is required!'),
});