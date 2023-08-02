import ImageGallery from "./Components/ImageGallery";
import Courses from "./Components/Courses";
import Navbar from "./Components/Navbar";
import Testimonials from "./Components/Testimonials";
import Location from "./Components/Location";
import Benefits from "./Components/Benefits";
import Footer from "./Components/Footer";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useContext } from 'react';
import { ModalContext } from "./Context/ModalContext";
import Modal from "./Components/Modal";

function App() {

  const { isOpen } = useContext(ModalContext)

  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Courses />
        <Testimonials />
        <ImageGallery />
        <Location />
        <Benefits />
        <Footer />
        {isOpen && <Modal />}
      </main>
    </>
  )
}

export default App;