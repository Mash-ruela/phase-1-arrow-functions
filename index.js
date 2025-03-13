const divide = function() {
    return 2000 / 100;
};

const square = (num) => num * num;

const add = (num1, num2) => num1 + num2;

if (typeof module !== "undefined" && module.exports) {
    module.exports = { divide, square, add };
}
