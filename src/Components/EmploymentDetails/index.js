/* import {Component} from 'react'
import EmployeesFullList from '../EmployeesFullList'
import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

class EmploymentDetails extends Component {
  state = {
    newEmploymentTypesList: employmentTypesList,
  }

  render() {
    const {newEmploymentTypesList} = this.state

    return (
      <div className="div-container">
        <h1 className="employ-heading">Type of Employment</h1>
        <ul className="ul-container">
          {newEmploymentTypesList.map(eachEmployDetails => (
            <EmployeesFullList
              key={eachEmployDetails.id}
              updatedEmployDetails={eachEmployDetails}
              onChangeFillList={this.onChangeFillList}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default EmploymentDetails */
