
import React from 'react'
import "./car.css"

export default props => (
  <div className="DodoItem">
    <div>{props.name}</div>
    <button className="btn btn-primary"
    onClick={props.onDelete}> x </button>
  </div>
)