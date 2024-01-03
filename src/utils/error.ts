import { version } from "../_version.js";

function stringify(value: any): any {
    if (value == null) { return "null"; }

    if (Array.isArray(value)) {
        return "[ " + (value.map(stringify)).join(", ") + " ]";
    }

    if (value instanceof Uint8Array) {
        const HEX = "0123456789abcdef";
        let result = "0x";
        for (let i = 0; i < value.length; i++) {
            result += HEX[value[i] >> 4];
            result += HEX[value[i] & 0xf];
        }
        return result;
    }

    if (typeof(value) === "object" && typeof(value.toJSON) === "function") {
        return stringify(value.toJSON());
    }

    switch (typeof(value)) {
        case "boolean": case "symbol":
            return value.toString();
        case "bigint":
            return BigInt(value).toString();
        case "number":
            return (value).toString();
        case "string":
            return JSON.stringify(value);
        case "object": {
            const keys = Object.keys(value);
            keys.sort();
            return "{ " + keys.map((k) => `${ stringify(k) }: ${ stringify(value[k]) }`).join(", ") + " }";
        }
    }

    return `[ COULD NOT SERIALIZE ]`;
}

export type ErrorCode =

    // Generic Errors
    "UNKNOWN_ERROR" | "NOT_IMPLEMENTED" | "UNSUPPORTED_OPERATION" |
    "NETWORK_ERROR" | "SERVER_ERROR" | "TIMEOUT" | "BAD_DATA" |
    "CANCELLED" |

    // Argument Errors
    "INVALID_ARGUMENT" | "MISSING_ARGUMENT" | "UNEXPECTED_ARGUMENT" |
    "VALUE_MISMATCH" |

    // Blockchain Errors
    "CALL_EXCEPTION" | "INSUFFICIENT_FUNDS" | "NONCE_EXPIRED" |
    "REPLACEMENT_UNDERPRICED" | "TRANSACTION_REPLACED" |
    "UNCONFIGURED_NAME" | "OFFCHAIN_FAULT" |

    // User Interaction
    "ACTION_REJECTED"
;

export interface VariableError<T extends ErrorCode = ErrorCode> extends Error {
    /**
     *  The string error code.
     */
    code: ErrorCode;

    /**
     *  A short message describing the error, with minimal additional
     *  details.
     */
    shortMessage: string;

    /**
     *  Additional info regarding the error that may be useful.
     *
     *  This is generally helpful mostly for human-based debugging.
     */
    info?: Record<string, any>;

    /**
     *  Any related error.
     */
    error?: Error;
}


