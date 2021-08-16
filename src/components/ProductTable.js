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


  inStockFilter = () => {
    if (this.state.inStock) {
      this.setState({
        searchData: this.state.data.filter(item => item.stocked === !this.state.inStock),
        inStock: !this.state.inStock
      })
      return
    }

    this.setState({
      searchData: this.state.data,
      inStock: !this.state.inStock
    })
    return
  }

  searchFilter = (e) => {
    this.setState({
      search: e,
      filteredData: this.state.data.filter(item => item.name.includes(e))
    })
  }

  render () {
    return (<div className='ProductTable'>
      <SearchBox
        handleSearchChange={this.searchFilter}
        handleToggleChange={this.inStockFilter}/>
      <CategoryGroup data={this.state.filteredData}/>
    </div>)
  }
}