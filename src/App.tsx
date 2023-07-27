import "./App.css";
import { Card } from "./features/card-swap/components/Card";
import { UploadMap } from "./features/upload-values/components/UploadMap";

function App() {
  return (
    <>
      <UploadMap />
      <Card />
    </>
  );
}

export default App;
