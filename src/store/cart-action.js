
import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () =>{
    return async(dispatch) => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:8080/api/cart/1')
            if (!res.ok) throw new Error('Something went wrong');
            return await res.json();
        }
        try {
            const data = await fetchData();
            data.items = JSON.parse(data.items);
            dispatch(cartActions.replaceCart(data));
        } catch (error) {
            
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: error.message
            }));
            
        } finally {
            setTimeout(() => dispatch(uiActions.hideNotification({})), 5000);
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await fetch('http://localhost:8080/api/cart/upsert',
                {
                    headers: {
                        'Content-type': 'application/json'
                    },
                    method: 'PUT',
                    body: JSON.stringify({ ip: 'localhost', items: cart.items, totalQuantity: cart.totalQuantity  })
                })
            if (!response.ok) throw new Error('Something went wrong');
            return await response.json();
        }

        try {
            dispatch(uiActions.showNotification({
                status: 'pending',
                title: 'Pending!',
                message: 'Sending items to Cart.'
            }));

            const data = await sendRequest();

            if(!cart.id)
                dispatch(cartActions.updateCartId(data.id));

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Your cart has been updated.'
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: error.message
            }));
        } finally {
            setTimeout(() => dispatch(uiActions.hideNotification({})), 5000);
        }
    }
}