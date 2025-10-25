function perimeter(n) {
   let a = 1; // F1
    let b = 1; // F2
    let sum = a; // include F1
​
    for (let i = 1; i <= n; i++) {
        sum += b;   // include current Fibonacci value
        const next = a + b;
        a = b;
        b = next;
    }
​
    return 4 * sum;
}