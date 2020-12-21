import React from 'react'

const Alert = ({ text }) => {
  if (text === "Item Removed") {
    return (
      <div className="alert alert-danger">{text}</div>
    )
  } else {
    return (
      <div className="alert alert-success">{text}</div>
    )
  }
}

export default Alert
