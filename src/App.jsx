import { useState } from "react";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import "./index.css";
function App() {
  const [isLoader, setIsLoader] = useState(false);
  return (
    <>
      {!isLoader && <LoadingScreen onComplete={() => setIsLoader(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoader ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      ></div>
    </>
  );
}

export default App;
