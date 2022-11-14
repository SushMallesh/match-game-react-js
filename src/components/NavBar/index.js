import './index.css'

const NavBar = props => {
  const {timer, userScore} = props

  return (
    <nav className="navbar-container">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <ul className="navbar-score">
        {/* <button className="button" type="button">
          Play Game
        </button> */}
        <p className="score">
          Score: <span className="score-timer">{userScore}</span>
        </p>
        <li className="timer-card">
          <img
            className="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="score-timer">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
