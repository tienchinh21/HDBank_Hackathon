import React from 'react';
import style from './style.module.scss'
import '../../index.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import MainLayout from '@components/Layout/Layout';
import { Button } from '@mui/material';
import ButtonTransform from '@components/ButtonTransform/ButtonTransform';



const CardHDBank = () => {
    const  {containerWrapper, container, titleSmall, slideCard, slideInner, titleCard, btnCard, text, icon, nameCard, mySwiper, btnViewAll, iconBtnViewAll}  = style;

    const listCard = [
       {
            title: "Thẻ Tín Dụng Nhóm",
            cards : [
                { img: "https://cdn.hdbank.com.vn/hdbank-file/product/VJP_new.jpg", name: "HDBank Vietjet Platinum" },
                { img: "https://cdn.hdbank.com.vn/hdbank-file/product/PLX_1670905793387.png", name: "HDBank Petrolimex 4in1" },
                { img: "https://cdn.hdbank.com.vn/hdbank-file/product/VJC_new.jpg", name: "HDBank Vietjet Classic" },
                { img: "https://cdn.hdbank.com.vn/hdbank-file/product/VSCardFace_1683689331729.png", name: "Thẻ HDBank Priority – Tinh Tú Phương Đông" },
            ]
       },
       {
            title: "Thẻ ghi nợ",
            cards : [
                { img: "https://cdn.hdbank.com.vn/hdbank-file/product/334248266106827492742365267952_1677724904737.jpg", name: "HDBank Napas" },
                { img: "https://cdn.hdbank.com.vn/hdbank-file/product/SV.jpg", name: "HDBank Vietjet Platinum", name: "HDBank Liên kết sinh viên"},
                { img: "https://cdn.hdbank.com.vn/hdbank-file/product/coca_new.jpg", name: "HDBank Vietjet Platinum", name: "HDBank Napas Coca Cola"},
                { img: "https://cdn.hdbank.com.vn/hdbank-file/product/mycard_new.jpg", name: "HDBank Vietjet Platinum", name: "Thẻ ghi nợ hình ảnh (MyCard Debit)  "},

            ]
        },
        {
            title: "Thẻ trả trước",
            cards : [
                { img: "https://cdn.hdbank.com.vn/hdbank-file/product/Napas_new.jpg", name: "HDBank Gift Card" },
                { img: "https://cdn.hdbank.com.vn/hdbank-file/product/VSCardFace_1683689331729.png", name: "Thẻ HDBank Priority – Tinh Tú Phương Đông" },
                { img: "https://cdn.hdbank.com.vn/hdbank-file/product/coca_new.jpg", name: "HDBank Vietjet Platinum", name: "HDBank Napas Coca Cola"},
                { img: "https://cdn.hdbank.com.vn/hdbank-file/product/mycard_new.jpg", name: "HDBank Vietjet Platinum", name: "Thẻ ghi nợ hình ảnh (MyCard Debit)  "},
            ]
        },
    ];
  return (
    <div className={containerWrapper}>
        <h2 className={titleSmall}>Thoải mái mua sắm cùng thẻ HDBank</h2>
        <MainLayout>
            <div className={container}>
                {listCard.map((group, groupIndex) => (
                    <div className={slideCard} key={`group-${groupIndex}`}>
                        <a href="">
                            <h3>{group.title}</h3>
                        </a>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {group.cards.map((card, cardIndex) => (
                                <SwiperSlide key={`card-${groupIndex}-${cardIndex}`}>
                                   <div className={slideInner}>
                                        <img src={card.img}/>
                                        <div className={titleCard}>
                                        <div className={nameCard}>{card.name}</div>
                                           <ButtonTransform content={"Mở thẻ ngay"}/>
                                        </div>
                                   </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ))}
            </div>
            <a className={btnViewAll} href="">
                <p>Xem tất cả thẻ</p>
                <FaArrowRight className= {iconBtnViewAll} />
            </a>
        </MainLayout>

    </div>
  )
}

export default CardHDBank;