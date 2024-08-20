arr = [0,1,0,1,1,1,0,2,2,0]
zerocount = 0
onecount = 0
twocount = 0
for(i=0; i<arr.length; i++){
    if(arr[i] === 0){
        zerocount++
    }
    else if(arr[i] === 1){
        onecount++
    }
    else if(arr[i] === 2){
        twocount++
    }

}
console.log(zerocount , onecount, twocount) 