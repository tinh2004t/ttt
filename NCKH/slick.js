$(document).ready(function () {
    const slideList = $(".wrapper-slide-content .slide-list");

    $(".wrapper-slide-content .slide-list").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        adaptiveHeight: true
    });

    let btnArrowLeft;
    const btnArrowRight = document.querySelector(".wrapper-slide-content .arrow-right");
    btnArrowRight.addEventListener("click", function () {
        slideList.slick('slickNext');

        if (!btnArrowLeft) {
            btnArrowLeft = document.createElement("div");
            btnArrowLeft.classList.add('arrow-left', 'flex-align');
            btnArrowLeft.innerHTML = `
                <svg width="16" height="17" fill="none" class="svgFillAll jss214" style="transform: rotate(180deg);">
                    <path d="M3.333 8.5h9.334M10 11.167L12.667 8.5M10 5.833L12.667 8.5" stroke="#1A202C"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            `;
            $(".wrapper-slide-content").append(btnArrowLeft);

            btnArrowLeft.addEventListener('click', function () {
                slideList.slick('slickPrev');
            });
        }
        if (slideList.slick('slickCurrentSlide') === 0) {
            btnArrowLeft.style.display = 'flex';
        }
    });

    slideList.on('afterChange', function (event, slick, currentSlide) {
        const currentSlideElement = $(".wrapper-slide-content .slick-current");
        const slickIndex = parseInt(currentSlideElement.attr('data-slick-index'), 10);

        if (slickIndex === 0 && btnArrowLeft) {
            btnArrowLeft.style.display = 'none';
        } else if (btnArrowLeft) {
            btnArrowLeft.style.display = 'flex';
        }
    });
});

$(document).ready(() => {
    const slideList = $(".content-plane-wrappper .slide-list");

    $(".content-plane-wrappper .slide-list").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        adaptiveHeight: false,
        arrows: false,
    });


    let btnArrowLeft;
    const btnArrowRight = document.querySelector(".content-plane-wrappper .arrow-right");
    btnArrowRight.addEventListener("click", function () {
        slideList.slick('slickNext');

        if (!btnArrowLeft) {
            btnArrowLeft = document.createElement("div");
            btnArrowLeft.classList.add('arrow-left', 'flex-align');
            btnArrowLeft.innerHTML = `
                <svg width="16" height="17" fill="none" class="svgFillAll jss214" style="transform: rotate(180deg);">
                    <path d="M3.333 8.5h9.334M10 11.167L12.667 8.5M10 5.833L12.667 8.5" stroke="#1A202C"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            `;
            $(".content-plane-wrappper").append(btnArrowLeft);

            btnArrowLeft.addEventListener('click', function () {
                slideList.slick('slickPrev');
            });
        }
        if (slideList.slick('slickCurrentSlide') === 0) {
            btnArrowLeft.style.display = 'flex';
        }
    });

    slideList.on('afterChange', function (event, slick, currentSlide) {
        const currentSlideElement = $(".content-plane-wrappper .slick-current");
        const slickIndex = parseInt(currentSlideElement.attr('data-slick-index'), 10);

        if (slickIndex === 0 && btnArrowLeft) {
            btnArrowLeft.style.display = 'none';
        } else if (btnArrowLeft) {
            btnArrowLeft.style.display = 'flex';
        }
    });


});
$(document).ready(function () {
    const slideList = $(".contents-band-wrapper .slide-list");

    $('.contents-band-wrapper .slide-list').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        adaptiveHeight: true,

    });

    let btnArrowLeft;
    const btnArrowRight = document.querySelector(".contents-band-wrapper .arrow-right");
    btnArrowRight.addEventListener("click", function () {
        slideList.slick('slickNext');

        if (!btnArrowLeft) {
            btnArrowLeft = document.createElement("div");
            btnArrowLeft.classList.add('arrow-left', 'flex-align');
            btnArrowLeft.innerHTML = `
                <svg width="16" height="17" fill="none" class="svgFillAll jss214" style="transform: rotate(180deg);">
                    <path d="M3.333 8.5h9.334M10 11.167L12.667 8.5M10 5.833L12.667 8.5" stroke="#1A202C"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            `;
            $(".contents-band-wrapper").append(btnArrowLeft);

            btnArrowLeft.addEventListener('click', function () {
                slideList.slick('slickPrev');
            });
        }
        if (slideList.slick('slickCurrentSlide') === 0) {
            btnArrowLeft.style.display = 'flex';
        }
    });

    slideList.on('afterChange', function (event, slick, currentSlide) {
        const currentSlideElement = $(".contents-band-wrapper .slick-current");
        const slickIndex = parseInt(currentSlideElement.attr('data-slick-index'), 10);

        if (slickIndex === 0 && btnArrowLeft) {
            btnArrowLeft.style.display = 'none';
        } else if (btnArrowLeft) {
            btnArrowLeft.style.display = 'flex';
        }
    });


});
