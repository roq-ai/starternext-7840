import * as yup from 'yup';

export const categoryValidationSchema = yup.object().shape({
  name: yup.string().required(),
  is_locked: yup.boolean().nullable(),
  organization_id: yup.string().nullable().required(),
});
