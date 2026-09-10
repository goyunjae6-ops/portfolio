import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Works from "./components/sections/Works";
import Process from "./components/sections/Process";
import CursorDot from "./components/common/CursorDot";
import Chatbot from "./components/common/Chatbot";

function App() {
  return (
    <>
      <CursorDot />
      <Header />
      <main>
        <Hero />
        <About />
        <Works />
        <Process />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
