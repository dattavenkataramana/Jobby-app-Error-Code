import './index.css'

import {AiFillStar} from 'react-icons/ai'

import {MdLocationOn, MdWork} from 'react-icons/md'

const SearchInputItems = props => {
  const {searchDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = searchDetails

  return (
    <li className="li-search-container">
      <div className="title-star-image-container">
        <img src={companyLogoUrl} alt={employmentType} className="image-size" />
        <div>
          <div className="title-logo-container">
            <h1 className="title-heading">{title}</h1>
            <div className="icon-setting-container">
              <AiFillStar className="icon-taken" />
              <p className="rating">{rating}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="location-job-icon-salary-containers">
        <div className="icon-of-location">
          <MdLocationOn className="location" />
          <p className="para">{location}</p>
        </div>
        <div className="icon-of-mail">
          <MdWork className="mail" />
          <p className="paras">{employmentType}</p>
        </div>
        <div className="amount">
          <p className="salary-count">{packagePerAnnum}</p>
        </div>
      </div>
      <hr className="lines-container" />
      <h1 className="description">Description</h1>
      <p className="description2">{jobDescription}</p>
    </li>
  )
}

export default SearchInputItems
