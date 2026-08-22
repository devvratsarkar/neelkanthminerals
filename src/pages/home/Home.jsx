import HomeProductsSection from '../../components/home/HomeProductsSection'
import HomeSlider from '../../components/home/HomeSlider'
import WelcomeSection from '../../components/home/WelcomeSection'
import WhyChooseSection from '../../components/home/WhyChooseSection'

export default function HomePage() {
  return (
    <>
      <HomeSlider />
      <WelcomeSection />
      <WhyChooseSection />
      <HomeProductsSection />
    </>
  )
}
