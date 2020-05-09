import React, { Component } from 'react';
import ProductCard from './productCard/productCard';

class main extends Component {
    render() {
        const products  = this.props.products;
        return (
            <div className="container" >
                <div className="row">
                    {
                        products.map((product, index) => (
                            <ProductCard id={product.id} name={product.name} description={product.description} key={index} deleteProduct={this.props.deleteProduct} updateProduct={this.props.updateProduct}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}
export default main;