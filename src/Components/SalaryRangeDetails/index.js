import {Component} from 'react'
import SalaryFullList from '../SalaryFullList'
import './index.css'

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

class SalaryRangeDetails extends Component {
  state = {newSalaryRangesList: salaryRangesList}

  render() {
    const {newSalaryRangesList} = this.state

    return (
      <div className="salary-container">
        <h1 className="salary-heading">Salary Range</h1>
        <ul className="ul-salary-container">
          {newSalaryRangesList.map(eachSalaryDetails => (
            <SalaryFullList
              key={eachSalaryDetails.id}
              updatedSalaryDetails={eachSalaryDetails}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SalaryRangeDetails
