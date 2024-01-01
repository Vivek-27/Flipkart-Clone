import React, { useEffect, useState } from 'react';
import { Box, InputBase, List, ListItem, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';
const SearchContainer = styled(Box)(({ theme }) => ({
  background: '#fff',
  width: '38%',
  borderRadius: '2px',
  marginLeft: '10px',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}));
const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background: #ffffff;
  color: #000;
  margin-top: 36px;
`;

const Search = () => {
  const [text, setText] = useState();

  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getText = (text) => {
    setText(text);
  };

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products, brands and more"
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper>
          {products
            .filter((products) =>
              products.title.longTitle
                .toLowerCase()
                .includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link
                  to={`/product/${product.id}`}
                  onClick={() => setText('')}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
