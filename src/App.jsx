import React from 'react'
import Experties from './components/Experties/Experties'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import People from './components/People/People'
import Portfolio from './components/Portfolio/Portfolio'
import Work from './components/Work/Work'
import css from './styles/App.module.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PortFolioDetail from './components/Portfolio/PortfolioDetail/PortFolioDetail'
const App = () => {
  //don't forget to add font link in index.html
  return (
<div className={`bg-primary ${css.container}`}>
      <Router>
        <Routes>
          <Route path="/ProjectDetail/:id" element={<PortFolioDetail/>} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Experties />
                <Work />
                <Portfolio />
                <People />
                <Footer/>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App