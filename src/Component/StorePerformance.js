import React from 'react'
import arrowdonw from "../Asset/arrowDown.svg";

const StorePerformance = () => {
  return (
    <div className="store-performance">
    <div className="barChart-head">
        <h3 className="barhead">Store Performances</h3>
        <span className="help">View Details</span>
    </div>
     <div style={{display: 'flex'}}>
     <h3 className="proBar-details">This week</h3>
     <img src={arrowdonw} id="proImage" style={{marginBottom: '20px', marginLeft: "10px", cursor: "pointer"}} alt="down" />
     </div>
     <div style={{display: "flex"}}>
     <div className="progress-bar">
        <span style={{ width: "85%" }} />
      </div>
      <span>85%</span>
     </div>
      <h3 className="proBar-details">Indicators</h3>
      <div className="indicators">
        <div className="indicator bar-purple">
          <div className="indicator-message">Message Respond</div>
          <div className="indicator-number">10/10</div> 
        </div>
        <div className="indicator bar-green">
        <div className="indicator-message"> Message Replied</div>
        <div className="indicator-numbers"> 10/15</div> 
        </div>
        <div className="indicator bar-purple">
          <div className="indicator-message">Regular Order</div>
          <div className="indicator-number">10/15</div> 
        </div>
        <div className="indicator bar-purple">
          <div className="indicator-message">Store Verified</div>
          <div className="indicator-numbers">20/20</div> 
        </div>
        <div className="indicator bar-purple">
          <div className="indicator-message">Score Penalty</div>
          <div className="indicator-nums">30/30</div> 
        </div>
      </div>
    </div>
  )
}

export default StorePerformance
