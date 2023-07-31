import Courses from "./Components/Courses";
import Navbar from "./Components/Navbar";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-10">
        <Courses />
        <Testimonials />
      </main>
    </>
  )
}

export default App;