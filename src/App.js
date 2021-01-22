import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { GlobalStyle } from './styled'

import Layout from './components/Layout'
import Home from './containers/Home'
import About from './containers/About'
import Portfolio from './containers/Portfolio'
import Contact from './containers/Contact'
import PhotosGallery from './containers/PhotosGallery'
import ScrollToTop from './components/ScrollToTop'
import VideosGallery from './containers/VideosGallery'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Layout>
            <Route path="/" exact component={Home} />
            <Route path="/sobre" exact component={About} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/contato" exact component={Contact} />
            <Route path="/galeriadefotos" exact component={PhotosGallery} />
            <Route path="/galeriadevideos" exact component={VideosGallery} />
          </Layout>
        </Switch>
      </ScrollToTop>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
