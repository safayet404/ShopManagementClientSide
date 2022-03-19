import React, { Component, Fragment } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class ListTransaction extends Component {


    next = () => {
        this.slider.slickNext();
    }
    previous = () => {
        this.slider.slickPrev();
    }


    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplaySpeed: 3000,
            autoplay: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        const CategoryList = [
            { name: 'Rice' },
            { name: 'Milk' },
            { name: 'Vegitable' },
            { name: 'Oil' },
            { name: 'Pizza' },
            { name: 'Burgar' },
            { name: 'Sandwitch' },
            { name: 'Roll' },
            { name: 'Drinks' },
            { name: 'Rice' },
            { name: 'Milk' },
            { name: 'Vegitable' },
            { name: 'Oil' },
            { name: 'Pizza' },
            { name: 'Burgar' },
            { name: 'Sandwitch' },
            { name: 'Roll' },
            { name: 'Drinks' },
        ];
        const ProductData = [
            {
                id: 1,
                product_image:"/laptop.jpg",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"/laptop.jpg",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"/laptop.jpg",                
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"/laptop.jpg",                
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"/laptop.jpg",
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"/laptop.jpg",                
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"/laptop.jpg",                
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"/laptop.jpg",                
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"/laptop.jpg",                
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"/laptop.jpg",                
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"/laptop.jpg",                
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"/laptop.jpg",                
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"/laptop.jpg",                
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"/laptop.jpg",                
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"/laptop.jpg",                
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"/laptop.jpg",                    
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"/laptop.jpg",                
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                id: 1,
                product_image:"/laptop.jpg",                
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                product_image:"/laptop.jpg",                
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
            {
                product_image:"/laptop.jpg",                
                product_name:"Rice Milk Rice",
                product_category:"Rice",
                product_code:"Rice",
                unit_price:"60",
            },
        ]

        let CategoryView = CategoryList.map((List, i) => {
            return (
                <h1 className="category-name">{List.name}</h1>
            )
        })

        let MyView = ProductData.map((List,i)=>{
            return (
                <div className="col-md-2 p-1 text-center col-lg-2 col-sm-3 col-3">
                    <div className="product-card">
                        <img className="product-image" src={List.product_image} />
                        <h1 className="product-name">{List.product_name}</h1>
                        <h1 className="product-price">{List.unit_price}</h1>
                    </div>
                </div>
            )
        })
        return (


            <Fragment>
                <div className="mt-1 ">
                    <div className="animated  zoomIn container-fluid">
                        <div className="row">
                            <div className="col-md-7 p-1  col-lg-7 col-sm-12">
                                <div className="container shadow-sm p-3 bg-white ">
                                    <div className="row">
                                        <div className="col-md-1 p-1">
                                            <button className="btn" onClick={this.previous}><i className="fa fa-angle-left" /></button>
                                        </div>
                                        <div className="col-md-10 p-1">
                                            <Slider ref={c => (this.slider = c)} {...settings}>
                                                {CategoryView}
                                            </Slider>
                                        </div>
                                        <div className="col-md-1 p-1">
                                            <button className="btn" onClick={this.next}><i className="fa fa-angle-right" /></button>
                                        </div>
                                    </div>
                                    <div className="row ListTransactionHeight ListTransaction ">
                                        {MyView}
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

            </Fragment>
        );
    }
}

export default ListTransaction;