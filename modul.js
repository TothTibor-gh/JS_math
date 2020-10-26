const generateArray = () => {
    const tomb = new Array(10);
    for (let i = 0; i < tomb.length; i++) {
        tomb[i] = (Math.floor(Math.random() * 10));
    };
    return tomb;
};

const evenSum = (tomb) => {
    let sum = 0;
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 === 0) {
            sum += tomb[i];
        }
    };
    return sum;
};