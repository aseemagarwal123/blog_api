
const HttpCodes = {

    // Informational
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    PROCESSING: 102,

    // Success

    OK: 200,
    CREATED: 201,

    // Redirection
    MOVED_PERMANENTLY: 301,
    NOT_MODIFIED: 304,
    TEMPORARY_REDIRECT: 307,

    // Client Errors
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,

    // Server Errors
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
};

const CustomErrors = {
    MISSING: 'is missing',
    NOT_FOUND: 'not found',
    INVALID: 'invalid',
};

exports.HttpCodes = HttpCodes;
exports.CustomErrors = CustomErrors;

    
