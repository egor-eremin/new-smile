import './vendor';
require ('./vendor/jquery.inputmask.min');
require ('./vendor/jquery.viewportchecker.min');
require ('./vendor/jquery.animateNumber.min');

(function addedContentSlider() {
    initContentSlider(".content-slider-js");
})();
(function addFocus() {
    $('.input-phone').focus(function () {
        $(this).parent('.form-item').addClass('focus');
    });
    $('.input-phone').blur(function () {
        $(this).parent('.form-item').removeClass('focus');
    });
})();
(function addPhoneMask() {
    $('.user-phone').inputmask("+7 (999) 999-99-99", {
        placeholder: "_",
        // showMaskOnFocus: false,
    })
})();
(function addConsultationPopup() {
    $('.consultation-example').magnificPopup({
        items: {
            src: '.consultation-popup',
            type: 'inline',
        },
        mainClass: 'magnific-modal',
    });
})();
(function validationDesctopForm() {
    validationForm('.conditions-form', '.form-item-wrapper', '.good-text-wrapper', true, 'phone');
})();
(function goPrev() {
    $('.prev').on('click', function (e) {
        e.preventDefault();

        $('.good-text-wrapper').removeClass('show-information');
        $('.form-item-wrapper').removeClass('hide-information');
        $('.conditions').removeClass('conditions_success');
        $('.input-phone').focus();
    });
})();
(function openCallbackForm() {
    initMagnificPopup('.js-callback-form', '.js-open-callback');
})();
(function openExcursionForm() {
    initMagnificPopup('.js-excursion-form', '.js-open-excursion');
})();
(function openFinancialModelForm() {
    initMagnificPopup('.js-financial-model-form','.js-open-financial-model');
})();
(function openEducationSystemForm() {
    initMagnificPopup('.js-education-system-form', '.js-open-education-system');
})();
(function openEducationSystemDoctorForm() {
    initMagnificPopup('.js-education-system-doctor-form', '.js-open-education-system-doctor');
})();
(function openExamplesInstructionsForm() {
    initMagnificPopup('.js-examples-instructions','.js-open-examples-instructions');
})();
(function validatedCallBackForm() {
    validationForm('.validate-callback-form', '.success', '.thanks-text-wrapper', true, 'mail');
})();
(function validatedExcursionForm() {
    validationForm('.validate-excursion-form', '.success', '.thanks-text-wrapper', true, 'phone');
})();
(function validatedFinancialModelForm() {
    validationForm('.validate-financial-model-form','.success', '.thanks-text-wrapper', true, 'mail');
})();
(function validatedEducationSystemForm() {
    validationForm('.validate-education-system', '.success', '.thanks-text-wrapper', true, 'mail')
})();
(function validatedEducationSystemDoctorForm() {
    validationForm('.validate-education-system-doctor', '.success', '.thanks-text-wrapper', true, 'mail')
})();
(function validatedExamplesInstructionsForm() {
    validationForm('.validate-examples-instructions', '.success', '.thanks-text-wrapper', true, 'mail');
})();
(function showMoreReviews() {
    $('.show-more').on('click', function () {
        var flag = true;
        $('.hide-reviews .reviews-list__item').each(function (e, i) {
            if ($(this).css('display') == 'none' && flag) {

                $(this).css({opacity: 0, display: 'flex'}).animate({
                    opacity: 1
                }, 1000);

                if (e == $('.hide-reviews .reviews-list__item').length - 1) {
                    $('.show-more').hide();
                }
                flag = false;
            }
        });

    });
})();
(function showPopup() {
    $(".popup").mousemove(
        function (e) {
            var thisPopup = $(this).data('popup-wrapper');

            $('#' + thisPopup).show();
            $('#' + thisPopup).css('left',(e.pageX+1)+'px').css('top',(e.pageY+1)+'px');
        }
    ).mouseleave(function() {
        $('.popup-wrapper').hide();
    });
})();
(function initViewportchecker() {
        $('.landing-section').viewportChecker({
            classToAdd: 'animation',
            offset: "50%",
            callbackFunction: function () {
                if ($('.income-section').hasClass('animation')) {
                    animationNumber('.income-section .bar-chart__block_typical-clinic .bar-number', 600000);
                    animationNumber('.income-section .bar-chart__block_new-smile .bar-number', 1000000);
                }
            },
        });
})();
(function initIncomeViewportchecker() {
        $('.income-block').viewportChecker({
            classToAdd: 'animationStart',
            offset: "100%",
            callbackFunction: function() {
                media('max-width: 900;', function () {
                    animationNumber('.bar-chart__block.typical-clinic .bar-number', 200000);
                    animationNumber('.bar-chart__block.new-smile-clinic .bar-number', 400000);
                });
            },
        });
})();

(function initMobileTab() {
    addTabs('.income-block-mobile');
})();
(function initRegularCustomersTabs() {
    addTabs('.regular-customers-mobile');
})();


function addTabs(tabbed_selector) {
    // Get relevant elements and collections
    var tabbed = document.querySelector(tabbed_selector);
    var tablist = tabbed.querySelector('ul');
    var tabs = tablist.querySelectorAll('a');
    var panels = tabbed.querySelectorAll('[id^="section"]');

    // The tab switching function
    var switchTab = function switchTab(oldTab, newTab) {
        newTab.focus();
        // Make the active tab focusable by the user (Tab key)
        newTab.removeAttribute('tabindex');
        // Set the selected state
        newTab.setAttribute('aria-selected', 'true');
        oldTab.removeAttribute('aria-selected');
        oldTab.setAttribute('tabindex', '-1');
        // Get the indices of the new and old tabs to find the correct
        // tab panels to show and hide
        var index = Array.prototype.indexOf.call(tabs, newTab);
        var oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
        panels[oldIndex].hidden = true;
        panels[index].hidden = false;
    };

    // Add the tablist role to the first <ul> in the .tabbed container
    tablist.setAttribute('role', 'tablist');

    // Add semantics are remove user focusability for each tab
    Array.prototype.forEach.call(tabs, function (tab, i) {
        tab.setAttribute('role', 'tab');
        tab.setAttribute('id', 'tab' + (i + 1));
        tab.setAttribute('tabindex', '-1');
        tab.parentNode.setAttribute('role', 'presentation');

        // Handle clicking of tabs for mouse users
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            var currentTab = tablist.querySelector('[aria-selected]');
            if (e.currentTarget !== currentTab) {
                switchTab(currentTab, e.currentTarget);
            }
        });

        // Handle keydown events for keyboard users
        tab.addEventListener('keydown', function (e) {
            // Get the index of the current tab in the tabs node list
            var index = Array.prototype.indexOf.call(tabs, e.currentTarget);
            // Work out which key the user is pressing and
            // Calculate the new tab's index where appropriate
            var dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;
            if (dir !== null) {
                e.preventDefault();
                // If the down key is pressed, move focus to the open panel,
                // otherwise switch to the adjacent tab
                dir === 'down' ? panels[i].focus() : tabs[dir] ? switchTab(e.currentTarget, tabs[dir]) : void 0;
            }
        });
    });

    // Add tab panel semantics and hide them all
    Array.prototype.forEach.call(panels, function (panel, i) {
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('tabindex', '-1');
        var id = panel.getAttribute('id');
        panel.setAttribute('aria-labelledby', tabs[i].id);
        panel.hidden = true;
    });

    // Initially activate the first tab and reveal the first tab panel
    tabs[0].removeAttribute('tabindex');
    tabs[0].setAttribute('aria-selected', 'true');
    panels[0].hidden = false;
};
function animationNumber(initSelector,number) {
                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
                $(initSelector).animateNumber({
                    number: number,
                    numberStep: comma_separator_number_step,
                },{
                    duration: 1500,
                    easing: 'swing',
                });
}
function initMagnificPopup(initButton, openPopup) {
    $(initButton).magnificPopup({
        items: {
            src: openPopup,
            type: 'inline',
        },
        mainClass: 'magnific-modal',
        removalDelay: 250,
        callbacks: {
            beforeClose: function() {
                if ($('.thanks-text-wrapper').hasClass('show-information')) {
                    var that = this.content;
                    setTimeout(function() {
                        $('.thanks-text-wrapper').removeClass('show-information');
                        $('.success').removeClass('hide-information');
                        $(that).find('.callback-input').val('');
                    }, 250)
                }
            },
        },
    });
}
function initContentSlider(selector) {
    $(selector).slick({
        fade: true,
        infinite: false,
        // adaptiveHeight: true,
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
        responsive: [
            {
                breakpoint: 761,
                settings: {
                    arrows: false
                }
            },
        ]
    });
}
function validationForm(formInit, formWrapper, textGood, animation, phoneOrMail) {
    $.validator.addMethod("minlenghtphone", function (value, element) {

            return value.replace(/\D+/g, '').length > 10;
        },
        "");
    $(formInit).validate({
        rules: {
            phone:  {
                minlenghtphone: true,
            },
        },
        invalidHandler: function (e, v) {
            if (animation) {
                var animationForm = v.errorContext;
                animationForm.addClass('animation');
                setTimeout(function () {
                    animationForm.removeClass('animation');
                }, 400);
            }
        },
        submitHandler: function(form) {
            var inputPhone = $(form).find('.user-phone');
            var inputMail = $(form).find('.user-mail');
            var inputValuePhone = inputPhone.val();
            var inputValueMail = inputMail.val();

            if (phoneOrMail == 'phone') {
                $(textGood).find('.current-phone').text(inputValuePhone);
            } else {
                $(textGood).find('.current-mail').text(inputValueMail);
            }

            $.ajax({
                type: $(form).attr('method'),
                url: $(form).attr('action'),
                data: new FormData(form),

                cache: false,
                contentType: false,
                processData: false,

                dataType: 'text',
                success: function () {
                    $(formWrapper).addClass('hide-information');
                    $(textGood).addClass('show-information');
                    if ($(form).hasClass('conditions-form')) {
                        $(form).parents('.conditions').addClass('conditions_success');
                    }
                },
                error: function() {
                    console.log('Упс... Что-то пошло не так!');
                }
            });
            return false;
        },
    });
};
function media(mediaQueryString, action){
    'use strict';
    var handleMatchMedia = function (mediaQuery) {
        if (mediaQuery.matches) { //Попадает в запроc
            if (action  && typeof(action) === 'function') {
                action();
            }
        }
    };
    var mql = window.matchMedia(mediaQueryString); //стандартный медиазапрос для смены режима просмотра
    handleMatchMedia(mql);
    mql.addListener(handleMatchMedia);
};
