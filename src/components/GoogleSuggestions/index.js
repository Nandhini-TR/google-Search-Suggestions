import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onClickedSuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="logo"
        />
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="search-icon"
          />
          <input
            type="search"
            className="search-bar"
            placeholder="Search Google"
            value={searchInput}
            onChange={e => this.onClickedSuggestion(e.target.value)}
          />
          <ul className="list-container">
            {suggestionsList
              .filter(each =>
                each.suggestion
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()),
              )
              .map(eachItem => (
                <SuggestionItem
                  suggestionsList={eachItem}
                  key={eachItem.id}
                  onClickedSuggestion={this.onClickedSuggestion}
                />
              ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
