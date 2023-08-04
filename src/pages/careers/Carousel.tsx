import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
type Props = {}



function Carousel({}: Props) {

  return (
    <>
      <div className="bg-slate-800 py-4">
        <div className="flex w-full justify-center py-4 ">
          <div className="max-w-xl px-2">
            <p className="text-center text-xl sm:text-2xl text-white">
              Chrome Axis is for business owners. Our creative, <br className='hidden sm:block' /> global
              team is passionate about building tools that make running and
              growing a business <br /> easier. Come join us!
            </p>
          </div>
        </div>
        <div className="sm:hidden">
      <Swiper modules={[Autoplay]}
        autoplay={{
          delay:1,
          // reverseDirection:true

        }}
        speed={6000}
        loop
      spaceBetween={20}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <a className=" max-w-sm px-2">
          <img src={"https://cdn.sanity.io/images/wwdtpcpb/production/27253aea7f1d9e148dbfa54008cfa58e11355c3d-860x548.jpg"} alt="" className="w-full rounded-xl" />
        </a>
        </SwiperSlide>
      <SwiperSlide>
      <a className=" max-w-sm px-2">
          <img src={"https://cdn.sanity.io/images/wwdtpcpb/production/0032d34a45a27cd5e5d0d49853029564eb9cabc4-860x548.jpg"} alt="" className="w-full rounded-xl" />
      </a>
      </SwiperSlide>
      <SwiperSlide>
      <a className=" max-w-sm px-2">
          <img src={"https://cdn.sanity.io/images/wwdtpcpb/production/4355771620b6b2a1fdb5bfd71b07516b44304f1f-860x548.jpg"} alt="" className="w-full rounded-xl" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
      <a className=" max-w-sm px-2">
          <img src={"https://cdn.sanity.io/images/wwdtpcpb/production/9c9cd0431b0911d2fce5a5bcb48348a3ed9bd4d4-860x548.jpg"} alt="" className="w-full rounded-xl" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
      <a className=" max-w-sm px-2">
          <img src={"https://cdn.sanity.io/images/wwdtpcpb/production/3a391ac7b12d8ce942d100285f5fcf3436743c84-860x548.jpg"} alt="" className="w-full rounded-xl" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
      <a className=" max-w-sm px-2">
          <img src={"https://cdn.sanity.io/images/wwdtpcpb/production/57548ebc63291580211916964a5b5f5938efefd3-860x548.jpg"} alt="" className="w-full rounded-xl" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
      <a className=" max-w-sm px-2">
          <img src={"https://cdn.sanity.io/images/wwdtpcpb/production/531415450d5ba7c71fa882db3c30148ac9646f0a-860x548.jpg"} alt="" className="w-full rounded-xl" />
        </a>
      </SwiperSlide>
    </Swiper>
      </div>
      <div className="hidden sm:flex">
      <Swiper modules={[Autoplay]}
        autoplay={{
          delay:1,
          // reverseDirection:true

        }}
        speed={6000}
        loop
      spaceBetween={20}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <a className=" max-w-sm px-2">
          <img src={"https://cdn.sanity.io/images/wwdtpcpb/production/27253aea7f1d9e148dbfa54008cfa58e11355c3d-860x548.jpg"} alt="" className="w-full rounded-xl" />
        </a>
        </SwiperSlide>
      <SwiperSlide>
      <a className=" max-w-sm px-2">
          <img src={"https://cdn.sanity.io/images/wwdtpcpb/production/0032d34a45a27cd5e5d0d49853029564eb9cabc4-860x548.jpg"} alt="" className="w-full rounded-xl" />
      </a>
      </SwiperSlide>
      <SwiperSlide>
      <a className=" max-w-sm px-2">
          <img src={"https://cdn.sanity.io/images/wwdtpcpb/production/4355771620b6b2a1fdb5bfd71b07516b44304f1f-860x548.jpg"} alt="" className="w-full rounded-xl" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
      <a className=" max-w-sm px-2">
          <img src={"https://cdn.sanity.io/images/wwdtpcpb/production/9c9cd0431b0911d2fce5a5bcb48348a3ed9bd4d4-860x548.jpg"} alt="" className="w-full rounded-xl" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
      <a className=" max-w-sm px-2">
          <img src={"https://cdn.sanity.io/images/wwdtpcpb/production/3a391ac7b12d8ce942d100285f5fcf3436743c84-860x548.jpg"} alt="" className="w-full rounded-xl" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
      <a className=" max-w-sm px-2">
          <img src={"https://cdn.sanity.io/images/wwdtpcpb/production/57548ebc63291580211916964a5b5f5938efefd3-860x548.jpg"} alt="" className="w-full rounded-xl" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
      <a className=" max-w-sm px-2">
          <img src={"https://cdn.sanity.io/images/wwdtpcpb/production/531415450d5ba7c71fa882db3c30148ac9646f0a-860x548.jpg"} alt="" className="w-full rounded-xl" />
        </a>
      </SwiperSlide>
    </Swiper>
      </div>
        {/* <div className=" max-w-sm px-2">
          <img src={empcards} alt="" className="w-full rounded-xl" />
        </div> */}
      </div>
    </>
  );
}

export default Carousel