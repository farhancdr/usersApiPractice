const yup = require('yup');

const userSchema = yup.object().shape({
    first_name: yup.string()
        .test('is-alpha', 'First name must contain only letters', value => typeof value === 'string' && /^[a-zA-Z]+$/.test(value))
        .min(2, 'First name must be at least 2 characters long')
        .max(50, 'First name must be less than 50 characters long')
        .required('First name is required'),
        last_name: yup.string()
        .test('is-alpha', 'Last name must contain only letters', value => typeof value === 'string' && /^[a-zA-Z]+$/.test(value))
        .min(2, 'Last name must be at least 2 characters long')
        .max(50, 'Last name must be less than 50 characters long')
        .required('Last name is required'),
});

module.exports = userSchema;