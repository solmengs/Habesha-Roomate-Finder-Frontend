import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Input, Header, Segment, Dropdown,Menu } from 'semantic-ui-react'
import TenantCard from './TenantCard'

// const initialState = { isLoading: false, results: [], value: '' }

export default class SearchFrom extends Component { 
  
    
  
   
  SearchFilter=(e)=> {
   
    this.props.onSetFilter(e.target.value)
   
  }
  


  render() { 
    console.log(this.props, "searching...")
    

    return (
       <div className=" search">
         <Input
           onChange={this.SearchFilter}
           icon="search"
           placeholder="Search Tenants..."
           value={this.props.filter}
           {...this.props}
          />
       </div>
    )
  }
}
