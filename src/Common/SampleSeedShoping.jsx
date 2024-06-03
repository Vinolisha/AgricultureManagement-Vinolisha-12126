import axios from 'axios';
import { Nav } from "react-bootstrap";
import React, { useEffect, useState } from 'react'

import AddSeedShopingPage from '../SellerProduct/AddSeedShopingPage';
import { Grid } from '@mui/material';
import SampleSeedNavbar from './SampleSeedNavbar';


function SampleSeedShoping() {
    const [record, setRecord] = useState([]);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        loadRecord();
    }, []);
    
    const loadRecord = async () => {
        try {
            const res = await axios.get(
                "http://localhost:8090/SellerProduct/findAllProduct"
            );
            setRecord(res.data);
            console.log(res.data)
        } catch (error) {
            console.error("Error loading products:", error);
        }
    };

    return (
        <div className='container'>
            <SampleSeedNavbar />
            <h1 className="mt-5 mb-4">Products</h1>
            <div className="row">
                <Grid container spacing={3}>
                    {record.map((data) => (
                        <AddSeedShopingPage
                            key={data.productId}
                            productName={data.productName}
                            productCategory={data.category}
                            productPrice={data.price}
                            productQuantity={data.quantity}
                            productid={data.productId}
                        />
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default SampleSeedShoping;
