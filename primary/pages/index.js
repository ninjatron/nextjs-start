import Head from 'next/head'
import styled from 'styled-components'
import { useState } from 'react'; 
// custom components
import fakeData from './Data';
import Banner from './containers/Banner';
import Posts from './containers/Posts';
import Footer from './containers/Footer';
import Filters from './containers/Filters';

const HomeWrapper = styled.div`
  background: #eff0f1;
  box-shadow: 0 0 0 13px #333;
  border: 20px solid #000;
  width: 375px;
  border-radius: 20px;
  margin: 50px auto;
  height: 740px;
  overflow: scroll;
  overflow-x: hidden;
`;

export default function Home() {
  return (
    <HomeWrapper>
      <Head>
        <title>Primary.org</title>
        <meta name="description" content="Spider doesn't care, but visitors will."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Filters />
      <Posts posts={fakeData} />
      <Footer />
    </HomeWrapper>
  )
}
