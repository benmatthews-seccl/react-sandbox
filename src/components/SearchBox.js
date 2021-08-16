import react from "react";
import './SearchBox.css'

export default class SearchBox extends react.Component {
  handleSearchChange = (e) => {
    this.props.handleSearchChange(e.target.value)
  }

  handleToggleChange = () => {
    this.props.handleToggleChange()
  }

  render () {
    return (
      <div className='searchBox'>
        <input type='text' onChange={this.handleSearchChange}></input>
        <div className='productStockToggleContainer'>
          <input name='productStockToggle' type='checkBox' onChange={this.handleToggleChange}/>
          <label>Only show products in stock</label>
        </div>
      </div>
    )
  }
}