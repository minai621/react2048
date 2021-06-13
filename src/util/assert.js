export const assert = function (condition, message) {
    if(!condition) {
        throw new Error(`assertion falid: ${message}`);
    }
};