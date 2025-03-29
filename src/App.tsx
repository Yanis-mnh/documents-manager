import Doc from "./components/Doc";
import Database from "@tauri-apps/plugin-sql";
import Dossier from "./models/Dossier";

function App() {
  const dossier1 = new Dossier("test", "dir", []);
  const dossier2 = new Dossier("test", "dir", []);
  const dossier3 = new Dossier("test", "dir", []);
  return (
    <>
      <div className="main">
        <div className="grid-container">
          <Doc dossier={dossier1}></Doc>
          <Doc dossier={dossier2}></Doc>
          <Doc dossier={dossier3}></Doc>
          <Doc dossier={dossier3}></Doc>
          <Doc dossier={dossier3}></Doc>
        </div>
      </div>
    </>
  );
}

export default App;
