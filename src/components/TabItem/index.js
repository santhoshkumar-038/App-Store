import './index.css'

const TabItem = props => {
  const {tabDetails, activeTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    activeTab(tabId)
  }
  const activeTabClassName = isActive ? 'apply-border' : ''
  const applyColorToText = isActive ? 'apply-color' : ''

  return (
    <li className={`tab-item ${applyColorToText}`}>
      <button
        type="button"
        className={`tab-text ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
