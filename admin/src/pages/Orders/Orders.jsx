import React from 'react'
import "./Orders.css"
import { useState, useEffect } from 'react'
import { toast } from "react-toastify"
import axios from "axios"
import { assets } from '../../assets/assets'

const Orders = ({ url }) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
     console.log("API RESPONSE:", response.data); 
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("error");
    }
  }

  const statusHandler = async (event, orderId) => {
  const newStatus = event.target.value;

  console.log("Sending:", orderId, newStatus); // 🔥 DEBUG

  const response = await axios.post(
    url + "/api/order/status",
    { orderId, status: newStatus }
  );

  console.log("Response:", response.data); // 🔥 DEBUG

  if (response.data.success) {
    await fetchAllOrders();
  }
};

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='order add'>
      <h3>Orders Page</h3>
      <div className="order-list">

        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt="" />

            <div>
              <p className='order-item-food'>
                {order.items.map((item, i) => {
                  if (i === order.items.length - 1) {
                    return item.name + " x " + item.quantity
                  } else {
                    return item.name + " x " + item.quantity + ", "
                  }
                })}
              </p>

              <div className="order-item-name">
                {order.address && (order.address.firstName + " " + order.address.lastName)}

                <div className="order-item-address">
                  <p>{order.address && order.address.street + ","}</p>
                  <p>
                    {order.address &&
                      order.address.city + "," +
                      order.address.state + "," +
                      order.address.country + "," +
                      order.address.zipcode}
                  </p>
                </div>
              </div>

              <p className='order-item-phone'>
                {order.address && order.address.phone}
              </p>
            </div>

            <p>Items: {order.items.length}</p>
            <p>${order.amount}</p>

            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
            >
              <option value="Food processing">Food processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Orders