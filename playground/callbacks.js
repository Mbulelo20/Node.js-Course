const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)

}

add(1,7, (sum) => {
    console.log(sum)
})