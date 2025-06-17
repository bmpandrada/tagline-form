import _ from 'lodash';

export const validateForm = (form) => {
  const errors = {};
  const emailRegex = new RegExp(process.env.REGEX);
  const passwordRegex = new RegExp(process.env.PASSWORD_REGEX);

  if (!_.isString(form.name) || _.trim(form.name).length < 3) {
    errors.name = 'Name must be at least 3 characters log.';
  }

  
  if (!emailRegex.test(_.trim(form.email))) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!passwordRegex.test(_.trim(form.password))) {
    errors.password = 'Password must be at least 8 characters, include a number and special character.';
  }

  return errors;
};
