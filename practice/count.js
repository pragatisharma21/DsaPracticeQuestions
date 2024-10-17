num = 4
count = 1
for(i=0; i<num; i++){
    let bag = ""
    for(let j = 0; j<num; j++){
        bag = bag + count + " "
        count++
    }
    console.log(bag)
}
