import { useNavigate } from "react-router-dom"
import { useField } from "../hooks"

const CreateNew = (props) => {
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.attributes.value,
      author: author.attributes.value,
      info: info.attributes.value,
      votes: 0
    })
    props.setNotification(`Added ${content.attributes.value} by ${author.attributes.value}`)
    navigate('/')
  }

  const handleReset = (e) => {
    e.preventDefault()
    content.reset()
    author.reset()
    info.reset()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input name='content' {...content.attributes}/>
        </div>
        <div>
          author
          <input name='author' {...author.attributes} />
        </div>
        <div>
          url for more info
          <input name='info' {...info.attributes} />
        </div>
        <div>
          <button>create</button>
          <button onClick={handleReset}>reset</button>
        </div>
      </form>
    </div>
  )
}

export default CreateNew