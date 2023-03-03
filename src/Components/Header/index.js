import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <Link to="/">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
        />
      </Link>
      <ul className="nav-menu">
        <li className="nav-menu-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-menu-item">
          <Link className="nav-link" to="/jobs">
            Jobs
          </Link>
        </li>
      </ul>
      <button
        onClick={onClickLogout}
        type="button"
        className="logout-desktop-btn"
      >
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
