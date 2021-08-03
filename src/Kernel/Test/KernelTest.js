
class Dog { constructor() {}}

class Cat { constructor() {}}

(function() {
    var entity = new Entity();
    console.log(entity);    
    console.log(entity.uid);    
    console.log(entity.events);    


    var list = new List(Dog);
    list.push(new Dog());
    //list.push(new Cat());
})();