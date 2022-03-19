export async function getStaticProps() {
    const dataTable = [
        {
            id: 1,
            cat_name: 'Safayet Hossain',
            cat_code: '101',
            cat_icon: '/laptop.svg',
           
        },
        {
            id: 2,
            cat_name: 'Safayet Hossain',
            cat_code: '124',
            cat_icon: '/laptop.svg',
        },
        {
            id: 3,
            cat_name: 'Safayet Hossain',
            cat_code: '457',
            cat_icon: '/laptop.svg',
        },
        {
            id: 4,
            cat_name: 'Safayet Hossain',
            cat_code: '789',
            cat_icon: '/laptop.svg',
        },

    ]

    return {
        props:{
            dataTable:dataTable,
        }
    }


}


import React, { Component } from 'react';
import ListCategory from '../component/ListCategory';
import NavMenuDesktop from '../component/NavMenuDesktop';

class Category extends Component {
    render() {
        return (
            <div>

                <NavMenuDesktop/>
               <ListCategory 
               
               dataTable ={this.props.dataTable}
            
               />
                
            </div>
        );
    }
}

export default Category;