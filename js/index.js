
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
import 'swiper/swiper-bundle.min.css';
const swiper = new Swiper();

var Swiper1 = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    }
})

var Swiper2 = new Swiper('.swiper-container2', {
    direction: 'horizontal',
    type: 'bullets',
    clickable: true,
    pagination: {
    el: '.swiper-pagination',
    }
})