export async function getStaticProps() {
    const dataTable = [
        {
            id: 1,
            product_name: 'Safayet Hossain',
            product_code: '101',
            product_icon: '/laptop.svg',
            product_price : 1500,
            product_category: 'Laptop10',
            product_remarks : 'asus'
           
        },
        {
            id: 2,
            product_name: 'Safayet Hossain',
            product_code: '101',
            product_icon: '/laptop.svg',
            product_price : 1500,
            product_category: 'Laptop10',
            product_remarks : 'asus'
        },
        {
            id: 3,
            product_name: 'Safayet Hossain',
            product_code: '101',
            product_icon: '/laptop.svg',
            product_price : 1500,
            product_category: 'Laptop10',
            product_remarks : 'asus'
        },
        {
            id: 4,
    
            product_name: 'Safayet Hossain',
            product_code: '101',
            product_icon: '/laptop.svg',
            product_price : 1500,
            product_category: 'Laptop10',
            product_remarks : 'asus'
        },

    ]

    return {
        props:{
            dataTable:dataTable,
        }
    }


}




import React, { Component,Fragment } from 'react';
import ListProduct from '../component/ListProduct';
import NavMenuDesktop from '../component/NavMenuDesktop';

class Product extends Component {
    render() {
        return (
            <Fragment>

                <NavMenuDesktop/>
                <ListProduct
                
                dataTable ={this.props.dataTable}
                />
                
            </Fragment>
        );
    }
}

export default Product;