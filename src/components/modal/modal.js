
import React, { useState } from "react"


export default function Modal({ text, isOpen, toggleClick }) {

  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <div className="opacity"
        style={
          {
            width: '100%',
            position: "absolute",
            opacity: '0.8',
            backgroundColor: 'Black',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1
            
          }}>

      </div>
      <div className="modal-text"
        style={{
          zIndex:"1",
          width: '20%',
          position: "absolute",
          top: '50%',
          left: '40%',
          border: '1px solid black',
          padding: '10px',
          borderRadius: '5px',
          backgroundColor: "white"
          
        }}>
        <div style={{ position: 'relative' }}>
          <span onClick={toggleClick} style={{
            position: "absolute",
            top: "-25px",
            right: "-15px",
            backgroundColor: "white",
            borderRadius: "100px",
            padding: "5px 10px"
          }}>
            X
          </span>
          {text}

        </div>

      </div>
    </div>
  )
}
