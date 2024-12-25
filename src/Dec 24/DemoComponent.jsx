import React from "react";
export class DemoComponent extends React.PureComponent{
    constructor(){
        super();
        this.state={
            msg:""
        }
        this.handleInsertClick=this.handleInsertClick.bind(this);
        this.handleDeleteClick=this.handleDeleteClick.bind(this);
    }
    componentDidMount(){
        this.setState({title:"Select a Category",theme:"bg-primary text-white"})
    }
    handleInsertClick(){
        this.setState({msg:"Record Inserted Successfully"});
    }
    handleDeleteClick(){
        this.setState({msg:"Record Deleted Successfully"});
    }
    


    render(){
        return(
            <div className="container-fluid">
                <button onClick={this.handleInsertClick}>Insert</button>
                <button onClick={this.handleDeleteClick}>Delete</button>
                <p>{this.state.msg}</p>

            </div>
        )
    }
}