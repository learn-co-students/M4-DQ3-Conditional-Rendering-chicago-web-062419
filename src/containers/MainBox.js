import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super()
    this.state = {
      activeMenu: 'profile'
    }
  }

  handleMenuStatus = (event) => {
    document.getElementById(this.state.activeMenu).className = "item"
    this.setState({activeMenu: event.target.id})
    event.target.className = 'item active'
  }

  detailsToDisplay = (status) => {
    switch (status) {
      case 'profile':
        return <Profile />
      case 'photo':
        return <Photos />
      case 'cocktail':
        return <Cocktails />
      case 'pokemon':
        return <Pokemon />
    }
  }

  render() {
    
    /*
    
    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?
    
    */
    const status = this.state.activeMenu
    
    return (
      <div>
        <MenuBar handleMenuStatus={this.handleMenuStatus}/>
        <div>{this.detailsToDisplay(status)}</div>
      </div>
    )
  }

}

export default MainBox
