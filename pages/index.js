export async function getStaticProps(){


  const dataChart = [
    {
      t_date: '22/11/2021',
      income: 14000,
     
    },
    {
      t_date: '22/11/2021',
      income: 1000,
   
    },
    {
      t_date: '22/11/2021',
      income: 2000,
   
    },
    {
      t_date: '22/11/2021',
      income: 4000,
    
    },
    {
      t_date: '22/11/2021',
      income: 5000,
   
    },
    {
      t_date: '22/11/2021',
      income: 7000,
    
    },
  ]

  const dataTable = [
    {
      id: 1,
      receipt_no: '111',
      receipt_date: '11/11/2021',
      qty: '12',
      total: '1200',

    },
    {
      id: 1,
      receipt_no: '111',
      receipt_date: '11/11/2021',
      qty: '12',
      total: '1200',

    },

    {
      id: 1,
      receipt_no: '111',
      receipt_date: '11/11/2021',
      qty: '12',
      total: '1200',

    },

    {
      id: 1,
      receipt_no: '111',
      receipt_date: '11/11/2021',
      qty: '12',
      total: '1200',

    },
    {
      id: 1,
      receipt_no: '111',
      receipt_date: '11/11/2021',
      qty: '12',
      total: '1200',

    },
    {
      id: 1,
      receipt_no: '111',
      receipt_date: '11/11/2021',
      qty: '12',
      total: '1200',

    },
    {
      id: 1,
      receipt_no: '111',
      receipt_date: '11/11/2021',
      qty: '12',
      total: '1200',

    },
    {
      id: 1,
      receipt_no: '111',
      receipt_date: '11/11/2021',
      qty: '12',
      total: '1200',

    },
    {
      id: 1,
      receipt_no: '111',
      receipt_date: '11/11/2021',
      qty: '12',
      total: '1200',

    },]

  const dataTableColumns = [
    {
      name: 'Receipt',
      selector: "receipt_no",
      sortable: true,
    },
    {
      name: 'Date',
      selector: "receipt_date",
      sortable: true,
    },
    {
      name: 'Qty',
      selector: "qty",
      sortable: true,
    },
    {
      name: 'Total',
      selector: "total",
      sortable: true,
    }
  ]

  return{
    props:{
      TotalTransaction: "200",
      TotalIncome: "300",
      TotalCategory: "400",
      TotalProduct: "500",
      dataChart : dataChart,
      dataTable : dataTable,
      dataTableColumns : dataTableColumns,
    }
  }
}



import React, { Component } from 'react';
import ListDashboard from '../component/ListDashboard.js';
import ListUsers from '../component/ListUsers.js';
import NavMenuDesktop from '../component/NavMenuDesktop.js';
import Logo from '../public/loginBanner.png';
import Users from './users.js';
class index extends Component {
  render() {
    return (
      <div>

      
        <NavMenuDesktop/>
        <ListDashboard
        
        TotalTransaction= {this.props.TotalTransaction}
        TotalIncome= {this.props.TotalIncome}
        TotalCategory= {this.props.TotalCategory} 
        TotalProduct = {this.props.TotalProduct}
        dataChart= {this.props.dataChart}
        dataTable= {this.props.dataTable}
        dataTableColumns= {this.props.dataTableColumns}
        
        />

     

      
        
      </div>
    );
  }
}

export default index;