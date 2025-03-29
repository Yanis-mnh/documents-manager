import Dossier from "../models/Dossier";
import { Link } from "react-router";
interface DossiersProps {
  dossiers?: Dossier[];
}

const Dossiers = ({ dossiers }: DossiersProps) => {
  return (
    <>
      {dossiers != undefined ? (
        dossiers.map((dossier) => <h1>{dossier.name}</h1>)
      ) : (
        <>
          <div>Dossier vide</div>
          <Link to={"/"}>Go back</Link>
        </>
      )}
    </>
  );
};

export default Dossiers;
