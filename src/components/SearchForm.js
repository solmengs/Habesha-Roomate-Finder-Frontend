import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import TenantCard from './TenantCard'

const initialState = { isLoading: false, results: [], value: '' }

export default class SearchFrom extends Component { 
  
    
    
  state = initialState

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  // handleSearchChange = (e, { value }) => {
  //   this.setState({ isLoading: true, value })
  //   setTimeout(() => {
  //     if (this.state.value.length < 1) return this.setState(initialState)

  //     const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
  //     const isMatch = (result) => re.test(result.name)

  //     this.setState({
  //       isLoading: false,
  //       results: _.filter(isMatch),
  //     })
  //   }, 300)
  // }
  
   
  SearchFilter=(e)=> {
    let name = e.target.value
    let {tenants} = this.props
    let resultTenets = tenants.length > 0 ? tenants.filter(tenant => tenant.name.includes(name)) : []
    console.log(resultTenets)
    this.setState( 
      {
        // isLoading: false,
        results: resultTenets.map(result => ({title:result.name, image: result.img, description:result.gender, price:result.age})),
        value: name
      } 
    )
  }
  


  render() { 
    console.log(this.props, "searching...")
    const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.SearchFilter, 500, {
              leading: true,
            })}
            results={results} 
            value={value}
            {...this.props}
            />
        </Grid.Column>
         
       
      </Grid>
    )
  }
}
