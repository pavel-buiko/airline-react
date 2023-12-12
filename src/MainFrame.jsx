import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Search from "./components/Search/Search"
import Support from "./components/Support/Support"
import Info from "./components/Info/Info"
import Lounge from "./components/Lounge/Lounge"
import Travelers from "./components/Travellers/Travelers"
import Subscribers from "./components/Subscribers/Subscribers"
import Footer from "./components/Footer/Footer"

export const MainFrame = () => {
    return (
    <>
      <Navbar />
       <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
      <Footer />
    </>
    )
}