import '@babel/polyfill';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'slick-carousel';
import 'magnific-popup';
import 'jquery-mask-plugin';
import 'jquery-validation';
import 'focus-visible';
import objectFitImages from 'object-fit-images';

objectFitImages();
svg4everybody();

window.$ = $;
window.jQuery = $;

require('ninelines-ua-parser');
