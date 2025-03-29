class Item {
  name: String;
  dir: String;
  constructor(name: String, dir: String) {
    this.name = name;
    this.dir = dir;
  }
  change_name(new_name: String) {
    this.name = new_name;
  }
  delete() {
    console.log("file deleted");
  }
  clone() {}
}

export default Item;
