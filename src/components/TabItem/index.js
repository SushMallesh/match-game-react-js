import './index.css'

const TabItem = props => {
  const {eachTab, onSelectTabItem, isActive} = props
  const {displayText, tabId} = eachTab

  const onClickTab = () => {
    onSelectTabItem(tabId)
  }

  const activeTabClassName = isActive
    ? 'tab-button active-tab-button'
    : 'tab-button'
  return (
    <li className="tab-item">
      <button onClick={onClickTab} type="button" className={activeTabClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
