import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Dashboard.css";
import cart from "../Asset/Cart.svg";
import delivery from "../Asset/Motorcycle Delivery.svg";
import message from "../Asset/newmessage.svg";
import review from "../Asset/review.svg";
import StorePerformance from "../Component/StorePerformance";


const data = [
  { name: "10", viewed: 100, sold: 50 },
  { name: "11", viewed: 120, sold: 70 },
  { name: "12", viewed: 120, sold: 70 },
  { name: "13", viewed: 0, sold: 0 },
  { name: "14", viewed: 0, sold: 0 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-grid">
      <div className="box">
        <div className="stat-box blue">
          <div className="box-info">
            <img src={cart} id="proImage" alt="headlogo" />
            <br />
            New Order
          </div>
          <span className="box-num">5</span>
        </div>
        <div className="stat-box orange">
          <div className="box-info">
            <img src={delivery} id="proImage" alt="headlogo" />
            <br />
            Ready to Deliver
          </div>
          <span className="box-num">2</span>
        </div>
        <div className="stat-box green">
          <div className="box-info">
            <img src={message} id="proImage" alt="headlogo" />
            <br />
            New Message
          </div>
          <span className="box-num">3</span>
        </div>
        <div className="stat-box purple">
          <div className="box-info">
            <img src={review} id="proImage" alt="headlogo" />
            <br />
            Reviews
          </div>
          <span className="box-num">4</span>
        </div>
      </div>

      <div className="chart-container">
        <div className="barChart-head">
          <h3 className="barhead">Product Data</h3>
          <span className="help">help</span>
        </div>
        <div className="barChart-chartDetails">
            <div className="barChart-legends">
              <div className="barLegend">
                 <div className="legengblue">

                 </div>
                 <span className="legenddet">Product Viewed</span>
                 <div className="legendgreen">

                 </div>
                 <span className="legenddet">Product Sold</span>
              </div>
              <div>
                <span className="topads">TopAds Change</span>
                <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              </div>
            </div>
            </div>
        <div className="barChart-body">
          <div className="product-stats">
            <div className="proStat-container">
              <h1 className="proStat-head">Product Viewed</h1>
              <div className="proStatDetails">
                <span className="proStat-num">500</span>
                <span className="proStat-per">10%</span>
              </div>
            </div>

            <div className="proStat-container">
              <h1 className="proStat-head">Success Transactions</h1>
              <div className="proStatDetails">
                <span className="proStat-num">5</span>
                <span className="proStat-per">10%</span>
              </div>
            </div>

            <div className="proStat-container">
              <h1 className="proStat-head">Conversion Rate</h1>
              <div className="proStatDetails">
                <span className="proStat-num">25</span>
                <span className="proStat-per">12%</span>
              </div>
            </div>

            <div className="proStat-container">
              <h1 className="proStat-head">Sold Product</h1>
              <div className="proStatDetails">
                <span className="proStat-num">10</span>
                <span className="proStat-per">20%</span>
              </div>
            </div>
          </div>
         
            
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid horizontal={false} />
              <XAxis dataKey="name" axisLine={false} />
              <YAxis axisLine={false} />
              <Tooltip />
              <Bar dataKey="viewed" fill="#8884d8" barSize={10} radius={[4, 4, 4, 4]} />
              <Bar dataKey="sold" fill="#82ca9d" barSize={10} radius={[4, 4, 4, 4]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <StorePerformance />
    </div>
  );
};

export default Dashboard;
