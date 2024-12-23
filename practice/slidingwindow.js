arr = [7,4,9,6,2,8,11,17]
n=8
l=33
for(i=0; i<n-2; i++){
    for(j=1; j<n-1; j++){
        for(k=2; k<n; k++){
            if(arr[i]+arr[j]+arr[k] === l){
                console.log(l)
            }else{
            console.log(arr[i] + arr[j] + arr[k])
        }
    }
}
}