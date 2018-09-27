// vue-cli-service build --target wc --name storefront-gallery-vue ./src/build.js
import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import Gallery from './components/Gallery';

const CustomElement = wrap(Vue, Gallery);

window.customElements.define('storefront-gallery-vue', CustomElement);