import react from "react";
import Item from "./Item";
import './CategoryGroup.css'
import {uniqBy} from 'lodash'

export default class CategoryGroup extends react.Component {
  constructor(props) {
    super(props)
    this.state = {
      productsArray: props.data,
      categories: uniqBy(props.data, 'category').map(cat => cat.category)
    }
  }

  renderCategoryGroup = () => {
    return this.state.categories.map(cat => {
      return <div className='categoryGroup' key={cat}>
                <div className='categoryGroupHeader'>{cat}</div>
                <div className='categoryGroupBody'>{this.renderItems()}</div>
              </div>
    })
  }
  
  renderItems = () => {
    let items = []
    this.state.productsArray.forEach(item => {
      items.push(<Item key={item.name} name={item.name} price={item.price}/>)
    })
    return items
  }

  render () {
    return <div className='itemGroup' key='1'>{this.renderCategoryGroup()}</div>
  }
}
