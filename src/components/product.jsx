import "./product.css";
import QuantityPicker from "./quantityPicker";
function Product() {
  return (
    <div className="product">
      <h3>Lures</h3>
      <div className="image">
      <img src="/images/lures.jpg"></img>
      </div>
      <p>Handcrafted Quality Lures</p>

      <label>10.00</label>
      <label>20.00</label>
      <QuantityPicker></QuantityPicker>
    
   
      
    </div>
  );
}

export default Product;
