/**
 * Created by Antonio on 19/02/2017.
 */

import React from "react";
import Product from "./Product";

export default  class ProductList extends React.Component{
    render(){
        return(
            <div className='ui unstackable items'>
                <Product/>
            </div>
        );
    }
}