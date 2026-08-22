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
            <div className="relative flex min-h-130 items-center py-24 sm:min-h-145 lg:min-h-160">
              <img
                src={slide.image}
                alt={slide.title.join(' ')}
                className="slide-visual absolute inset-0 size-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-primary/55" />

              <div className="custom_container relative z-10">
                <div className="slide-copy max-w-2xl">
                  <div className="mb-6 flex items-center gap-4 text-[11px] font-semibold tracking-[0.28em] text-white/55 uppercase">
                    <span className="text-secondary">{String(index + 1).padStart(2, '0')}</span>
                    <span className="h-px w-8 bg-secondary" />
                    <span>{total}</span>
                  </div>

                  <p className="text-xs font-semibold tracking-[0.32em] text-white/70 uppercase">
                    Neelkanth Minerals
                  </p>

                  <h2 className="mt-4 text-[2.35rem] leading-[1.05] font-semibold text-white sm:text-5xl lg:text-[3.65rem]">
                    <span className="font-light text-secondary">{slide.title[0]}</span>{' '}
                    {slide.title[1]}
                  </h2>

                  <p className="mt-5 max-w-xl text-base leading-7 font-light text-white/80">
                    {slide.subtitle}
                  </p>

                  <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                    <Link
                      to={getProductDetailRoute(slide.slug)}
                      className="inline-flex items-center bg-secondary px-8 py-3.5 text-[12px] font-semibold tracking-[0.18em] text-white uppercase transition-all duration-300 hover:bg-white hover:text-primary"
                    >
                      View Product
                    </Link>
                    <Link
                      to={getContactPageRoute()}
                      className="group inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.18em] text-white uppercase"
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
          <div className="custom_container flex items-center justify-between pb-7">
            <div className="home-slider-pagination pointer-events-auto" />
            <div className="home-slider-nav pointer-events-auto">
              <button type="button" className="home-slider-prev" aria-label="Previous slide">
                <ChevronLeftIcon className="size-4" />
              </button>
              <button type="button" className="home-slider-next" aria-label="Next slide">
                <ChevronRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </Swiper>
    </section>
  )
}
