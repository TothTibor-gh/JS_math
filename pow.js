// 5. A tulajdonos feladata lesz a főprogram készítése, valamint egy modul készítése, 
// ami egy metódust tárol, melynek feladata a hatványozás. 
// (Vár 2 szám paramétert, és iteratívan kiszámítja az a^b számot, és visszatér vele!)

const pow = (szam, hatvanya) => {
    let sum = 1;
    for (let i = 0; i < hatvanya; i++) {
        sum *= szam; 
    }
    return sum;
};

console.log(pow(2, 5));
