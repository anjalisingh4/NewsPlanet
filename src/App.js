
import './App.css';
import News from './components/News';

import React, { Component } from 'react'
import{ Navbar} from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 15;
  apiKey = process.env.REACT_APP_NEWS

  state={
    progress:0
  }

  setProgress =(progress)=>{
    this.setState({
      progress: progress
    })


  }
  
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress= {this.state.progress}/>
        <Routes>
          <Route path='/' element={<News setProgress ={this.setProgress} apiKey = {this.apiKey} key="general" pageSize={this.pageSize} country={"in"} category = {'general'}></News>} />
          <Route path='/business' element={<News setProgress ={this.setProgress} apiKey = {this.apiKey} key="business" pageSize={this.pageSize} country={"in"} category = {'business'}></News>} />
          <Route path='/entertainment' element={<News setProgress ={this.setProgress} apiKey = {this.apiKey} key="entertainment" pageSize={this.pageSize} country={"in"} category = {'entertainment'}></News>} />
          <Route path='/general' element={<News setProgress ={this.setProgress} apiKey = {this.apiKey} key="general" pageSize={this.pageSize} country={"in"} category = {'general'}></News>} />
          <Route path='/health' element={<News setProgress ={this.setProgress} apiKey = {this.apiKey} key="health" pageSize={this.pageSize} country={"in"} category = {'health'}></News>} />
          <Route path='/science' element={<News setProgress ={this.setProgress} apiKey = {this.apiKey} key="science"pageSize={5} country={"in"} category = {'science'}></News>} />
          <Route path='/sports' element={<News setProgress ={this.setProgress} apiKey = {this.apiKey} key="sports" pageSize={this.pageSize} country={"in"} category = {'sports'}></News>} />
          <Route path='/technology' element={<News setProgress ={this.setProgress} apiKey = {this.apiKey} key="technology" pageSize={this.pageSize} country={"in"} category = {'technology'}></News>} />
        </Routes>
        </Router>
      </div>
    )
  }
}

        