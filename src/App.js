import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux'
import { sendCartData, fetchCartData } from './store/cart-action';
import Notification from './components/UI/Notification';

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch])

  useEffect(() => {
    console.log('dispatch', cart.isChanged)
    if(cart.isChanged){
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch])
  return (
    <Fragment>
      { notification && <Notification status={notification.status} title={notification.title} message={notification.message} /> }
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
