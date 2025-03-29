import { Link } from "react-router";
import Dossier from "../models/Dossier";

interface props {
  dossier: Dossier;
}

const Doc = ({ dossier }: props) => {
  return (
    <>
      <Link className="grid-item" to={"/dossier"}>
        <img src="src/assets/icons/dossier.png"></img>
        <p>{dossier.name}</p>
      </Link>
    </>
  );
};

export default Doc;
