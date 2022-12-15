// Susikurkite objektų konstruktorių naudojant pavadinimu Book, kuris galės kurti objektus, kurie turės šias savybes (properties): name, author, year ir  
// class Book {
//     constructor(name, author, year) {
//         this.name = name;
//         this.author = author;
//         this.year = year;
//     }

// // metodus, kurių vienas parašys pavadinima ir autorių,
//     greetings() {
//         console.log(`Knygos ${this.name} autorius ${this.author}`);
//     }
// // o kitas parodys knygos amžių (senumą).
//     getAge() {
//         let getBookOld = book1.year - (new Date()).getFullYear();
//         console.log(`${getBookOld}`);
//     };
// };
// const book1 = new Book();
// console.log(`${book1.name} - ${book1.author} - ${book1.year}`);
// ---------------getter and setter----------
console.log('veikia');
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Rabbit extends Animal {
    constructor(name) {
        super(name);
        this.created = Date.now();
    }
    getCreated() {
        return this.created;
    }
}
let rabbit = new Rabbit("White Rabbit");





