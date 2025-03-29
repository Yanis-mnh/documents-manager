import Fichier from "./Fichier";
import Item from "./Item";

class Dossier extends Item {
  fichier: Fichier[];
  dossier?: Dossier[];
  constructor(
    name: string,
    dir: string,
    fichier: Fichier[],
    dossier?: Dossier[]
  ) {
    super(name, dir);
    this.fichier = fichier;
    this.dossier = dossier;
  }
  add_file(file: Fichier) {
    this.fichier.push(file);
  }
  delete_file(file: Fichier): Fichier[] {
    this.fichier = this.fichier.filter((item) => item != file);

    return this.fichier;
  }
  get_files(): Fichier[] {
    return this.fichier;
  }
}

export default Dossier;
