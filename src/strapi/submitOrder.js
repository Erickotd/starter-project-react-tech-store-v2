// submit order
import axios from 'axios';
import url from '../utils/URL';

async function submitOrder({ name, total, items, stripeTokenID, userToken }) {
  console.log('in da backend-->', stripeTokenID);
  const response = await axios
    .post(
      `${url}/orders`,
      {
        name,
        total,
        items,
        stripeTokenID,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    )
    .catch((error) => console.log('-->', error));
  return response;
}

export default submitOrder;
