
const STRING_ERROR_CODE = {
  ACCESS_DENIED: (err) => { err.code = 4011; return err; },
  error_system: (err) => { err.code = 5001; return err; }
};

const Errors = {
  // 400 Series
  400: err => error(400, 'BAD_REQUEST', err),

  // 401 Series
  401: err => error(401, 'UNAUTHORIZED!', err), // ACCESS_DENIED
  40110: err => error(401, 'UNAUTHORIZED!', err), // ACCESS_TOKEN_NOT_FOUND
  40111: err => error(401, 'UNAUTHORIZED!', err), // ACCESS_TOKEN_EXPIRED
  40112: err => error(401, 'UNAUTHORIZED!', err), // ACCESS_TOKEN_INVALID

  // 404 Series
  404: err => error(404, 'NOT_FOUND', err),

  // 500 Series
  500: err => error(500, 'INTERNAL_SERVER_ERROR', err),

  // Special Error Series
  11000: ({ code, errmsg }) => error(400, 'DUPLICATION_KEY_ERROR',
    { code, errmsg }),
};

/**
 * Create a structural error object
 * @private
 * @param {number} code - Http error code, ex:- 400,.., 500 
 * @param {string} message - String error code
 * @param {(Object|string)} err - Error Object or string error
 * @param {string} err.code - Custom error code or system error code,
 * @param {string} err.errmsg - Error message
 * @param {[*]} err.errLogs - Error logs list
 * 
 * @returns {Object} Return structural error object (Please check top of file) 
 */
const error = (code, message, err) => {
  // e = e.errmsg ? e : parseError(code, e);
  return {
    code: code,
    message: message,
    ...getError(err)
  };
};

/**
 * Bind success=false and Return structural error object
 * @private
 * @param {Object} err - Structural error Object
 * @param {string} err.code - Custom error code or system error code,
 * @param {string} err.errmsg - Error message
 * 
 * @returns {Object} Return {
 *  success: false,
 *  error: {
 *    code: 4001,
 *    errmsg: 'test Error',
 *  }
 * }
 */
const getError = err => ({ success: false, error: err });

module.exports = {
  Errors: Errors,
  STRING_ERROR_CODE: STRING_ERROR_CODE,
};