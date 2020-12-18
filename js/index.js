import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
const swiper = new Swiper();

var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    pagination: {
    el: '.swiper-pagination',
    
    },
    scrollbar: {
    el: '.swiper-scrollbar',
    },
})