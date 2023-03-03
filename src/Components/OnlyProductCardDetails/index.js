import './index.css'

const OnlyProductCardDetails = props => {
  const {eachCardDetails} = props
  const {name, profileImageUrl, shortBio} = eachCardDetails

  return (
    <div>
      <div className="profile-container">
        <img className="size-of-image" src={profileImageUrl} alt={name} />
        <h1 className="heading-of-rahul">{name}</h1>
        <p className="shortBio">{shortBio}</p>
      </div>
    </div>
  )
}

export default OnlyProductCardDetails
