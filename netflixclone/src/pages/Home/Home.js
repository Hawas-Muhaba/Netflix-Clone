import React, { memo } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header';

const Home = memo(() => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
})

export default Home