// This is the link to this JavaScript challenge from codewars.com
// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

function diamond(n){

    // We assign a variable string to an asterisk then repeat it 'n' times then assign it to a variable str    
    string = '*'
    
        if(n<=0 || n % 2 == 0){
        console.log('n should be a non-zero and positive odd integer')
        } else {
        
            string = '*'
            str = string.repeat(n);
        
            // We have assigned the index i to parse it to an integer, then see the notes below for the relationship of the indices
            strlength = str.length
            i = parseInt(strlength/2)
            j = i + 1
            k = i - 1
            // console.log(i)
        
            if(strlength % 2 == 1){
            while(i>=1){
                // console.log(k, i, j)
                console.log(`${'\xa0'.repeat(k)} ${str.slice(i,j)}\n`)
                i--
                k--
                j++
            }
        
            console.log(`${str}\n`)
            
            i = 1
            j = strlength-1
            k = 0
            while(i<=parseInt(strlength/2)){
                // console.log(k, i, j)
                console.log(`${'\xa0'.repeat(k)} ${str.slice(i,j)}\n`)
                i++
                j--
                k++
            }
          }
        
        }
    
    }
    diamond(11)

// To see the relationship of the indices that we will use in the while condition, it is easier to output first manually so we can clearly see the increments or decrements in every iteration, we have used the variables i, j, and k.
// console.log(`${'\xa0'.repeat(2)} ${str1.slice(3,4)}`)
// console.log(`${'\xa0'.repeat(1)} ${str1.slice(2,5)}`)
// console.log(`${'\xa0'.repeat(0)} ${str1.slice(1,6)}`)
// console.log(str1)
// console.log(`${'\xa0'.repeat(0)} ${str1.slice(1,6)}`)
// console.log(`${'\xa0'.repeat(1)} ${str1.slice(2,5)}`)
// console.log(`${'\xa0'.repeat(2)} ${str1.slice(3,4)}`)