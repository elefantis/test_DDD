class List {
    #elements
    #type
    constructor(type) {
        this.#type = type;
        this.#elements = [];
    }
    push(element) {
        if(element instanceof this.#type) {
            this.#elements.push(element);
        } else {
            throw Error("List type " + this.#type.name + " cannot accept element " + 
            element.constructor.name);
        }
    }
    all() {
        return this.#elements;
    }
    clear() {
        this.#elements = [];
    }
    get(index) {
        return this.#elements[index];
    }    
}