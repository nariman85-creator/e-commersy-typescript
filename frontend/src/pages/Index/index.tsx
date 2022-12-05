import React from 'react'
import { Arrivals } from '../../components/Arrivals/Arrivals';
import { Banners } from '../../components/Banners/Banners';
import { Brands } from '../../components/Brands';
import { Fashion } from '../../components/Fashion';
import { Hero } from '../../components/Hero/Hero';
import { Instagram } from '../../components/Instagram';
import { Mobile } from '../../components/Mobile-app';
import { Modal } from '../../components/Modal/Modal';
import { Popular } from '../../components/PopularCategory/Popular';
import { Sale } from '../../components/Sale/Sale';
import { Services } from '../../components/Services';
import { Subscribes } from '../../components/Subscribes';
import { TopCategory } from '../../components/TopCategory/TopCategory';
import { Trending } from '../../components/Trending/Trending';

function Index() {
  return (
    <>
        <Hero />
        <TopCategory />
        <Arrivals />
        <Banners />
        <Popular />
        <Trending />
        <Sale />
        <Mobile />
        <Services />
        <Instagram />
        <Fashion />
        <Brands />
        <Subscribes />
        <Modal />
    </>
  );
}

export default Index