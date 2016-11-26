'use strict'
function u(a, b) {
	return a * b;
}
function umn() {
    var val = 1;
	return function (b) {
        val = u(val, b);
		return val;
	};
};

var v = umn();
v(5);


function fib_n() {
    var arr = new Array(15).fill(0);
    arr[1] = 1;
	arr[2] = 1;
    for (var i = 3; i <= 15; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
    }
    return function (n) {
		return arr[n];
	};
}


function fib(n) {
	if (n == 0)
		return 0;
	if ((n == -1) || (n == 1))
		return 1;
	if (n > 0)
		return fib(n - 1) + fib(n - 2);
	return fib(n + 2) - fib(n + 1);
}
function fib_n2() {
    var arr = [0, 1, 1];
    return function (n) {
        if (n > arr.length)
			for (let i = arr.length + 1; i <= n; i++) {
				arr.push(fib(i));
			}
		return arr[n - 1];
	};
}
var v = fib_n2();
v(10);
