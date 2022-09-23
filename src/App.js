import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tools from "./Tools";
import React from "react";
import SimpleList from "./SimpleList";

const array = [
  {
    id: 1,
    title: "Your Appointment for November",
    message: "The Appointment is resheduled",
    isActive: false,
  },
  {
    id: 2,
    title: "Your Appointment for December",
    message: "The Appointment is resheduled",
    isActive: true,
  },
  {
    id: 3,
    title: "Your Appointment for January",
    message: "The Appointment is sheduled",
    isActive: false,
  },
];

class App extends React.Component {


  constructor(props){
      super(props);
      
      this.state = {
        data : array,
        activeState: 'all' 
      }
  };


  //rendering again
  onListChange = (evt) => {
    const value = evt.target.value;

    this.setState({
      activeState: value
    })
  }

  handleDelete = (item) => {
    const newList = this.state.data.filter((element) => element.id !== item.id);
    this.setState({
      data: newList
    })
  }

  handleLabelClick = (arg) =>{
      this.setState({
        activeState: arg
      })
  }

  render() {

    const {
      data,
      activeState
    } = this.state;

    const newList = data.filter((item) => {
        if (activeState === "all") {
          return true;
        }
        if (activeState === "active") {
          return item.isActive === true;
        }
        if (activeState === "not-active") {
          return item.isActive === false;
        }
        return false;
      });

    return (
      <div>
        <Header />
        <Tools labelValue={activeState} onAction={this.onListChange}>
          <SimpleList onLabelClick={this.handleLabelClick} data={newList} onAction={this.handleDelete}/>
        </Tools>
        <Footer />
      </div>
    );
  }
}

export default App;
