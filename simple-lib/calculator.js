const sum = (a, b) => {
    const n1 = parseInt(a)
    const n2 = parseInt(b)

    console.log(n1, n2)

    if (isNaN(n1) || isNaN(n2)) {
        throw new Error('Please check your input')
    }

    return n1 + n2
}

module.exports = {
    sum
}