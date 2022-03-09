import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import AddEmployee from "../css/Addemployee.css"
import "react-datepicker/dist/react-datepicker.css";
//import Modal from './modal';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import deptChoice from '../mock/departement';
import adress from '../mock/Adress';
import  Modal from 'wok-chani-modal';


const AddEmploye = () => {
    const navigate = useNavigate()
    const [selectedDept, setSelectedDept] = useState({})
    const [selectedAdress, setSelectedAdd] = useState({})
    const [selectedBday, setSelectedBday] = useState(new Date())
    const [selectedStart, setSelectedStart] = useState(new Date())
    const [formData, setFormData] =
        useState({
            id: "",
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            street: '',
            city: '',
            zipCode: '',
            stateAbbrev: '',
            startDate: '',
            department: '',
        })

    const [modalOpen, setModalOpen] = useState(false)
    const handleToggleModal = () => {
        setModalOpen(!modalOpen)

    }
    const handleChange = (e, type) => {
        const _formData = { ...formData } // clone de formadata
        _formData[type] = e.target.value
        setFormData(_formData)

    }

    const handleChangeDept = (sltdept) => {
        setSelectedDept(sltdept)

    }
    const handleChangeBday = (sltbday) => {
        setSelectedBday(sltbday)

    }
    const handleChangeStart = (sltstart) => {
        setSelectedStart(sltstart)
        console.log("Stare===>", sltstart)
        console.log("Stare===>", sltstart.toLocaleDateString())

    }
    const handleChangeAdd = (sltadd) => {
        setSelectedAdd(sltadd)

    }

    const handleSubmit = () => {
        setModalOpen(true)
        console.log("formdata==>", formData)
        const employee = JSON.parse(localStorage.getItem("employee"))
        employee.push({
            ...formData, id: employee.length, department: selectedDept.value, stateAbbrev: selectedAdress.value, state: selectedAdress.label,
            dateOfBirth: selectedBday.toLocaleDateString(), startDate: selectedStart.toLocaleDateString()
        })
        console.log("test==>", { ...formData, id: employee.length })
        localStorage.setItem("employee", JSON.stringify(employee))
        navigate("/employeelist")


    }
    return (
        <div className='container-addemployee zindex' >
            <Modal text='Employé ajouté avec succés!!!'
                isOpen={modalOpen}
                toggleClick={handleToggleModal}
            />
            <section className='entete-homepage'>
                <div className='hrnet-title'>HRnet</div>
                <Link to={"/employeelist"} className="linktoemployee" >View Current Employees</Link>
                <div className='title' > Create Employee </div>
            </section>
            <section className='form-Add' >

                <label htmlFor='prenom' > First Name </label>
                <input type="text"
                    aria-label='FirstName'
                    className='form-control-size'
                    name='prenom'
                    value={formData.firstName}
                    onChange={(e) => handleChange(e, "firstName")} />
                <label htmlFor='nom' > Last Name </label>
                <input type="text"
                    aria-label='LastName'
                    className='form-control-size'
                    name='nom'
                    value={formData.lastName}
                    onChange={
                        (e) => handleChange(e, "lastName")}
                />


                <label htmlFor='birthday' > Date of Birth </label>
                <DatePicker className='form-control-size index' selected={selectedBday} onChange={handleChangeBday} />

                <label htmlFor='startdate' > Start Date </label>
                <DatePicker className='form-control-size index' selected={selectedStart} onChange={handleChangeStart} />

                <fieldset className="adress" >
                    <legend className='legend' > Adress </legend> <label htmlFor='street'> Street </label>
                    <input type="text"
                        aria-label='Adress'
                        className='form-control-size'
                        placeholder=''
                        name='street'
                        value={formData.street}
                        onChange={
                            (e) => handleChange(e, "street")}
                    /> <label htmlFor='city' > City </label>
                    <input type="text"
                        aria-label='City'
                        className='form-control-size'
                        placeholder=''
                        name='city'
                        value={formData.city}
                        onChange={
                            (e) => handleChange(e, "city")}
                    />
                    <label htmlFor='ville' > State </label>
                    <Select
                        aria-label='Town'
                        value={selectedAdress}
                        onChange={handleChangeAdd}
                        options={adress}
                        className='select-control'
                    /> <label htmlFor='zipcode' > Zip Code </label>
                    <input type="text"
                        aria-label='Zip Code'
                        className='form-control-size'
                        placeholder=''
                        name='zipcode'
                        value={formData.zipCode}
                        onChange={
                            (e) => handleChange(e, "zipCode")} />
                </fieldset> 
                <section className='dept' >
                    <div className='dept-select'>
                        <label htmlFor='dept' > Departement </label>

                        <Select
                            aria-label='Departement'
                            className='select-control'
                            value={selectedDept}
                            onChange={handleChangeDept}
                            options={deptChoice} />
                    </div>

                </section>
                <section className='button-save'>
                    <button onClick={handleSubmit} label='Save' > Save </button>
                </section>
            </section>
        </div>
    )
}
export default AddEmploye