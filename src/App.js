import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CharacterList from './components/CharacterList'

import './App.css'

class App extends Component {
  state = {inputText: '', inputList: []}

  onChangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onSubmitAddText = event => {
    event.preventDefault()
    const {inputText} = this.state
    const inputDetails = {
      id: uuidv4(),
      text: inputText,
    }
    this.setState(prevState => ({
      inputList: [...prevState.inputList, inputDetails],
      inputText: '',
    }))
  }

  render() {
    const {inputText, inputList} = this.state

    return (
      <div className="app-container">
        <div className="main-container">
          <div className="part-one">
            <h1 className="title">Count the characters like a Boss...</h1>
            {inputList.length === 0 ? (
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            ) : (
              <ul className="charactersList-container">
                {inputList.map(each => (
                  <CharacterList key={each.id} characterDetails={each} />
                ))}
              </ul>
            )}
          </div>
          <div className="part-two">
            <h1 className="character-heading">Character Counter</h1>
            <form className="input-container" onSubmit={this.onSubmitAddText}>
              <input
                className="input-text"
                type="text"
                placeholder="Enter the Characters here"
                value={inputText}
                onChange={this.onChangeInputText}
              />
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
