// import React, { Component } from 'react'
// import '../src/List.css'

// class ToDoList extends Component {
//   constructor() {
//     super();
//     this.state = { value: "", data: [] }
//   }
//   handleOnSubmit = () => {
//     this.setState({ data: [...this.state.data, this.state.value] })
//     console.log(this.state,'data')
//     alert('submitted')
//   }
//   removeItem = (id) =>{
//     const newState = this.state.data.filter(item => {
//       this.state.data.indexOf(item) !== id
//     });
//     this.setState(newState)
//   }
//   handleOnChange = (e) => {
//     this.setState({
//       value: e.target.value,
//     });
//   }
//   render() {
//     console.log("hllo", this.state.value, this.state.data)
//     return (
//       <div>
//         <input type="text"
//           className="input"
//           placeholder='enter your item'
//           name='name'
//           value={this.state.value}
//           onChange={this.handleOnChange}
//         />
//         <button type='button' onClick={this.handleOnSubmit}>ADD</button>
//         <button type='button' onClick={this.removeItem}>Delete</button>
//         {this.state.data.map((item,i) => {
//           return<p key={i}>{item}</p>
//         })}
//       </div>
//     )
//   }
// }

// export default ToDoList;
// export const dummyData = [
//   {hello:{
//   id: "1",
//   title: "hello",
//   description: "how are you"
// }}
// , {
//   id: "2",
//   title: "hii",
//   description: "how are you all"
// },
// {
//   id: "3",
//   title: "hiiii",
//   description: "how are you all of you"
// }
// ]