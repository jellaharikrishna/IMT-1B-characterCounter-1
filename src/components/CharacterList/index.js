import './index.css'

const CharacterList = props => {
  const {characterDetails} = props
  const {text} = characterDetails

  return (
    <li className="charactersList-card">
      <p className="text">
        {text} : {text.length}
      </p>
    </li>
  )
}

export default CharacterList
