import React, { Component } from 'react';
import './App.css';
import Pictures from './Pictures/Pictures';

import fetchJ from 'fetch-jsonp'

export default class App extends Component {
  state = {
    term: '',
    items: [],
  }

  onChange = (event) => {
    this.setState({
      term: event.target.value
    });
  }

  getData = (query) => {
    fetchJ(`https://api.vk.com/method/photos.search?q=${query}&v=5.73&count=20`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        items: data.response.items
      })
    })
    .catch(error => console.log('error', error));
  }

  onSubmit = (event) => {
    event.preventDefault();

    this.getData(this.state.term)
  }
  
  render() {
    return (
      <div className="container">
	      <h1 className="todo-title" >Галерея</h1>
        <form className="todo-form" onSubmit={this.onSubmit}>
          <input className="todo-form__input" placeholder="Введите тематику!!" value={this.state.term} onChange={this.onChange} />
          <button className="todo-form__button" disabled={!this.state.term}>Показать</button>
        </form>
        <Pictures items={this.state.items}/>
      </div>
    );
  }
}



