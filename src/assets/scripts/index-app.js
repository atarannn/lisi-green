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
          function thanksPopup(callSelector, contentToOpenSelector, contentToCloseSelector) {
            const submitBtn = document.querySelector(callSelector);
            const formContent = document.querySelector('[data-form]');
            const form = document.querySelector('.form-wrap');
            const thanksPopupOpen = document.querySelector(contentToOpenSelector);
            const thanksPopupClose = document.querySelector(contentToCloseSelector);
            submitBtn.addEventListener('click', () => {
              thanksPopupOpen.classList.add('active');
              formContent.classList.add('not-active');
            });
            thanksPopupClose.addEventListener('click', () => {
              thanksPopupOpen.classList.remove('active');
              formClose(form);
              formContent.classList.remove('not-active');
            });
          }
          thanksPopup('[data-btn-submit]','[data-thanks-popup]', '[data-close-thanks-popup]');
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
