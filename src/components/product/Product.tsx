import styles from './Product.module.css'

interface ProductData {
    cardTitle: string,
    cardImg: string,
    cardPrice: number
}
const Product = ({cardImg,cardTitle,cardPrice}: ProductData) => {
  return (
      <div className="card h-100">
        <img src={cardImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
        </div>
        <div className= {`card-footer ${styles.priceBackground}`}>
          <small className={`${styles.priceLabel}`}>{cardPrice}</small>
        </div>
      </div>
  );
};

export default Product;
