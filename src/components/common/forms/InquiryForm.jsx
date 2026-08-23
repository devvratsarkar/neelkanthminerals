import { useEffect, useMemo, useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Select, { components } from 'react-select'
import { GetCountries, GetState } from 'react-country-state-city'
import { products } from '../../../data/products'
import { site } from '../../../data/site'
import { ChevronDownIcon, EnvelopeIcon, PhoneIcon } from '../../ui/AllSVG'
import { getProductOption, inquirySchema, inquiryValues } from './inquirySchema'

const selectStyles = (hasError) => ({
  control: (base, state) => ({
    ...base,
    minHeight: 48,
    height: 48,
    boxSizing: 'border-box',
    borderRadius: 0,
    borderColor: hasError ? '#ff5e14' : state.isFocused ? '#ff5e14' : 'rgba(9,34,97,0.10)',
    boxShadow: 'none',
    backgroundColor: state.isDisabled ? '#f0eee9' : state.isFocused ? '#fff' : '#faf8f5',
    fontFamily: 'inherit',
    cursor: state.isDisabled ? 'not-allowed' : 'pointer',
    opacity: state.isDisabled ? 0.75 : 1,
    '&:hover': {
      borderColor: hasError || state.isFocused ? '#ff5e14' : 'rgba(9,34,97,0.22)',
    },
  }),
  valueContainer: (base) => ({
    ...base,
    height: '100%',
    padding: '0 16px',
  }),
  placeholder: (base) => ({
    ...base,
    color: 'rgba(0,0,0,0.35)',
    fontSize: 15,
    margin: 0,
  }),
  singleValue: (base) => ({
    ...base,
    color: '#092261',
    fontSize: 15,
    margin: 0,
  }),
  input: (base) => ({
    ...base,
    color: '#092261',
    margin: 0,
    padding: 0,
  }),
  indicatorsContainer: (base) => ({
    ...base,
    height: '100%',
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: '0 14px',
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    overflow: 'hidden',
    marginTop: 4,
    border: '1px solid rgba(9,34,97,0.08)',
    boxShadow: '0 10px 28px rgba(9,34,97,0.08)',
    zIndex: 30,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
  option: (base, state) => ({
    ...base,
    fontSize: 15,
    padding: '10px 14px',
    backgroundColor: state.isSelected ? '#092261' : state.isFocused ? 'rgba(9,34,97,0.06)' : '#fff',
    color: state.isSelected ? '#fff' : '#092261',
    cursor: 'pointer',
  }),
})

function DropdownIndicator(props) {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDownIcon className="size-3.5 text-black/40" />
    </components.DropdownIndicator>
  )
}

function toOptions(items) {
  return items.map((item) => ({
    value: item.id ?? item.slug,
    label: item.name ?? item.label,
  }))
}

function fieldClass(hasError, area = false) {
  return `${area ? 'inquiry-field-area' : 'inquiry-field'}${hasError ? ' inquiry-field-error' : ''}`
}

function FieldError({ name }) {
  return (
    <p className="inquiry-error">
      <ErrorMessage name={name} />
    </p>
  )
}

export default function InquiryForm({
  className = '',
  showHeader = true,
  initialProduct,
  onSubmit,
}) {
  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([])
  const productOptions = useMemo(() => toOptions(products), [])
  const initialValues = useMemo(
    () => ({
      ...inquiryValues,
      product: getProductOption(initialProduct),
    }),
    [initialProduct],
  )

  useEffect(() => {
    GetCountries()
      .then((result) => setCountries(toOptions(result || [])))
      .catch(() => setCountries([]))
  }, [])

  async function handleCountryChange(option, setFieldValue, setFieldTouched) {
    await setFieldValue('country', option)
    await setFieldValue('state', null)
    setFieldTouched('state', false)
    setStates([])

    if (!option) return

    const result = await GetState(option.value)
    setStates(toOptions(result || []))
  }

  async function handleSubmit(values, helpers) {
    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      address: values.address.trim(),
      country: values.country.label,
      state: values.state.label,
      product: values.product.label,
      message: values.message.trim(),
    }

    await onSubmit?.(payload)
    helpers.resetForm()
    setStates([])
    helpers.setStatus('Thank you. We will get back to you shortly.')
  }

  return (
    <div
      className={`grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14 ${className}`}
    >
      {showHeader ? (
        <div className="max-w-md">
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-10 bg-secondary" />
            <p className="text-[11px] font-semibold tracking-[0.32em] text-secondary uppercase">
              Inquiry
            </p>
          </div>
          <h2 className="text-4xl leading-[1.1] font-semibold text-primary sm:text-5xl">
            With
            <span className="mt-1 block font-light text-secondary">Us</span>
          </h2>
          <p className="mt-6 text-[16px] leading-8 text-black/65">
            Share your mineral requirement and our Jodhpur team will respond with grades, packing
            and lead times.
          </p>

          <dl className="mt-8 space-y-5 border-t border-primary/10 pt-7">
            <div>
              <dt className="text-[10px] font-semibold tracking-[0.2em] text-black/40 uppercase">
                Phone
              </dt>
              <dd className="mt-1.5">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary"
                >
                  <PhoneIcon className="size-3.5" />
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold tracking-[0.2em] text-black/40 uppercase">
                Email
              </dt>
              <dd className="mt-1.5">
                <a
                  href={site.emailHref}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary"
                >
                  <EnvelopeIcon className="size-3.5" />
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold tracking-[0.2em] text-black/40 uppercase">
                Origin
              </dt>
              <dd className="mt-1.5 text-sm font-semibold text-primary">Jodhpur, India</dd>
            </div>
          </dl>
        </div>
      ) : null}

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={inquirySchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, status, isSubmitting, setFieldValue, setFieldTouched }) => (
          <Form className="bg-white p-6 sm:p-7 lg:p-8" noValidate>
            <div className="grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2">
              <div>
                <Field
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your Name"
                  className={fieldClass(touched.name && errors.name)}
                />
                <FieldError name="name" />
              </div>
              <div>
                <Field
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  className={fieldClass(touched.email && errors.email)}
                />
                <FieldError name="email" />
              </div>
              <div>
                <Field
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Phone No"
                  className={fieldClass(touched.phone && errors.phone)}
                />
                <FieldError name="phone" />
              </div>
              <div>
                <Field
                  name="address"
                  type="text"
                  autoComplete="street-address"
                  placeholder="Address"
                  className={fieldClass(touched.address && errors.address)}
                />
                <FieldError name="address" />
              </div>
              <div>
                <Select
                  inputId="inquiry-country"
                  name="country"
                  options={countries}
                  value={values.country}
                  onChange={(option) => handleCountryChange(option, setFieldValue, setFieldTouched)}
                  onBlur={() => setFieldTouched('country', true)}
                  placeholder="Select Country"
                  styles={selectStyles(touched.country && errors.country)}
                  components={{ DropdownIndicator }}
                  classNamePrefix="inquiry-select"
                  className="inquiry-select"
                />
                <FieldError name="country" />
              </div>
              <div>
                <Select
                  inputId="inquiry-state"
                  name="state"
                  options={states}
                  value={values.state}
                  onChange={(option) => setFieldValue('state', option)}
                  onBlur={() => setFieldTouched('state', true)}
                  placeholder="Select State"
                  styles={selectStyles(touched.state && errors.state)}
                  components={{ DropdownIndicator }}
                  classNamePrefix="inquiry-select"
                  className="inquiry-select"
                  isDisabled={!values.country}
                />
                <FieldError name="state" />
              </div>
              <div className="sm:col-span-2">
                <Select
                  inputId="inquiry-product"
                  name="product"
                  options={productOptions}
                  value={values.product}
                  onChange={(option) => setFieldValue('product', option)}
                  onBlur={() => setFieldTouched('product', true)}
                  placeholder="Select Product"
                  styles={selectStyles(touched.product && errors.product)}
                  components={{ DropdownIndicator }}
                  classNamePrefix="inquiry-select"
                  className="inquiry-select"
                  isDisabled={Boolean(initialProduct)}
                />
                <FieldError name="product" />
              </div>
              <div className="sm:col-span-2">
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  className={`${fieldClass(touched.message && errors.message, true)} w-full`}
                />
                <FieldError name="message" />
              </div>

              {status ? <p className="text-sm text-primary sm:col-span-2">{status}</p> : null}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center gap-3 bg-secondary px-8 py-3.5 text-[11px] font-semibold tracking-[0.2em] text-white uppercase transition-colors duration-300 hover:bg-primary disabled:opacity-60"
                >
                  {isSubmitting ? 'Submitting' : 'Submit'}
                  <span className="block h-px w-6 bg-white/70 transition-all duration-300 group-hover:w-10" />
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
