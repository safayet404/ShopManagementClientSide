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




import React, { Component } from 'react';
import ListReport from '../component/ListReport';
import NavMenuDesktop from '../component/NavMenuDesktop';

class Report extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop/>
                <ListReport/>
            </div>
        );
    }
}

export default Report;