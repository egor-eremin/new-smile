import './vendor';

(function addedContentSlider() {
    initContentSlider(".content-slider-js");
})();

function initContentSlider(selector) {
    $(selector).slick({
        fade: true,
        infinite: false,
        prevArrow: '<button type="button" class="slick-prev content-slider-arrow content-slider-arrow_prev"><svg class="svg-prev" width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
            '    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
            '        <g transform="translate(-1114.000000, -4470.000000)" fill="#FFFFFF" fill-rule="nonzero">\n' +
            '            <g transform="translate(100.000000, 3504.000000)">\n' +
            '                <g transform="translate(1000.000000, 952.000000)">\n' +
            '                    <g transform="translate(14.000000, 14.000000)">\n' +
            '                        <g>\n' +
            '                            <path d="M11.7634933,5.45658065 L6.82211496,0.295290323 C6.52062911,-0.0196129032 6.03167973,-0.0196129032 5.73019388,0.295290323 C5.42864627,0.610258065 5.42864627,1.12083871 5.73019388,1.43580645 L9.3535213,5.2203871 L0.772090363,5.2203871 C0.345711181,5.2203871 1.8189894e-12,5.58148387 1.8189894e-12,6.02683871 C1.8189894e-12,6.47212903 0.345711181,6.83329032 0.772090363,6.83329032 L9.3535213,6.83329032 L5.73031741,10.617871 C5.4287698,10.9328387 5.4287698,11.4434194 5.73031741,11.7583871 C5.88102945,11.9157419 6.07868459,11.9945806 6.27627795,11.9945806 C6.47387132,11.9945806 6.67146468,11.9157419 6.82223849,11.7583871 L11.7634933,6.59709677 C12.0650409,6.28212903 12.0650409,5.77154839 11.7634933,5.45658065 Z"></path>\n' +
            '                        </g>\n' +
            '                    </g>\n' +
            '                </g>\n' +
            '            </g>\n' +
            '        </g>\n' +
            '    </g>\n' +
            '</svg></button>',
        nextArrow: '<button type="button" class="slick-next content-slider-arrow content-slider-arrow_next"><svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
            '    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
            '        <g transform="translate(-1114.000000, -4470.000000)" fill="#FFFFFF" fill-rule="nonzero">\n' +
            '            <g transform="translate(100.000000, 3504.000000)">\n' +
            '                <g transform="translate(1000.000000, 952.000000)">\n' +
            '                    <g transform="translate(14.000000, 14.000000)">\n' +
            '                        <g>\n' +
            '                            <path d="M11.7634933,5.45658065 L6.82211496,0.295290323 C6.52062911,-0.0196129032 6.03167973,-0.0196129032 5.73019388,0.295290323 C5.42864627,0.610258065 5.42864627,1.12083871 5.73019388,1.43580645 L9.3535213,5.2203871 L0.772090363,5.2203871 C0.345711181,5.2203871 1.8189894e-12,5.58148387 1.8189894e-12,6.02683871 C1.8189894e-12,6.47212903 0.345711181,6.83329032 0.772090363,6.83329032 L9.3535213,6.83329032 L5.73031741,10.617871 C5.4287698,10.9328387 5.4287698,11.4434194 5.73031741,11.7583871 C5.88102945,11.9157419 6.07868459,11.9945806 6.27627795,11.9945806 C6.47387132,11.9945806 6.67146468,11.9157419 6.82223849,11.7583871 L11.7634933,6.59709677 C12.0650409,6.28212903 12.0650409,5.77154839 11.7634933,5.45658065 Z"></path>\n' +
            '                        </g>\n' +
            '                    </g>\n' +
            '                </g>\n' +
            '            </g>\n' +
            '        </g>\n' +
            '    </g>\n' +
            '</svg></button>',
        dots: true,
    });
}
