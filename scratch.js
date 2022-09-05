let queueTime = ([0,0,1,0,9,0,0,6])
sumq = queueTime.reduce(
    (a, b) => a + b,
)
// console.log(sumq)
while(sumq != 0){
    for(i=0; i<=queueTime.length-1; i++){
        // console.log(queueTime[i])
        let j = i
        while(queueTime[j] == 0){
            j++
            if(queueTime[j] != 0){
                // console.log(queueTime[j])
                let k = j
                while(queueTime[k+1] == 0){
                    k++
                    let counter = 0
                    if(queueTime[k+1] != 0){
                        console.log(queueTime[j],queueTime[k+1])
                        if(queueTime[k+1] == NaN){
                            break
                        }
                        // =====
                        queueTime.splice(queueTime.indexOf(queueTime[j]),1,queueTime[j]-1)
                        queueTime.splice(queueTime.indexOf(queueTime[k+1]),1,queueTime[k+1]-1)
                        // =====
                        counter++

                        sumq = queueTime.reduce(
                            (a, b) => a + b,
                        )
                    }
                    // break
                }
            }

            console.log(queueTime)
            // console.log(sumq)
            // break
        }
    }
}