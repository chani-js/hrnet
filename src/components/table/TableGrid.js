import React from "react";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class TableGrid extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			columnDefs: [
                {headerName:"Id", field:"id"},
				{headerName: "First Name", field: "firstName"},
				{headerName: "LastName", field: "lastName"},
				{headerName: "Date of Birth", field: "dateOfBirth"},
                {headerName: "Street", field: "street"},
				{headerName: "City", field: "city"},
				{headerName: "State", field: "state"},
                {headerName: "StateAbbrev", field: "stateAbbrev"},
				{headerName: "Zip Code", field: "zipCode"},
				{headerName: "Start Date", field: "startDate"},
                {headerName: "Departement", field: "department"}

			],
			rowData: JSON.parse(localStorage.getItem("employee"))
		}
	}
    render() {
		return (
			<div
				className="ag-theme-balham"
				style={{
					height: '500px',
					width: '600px'
				}}
			>
				<AgGridReact
					columnDefs={this.state.columnDefs}
					rowData={this.state.rowData}>
				</AgGridReact>
			</div>
		);
	}
}

export default TableGrid