import Item from "./Item";

class Fichier extends Item {
  exprirationDate?: Date;
  constructor(name: String, dir: String, expirationDate?: Date) {
    super(name, dir);
    this.exprirationDate = expirationDate;
  }
  change_name(new_name: String) {
    this.name = new_name;
  }
  delete() {
    console.log("file deleted");
  }
  clone() {}
}

export default Fichier;
