export const credentials = {
  standard_user: { username: 'standard_user', password: 'secret_sauce' },
  locked_user:   { username: 'locked_out_user', password: 'secret_sauce' },
  invalid_user:  { username: 'invalid_user', password: 'salah_password' }
};

export const messages = {
  invalidLogin: 'Username and password do not match any user in this service.'
};

export default credentials;
