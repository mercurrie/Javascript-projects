const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
    get appetizers(){
      return this._courses.appetizers;
    },
    get mains(){
      return this._courses.mains;
    },
    get desserts(){
      return this._courses.desserts;
    },
    set appetizers(app){
      this._courses.appetizers = app;
    },
    set mains(main){
      this._courses.mains = main;
    },
    set desserts(des){
       this._courses.desserts = des;
    },

  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },

  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice
    }
    return this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName){
    var dishes = this._courses[courseName];
    var rndm = Math.floor(Math.random() * dishes.length);
    return dishes[rndm];
  },

  generateRandomMeal(){
    var appetizer = this.getRandomDishFromCourse('appetizers');
    var main = this.getRandomDishFromCourse('mains');
    var desserts = this.getRandomDishFromCourse('desserts');
    var price = appetizer.price + main.price + desserts.price;

    return `App: ${appetizer.name}, Main: ${main.name}, Dessert: ${desserts.name}, Price: ${price}`;
  }
};

menu.addDishToCourse('appetizers', 'Fried Pickles', 3);
menu.addDishToCourse('mains', 'Pasta', 5);
menu.addDishToCourse('desserts', 'Cake', 4);

console.log(menu.generateRandomMeal());
