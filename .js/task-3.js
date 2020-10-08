class Storage {
    constructor(items) {
        this.items = items
    }
    getItems() {
        return this.items
    }
    addItem(item) {
        return this.items.push(item)
    }
    removeItem(item) {


        //! for (let i = 0; i < goods.length; i++) {
        //?     if (i >= 0)
        //?         return this.items.splice(1, 2)
        //? }


        // let index = this.items.indexOf(item);
        // if (index >= 0) {
        //     return this.items.splice(index, 1);
        // }
    }

}


console.log(typeof Storage);
// 'function'

const goods = [
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор'
];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

storage.addItem('Дроид');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

storage.removeItem('Антигравитатор');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

