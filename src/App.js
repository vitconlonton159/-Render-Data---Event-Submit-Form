import React, { Component } from 'react';
import BstProductList from './components/BstProductList';
import BstProductAdd from './components/BstProductAdd';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        { title: 'bui son tung', id: 9999, status:1 },
        { title: 'Garlic', id: 2, status:1 },
        { title: 'Apple', id: 3, status:1 },
        { title: 'samsung', id: 4, status:0 },
      ]
    }
  }
  bstHandleSubmit = (param)=>{
    console.log("App:",param);

    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }

  render() {
    return (
      <div className='container border mt-5'>
          <h1> bui son tung - render </h1>
          <hr/>
          <BstProductList renderProducts={this.state.products}/>
        <hr/>
        <BstProductAdd onSubmit = {this.bstHandleSubmit}/>
      </div>
    )
  }
}

export default App;
