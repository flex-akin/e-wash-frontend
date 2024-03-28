import AppRouter from "./routes/AppRouter";
import "./App.css";
import "./fonts/Satoshi-Black.ttf";
import "./fonts/Satoshi-BlackItalic.ttf";
import "./fonts/Satoshi-Light.ttf";
import "./fonts/Satoshi-Bold.ttf";
import "./fonts/Satoshi-Italic.ttf";
import "./fonts/Satoshi-Medium.ttf";
import "./fonts/Satoshi-MediumItalic.ttf";
import "./fonts/Satoshi-Regular.ttf";
import "./fonts/Satoshi-LightItalic.ttf";
import "./fonts/Satoshi-BoldItalic.ttf";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      <AppRouter />
    </div>
  );
}

export default App;
