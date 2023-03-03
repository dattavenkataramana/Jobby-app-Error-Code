/* import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'

import SearchInputItems from '../SearchInputItems'
import './index.css'

class SearchInputDetails extends Component {
  state = {
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
        <ul className="ul-container">
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

  render() {
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
}

export default SearchInputDetails */
