const pow = (szam, hatvanya) => {
    let sum = 1;
    for (let i = 0; i < hatvanya; i++) {
        sum *= szam; 
    }
    return sum;
};

module.exports = {
    pow
};
