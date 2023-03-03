import {Component} from 'react'
import Cookies from 'js-cookie'

import JobDetailsList1 from '../JobDetailsList1'
import './index.css'

import Header from '../Header'

class JobItemDetailsRoute extends Component {
  state = {
    jobDetailsData: {},
    skillData: [],
    lifeAtCompanyData: [],
    similarJobsData: [],
  }

  componentDidMount() {
    this.getJobDetailsList()
  }

  getFormattedData = data => ({
    companyLogoUrl: data.company_logo_url,
    companyWebsiteUrl: data.company_website_url,
    employmentType: data.employment_type,
    id: data.id,
    jobDescription: data.job_description,
    location: data.location,
    packagePerAnnum: data.package_per_annum,
    rating: data.rating,
    name: data.name,
    description: data.description,
    imageUrl: data.image_url,
  })

  getJobDetailsList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/jobs/${id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = this.getFormattedData(fetchedData)
      const updatedSkills = fetchedData.job_details.skills.map(
        eachSimilarData => this.getFormattedData(eachSimilarData),
      )
      const updatedLifeAtCompanyData = fetchedData.job_details.life_at_company.map(
        eachLifeAtCompanyData => this.getFormattedData(eachLifeAtCompanyData),
      )
      const updatedSimilarJobsData = fetchedData.job_details.life_at_company.map(
        eachSimilarJobsData => this.getFormattedData(eachSimilarJobsData),
      )

      this.setState({
        jobDetailsData: updatedData,
        skillData: updatedSkills,
        lifeAtCompanyData: updatedLifeAtCompanyData,
        similarJobsData: updatedSimilarJobsData,
      })
    }
  }

  renderJobDetailsTopPart = () => {
    const {jobDetailsData} = this.state

    return (
      <>
        <JobDetailsList1
          kay={jobDetailsData.id}
          eachJobDetailsData={jobDetailsData}
        />
      </>
    )
  }

  render() {
    return (
      <div className="big-container-of-job-details">
        <Header />
        {this.renderJobDetailsTopPart()}
      </div>
    )
  }
}

export default JobItemDetailsRoute
