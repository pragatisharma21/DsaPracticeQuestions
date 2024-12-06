arr = [1,2,3,4,5,6,7]
n = arr.length;

let bag = ""
 for(i=0; i<n/2; i++){
let swap = arr[i]
arr[i]= swap
swap = arr[n-i-1]
bag += swap
 }
 console.log(bag)

