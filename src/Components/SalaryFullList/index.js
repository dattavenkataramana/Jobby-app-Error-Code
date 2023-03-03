import './index.css'

const SalaryFullList = props => {
  const {updatedSalaryDetails, onChangeSalaryList} = props

  const {label, salaryRangeId} = updatedSalaryDetails

  const onChangeSalary = () => {
    onChangeSalaryList(salaryRangeId)
  }

  return (
    <li className="li-container">
      <input
        onClick={onChangeSalary}
        className="input-slide"
        type="radio"
        id="label"
      />
      <label htmlFor="label" className="label-heading">
        {label}
      </label>
    </li>
  )
}

export default SalaryFullList
