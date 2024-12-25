import React from 'react'

export  class ClassDemo extends React.PureComponent{
    constructor(){
        super();
        this.state={
            categories:["All","Electronics","Fashion"],
        title:"Categories List",
        styleObj:{border:'2px double red',textAlign:'center',padding:'20px'},
        theme:"bg-danger text-white"
        };
    }
    componentDidMount(){
        this.setState({
            title:"Select a Category",theme:"bg-primary text-white"
        });
    }
    render(){
        return(
            <div>
                <h2 className={this.state.theme} style={this.state.styleObj}>{this.state.title}</h2>
                <select>
                    {
                        this.state.categories.map(category=><option key={category}>{category}</option>)
                    }
                </select>
            </div>
        )
    }
}
