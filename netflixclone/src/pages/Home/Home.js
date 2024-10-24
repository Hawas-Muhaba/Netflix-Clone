import React, { memo } from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Rowlist from '../../components/Rows/Rowlist/Rowlist';
const Home = memo(() => {
  return (
    <>
      <Header />
      <Banner />
      <Rowlist />
      <Footer />
    </>
  );
})

export default Home