function findLargestNum(A){
    let largestNumSoFar = A[0];
    for(let i = 0; i < A.length; i++){
        if(A[i] > largestNumSoFar){
            largestNumSoFar = A[i];
        }
    }
    return largestNumSoFar;
}
console.log(findLargestNum([9, 2, 3, 4, 5]));