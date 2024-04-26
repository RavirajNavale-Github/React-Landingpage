import "./App.css";
// import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path:'/',
  //     element:<Hero/>
  //   },
  //   {
  //     path:'/features',
  //     element:<Features/>
  //   },
  //   {
  //     path:'/about',
  //     element:<About/>
  //   },
  //   {
  //     path:'/services',
  //     element:<Services/>
  //   },
  //   {
  //     path:'/gallery',
  //     element:<Gallery/>
  //   },
  //   {
  //     path:'/testimonials',
  //     element:<Testimonials/>
  //   },
  //   {
  //     path:'/team',
  //     element:<Team/>
  //   },
  //   {
  //     path:'/contact',
  //     element:<Contact/>
  //   },
  // ])

  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Features/>
      <About/>
      <Services/>
      <Gallery/>
      <Testimonials/>
      <Team/>
      <Contact/>

      {/* <RouterProvider router={router}/> */}
    </div>
  );
}

export default App;
