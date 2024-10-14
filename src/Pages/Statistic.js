import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  LabelList,
  Cell,
} from "recharts";
import "./Statistic.css";
import StorePerformance from "../Component/StorePerformance";
import ItemTable from "../Component/ItemTable";
import income from "../Asset/Income.svg"
import refund from "../Asset/refund.svg"
import receipt from "../Asset/Receipt Paper Bill.svg"

const data = [
  { name: "10", viewed: 100, sold: 50 },
  { name: "11", viewed: 120, sold: 70 },
  { name: "12", viewed: 120, sold: 70 },
  { name: "13", viewed: 0, sold: 0 },
  { name: "14", viewed: 0, sold: 0 },
];

const PieData = [
  {
    name: "succes",
    value: 5,
  },
  {
    name: "refund",
    value: 1,
  },
];

const COLORS = ["#42BDA1", "#F04461"];

const Statistic = () => {
  return (
    <div className="dashboard-grid">
      <StorePerformance />
      <div className="chart-container" style={{ marginTop: "20px" }}>
        <div className="barChart-head">
          <h3 className="barhead">Product Data</h3>
          <span className="help">help</span>
        </div>
        <div className="barChart-chartDetails">
          <div className="barChart-legends">
            <div className="barLegend">
              <div className="legengblue"></div>
              <span className="legenddet">Product Viewed</span>
              <div className="legendgreen"></div>
              <span className="legenddet">Product Sold</span>
            </div>
            <div className="adsDiv">
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
              <Bar
                dataKey="viewed"
                fill="#8884d8"
                barSize={10}
                radius={[4, 4, 4, 4]}
              />
              <Bar
                dataKey="sold"
                fill="#82ca9d"
                barSize={10}
                radius={[4, 4, 4, 4]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <ItemTable />
      <ItemTable />
      <div className="chart-container" style={{ marginTop: "20px" }}>
        <div className="barChart-head">
          <h3 className="barhead">Product Data</h3>
          <span className="help">help</span>
        </div>
        <div className="barChart-chartDetails">
          <div className="barChart-legends">
            <div>
              <span
                style={{
                  color: "#11142D",
                  fontFamily: "mulish",
                  fontSize: "12px",
                }}
              >
                Transaction
              </span>
              <br />
              <span
                style={{
                  color: "#11142D",
                  fontFamily: "mulish",
                  fontSize: "17px",
                }}
              >
                5
              </span>
            </div>
            <div className="barLegend">
              <div className="legengblue"></div>
              <span className="legenddet">Product Viewed</span>
              <div className="legendgreen"></div>
              <span className="legenddet">Product Sold</span>
            </div>
            <div className="adsDiv">
              <span className="topads">TopAds Change</span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="barChart-body pie-body">
          <ResponsiveContainer width="50%" height={200}>
            <PieChart>
              <Pie
                data={PieData}
                dataKey="value"
                innerRadius={50}
                outerRadius={80}
              >
                <LabelList dataKey="value" position="center" stroke="#181818" />
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <div className="pieLedend">
              <div style={{display:"flex", alignItems: "center", justifyContent: "left", marginBottom: "10px"}}>
              <div className="legengblue" style={{background: "#42BDA1"}}></div>
              <span className="legenddet">Product Viewed</span>
              </div>
              <div style={{display:"flex", alignItems: "center", justifyContent: "left"}}>
              <div className="legendgreen" style={{background: "#F04461"}}></div>
              <span className="legenddet">Product Sold</span>
              </div>
            </div>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid horizontal={false} />
              <XAxis dataKey="name" axisLine={false} />
              <YAxis axisLine={false} />
              <Tooltip />
              <Bar
                dataKey="viewed"
                fill="#8884d8"
                barSize={10}
                radius={[4, 4, 4, 4]}
              />
              <Bar
                dataKey="sold"
                fill="#82ca9d"
                barSize={10}
                radius={[4, 4, 4, 4]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="dashboard-container">
      <div className="stat-boxx purple-box">
        <img src={income} alt="in" />
        <div style={{flexDirection: "column"}}>
          <span style={{fontFamily: "mulish", color: "#FFFFFF", textAlign: "left", fontWeight: "300px"}}>Income</span>
          <h2 style={{fontFamily: "mulish", color: "#FFFFFF", fontSize: "22px"}}>$1200</h2>
          <p className="detail-link">View Detail &gt;</p>
        </div>
      </div>

      <div className="stat-boxx red-box">
      <img src={refund} alt="re" />
        <div style={{flexDirection: "column"}}>
          <p style={{fontFamily: "mulish", color: "#FFFFFF", textAlign: "left", fontWeight: "300px"}}>Refund</p>
          <h2 style={{fontFamily: "mulish", color: "#FFFFFF", fontSize: "25px"}}>1</h2>
        </div>
      </div>

      <div className="stat-boxx green-box">
      <img src={receipt} alt="rec" />
        <div className="stat-info">
          <p style={{fontFamily: "mulish", color: "#FFFFFF", textAlign: "left", fontWeight: "300px", marginBottom: "10px"}}>TopAds Charges</p>
          <span style={{fontFamily: "mulish", color: "#FFFFFF", textAlign: "left", fontWeight: "300px", fontSize: "20px", marginBottom: "20px"}}>You haven't used this feature</span>
          <p style={{fontFamily: "mulish", color: "#FFFFFF", textAlign: "left", fontWeight: "300px", marginTop: "10px"}}>Try Now &gt;</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Statistic;
