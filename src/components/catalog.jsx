import "./catalog.css";
import Product from "./product";

const Catalog = () =>{
    return(
    <div className="catalog">
        <h1 className="header">Catalog</h1>

        <div className="prod">
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
        
        
        
        
    </div>
    );
}

export default Catalog;