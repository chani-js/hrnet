import React, { Component,useState } from 'react'
import DatePicker from "react-datepicker";
import AddEmployee from "../css/Addemployee.css"
import "react-datepicker/dist/react-datepicker.css";
import Modal from './modal'
import { useNavigate } from 'react-router-dom';

 const AddEmploye=()=> {
     const navigate= useNavigate()
    const [formData, setFormData]= 
    useState({  id:"",
                firstName: '',
                lastName: '',
                dateOfBirth: '',
                street: '',
                city: '',
                zipCode: '',
                stateAbbrev: '',
                startDate: '',
                department: '', })
   
    const [modalOpen, setModalOpen] =useState(false)
   const handleToggleModal=()=>{
       setModalOpen(!modalOpen)

   }
   const handleChange=(e, type)=>{
       const _formData = {...formData}// clone de formadata
        _formData[type]=e.target.value
        setFormData(_formData)

   }

   const handleSubmit=()=>{

       setModalOpen(true)
       console.log("formdata==>",formData)
       const employee = JSON.parse(localStorage.getItem("employee"))
       employee.push(formData)
       localStorage.setItem("employee", JSON.stringify(employee))
       navigate("/employeelist")
       
   }
    return (
      <div className='container-addemployee'>
        <Modal text='bonjour'  isOpen={modalOpen} toggleClick={handleToggleModal}/>
          <div className='title'>Create Employee </div>
          <section className='form-Add'>
          
            <label htmlFor='prenom'>First Name</label>
                    <input
                        type="text"
                        className='form-control-size'
                        name='prenom'
                        value={formData.firstName}
                        onChange={(e)=>handleChange(e, "firstName")}
                    />
            <label htmlFor='nom'>Last Name</label>
                    <input
                        type="text"
                        className='form-control-size'
                        name='nom'
                        value={formData.lastName}
                        onChange={(e)=>handleChange(e, "lastName")}
                    />
                

                <label htmlFor='birthday'>Date of Birth</label>
                    <DatePicker className='form-control-size'></DatePicker>

                <label htmlFor='startdate'>Start Date</label>
                   <DatePicker className='form-control-size'></DatePicker>
            
            <fieldset className="adress">
                <legend className='legend'>Adress</legend>
                <label htmlFor='street'>Street</label>
                    <input
                        type="text"
                        className='form-control-size'
                        placeholder=''
                        name='street'
                        value={formData.street}
                        onChange={(e)=>handleChange(e, "street")}
                    />
                <label htmlFor='city'>City</label>
                    <input
                        type="text"
                        className='form-control-size'
                        placeholder=''
                        name='city'
                        value={formData.city}
                        onChange={(e)=>handleChange(e, "city")}
                    />
                <label htmlFor='ville'>State</label>
                    <select className='form-control-size select-control-height'>
                    console.log(json)
                        <option value={"rue"}></option>
                    </select>
                <label htmlFor='zipcode'>Zip Code</label>
                    <input
                        type="text"
                        className='form-control-size'
                        placeholder=''
                        name='zipcode'
                        value={formData.zipCode}
                        onChange={(e)=>handleChange(e, "zipCode")}
                    />
            </fieldset>
                <section className='dept'>
                    <label htmlFor='dept'>Departement</label>
                        <select className='form-control-size select-control-height'>
                            <option value={"dept"}>departement boucle a prendre dans le Json</option>
                        </select>
                </section>
                <section>
                    <button onClick={handleSubmit} >Save</button>
                </section>
           </section>
      </div>
    )
  }
  export default AddEmploye
  

