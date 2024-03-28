import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import List from '../components/List'
import Parallax from '../components/Parallax'
import Footer from '../components/Footer'
import Videos from '../components/Videos'

const Home = () => {
  return (
    <>
    <Header />
    <Body />
    <Videos />
    <List />
    <Parallax />
    <Footer />
    </>
  )
}

export default Home