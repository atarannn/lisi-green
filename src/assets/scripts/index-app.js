import i18next from 'i18next';
import gsap from 'gsap';
import axios from 'axios';
import * as yup from 'yup';
import FormMonster from '../../pug/components/form/form';
import SexyInput from '../../pug/components/input/input';
import ScrollTrigger from 'gsap/ScrollTrigger';
import galleryEffect from './modules/gallery-effect';


global.gsap = gsap;
global.ScrollTrigger = ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);
global.axios = axios;

const form = [
  '[data-form]',
];
const formContacts = [
    '[data-contacts]',
]
form.forEach((form) => {
  const $form = document.querySelector(form);
  if ($form) {
    new FormMonster({
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => {
          function thanks(callSelector, contentToOpenSelector) {
            const submitBtn = document.querySelectorAll(callSelector);
            const thanksPopupOpen = document.querySelector(contentToOpenSelector);
            const form = document.querySelector('[data-form]');
            const thanksPopupClose = document.querySelector('[data-close-thanks-popup]');
            submitBtn.forEach(el => {
              form.classList.add('not-active');
              thanksPopupOpen.classList.add('active');
              const tl = gsap.timeline({ paused: true });
              tl.set(thanksPopupOpen, { autoAlpha: 0 });
              tl.fromTo(thanksPopupOpen,
                  {autoAlpha: 0},
                  {autoAlpha: 1, duration: 0.4}, '<');
              tl.play();
              document.querySelector('body').style.overflow = 'hidden';
            });
            thanksPopupClose.addEventListener('click', () => {
              form.classList.remove('not-active');
              thanksPopupOpen.classList.remove('active');
              const tl = gsap.timeline({ paused: true });
              tl.fromTo(thanksPopupOpen,
                  {autoAlpha: 1},
                  {autoAlpha: 0, duration: 0.4, delay: 0.2}, '<');
              tl.set(thanksPopupOpen, { autoAlpha: 0 });
              tl.play();
              document.querySelector('body').style.overflow = 'hidden';
            });
          }
          thanks('.submit-btn','[data-thanks-popup]');
        },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-name]'),
            }),
            rule: yup
                .string()
                .required(i18next.t('required'))
                .matches(/^[aA-zZ\s]+$/, i18next.t('only_letters'))
                .trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },
          mail: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-mail]'),
            }),
            rule: yup
                .string()
                .required(i18next.t('required'))
                .trim(),
            defaultMessage: i18next.t('mail'),
            valid: false,
            error: [],
          },
          subject: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-subject]'),
            }),
            rule: yup
                .string()
                .required(i18next.t('required'))
                .trim(),
            defaultMessage: i18next.t('subject'),
            valid: false,
            error: [],
          },
        },
      },
    });
  }
});
formContacts.forEach((form) => {
  const $form = document.querySelector(form);
  if ($form) {
    new FormMonster({
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => {
          function thanks(callSelector, contentToOpenSelector, contentToCloseSelector) {
            const submitBtn = document.querySelectorAll(callSelector);
            const thanksPopupOpen = document.querySelector(contentToOpenSelector);
            const thanksPopupClose = document.querySelector(contentToCloseSelector);
            console.log(submitBtn);
            // submitBtn.addEventListener('click', () => {
            //   console.log('click');
            //   thanksPopupOpen.classList.add('active');
            // });
            submitBtn.forEach(el => {
              thanksPopupOpen.classList.add('active');
              const tl = gsap.timeline({ paused: true });
              tl.set(thanksPopupOpen, { autoAlpha: 0 });
              tl.fromTo(thanksPopupOpen,
                  {autoAlpha: 0},
                  {autoAlpha: 1, duration: 0.4}, '<');
              tl.play();
              document.querySelector('body').style.overflow = 'hidden';
            });
            thanksPopupClose.addEventListener('click', () => {
              thanksPopupOpen.classList.remove('active');
              const tl = gsap.timeline({ paused: true });
              tl.fromTo(thanksPopupOpen,
                  { autoAlpha: 1},
                  { autoAlpha: 0, duration: 0.4, clearProps: 'all' }, '<');
              tl.set(thanksPopupOpen, { autoAlpha: 0 });
              tl.play();
              document.querySelector('body').style.overflow = 'auto';
            });
          }
          thanks('.submit-btn','.contacts-thanks-wrap', '[data-close-contacts-thanks]');
          },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-name]'),
            }),
            rule: yup
                .string()
                .required(i18next.t('required'))
                .matches(/^[aA-zZ\s]+$/, i18next.t('only_letters'))
                .trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },
          mail: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-mail]'),
            }),
            rule: yup
                .string()
                .required(i18next.t('required'))
                .trim(),
            defaultMessage: i18next.t('mail'),
            valid: false,
            error: [],
          },
          subject: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-subject]'),
            }),
            rule: yup
                .string()
                .required(i18next.t('required'))
                .trim(),
            defaultMessage: i18next.t('subject'),
            valid: false,
            error: [],
          },
        },
      },
    });
  }
});


if (window.location.href.match(/gallery/)) {
  galleryEffect();
}
