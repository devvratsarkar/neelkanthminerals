import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { homeSlides } from '../../data/homeSlider'
import { getContactPageRoute, getProductDetailRoute } from '../../routes/routes'
import { ChevronLeftIcon, ChevronRightIcon } from '../ui/AllSVG'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function HomeSlider() {
  const progressRef = useRef(null)
  const total = String(homeSlides.length).padStart(2, '0')

  return (
    <section className="home-slider relative overflow-hidden bg-primary">
      <div
        ref={progressRef}
        className="home-slider-progress pointer-events-none absolute top-0 left-0 z-20 h-0.5 origin-left bg-secondary"
      />

      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={1100}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ el: '.home-slider-pagination', clickable: true }}
        navigation={{
          prevEl: '.home-slider-prev',
          nextEl: '.home-slider-next',
        }}
        onAutoplayTimeLeft={(_, __, progress) => {
          if (progressRef.current) {
            progressRef.current.style.transform = `scaleX(${1 - progress})`
          }
        }}
        className="h-full"
      >
        {homeSlides.map((slide, index) => (
          <SwiperSlide key={slide.slug}>
            <div className="relative flex min-h-[28rem] items-center pt-12 pb-20 sm:min-h-[34rem] sm:pt-16 sm:pb-24 md:min-h-[38rem] lg:min-h-[44rem] lg:py-24 xl:min-h-[48rem]">
              <img
                src={slide.image}
                alt={slide.alt}
                className="slide-visual absolute inset-0 size-full object-cover"
                style={{ objectPosition: slide.objectPosition }}
              />
              <div className="absolute inset-0 bg-primary/55" />

              <div className="custom_container relative z-10">
                <div className="slide-copy max-w-xl min-w-0 md:max-w-2xl">
                  <div className="mb-4 flex items-center gap-3 text-[10px] font-semibold tracking-[0.28em] text-white/55 uppercase sm:mb-6 sm:gap-4 sm:text-[11px]">
                    <span className="text-secondary">{String(index + 1).padStart(2, '0')}</span>
                    <span className="h-px w-6 bg-secondary sm:w-8" />
                    <span>{total}</span>
                  </div>

                  <p className="text-[10px] font-semibold tracking-[0.28em] text-white/70 uppercase sm:text-xs sm:tracking-[0.32em]">
                    Neelkanth Minerals
                  </p>

                  <h2 className="mt-3 text-[1.75rem] leading-[1.08] font-semibold text-white min-[400px]:text-[2rem] sm:mt-4 sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem]">
                    <span className="sm:hidden">
                      <span className="font-light text-secondary">{slide.mobileTitle[0]}</span>{' '}
                      {slide.mobileTitle[1]}
                    </span>
                    <span className="hidden sm:inline">
                      <span className="font-light text-secondary">{slide.title[0]}</span>{' '}
                      {slide.title[1]}
                    </span>
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-6 font-light text-white/80 sm:mt-5 sm:text-base sm:leading-7">
                    <span className="sm:hidden">{slide.shortSubtitle}</span>
                    <span className="hidden sm:inline">{slide.subtitle}</span>
                  </p>

                  <div className="mt-7 flex flex-col items-start gap-3.5 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-4">
                    <Link
                      to={getProductDetailRoute(slide.slug)}
                      className="inline-flex items-center bg-secondary px-6 py-3 text-[11px] font-semibold tracking-[0.18em] text-white uppercase transition-all duration-300 hover:bg-white hover:text-primary sm:px-8 sm:py-3.5 sm:text-[12px]"
                    >
                      View Product
                    </Link>
                    <Link
                      to={getContactPageRoute()}
                      className="group inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-white uppercase sm:text-[12px]"
                    >
                      Enquire Now
                      <span className="block h-px w-8 bg-white/50 transition-all duration-300 group-hover:w-12 group-hover:bg-secondary" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
          <div className="custom_container flex items-center justify-between gap-3 pb-5 sm:pb-7">
            <div className="home-slider-pagination pointer-events-auto" />
            <div className="home-slider-nav pointer-events-auto">
              <button type="button" className="home-slider-prev" aria-label="Previous slide">
                <ChevronLeftIcon className="size-3.5 sm:size-4" />
              </button>
              <button type="button" className="home-slider-next" aria-label="Next slide">
                <ChevronRightIcon className="size-3.5 sm:size-4" />
              </button>
            </div>
          </div>
        </div>
      </Swiper>
    </section>
  )
}
