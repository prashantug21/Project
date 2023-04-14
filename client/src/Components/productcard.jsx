import './productcard.css'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaRupeeSign} from 'react-icons/fa';
import {prod} from "../database/product";
// const prod =require('../database/product');
console.log(prod.year);

export default function productcard() {
    return (
        <div>
            <Card id='card' className='mb-2'>
                <div id='prodImg'>
                <Card.Img variant="top" src={prod["src"]}/>
                </div>
                <Card.Body>
                    <Card.Title className='mb-2 d-flex justify-content-between' > <div id='prodName' className='display-5'>{prod["name"]}</div><div id="cost" className='d-inline-flex'>
                    <FaRupeeSign className='h3'/><span className='h1'>{prod["price"]}</span>
                    </div>
                    </Card.Title>
                    
                    <Card.Text>
                        <p id='usedTime'>{prod["usedTime"]} years</p>
                        <p id='desc'>{prod["description"]}</p>
                    </Card.Text>
                    <Button variant="primary">Get Details</Button>
                </Card.Body>
            </Card>

        </div>
    )
}
