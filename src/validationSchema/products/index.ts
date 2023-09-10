import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  link: yup.string().required(),
  category_id: yup.string().nullable().required(),
});
