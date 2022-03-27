export default class Entity {
  public id: number;

  constructor() {
    this.id = generateUniqueId();
  }
}

let uniqueId = 0;
function generateUniqueId() {
  return uniqueId++;
}