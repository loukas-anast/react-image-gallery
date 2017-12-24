import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';
import Page from './components/Page';
import './App.css';
import apiKey from './config';

class App extends Component {
    //Constructor function for App class
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      currentPage: ""
    }
  }
    //Desides between search or recent photos
  getPhotosForPage(currentPage, title) {
    if((currentPage !== title) && title !== "Search") {
      if(title === "Home") {
        this.getRecentPhotos();
      } else {
        this.performSearch(title);
      }
    }
  }
    
    //Fetches recent Photos
  getRecentPhotos() {
    axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=' + apiKey + '&format=json&nojsoncallback=1')
    .then(result => {
      this.setState({photos: result.data.photos.photo});
      console.log(this.state.photos);
    })
    .catch(error => {
      console.log("Error occured while fetching data from Flickr: " + error.message);
    });
  }
    
    //Performs search, fetches Photos
  performSearch(term) {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${term}&format=json&nojsoncallback=1`)
      .then(result => {
        this.setState({photos: result.data.photos.photo});
        console.log(this.state.photos);
      })
      .catch(error => {
        console.log("Error occured while fetching data from Flickr: " + error.message);
      });
  }
    
    //Sets the name of the page
  changePageName(currentPage) {
      this.setState({currentPage});
  }
    
    //Renders markup for App class
  render() {
    return (
      <BrowserRouter basename="/react-flickr-gallery">
        <Switch>
          <Route exact path='/' render={ () => <Page title="Home" {...this.state}  getPhotos={(page,title) => this.getPhotosForPage(page,title)} changePageName={title => this.changePageName(title)} fetchPhotos={term => this.performSearch(term)} />} />
          <Route path='/cats' render={() => <Page title="Cats" {...this.state}  getPhotos={(page,title) => this.getPhotosForPage(page,title)} changePageName={title => this.changePageName(title)} fetchPhotos={term => this.performSearch(term)} />} />
          <Route path='/dogs' render={() => <Page title="Dogs" {...this.state}  getPhotos={(page,title) => this.getPhotosForPage(page,title)} changePageName={title => this.changePageName(title)} fetchPhotos={term => this.performSearch(term)} />} />
          <Route path='/computers' render={() => <Page title="Computers" {...this.state}  getPhotos={(page,title) => this.getPhotosForPage(page,title)} changePageName={title => this.changePageName(title)} fetchPhotos={term => this.performSearch(term)} />} />
          <Route path='/search' render={() => <Page title="Search" {...this.state}  getPhotos={(page,title) => this.getPhotosForPage(page,title)} changePageName={title => this.changePageName(title)} fetchPhotos={term => this.performSearch(term)} />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
