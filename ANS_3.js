var num = 1234;
var newNum = 0;
while(num != 0){
    let rem = num%10;
    newNum = newNum*10 + rem;
    num = Math.floor(num/10);
}
console.log(newNum);