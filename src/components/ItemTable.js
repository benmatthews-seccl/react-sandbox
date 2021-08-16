
  renderCategoryGroup = () => {
    let arr = []
    this.state.categories.forEach(cat => {
      arr.push(<CategoryGroup className='itemGroup'
        productsArray={this.state.searchData.filter(item => item.category === cat)}
        categoryName={cat}/>)
    })
    return arr
  }