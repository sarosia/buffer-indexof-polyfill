"use strict";

if (!Buffer.prototype.indexOf) {
    Buffer.prototype.indexOf = function (value, offset) {
        offset = offset || 0;

        // Always wrap the input as a Buffer so that this method will support any
        // data type such as array octet, string or buffer.
        if (typeof value === "string" || value instanceof String) {
            value = new Buffer(value);
        } else if (typeof value === "number" || value instanceof Number) {
            value = new Buffer([ value ]);
        }

        var len = value.length;

        for (var i = offset; i <= this.length - len; i++) {
            var mismatch = false;
            for (var j = 0; j < len; j++) {
                if (this[i + j] != value[j]) {
                    mismatch = true;
                    break;
                }
            }

            if (!mismatch) {
                return i;
            }
        }

        return -1;
    };
}
