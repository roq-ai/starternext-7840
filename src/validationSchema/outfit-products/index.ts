import * as yup from 'yup';

export const outfitProductValidationSchema = yup.object().shape({
  outfit_id: yup.string().nullable().required(),
  product_id: yup.string().nullable().required(),
});
