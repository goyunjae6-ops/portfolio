import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Works from "./components/sections/Works";
import Reviews from "./components/sections/Reviews";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Works />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}

export default App;
