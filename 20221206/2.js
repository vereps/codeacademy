console.log(`-------task1-----------`);
//     Perrašykite aukščiau pateiktą funkciją "plusPlus" taip, kad joje nebūtų naudojamas joks ciklas ar kitokios JS fukcijos.
// Su If else
function plusPlus(num, x) {
    let i = 0;
    if (i < x) {
        i = i + x;
        num = num + i;
    }
    return num;
}
console.log(plusPlus(10, 3));