
// libs
import {swiperBeforeIt, swiperAfterIt, swiperProjects } from './libs/swiper.js'
  swiperBeforeIt.enable();
  swiperAfterIt.enable();
  swiperProjects.enable();

// basemodules
import { isWebp } from './base-modules/webpCheck.js';
isWebp();

// Services
import '../blocks/modal/modal.js'


// blocks
import { burger } from '../blocks/header-nav/header-nav.js';
burger();

import { projects} from '../blocks/section-swiper/swiper-projects.js'
projects();

import { contactForm} from '../blocks/contacts/form.js'
contactForm();



import { videomaking } from '../blocks/videomaking/videomaking.js';
videomaking();