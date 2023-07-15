import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [{
  id: 'p1',
  title: 'My First Book',
  price: 6,
  description: 'This is a first book - amazing!'
},{
  id: 'p2',
  title: 'My Seconsd Book',
  price: 8,
  description: 'This is a second book - amazing!'
}]
const Products = (props) => {

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)
        }
      </ul>
    </section>
  );
};

export default Products;
