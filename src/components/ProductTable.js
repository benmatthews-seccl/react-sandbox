import react from 'react';
import CategoryGroup from './CategoryGroup'
import SearchBox from './SearchBox';
import './ProductTable.css'

export default class ProductTable extends react.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: props.data,
      filteredData: props.data.slice(),
      search: '',
      inStock: false
    }
  }


  inStockFilter = () => this.setState({inStock: !this.state.inStock})

  searchFilter = (e) => this.setState({search: e})

  render () {
    let filteredData = this.state.data.filter(item => item.name.includes(this.state.search))
    if (this.state.inStock) {
      filteredData = filteredData.filter(item => item.stocked)
    }
    return (<div className='ProductTable'>
      <SearchBox
        handleSearchChange={this.searchFilter}
        handleToggleChange={this.inStockFilter}/>
      <CategoryGroup data={filteredData} />
    </div>)
  }
}