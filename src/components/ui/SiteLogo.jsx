export default function SiteLogo({
  className = 'h-12 w-auto',
  variant = 'default',
  id,
}) {
  const src = variant === 'onDark' ? '/images/logo-on-dark.png' : '/images/logo.png'

  return (
    <img
      id={id}
      src={src}
      alt="Neelkanth Minerals & Traders"
      className={className}
    />
  )
}
