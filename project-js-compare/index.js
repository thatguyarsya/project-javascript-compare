const A = {
    name: 'alps',
    age: '10'
} 
const B = {
    name: 'bridges',
    age: '20'
}

switch (A.age > B.age) {
    case true:
        console.log('alps is older')
        break
    case false:
        console.log('alps is younger')
        break
    default:
        console.log('I like trains')
}