import React, { useEffect } from 'react';

import { getProducts } from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
//import components
import Navbar from './Navbar';
import Banner from './Banner';
import { Box, styled } from '@mui/material';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

const Component = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products2 = products.slice(Math.floor(Math.random() * 18), 26);
  const products1 = products.slice(Math.floor(Math.random() * 10), 17);
  const products5 = products.slice(Math.floor(Math.random() * 23), 36);
  const products3 = products.slice(Math.floor(Math.random() * 36), 43);

  return (
    <>
      <Navbar />
      <Component>
        <Banner />
        <MidSlide products={products2} title="Deal of the Day" timer={true} />
        <MidSection />
        <Slide products={products2} title="Discounts for You" timer={false} />
        <Slide products={products1} title="Suggesting Items" timer={false} />
        <Slide products={products3} title="Top Selection" timer={false} />
        <Slide products={products2} title="Recommended Items" timer={false} />
        <Slide products={products1} title="Trending Offers" timer={false} />
        <Slide products={products3} title="Season's top picks" timer={false} />
        <Slide
          products={products5}
          title="Top Deals on Accessories"
          timer={false}
        />
      </Component>
    </>
  );
};

export default Home;
