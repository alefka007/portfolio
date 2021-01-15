
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
import 'swiper/swiper-bundle.min.css';
const swiper = new Swiper();

var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    }
})