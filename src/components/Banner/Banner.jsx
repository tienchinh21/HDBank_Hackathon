import React, { useContext, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import style from "./style.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaAngleRight } from "react-icons/fa";
import { Modal, Input, DatePicker, Button, Form } from 'antd';
import { listImage, productListSlide, items } from './constanst';
import { storeContext } from '@contexts/StoreProvider';
import { transfer } from '@apis/authService';

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {isLogin, userinfo, userid} = useContext(storeContext);
  const [form] = Form.useForm();

  const {customModal} = style;

  console.log( userinfo);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.submit();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (values) => {
    // Gọi API với giá trị form
    const {amount, recipient_stk, transfer_date} = values;
    const amountInt = parseInt(amount, 10);
    const username = userinfo;
    const content = "Chuyển tiền thành công"
    transfer({amount : amountInt, recipient_stk, transfer_date, username, content}).then((res) => console.log(res)).catch((err) => console.log(err));
  };



  return (
    <div className={style.container}>
      <div className={style.marqueeContainer}>
        <div className={style.marquee}>
          {items.map((item, index) => (
            <div key={index} className={style.marqueeItem}>
              <span>⚡</span>
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {listImage.map((item, index) => (
          <SwiperSlide key={index}>
            <img style={{ width: "100%" }} src={item.image} alt={item.alt} />
          </SwiperSlide>
        ))}
        <div className={style.productSlide}>
          <ul>
            {productListSlide.map((item, index) => (
              <li style={{ marginBottom: "20px" }} key={index}>
                <a className={style.box}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className={style.title}>{item.title}</div>
                    <div className={style.subTitle}>{item.subTitle}</div>
                  </div>
                  <div className={style.iconRight}>
                    <FaAngleRight />
                  </div>
                </a>
              </li>
            ))}
           {userid && (
                <>
                    <li onClick={showModal} style={{ marginBottom: "20px" }}>
                    <a className={style.box}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className={style.title}>Chuyển tiền</div>
                        <div className={style.subTitle}>tự động</div>
                    </div>
                    <div className={style.iconRight}>
                        <FaAngleRight />
                    </div>
                    </a>
                    </li>
                    <Modal
                        title="Chuyển Tiền Tự Động"
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        width={500}
                        className={customModal}
                        footer={null}
                    >
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={handleSubmit}
                            initialValues={{
                            amount: '',
                            recipient_stk: '',
                            transfer_date: "",
                            }}
                        >
                            <Form.Item label="Số tiền" name="amount" rules={[{ required: true, message: 'Vui lòng nhập số tiền' }]}>
                                <Input placeholder="Nhập số tiền muốn chuyển" style={{ borderColor: '#f00020' }} />
                            </Form.Item>
                            <Form.Item label="Số tài khoản người nhận" name="recipient_stk" rules={[{ required: true, message: 'Vui lòng nhập số tài khoản' }]}>
                                <Input placeholder="Nhập số tài khoản người nhận" style={{ borderColor: '#f00020' }} />
                            </Form.Item>
                            <Form.Item label="Ngày chuyển tiền" name="transfer_date" rules={[{ required: true, message: 'Vui lòng chọn ngày' }]}>
                                <Input placeholder="" style={{ borderColor: '#f00020' }} />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{ backgroundColor: '#f00020', borderColor: '#f00020' }}>
                                    Xác nhận chuyển tiền
                                </Button>
                            </Form.Item>
                        </Form>
                 </Modal>
               </>
           )}
          </ul>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
