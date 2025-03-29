import Dossier from "./Dossier";

class Proprio {
  nom: String;
  prenom: String;
  dossier?: Dossier[];

  constructor(nom: String, prenom: String, dossier?: Dossier[]) {
    this.nom = nom;
    this.prenom = prenom;
    this.dossier = dossier;
  }
  ajouter_dossier(dossier: Dossier): void {
    if (this.dossier != undefined) this.dossier.push(dossier);
    else this.dossier = [dossier];
  }
  delete_dossier(dossier: Dossier): void {
    dossier.delete();
  }
  lister_dossier(): Dossier[] {
    if (this.dossier != undefined) return this.dossier;
    else return [];
  }
}

export default Proprio;
