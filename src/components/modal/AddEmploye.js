import React, { Component,useState } from 'react'
import DatePicker from "react-datepicker";
import AddEmployee from "../css/Addemployee.css"

export default class AddEmploye extends Component {

    
    state = {
        nom:'',
        prenom: '',
        birthday:'',
        start:'',
        street:'',
        city:'',
        state:'',
        ville:'',
        zipcode:'',
        dept:''
    }

  render() {
    return (
      <div>
          <div className='title'>Create Employee </div>
            <form className='identity'>
                <label htmlFor='prenom'>First Name</label>
                    <input
                        type="text"
                        className='form-control-size'
                        name='prenom'
                    />

                <label htmlFor='prenom'>Last Name</label>
                    <input
                        type="text"
                        className='form-control-size'
                        placeholder=''
                        name='nom'
                    />

                <label htmlFor='birthday'>Date of Birth</label>
                   <DatePicker className='form-control-size'></DatePicker>

                <label htmlFor='startdate'>Start Date</label>
                   <DatePicker className='form-control-size'></DatePicker>
            </form>
            <fieldset className="adress">
                <legend className='legend'>Adress</legend>
                <label htmlFor='street'>Street</label>
                    <input
                        type="text"
                        className='form-control-size'
                        placeholder=''
                        name='street'
                    />
                <label htmlFor='city'>City</label>
                    <input
                        type="text"
                        className='form-control-size'
                        placeholder=''
                        name='city'
                    />
                <label htmlFor='ville'>State</label>
                    <select className='form-control-size select-control-height'>
                        <option value={"rue"}>Ville boucle a prendre dans le Json</option>
                    </select>
                <label htmlFor='zipcode'>Zip Code</label>
                    <input
                        type="text"
                        className='form-control-size'
                        placeholder=''
                        name='zipcode'
                    />
            </fieldset>
            <form className='dept'>
                <label htmlFor='dept'>Departement</label>
                    <select className='form-control-size select-control-height'>
                        <option value={"dept"}>departement boucle a prendre dans le Json</option>
                    </select>
            </form>
      </div>
    )
  }
}
