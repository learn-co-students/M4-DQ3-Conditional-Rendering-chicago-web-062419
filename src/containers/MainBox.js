import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      page: Profile,
      isClicked: false
    }
  }

  capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  handleClick = (event)=>{
    event.target.className = "item active"
    this.setState({
      page: this.capitalize(event.target.id)
    })
  }


  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */
    console.log(this.state.page)
    const page = this.stage.page
    const detailsToDisplay = <div></div>

    return (
      <div>
        <MenuBar handleClick={this.handleClick} page={this.state}/>
        
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
