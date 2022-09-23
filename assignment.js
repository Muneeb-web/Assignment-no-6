console.log("Assignment # 06");
//=> Program # 01: Write a ts program to print all natural numbers from 1 to n. - using while loop
// var a:any = prompt("Print Natural Numbers 1 to N")
// var b:number = 1;
// while(b<=a){
//     console.log(`${b} is Natural Number`);
// b++
// }
//=> Program # 2: Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop
// var a:any = prompt("Reverse Natural Numbers N to 1")
// var b:number  = 1;
// while (a>=b) {
//     console.log(`Reverse Natural Number: ${a}`);
//     a--    
// }
//=>Program # 3: Write a ts program to print all alphabets from a to z. - using while loop
// var arr:string[] = ["Aa","Bb","Cc","Dd","Ee","Ff","Gg","Hh","Ii","Jj","Kk","Ll","Mm","Nn","Oo","Pp","Qq","Rr","Ss","Tt","Uu","Vv","Xx","Yy","Zz"]
// console.log(arr.length);
//=>Program # 4:Write a ts program to print all even numbers between 1 to 100. - using while loop
// var a:any = 100;
// var b:number = 1;
// while (b<=a) {
//     if(b%2==0){
//         console.log(b);
//     }
//     b++
// }
//=>Program # 5:  Write a ts program to print all odd number between 1 to 100.
// var a:any = 100;
// var b:number  = 1;
// while(b<=a){
// if(b%2!=0){
//     console.log("Odd Number:",b);    
// }
// b++
// }
//=> Program # 6:  Write a ts program to find sum of all natural numbers between 1 to n
// var a:any = prompt("Sum of Natural Numbers from 1 to N")
// var b:number = 0;
// var c:number = 1;
// while(c<=a){
// b=b+c
// c++
// }
// console.log(b);
//=> Program # 07: Write a ts program to find sum of all even numbers between 1 to n.
// var a:any = prompt("Sum of Even Numbers  From 1 to N")
// var b:any = 0;
// var c:number = 1;
// while(c<=a){
// if(c%2==0){
// b=b+c
// }
// c++
// }
// console.log("Even Number:", a);
// console.log("Sum of Even Number", b);
//=>Program # 08: Write a ts program to find sum of all odd numbers between 1 to n.
// var a:any = prompt("SUM OF ODD NUMBERS 1 to N")
// var b:number = 0;
// var c:any = 1;
// while(c<=a){
// if(c%2!=0){
//     b=b+c;
// }
// c++
// }
// console.log("Odd Number: ", b);
// console.log("THE SUM OF ODD NUMBERS", b);
//=>Program # 09: Write a ts program to print multiplication table of any number.
// var a:any = prompt("MULTIPLICATION TABLE OF ANY NUMBER")
// for (let i = 0; i <=10; i++) {
//     console.log(`${a} * ${i} = ${a*i}`);
// }
//=>Program # 10: Write a ts program to count number of digits in a number.
// var a:any =prompt("Count Number of Digits")
// var b:any = a.length
// console.log(`Your Numbers: ${a}`);
// console.log(`Number of Digits: ${b}`);
//=> Program # 11: Write a ts program to find first and last digit of a number.
// var num: any = prompt("Check first and Last Digit ");
// var firstNum: any = num;
// var lastNum: number = num % 10;
// console.log("Your Value: ", num);
// while (firstNum >= 10) {
//   firstNum = parseInt(firstNum / 10);
// }
// console.log("First Digit: ", firstNum);
// console.log("Last Digit: ", lastNum);
//=>Program #12: Write a ts program to find sum of first and last digit of a number.
// var num: any = prompt("Sum of first and Last Digit ");
// var firstNum: any = num;
// var lastNum: number = num % 10;
// console.log("Your Value: ", num);
// while (firstNum >= 10) {
//   firstNum = parseInt(firstNum / 10);
// }
// console.log("First Digit: ", firstNum);
// console.log("Last Digit: ", lastNum);
// console.log("Sum of First and Last Digit: ",  firstNum+lastNum);
//Program # 13:Write a ts program to swap first and last digits of a number.
// function swap(arra:number[]):any{
//     [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
//     return arra;
// }
// console.log(swap([1,2,3,4]));
// console.log(swap([1,2,3,4,5]))
//=>Program #14: Write a ts program to calculate sum of digits of a number.
// var user: any= prompt("Calculate Sum");
// var sum: any = 0;
// console.log("your value: ", user);
// while (user != 0) {
//   sum = sum + (user % 10);
//   user = parseInt(user / 10);
// }
// console.log("Sum of Result: ", sum);
//Program # 15:Write a ts program to calculate product of digits of a number.
// var userInput:any = prompt("Calculate Product")
// var product:any = 1
// console.log("Your Value", userInput);
// while (userInput!=0) {
//     product=product*(userInput%10)
//     userInput = parseInt(userInput/10)
// }
// console.log("Product of Result: ", product);
//=>Program # 16: Write a ts program to enter a number and print its reverse.
// var input:any = prompt("Reverse Number")
// var rem:any = 0;
// var rev:any = 0;
// console.log("Your Number: ", input);
// while(input>0){
//     rem=input%10;
//     rev = rev*10+rem
//     input=parseInt(input/10)
// }
// console.log("Reverse Number: ",rev);
//=>Program # 17:Write a ts program to check whether a number is palindrome or not.
// var num:any = prompt("Check Pakindrome")
// var  Onum:any = num
// var reverse:any = 0;
// while (num!=0) {
//     reverse =(reverse*10)+(num%10)
//     num = num/10
// }
// if(Onum == reverse){
// console.log(Onum," is a Palindrome Number");
// }
// else{
//     console.log(Onum," is not  a Palindrome Number");
// }
//=>Program # 18: Write a ts program to find frequency of each digit in a given integer.
// var N:any = 1122
// var D:any = 4
// function frequencyDigits(N:number, D:number):any{
//     var c:any = 0;
//     while(N>0){
//         if(N%2==D){
//         }
//         c++;
//         N=parseInt(N/10)
//     }
//     return c;
// }
// console.log(frequencyDigits(N, D))
// =>Program # 20:Write a ts program to print all ASCII character with their values.
// var i:any =0;
// function ascii():any{
// for (let i = 0; i <=255; i++) {
//     var p:any = String.fromCharCode(i) 
//    console.log(i + " "+ p);
// }
// }
// ascii()
//=>Program #21: Write a ts program to find power of a number using for loop.
var B = 5;
var e = 4;
var r = 1;
for (var i = 1; i <= e; i++) {
    r *= B;
}
console.log("Result: " + B + "^" + e + " = " + r);
