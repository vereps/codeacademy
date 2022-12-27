import { Products } from "./Products.js";
const ALLOWED_CATEGORIES = ['T-shirts', 'Pants', 'Sweaters', 'Shoes'];
// 2. Sukurkite masyvą, pavadinimo currentProducts, kurima bus patalpinti 5 produktai;
const currentProducts = [
    new Products('MOversized printed T-shirt', 15.99, 6.99, 'T-shirts'),
    new Products('5-pack Slim Fit T-shirts', 29.99, 0, 'T-shirts'),
    new Products('Cotton joggers', 7.99, 4.99, 'Pants'),
    new Products('Jacquard-knit jumper', 29.99, 22.99, 'Sweaters'),
    new Products('Warm-lined hi-tops', 34.99, 0, 'Shoes'),
];

// 1.1. pateiks produkto prisistatymą su pavadinimu ir kaina (arba akcijine kaina) (Pvz. "Nike pants": 59.00 Eur");

function filterByPrice(arr, from, to) {
    let output = arr.filter(currentProducts => currentProducts.price >= from && to >= currentProducts.price);
    return output;
}
console.log(filterByPrice(currentProducts, 0, 9999));

// 1.2. patikrins ar produktas turi akciję kainą ir jeigu turi gražins akcijinę kainą, jeigu neturi, grąžins tekstą, kuriame nurodoma, kad šiam produktui akcija netaikoma;

// 3. Filtrus, kurie padės vartotojams filtruoti prekes pagal:

// 3.1. Kainą (turi būti sukuriama funkcija (turės tris argumentus pvz.: 1 argumentas - produktai, 2 - visada bus skaičius, 3 argumentas - gali būti skaičius arba string "nuo" / "iki"), kuri leis vartotojui nurodyti:
//  kainą nuo/iki (funkcja priims tis argumentus: produktų masyvas, kaina nuo, kaina iki)
//  arba nurodyti kainą nuo ir rodys prekes nuo tos kainos iki maksimalios galimos
//  arba kainą iki ir rodys prekes nuo minimalios galimos iki tos kainos kurią nurodė;



// 3.2. Kategoriją (turi būti sukuriama funkcija, kuri leis vartotjui kaip argumentą nurodyti vieną iš kategorijų ir jam atvaizduos tas prekes, kurios turi tą kategoriją);
function filterByCategory(products, category) {
    let result = [];
    products.forEach(element => {
        if (element.category.includes(category)) {
            result.push(element);
        }
    });
    return result;
}
console.log(filterByCategory(currentProducts, "T-shirts"));

// 3.3. Akcijas, kuri parodys tas prekes, kurios turi akcijinę kainą;
function filterByOnSale(products) {
    return products.filter(p => p.amIOnSale());
}
console.log(filterByOnSale(currentProducts));