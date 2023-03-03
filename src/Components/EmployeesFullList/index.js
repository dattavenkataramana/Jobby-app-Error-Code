import './index.css'

const EmployeesFullList = props => {
  const {updatedEmployDetails, onChangeFillList} = props
  const {label, employmentTypeId} = updatedEmployDetails

  const onClickDetailsList = () => {
    onChangeFillList(employmentTypeId)
  }
  return (
    <li className="li-containers">
      <input
        onClick={onClickDetailsList}
        className="input-slide"
        type="checkbox"
        id="label"
      />
      <label htmlFor="label" className="label-heading">
        {label}
      </label>
    </li>
  )
}

export default EmployeesFullList
