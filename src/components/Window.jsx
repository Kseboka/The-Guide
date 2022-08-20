import { channels, catagories } from '../data'

const Window = ({ children, handleChange, category }) => {
  return (
    <div className='window'>
      <div className='title-bar'>
        <button aria-label='Close' className='close'></button>
        <h2 className='title'>{category}</h2>
        <button className='resize'></button>
      </div>
      <div className='separator'></div>
      <div className='select'>
        <select onChange={handleChange}>
          {catagories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
      </div>
      {children}
    </div>
  )
}

export default Window
