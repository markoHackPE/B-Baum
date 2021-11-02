import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var VALUES = [10,13,9];

var i = 0;

class NodeItem extends React.Component { 
    constructor(props){
        super(props);
        this.value = VALUES[i++]; 
    }

    render(){
        return(
            <div style={{width: "40px", height: "40px", border: "1px solid black"}}>
                {this.props.value}
            </div>
        );
    }
}

class BTreeNode extends React.Component {
    a_values = [1,2,3,4,5,6];

    thisNode= this.a_values.map((number)=>
        <NodeItem value={number}></NodeItem>
    );

    render(){
        
        return(
            <div>
                {this.thisNode}
            </div>
        );
    }
}


class BTree extends React.Component {

    render() {
        const nodes = [];
        return(
            <div>
                <BTreeNode />
            </div>
        );
    }
}

ReactDOM.render(
    <BTree />,
    document.getElementById('container')
);