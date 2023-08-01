import ImageGallery from "./Components/ImageGallery";
import Courses from "./Components/Courses";
import Navbar from "./Components/Navbar";
import Testimonials from "./Components/Testimonials";
import Location from "./Components/Location";
import Benefits from "./Components/Benefits";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Courses />
        <Testimonials />
        <ImageGallery />
        <Location />
        <Benefits />
      </main>
    </>
  )
}

export default App;