import React from 'react';


class App extends React.Component{
    // constructor(){
    //     super();
        state = {
            isDisabled:true,
            count:0
        }
    // }
    increment = () =>{
            this.setState({
                count: this.state.count - 1
            })
            if(this.state.count === 1){
                this.setState({
                    isDisabled : true
                })
            }
    }
    decrement = () =>{
        if(this.state.isDisabled) this.setState({isDisabled:false})
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return (
            <div className = "main">
            <button className = "myButton" onClick = {this.increment} disabled = {this.state.isDisabled}>&#8592;</button>
        <p className = "div">{
            this.state.count
        }</p>
            <button className = "myButton" onClick = {this.decrement}>&#8594;</button>
            </div>
        )
    }
}




export default App;