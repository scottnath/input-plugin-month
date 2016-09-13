'use strict';

/**
 * Month Input Plugin
 *
 *
 * A simple single month input plugin
 */
const validation = require('./lib/validation.js');

/**
 * Single Month Input Plugin
 * @module monthInputPlugin
 */
module.exports = {
  name: 'Month',
  description: 'A simple single month input plugin',
  validation: {
    monthValidation: validation,
  },
  inputs: {
    month: {
      validation: {
        function: 'monthValidation',
        on: 'change',
      },
      label: 'Choose a month',
      type: 'select',
      settings: {
        size: '1',
        months: {
          '01': 'January',
          '02': 'February',
          '03': 'March',
          '04': 'April',
          '05': 'May',
          '06': 'June',
          '07': 'July',
          '08': 'August',
          '09': 'September',
          '10': 'October',
          '11': 'November',
          '12': 'December',
        },
      },
    },
  },
  html: '<label for="{{month.id}}">{{month.label}}</label><select id="{{month.id}}" name="{{month.name}}" size="{{month.size}}">{% for month, number in settings.months %}<option value="{{number}}">{{month}}</option>{% endfor %}</select>',
};
