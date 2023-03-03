import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import OnlyProductCardDetails from '../OnlyProductCardDetails'

import './index.css'

class ProfileCardDesign extends Component {
  state = {cardDetailsList: [], isLoading: true}

  componentDidMount() {
    this.getCardDetails()
  }

  getCardDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    const data = await response.json()
    console.log(data)

    const updatedData = [data.profile_details].map(eachCardDetails => ({
      name: eachCardDetails.name,
      profileImageUrl: eachCardDetails.profile_image_url,
      shortBio: eachCardDetails.short_bio,
    }))
    this.setState({cardDetailsList: updatedData, isLoading: false})
  }

  onLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onCardDetails = () => {
    const {cardDetailsList} = this.state

    return (
      <div className="card-container">
        {cardDetailsList.map(eachListItems => (
          <OnlyProductCardDetails
            key={eachListItems.id}
            eachCardDetails={eachListItems}
          />
        ))}
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="card-container">
        {isLoading ? (
          <div>{this.onLoading()}</div>
        ) : (
          <div>{this.onCardDetails()}</div>
        )}
      </div>
    )
  }
}

export default ProfileCardDesign
