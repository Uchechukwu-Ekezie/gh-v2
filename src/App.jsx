import Router from "./Router";
import Footer from "./components/Footer";
import MetaTags from "./components/MetaTags";

function App() {
  return (
    <>
      <MetaTags />
      <div>
        <Router />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
