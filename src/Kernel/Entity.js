class Entity {
    constructor() {
        this.uid = new UID();
        this.events = new List(DomainEvent);
    }
}