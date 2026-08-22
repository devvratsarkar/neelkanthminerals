import HomeProductsSection from '../../components/home/HomeProductsSection'
import HomeSlider from '../../components/home/HomeSlider'
import InquirySection from '../../components/home/InquirySection'
import TestimonialsSection from '../../components/home/TestimonialsSection'
import WelcomeSection from '../../components/home/WelcomeSection'
import WhyChooseSection from '../../components/home/WhyChooseSection'

export default function HomePage() {
  return (
    <>
      <HomeSlider />
      <WelcomeSection />
      <WhyChooseSection />
      <HomeProductsSection />
      <TestimonialsSection />
      <InquirySection />
    </>
  )
}
