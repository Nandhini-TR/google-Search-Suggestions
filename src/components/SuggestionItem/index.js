import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, onClickedSuggestion} = props
  const {suggestion} = suggestionsList

  const onSuggestion = () => {
    onClickedSuggestion(suggestion)
  }

  return (
    <li className="container">
      <p className="description">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
        className="arrow"
        onClick={onSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
