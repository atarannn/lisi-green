import i18next from 'i18next';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import axios from 'axios';
import * as yup from 'yup';
import FormMonster from '../../pug/components/form/form';
import SexyInput from '../../pug/components/input/input';

global.gsap = gsap;
global.ScrollTrigger = ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);
global.axios = axios;

/*
 * form handlers start
 */
const formsWithRedirect = [
  '[data-popup-form]',
];
formsWithRedirect.forEach((form) => {
  const $form = document.querySelector(form);
  if ($form) {
    /* eslint-disable */
    new FormMonster({
      /* eslint-enable */
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => { window.location.href = 'message'; },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-name]') }),
            rule: yup.string().required(i18next.t('required')).trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },

          phone: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-phone]'), typeInput: 'phone' }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .min(16, i18next.t('field_too_short', { cnt: 19 - 7 })),

            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          },
        },

      },
    });

    $form.querySelector('.js-mask-absolute').addEventListener('click', () => {
      $form.querySelector('[name="phone"]').focus();
    }, false);
  }
});
/*
 * form handlers end
 */

