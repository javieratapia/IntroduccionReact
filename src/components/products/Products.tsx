import Product from "../product/Product";
import productsData from "../../productsData.json";
import styles from "./Products.module.css"
// {`col ${styles.containerList}`}
interface ProductData {
    name: string;
    image: string;
    price: number;
}

const Products = () => {
  const productos: ProductData[] = productsData
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {productos.map((item: ProductData, index: number) => (
        <div className={`col ${styles.borderList}`} key={index}>
          <Product
            cardTitle={item.name}
            cardImg={item.image}
            cardPrice={item.price}
          />
        </div>
      ))}
    </div>
  );
};

// productsData.map(() =>
// <div className="row row-cols-1 row-cols-md-3 g-4">
// <div className="col" ><Product cardTitle={productsData.name} cardImg={productsData.img} cardPrice={productsData.price} /></div>
// </div>
// );
export default Products;
