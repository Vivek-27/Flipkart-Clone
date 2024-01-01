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

  const products1 = products.slice(0, 8);
  const products2 = products.slice(7, 16);
  console.log(products);

  return (
    <>
      <Navbar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true} />
        <MidSection />
        <Slide products={products1} title="Discounts for You" timer={false} />
        <Slide products={products2} title="Suggesting Items" timer={false} />
        <Slide products={products1} title="Top Selection" timer={false} />
        <Slide products={products} title="Recommended Items" timer={false} />
        <Slide products={products2} title="Trending Offers" timer={false} />
        <Slide products={products} title="Season's top picks" timer={false} />
        <Slide
          products={products}
          title="Top Deals on Accessories"
          timer={false}
        />
      </Component>
    </>
  );
};

export default Home;
