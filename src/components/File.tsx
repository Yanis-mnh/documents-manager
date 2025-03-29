import Fichier from "../models/Fichier";

const File = (nom: String, dir: String) => {
  const fichier = new Fichier(nom, dir);
  return <div>File</div>;
};

export default File;
