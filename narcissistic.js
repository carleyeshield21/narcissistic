function narcissistic_nums(value){
    valueString = value.toString()
    valueStringLength = valueString.length

    arr = []
    for(i=0; i<=valueStringLength-1; i++){
        arr.push(parseInt(valueString[i]))
    }

    sum = 0
    for(i=0; i<=arr.length-1; i++){
        sum = sum + arr[i]**arr.length
    }

    if(sum == value){
        console.log(true)
    } else {
        console.log(false)
    }

}
narcissistic_nums(153)
narcissistic_nums(371)
narcissistic_nums(407)
narcissistic_nums(1634)
