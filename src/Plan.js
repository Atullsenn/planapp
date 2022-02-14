import React from 'react';
function Plan(props) {
 return <>
  <li className="shadow p-2 my-2 col-sm-9">{props.value}</li>
  <button className="btn btn-danger my-2 col-sm-1 offset" onClick={() => { props.sendData(props.id) }}>X</button>
  
  </>
}

export default Plan;