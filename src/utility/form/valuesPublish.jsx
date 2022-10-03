import * as yup from 'yup';

const initialValues = {
  title: '',
  category: '',
  description: '',
  price: '',
  email: '',
  name: '',
  phone: '',
  files: [],
};

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .min(6, 'Escreva um título maior')
    .max(100, 'Título muito grande')
    .required('Campo obrigatório'),

  category: yup.string().required('Campo obrigatório'),

  description: yup
    .string()
    .min(50, 'Escreva uma descrição com pelo menos 50 caracteres.')
    .required('Campo obrigatório'),

  price: yup
    .number()
    .typeError('O valor deve ser um número')
    .required('Campo obrigatório'),

  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('Campo obrigatório'),

  name: yup
    .string()
    .min(3, 'Escreva um nome maior')
    .required('Campo obrigatório'),

  phone: yup
    .number()
    .typeError('O valor deve ser um número')
    .required('Campo Obrigatório'),

  files: yup
    .array()
    .min(1, 'Envie ao menos uma foto do produto.')
    .required('Campo obrigatório'),
});

export { initialValues, validationSchema };
