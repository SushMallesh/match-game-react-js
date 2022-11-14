import './index.css'

const GameFinish = props => {
  const {userScore, onPlayGameAgain} = props

  const onClickPlayAgain = () => {
    onPlayGameAgain()
  }
  return (
    <div className="game-finish-container">
      <img
        className="trophy"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p className="your-score-text">YOUR SCORE</p>
      <p className="score">{userScore}</p>
      <button
        onClick={onClickPlayAgain}
        type="button"
        className="button-container"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}
export default GameFinish
