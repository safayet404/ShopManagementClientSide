
export async function getStaticProps() {
    const dataTable = [
        {
            id: 1,
            fullname: 'Safayet Hossain',
            username: 'Araf',
            roll: 'admin',
            lastactivity: '12/12/2021',
        },
        {
            id: 2,
            fullname: 'Araf Hasan',
            username: 'Safayet',
            roll: 'admin',
            lastactivity: '12/12/2021',
        },
        {
            id: 3,
            fullname: 'Fahad Uddin',
            username: 'Fahad',
            roll: 'admin',
            lastactivity: '12/12/2021',
        },
        {
            id: 4,
            fullname: 'Mahfuzur Rahman',
            username: 'Galib',
            roll: 'admin',
            lastactivity: '12/12/2021',
        },

    ]

    return {
        props:{
            dataTable:dataTable,
        }
    }


}



import React, { Component } from 'react';
import ListUsers from '../component/ListUsers';
import NavMenuDesktop from '../component/NavMenuDesktop';

class Users extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop/>
                <ListUsers
                
                dataTable={this.props.dataTable}
                />
            </div>
        );
    }
}

export default Users;