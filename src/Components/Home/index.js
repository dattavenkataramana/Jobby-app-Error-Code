import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <div className="home-container">
      <Header />
      <div className="matter-container">
        <h1 className="find-heading">
          Find The Job That <br /> First Your Life
        </h1>
        <p className="description">
          Millions of people sre searching for jobs,salary <br />
          information,company reviews.Find the job that first your <br />
          abilities and potential
        </p>
        <Link to="/jobs">
          <button className="button-of-jobs-search" type="button">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default Home
