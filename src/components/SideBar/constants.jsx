import { listProducts } from "@components/ProductHDBank/constants";
import { CiPhone } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { MdEmail } from "react-icons/md";


const sections = [
    { id: 'personal', title: 'Khách hàng cá nhân', products: listProducts },
    { id: 'business', title: 'Khách hàng doanh nghiệp', products: listProducts },
    { id: 'other1', title: 'Khách hàng đặc biệt', products: null },
    { id: 'other2', title: 'Nhà đầu tư', products: null },
    { id: 'other3', title: 'Về chúng tôi', products: null },
    { id: 'other4', title: 'Tin tức', products: null },
    { id: 'other6', title: 'Cơ hội nghề nghiệp', products: null },
    { id: 'other7', title: 'Mạng lưới chi nhánh/ATM', products: null },
    { id: 'other8', title: 'Công cụ tiện ích', products: null },
    { id: 'other9', title: 'Câu hỏi thường gặp - FAQ', products: null },
    { id: 'other10', title: 'Rút gọn link', products: null },
];

const iconContact = [
    { icon: CiPhone , content: "19006060" },
    { icon: CiChat1 , content: "Chat hỗ trợ trực tuyến" },
    { icon: MdEmail , content: "Gửi mail" },
    { icon: CiChat1 , content: "Gửi mail khiếu nại" },
]


const listSocialHDBank = [
    { img: "https://hdbank.com.vn/asset/images/icons/face.png", alt: "facebook" },
    { img: "https://hdbank.com.vn/asset/images/icons/zalo.png", alt: "zalo" },
    { img: "https://hdbank.com.vn/asset/images/icons/titok.png", alt: "titok" },
    { img: "https://hdbank.com.vn/asset/images/icons/youtube.png", alt: "youtube" },
]

export { sections, iconContact, listSocialHDBank }