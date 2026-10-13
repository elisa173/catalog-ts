import {formatPrice, sum, average, label} from './utils/format';

console.log(formatPrice(500)); // Output: "500 FCFA"
console.log(sum(2, 4, 6)); // Output: 12
console.log(average(2, 4, 6)); // Output: 4
console.log(label(5)); // Output: "Ref #5"
console.log(label("hello")); // Output: "HELLO"