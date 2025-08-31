import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { data } from "../../constant/data";
const Slider = () => {
 return (
    <div className="w-full md:w-[90%] px-4 py-10">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
        Messages
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data.map((msg, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:shadow-2xl transition duration-300">
              <img
                src={msg.img}
                alt={msg.name}
                className="w-24 h-24 rounded-full object-cover shadow-md"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {msg.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-4">
                {msg.text}
              </p>
              <div>
                <p className="text-sm font-bold text-blue-700">{msg.name}</p>
                <p className="text-xs text-gray-500">{msg.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider