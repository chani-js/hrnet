import { useMemo } from "react"
import '../css/Table.css'
import { Link } from "react-router-dom"


const Table =()=>{
    return  <div>
    
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
                <table className="employee-list" id="empl-list">
                        <tr>
                            <th>First name</th>
                            <th>Last Name</th>
                            <th>Start date</th>
                            <th>Departement</th>
                            <th>Date of birth</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip Code</th>
                        </tr>

                </table>
            <section className='home-link'>
                <a href="www.google.com">Home</a>
            </section>
            </div> 

}
export default Table