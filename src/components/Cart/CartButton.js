import classes from './CartButton.module.css';
import {useDispatch, useSelector} from 'react-redux'
import { uiActions } from '../../store/ui-slice';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  const cartHandler = (event) =>{
    event.preventDefault();
    dispatch(uiActions.toggle())
  }
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart.totalQuantity}</span>
    </button>
  );
};

export default CartButton;
