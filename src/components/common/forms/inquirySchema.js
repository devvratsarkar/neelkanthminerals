import * as Yup from 'yup'

const requiredSelect = (message) => Yup.mixed().nullable().required(message)

export const inquirySchema = Yup.object({
  name: Yup.string().trim().min(2, 'Enter your full name').required('Name is required'),
  email: Yup.string().trim().email('Enter a valid email').required('Email is required'),
  phone: Yup.string()
    .trim()
    .matches(/^[+]?[\d\s-]{7,18}$/, 'Enter a valid phone number')
    .required('Phone number is required'),
  address: Yup.string().trim().min(5, 'Enter your address').required('Address is required'),
  country: requiredSelect('Country is required'),
  state: requiredSelect('State is required'),
  product: requiredSelect('Please select a product'),
  message: Yup.string()
    .trim()
    .min(10, 'Message should be at least 10 characters')
    .required('Message is required'),
})

export const inquiryValues = {
  name: '',
  email: '',
  phone: '',
  address: '',
  country: null,
  state: null,
  product: null,
  message: '',
}
