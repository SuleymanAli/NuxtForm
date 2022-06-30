import { extend } from 'vee-validate'
/*eslint-disable */
import { required, email, integer, min, regex } from 'vee-validate/dist/rules'

// No message specified.
extend('email', email)
extend('integer', integer)
extend('min', min)
extend('regex', regex)

// Override the default message.
extend('required', {
  ...required,
  message: 'This field is required'
})

extend('BetweenTwoTimes', {
  validate: (value, { min, max }) => {
    let hour = Number(value.split(':')[0])
    return Number(min) <= hour && hour < Number(max)
  },
  params: ['min', 'max'],
  message: 'Error: Time should between 09:00 and 19:00 hours'
})
