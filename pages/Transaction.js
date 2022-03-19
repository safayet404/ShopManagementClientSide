import React, { Component } from 'react';
import ListTransaction from '../component/ListTransaction';
import NavMenuDesktop from '../component/NavMenuDesktop';
class Transaction extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop></NavMenuDesktop>
                <ListTransaction/>
            </div>
        );
    }
}

export default Transaction;