import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const slider = () => {
    function initSlider(sliderDirection, sliderSpeed, navigationButtons, spaceBetweenSlides) {
        return {
            direction: sliderDirection,
            speed: sliderSpeed,
            loop: true,
            navigation: {
                nextEl: navigationButtons[0],
                prevEl: navigationButtons[1]
            },
            spaceBetween: spaceBetweenSlides
        }
    }

    const spaceBetweenSlides = 50;
    const sliderDirection = "horizontal";
    const sliderSpeed = 500;

    const swiper1 = new Swiper('.slider1.swiper', initSlider(sliderDirection, sliderSpeed,['.swiper-button-next--1',
        '.swiper-button-prev--1'], spaceBetweenSlides));

    const swiper2 = new Swiper('.slider2.swiper', initSlider(sliderDirection, sliderSpeed, ['.swiper-button-next--2',
        '.swiper-button-prev--2'], spaceBetweenSlides));

    const swiper3 = new Swiper('.slider3.swiper', initSlider(sliderDirection, sliderSpeed, ['.swiper-button-next--3',
        '.swiper-button-prev--3'], spaceBetweenSlides));
}
export default slider;