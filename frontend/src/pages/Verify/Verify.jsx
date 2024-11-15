import React, { useContext, useEffect, useState } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
const Verify = () => {
    const [serachParams,setserachParams] = useSearchParams();
    const success = serachParams.get("success");
    const orderId = serachParams.get("orderId");
    const {url} = useContext(StoreContext);  
    const navigate = useNavigate();
    const verifyPayment = async () => {
        const respone = await axios.post(url+"/api/order/verify",{success,orderId})
        if(respone.data.success){
            navigate("/myorders");
        }
        else{
            navigate("/")
        }
    }

    useEffect(()=>{
        verifyPayment();
    },[])
    return (
        <div className="verify">
            <div className="spinner"></div>
        </div>
  )
}

export default Verify