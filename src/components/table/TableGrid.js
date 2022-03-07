import React, { useCallback, useMemo, useRef, useState } from 'react';
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '../css/Tablegrid.css'
import { Link } from 'react-router-dom';

const TableGrid = () => {
	const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);

	const columnDefs = [
		{ headerName: "Id", field: "id" },
		{ headerName: "First Name", field: "firstName" },
		{ headerName: "LastName", field: "lastName" },
		{ headerName: "Date of Birth", field: "dateOfBirth" },
		{ headerName: "Street", field: "street" },
		{ headerName: "City", field: "city" },
		{ headerName: "State", field: "state" },
		{ headerName: "StateAbbrev", field: "stateAbbrev" },
		{ headerName: "Zip Code", field: "zipCode" },
		{ headerName: "Start Date", field: "startDate" },
		{ headerName: "Departement", field: "department" }

	]
	const rowData = JSON.parse(localStorage.getItem("employee"))



	return (
	<div className='container-current'>
		 <h2 className="title-employee">Current Employees</h2>
                <section className="entete">
                    <div className="select-entries">
                        <label>Show</label>
                            <select>
                                <option value="number">10</option>
                                <option value="number">25</option>
                                <option value="number">50</option>
                                <option value="number">100</option>
                            </select>
                         entries
                    </div>
                    <div className="search-employee">
                        <label> Search :</label>
                        <input type="text"></input>
                    </div>

                </section>
		<div style={containerStyle}>
			<div
				className="ag-theme-balham"
				style={{
					margin: 'auto',
					height: '500px',
					width: '90%'
				}}
			>
				<AgGridReact
					columnDefs={columnDefs}
					rowData={rowData}
					pagination={true}>

				</AgGridReact>
			</div>
		</div>
		<div className='linkto'>
		<Link to={"/"} className="linktohome" >Home</Link>
		</div>
	</div>
	);
}


export default TableGrid