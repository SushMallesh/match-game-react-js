import './index.css'

const Thumbnail = props => {
  const {eachThumbnail, onMatchImage} = props
  const {thumbnailUrl, id} = eachThumbnail

  const onClickThumbnail = () => {
    onMatchImage(id)
  }
  return (
    <li className="thumbnail-item">
      <button
        onClick={onClickThumbnail}
        type="button"
        className="thumbnail-button"
      >
        <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}
export default Thumbnail
