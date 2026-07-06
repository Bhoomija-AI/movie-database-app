import {Link, withRouter} from 'react-router-dom'

import SearchMoviesContext from '../../context/SearchMoviesContext'

import './index.css'

const NavBar = props => (
  <SearchMoviesContext.Consumer>
    {value => {
      const {onTriggerSearchingQuery, onChangeSearchInput, searchInput} = value

      const onChangeHandler = event => {
        onChangeSearchInput(event.target.value)
      }

      const onSearchHandler = event => {
        event.preventDefault()
        const {history} = props
        onTriggerSearchingQuery()
        history.push('/search')
      }

      return (
        <nav className="navbar-container d-flex align-items-center p-3">
          <div className="logo-container">
            <h1 className="page-logo">movieDB</h1>
          </div>

          <div className="ms-auto d-flex align-items-center">
            <ul className="order-1 d-flex align-items-center p-0 mb-0 ms-3 nav-items-list">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/top-rated">
                  Top Rated
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/upcoming">
                  Upcoming
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center ms-3">
              <input
                type="text"
                className="me-2 search-input"
                placeholder="Search"
                value={searchInput}
                onChange={onChangeHandler}
              />
              <button
                type="button"
                className="btn btn-outline-info"
                onClick={onSearchHandler}
              >
                Search
              </button>
            </div>
          </div>
        </nav>
      )
    }}
  </SearchMoviesContext.Consumer>
)

export default withRouter(NavBar)
