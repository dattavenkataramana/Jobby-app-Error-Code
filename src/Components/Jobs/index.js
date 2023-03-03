import {Component} from 'react'

import Cookies from 'js-cookie'
import {AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'

import ProfileCardDesign from '../ProfileCardDesign'
// import SalaryRangeDetails from '../SalaryRangeDetails'
import Header from '../Header'
import SalaryFullList from '../SalaryFullList'
import EmployeesFullList from '../EmployeesFullList'

import SearchInputItems from '../SearchInputItems'

import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULL TIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PART TIME',
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

class jobs extends Component {
  state = {
    newEmploymentTypesList: employmentTypesList,
    newSalaryRangesList: salaryRangesList,
    searchInput: [],
    isAnotherLoading: false,
    searchInputValue: '',
  }

  componentDidMount() {
    this.getSearchData()
  }

  getSearchData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/jobs'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    let updatedData = []
    if (response.ok === true) {
      const fetchedData = await response.json()

      updatedData = fetchedData.jobs.map(eachJob => ({
        companyLogoUrl: eachJob.company_logo_url,
        employmentType: eachJob.employment_type,
        id: eachJob.id,
        jobDescription: eachJob.job_description,
        location: eachJob.location,
        packagePerAnnum: eachJob.package_per_annum,
        rating: eachJob.rating,
        title: eachJob.title,
      }))
    }
    this.setState({searchInput: updatedData, isAnotherLoading: true})
  }

  renderLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderSearchItemsList = () => {
    const {searchInput} = this.state

    if (searchInput.length === 0) {
      return (
        <div className="failure-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
            alt="no jobs"
            className="failure-image"
          />
          <h1 className="heading-od-failure-view">No Jobs Found</h1>
          <p className="para-of-found">
            we could not found any jobs.Try other filter
          </p>
        </div>
      )
    }
    return (
      <div className="search-container">
        <ul className="ul-containers">
          {searchInput.map(eachListOfSearchItems => (
            <SearchInputItems
              key={eachListOfSearchItems.id}
              searchDetails={eachListOfSearchItems}
            />
          ))}
        </ul>
      </div>
    )
  }

  onChangeSearchInput = event => {
    this.setState({searchInputValue: event.target.value})
  }

  onClickButton = () => {
    const {searchInput, searchInputValue} = this.state
    const shouldShowProductsList = searchInput.length > 0

    if (shouldShowProductsList) {
      const filteredData = searchInput.filter(
        item => item.title.toLowerCase() === searchInputValue.toLowerCase(),
      )
      this.setState({searchInput: filteredData, searchInputValue: ''})
    }
  }

  renderSearchDetails = () => {
    const {isAnotherLoading, searchInputValue} = this.state

    return (
      <>
        <div className="search-input-details">
          <div className="input-container">
            <input
              className="input-size"
              type="search"
              placeholder="Search"
              value={searchInputValue}
              onChange={this.onChangeSearchInput}
            />
            <button
              onClick={this.onClickButton}
              className="button"
              type="button"
            >
              <AiOutlineSearch className="icon-design" />
            </button>
          </div>
        </div>
        {isAnotherLoading ? (
          <div>{this.renderSearchItemsList()}</div>
        ) : (
          <div>{this.renderLoading()}</div>
        )}
      </>
    )
  }

  onChangeFillList = employmentTypeId => {
    const {searchInput} = this.state

    const newUpdateSearchInputDetails = searchInput.filter(
      eachSearchInputItems =>
        eachSearchInputItems.employmentType.toUpperCase() === employmentTypeId,
    )
    this.setState({searchInput: newUpdateSearchInputDetails})
  }

  employmentDetails = () => {
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

  onChangeSalaryList = salaryRangeId => {
    const {searchInput} = this.state

    const newUpdateSearchInputDetails2 = searchInput.filter(
      eachSearchInputItems =>
        eachSearchInputItems.packagePerAnnum[0].includes(salaryRangeId[0]),
    )
    this.setState({searchInput: newUpdateSearchInputDetails2})
  }

  salaryRangeDetails = () => {
    const {newSalaryRangesList} = this.state

    return (
      <div className="salary-container">
        <h1 className="salary-heading">Salary Range</h1>
        <ul className="ul-salary-container">
          {newSalaryRangesList.map(eachSalaryDetails => (
            <SalaryFullList
              key={eachSalaryDetails.id}
              updatedSalaryDetails={eachSalaryDetails}
              onChangeSalaryList={this.onChangeSalaryList}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <>
        <div className="container">
          <Header />
          <div className="details-container">
            <div className="profile-container-details-list">
              <div>
                <ProfileCardDesign />
                <hr className="line" />
                {this.employmentDetails()}
                <hr className="line" />
                {this.salaryRangeDetails()}
              </div>
              <div className="search-input-details-container">
                {this.renderSearchDetails()}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default jobs
