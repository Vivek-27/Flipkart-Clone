import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  styled
} from '@mui/material';
import React from 'react';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const SmallText = styled(Box)`
  font-size: 14;
  vartical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyledBadge = styled(LocalOfferIcon)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;

const ColumnText = styled(TableRow)`
  font-size: 14px;
  vartical-align: baseline;

  & > td {
    font-size: 14px;
    margin-top: 10px;
    border: none;
  }
`;
const ProductDetail = ({ product }) => {
  const fassured =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  const adURL =
    'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
        8 Rating & 1 Review
        <Box component="span">
          <img src={fassured} style={{ width: 77, marginLeft: 20 }} alt="" />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}{' '}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: '#878787' }}>
          <strike>₹{product.price.mrp} </strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: '#388e3c' }}>
          {product.price.discount}{' '}
        </Box>
      </Typography>
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography>
          <StyledBadge />
          Get extra 20% off upto ₹50 on 1 item(s) T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Purchase now & get 1 surprise cashback coupon in Future Know More
        </Typography>
        <Typography>
          <StyledBadge />
          Flat ₹25 Instant Discount on Paytm UPI. Min Order Value ₹300. Valid
          once per Flipkart account T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Flat ₹100 Cashback on Paytm Wallet. Min Order Value ₹1,000. Valid once
          per Paytm account T&C
        </Typography>
      </SmallText>
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Seller</TableCell>
            <TableCell>
              <Box component="span" style={{ color: '#2874fe' }}>
                SuperComNet
              </Box>{' '}
              <Typography>GST invoice available</Typography>
              <Typography>
                View more sellers starting from ₹{product.price.cost}
              </Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell colSpan={2}>
              <img src={adURL} style={{ width: 390 }} alt="Flipkartpoints" />
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;
