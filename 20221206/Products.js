// 1. Sukurkite objektų kūrimo konstruktorių (ES6 būdu) pavadinimu Products. Jo pagrindu sukurkite 5 produktus (apranga), kurie turės šias savybės: name, price, salePrice, category(bus kaip masyvas, jame vardijamos kategorijos, prie kurių jis priskiriamas, galimos "T-shirts", "Pants", "Sweaters", "Shoes") ir metodus, kurie atlikas šias funkcijas:
export class Products {
    constructor(name, price, initialSalePrice, category) {
        this.name = name;
        this.price = price;
        this.initialSalePrice = initialSalePrice;
        if (category) {
            this.category = category;
        }
    }
    get currentPrice(){
        return (this.amIOnSale() ? this.initialSalePrice : this.price);
    }

    get salePrice(){
        if(this.initialSalePrice < 0){
            return false;
        }
        return Math.round(this.initialSalePrice / this.price * 100) + "%";
    }
    set salePrice(amount){
        this.initialSalePrice = amount;
    }

    amIOnSale(){
        if(this.initialSalePrice <= 0){
            return false;
        }
        return true;
    }
    displayMe(){
        return "Title: " + this.name + ", Current price: " + this.currentPrice + "EUR";
    }
    getCategory() {
        return this.category;
    }
    setCategory(category) {
        if (!ALLOWED_CATEGORIES.includes(category)) {
            throw new Error('Whoops! Category not found.', {
                cause: {
                    category
                }
            });
        }
        this.category = category;
        return this;
    }
}

// 4. Patobulinkite objektų kūrimo kontsruktoriaus Products metododą aptartą 1.2. punkte, kad jis turėtų tokį funkcionalumą: patikrins ar produktas turi akciję kainą ir jeigu turi gražins tą nuolaidą kaip procentinę išraišką (pvz. produkto kaina 10 Eur, akcijinė kaina 7 Eur, gražins "Produktui "Nike pants" taikoma 30% nuuolada").