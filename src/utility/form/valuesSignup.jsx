import * as yup from 'yup'


const initialValues = {
  name: '',
  email: '',
  password: '',
  passwordConf: '',
}

const validationSchema = yup.object().shape({
  name: yup.string()
    .min(3, 'Escreva um nome maior')
    .required('Campo obrigatório'),

  email: yup.string()
    .email('Digite um e-mail válido')
    .required('Campo obrigatório'),

  password: yup.string()
    .min(6, 'Escreva uma senha de no mínimo 6 caracteres.')
    .required('Campo obrigatório'),

  passwordConf: yup.string()
    .oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais')
    .required('Campo obrigatório'),
})

export {
  initialValues,
  validationSchema
}