import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import DataTable from 'react-data-table-component';

class ListReport extends Component {

    constructor() {
        super();
        this.state = {
            show: false,
            showEdit: false,
            deleteID: "",
            editID: "",
        }
    }



    deleteIconOnClick = (id) => {
        alert(id)
    }

    editIconOnClick = (id) => {

        this.handleOpenEdit();
        this.setState({ editID: id });
    }
    render() {

        const columns = [
            {
                name: 'Invoice No',
                selector: 'invoice_no',
                sortable: true,

            },
            {
                name: 'Invoice Date',
                selector: 'invoice_date',
                sortable: true,
            },
            {
                name: 'Product Name',
                selector: 'product_name',
                sortable: true,
            },
            {
                name: 'Product Category',
                selector: 'product_category',
                sortable: true,
            },
            {
                name: 'Product Code',
                selector: 'product_code',
                sortable: true,
            },
            {
                name: 'Quantity',
                selector: 'quantity',
                sortable: true,
            },
            {
                name: 'Unit Price',
                selector: 'unit_price',
                sortable: true,
            },{
                name: 'Total Price',
                selector: 'total_price',
                sortable: true,
            },
            {
                name: 'Seller Name',
                selector: 'seller_name',
                sortable: true,
            },
            {
                name: 'Invoice',
                selector: 'id',
                sortable: true,
                cell: row => <button onClick={this.deleteIconOnClick.bind(this, row.id)} data-id={row.id} className="btn text-danger"><i className="fa fa-print" /></button>
            }
        ];

        const dataTable = [
            {
                id: 1,
                invoice_no: '0101',
                invoice_date: '08/03/2022',
                product_name: 'Bloody 6 Gaming Mouse',
                product_code: '101',
                quantity:5,
                unit_price : 1500,
                total_price: 30000,
                discount_price: 35000,
                seller_name : "Safayet Hossain",
                product_category: 'Laptop10',
               
               
            },
            {
                id: 2,
                invoice_no: '0101',
                invoice_date: '08/03/2022',
                product_name: 'Bloody 6 Gaming Mouse',
                product_code: '101',
                quantity:5,
                unit_price : 1500,
                total_price: 30000,
                discount_price: 35000,
                seller_name : "Safayet Hossain",
                product_category: 'Laptop10',
            },
            {
                id: 3,
                invoice_no: '0101',
                invoice_date: '08/03/2022',
                product_name: 'Bloody 6 Gaming Mouse',
                product_code: '101',
                quantity:5,
                unit_price : 1500,
                total_price: 30000,
                discount_price: 35000,
                seller_name : "Safayet Hossain",
                product_category: 'Laptop10',
            },
            {
                id: 4,
        
                invoice_no: '0101',
                invoice_date: '08/03/2022',
                product_name: 'Bloody 6 Gaming Mouse',
                product_code: '101',
                quantity:5,
                unit_price : 1500,
                total_price: 30000,
                discount_price: 35000,
                seller_name : "Safayet Hossain",
                product_category: 'Laptop10',
            },
    
        ]
        return (
            <Fragment>

                <Container className="animated zoomIn" fluid={true}>
                    <Row className="mt-2">
                        <Col sm={12} xs={12} md={12} lg={12}>

                            <Card>
                                <Card.Body>
                                    <Container fluid={true}>
                                        <Row>
                                            <Col >
                                                <h4>Report</h4>

                                                <input className="m-2" type="date"/>
                                                <input className="m-2" type="date"/>
                                                <Button className="m-2 btn btn-danger">Search</Button>
                                            </Col>
                                            
                                        </Row>
                                    </Container>
                                    <hr className="bg-secondary"></hr>
                                    <Container fluid={true}>
                                        <Row>
                                            <Col sm={12} xs={12} md={12} lg={12}>
                                                <DataTable
                                                    noHeader={true}
                                                    paginationPerPage={5}
                                                    pagination={true}
                                                    columns={columns}
                                                    data={dataTable}
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>

               



            </Fragment>
        );
    }
}

export default ListReport;