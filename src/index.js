/**
 * Common validators class
 */
class Validators {

    /**
     * Check whether an email is valid or not
     *
     * @param email {string} The email
     * @returns {boolean} True if the email is valid
     */
    static invalidEmail (email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !re.test(email);
    }

    /**
     * Check whether or not the given string is empty.
     *
     * @param value {string} The string we wish to check.
     * @returns {boolean} True if it is an empty string
     */
    static emptyString (value) {
        return "" === value.trim();
    }

    /**
     * Ensure that it is a positive number.
     *
     * @param value {Number} The number you wish to ensure is positive.
     * @return {boolean} True if it is equal to or greater than 0.
     */
    static isPositive (value) {
        return 0 <= value;
    }

    /**
     * Ensure the given number is an integer.
     *
     * @param value {Number} The number you wish to check.
     * @return {boolean} True if it is an integer.
     */
    static isInt (value) {
        return value === parseInt(value);
    }

    /**
     * Given the which of a keypress event, determine if the key press was a number.
     *
     * @param which {Number} The number / which was pressed.
     * @return {boolean} True if it was a number or delete/backspace.
     */
    static keyPressIsNumber (which) {
        return (which >= 48 && which <= 57) || (which === 8) || (which === 0);
    }

    /**
     * Given the which of a keypress event, determine if the key press was a number.
     *
     * @param which {Number} The number / which was pressed.
     * @return {boolean} True if it was a number, period or delete/backspace.
     */
    static keyPressIsNumberOrPeriod (which) {
        return (which >= 48 && which <= 57) || (which === 46) || (which === 8) || (which === 0);
    }

}

export default Validators;