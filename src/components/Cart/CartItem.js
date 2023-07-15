import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const { name, quantity, totalPrice, price, id } = props.item;
  const dispatch = useDispatch();
  const cartItemAddHandeler = () => {
    dispatch(cartActions.addItemToCart({title: name, id, price}))
  };
  const cartItemRemoveHandler = () => {
    dispatch(cartActions.removeItemFromCart(id))
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={cartItemRemoveHandler}>-</button>
          <button onClick={cartItemAddHandeler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
