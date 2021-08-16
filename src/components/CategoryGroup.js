import Item from "./Item";
import {uniqBy} from 'lodash'
import './CategoryGroup.css'

export default function CategoryGroup(props) {
  const categories = uniqBy(props.data, 'category').map(item => item.category)
  let items = []
  props.data.forEach(item => {
    items.push(<Item key={item.name} name={item.name} price={item.price}/>)
  })

  let categoriesJsx = categories.map(cat => {
    return  <div className='categoryGroup' key={cat}>
              <div className='categoryGroupHeader'>{cat}</div>
              <div className='categoryGroupBody'>{items}</div>
            </div>
  })

  return <div className='itemGroup'>{categoriesJsx}</div>
}
