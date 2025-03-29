import { useState } from "react";

const SideBar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="sideBarContainer">
      <button
        className={active ? "btn_nav active" : "btn_nav inactive"}
        onClick={() => setActive(!active)}
      >
        {active ? (
          <img src="src/assets/icons/close.png"></img>
        ) : (
          <img src="src/assets/icons/menu.png"></img>
        )}
      </button>

      <nav className={active ? "active" : "inactive"}>
        <ul>
          <li></li>
          <li>
            <button>Ajouter Document</button>
          </li>
          <li>
            <button>Supprimer Dossier</button>
          </li>
          <li>
            <button>Add dossier</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
