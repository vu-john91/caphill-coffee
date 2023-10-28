import './CardContainer.css'
import Card from '../Card/Card'

const CardContainer = () => {
  return (
    <div className='card-container'>
      <h2>Hello from Card Container</h2>
      <Card/>
      <h2>Hello from Card Container</h2>
    </div>
  )
}

export default CardContainer