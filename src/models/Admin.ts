import Proprio from "./Proprio";

class Admin extends Proprio {
  proprio: Proprio[];
  constructor(nom: String, prenom: String, proprio: Proprio[]) {
    super(nom, prenom);
    this.proprio = proprio;
  }
  add_proprio() {}
  delete_proprio() {}
  lister_proprio() {}
}

export default Admin;
