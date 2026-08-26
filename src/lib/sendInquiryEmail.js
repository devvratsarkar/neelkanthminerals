import emailjs from '@emailjs/browser'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const siteUrl = import.meta.env.VITE_SITE_URL

function formatTime() {
  return new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

export async function sendInquiryEmail(payload) {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error('Email service is not configured.')
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      name: payload.name,
      email: payload.email,
      title: payload.product,
      phone: payload.phone,
      address: payload.address,
      country: payload.country,
      state: payload.state,
      product: payload.product,
      message: payload.message,
      time: formatTime(),
      year: String(new Date().getFullYear()),
      site_url: siteUrl,
    },
    { publicKey },
  )
}
