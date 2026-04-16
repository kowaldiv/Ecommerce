import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/home-page/Home";

function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
