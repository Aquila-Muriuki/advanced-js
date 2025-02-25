function solution(A)

{
    const N= A.length

    const target=10

    const totalBricks=A.reduce((sum,bricks)=>sum+bricks,0) //redece method to get totall number of bricks

    const expectedTotal=N*target


    if(totalBricks!=expectedTotal){
        return -1
    }


    let moves=0
    let balance=0

    for(let i= 0; i<N; i++){
        balance+=A[i]-target
        moves+=Math.abs(balance)
    }
    return moves

}

console.log(solution([10, 10])); // Output: 0
console.log(solution([0, 20])); // Output: 10
console.log(solution([30, 0, 0])); //output: 40
console.log(solution([11,9,8,12])); //output: 4
console.log(solution([11,11,11]));//output: 3
console.log(solution([10,10,11]));//output: -1
