let num=+prompt("Enter starting Number : ")
let num1=+prompt("Enter Ending Number : ")
// let count=0

for(let i=num;i<=num1;i++){
    let count=0
    for(let j=2;j<i;j++){
        if(i%j==0){
            count=1
            break
        }
    }
    if (count==0){
        console.log(i)
    }
}//5-->30
