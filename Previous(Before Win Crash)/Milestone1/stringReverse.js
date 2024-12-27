const string1='Sayem is my name'

// let reverse= string1.split('').reverse().join('')

// console.log(reverse);

let reverse=''
for(let i=0;i<=string1.length;i++){
    
    reverse=string1[i]+reverse;
  
    // console.log(string1[i]);
}
console.log(reverse);
