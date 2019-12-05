import React from "react";
import "./myForm.css";
import MyFormm from "./myFormm"
 class MyForm extends React.Component
{
    state={
name:"",//At the beginning state is null
branch:"",
sapid:"",
    };

handleChangeName=event=>{//onChange checks if there is any change & calls this function
    this.setState({name:event.target.value});//changes the state to input value
};
handleChangeBranch=event=>{
    this.setState({branch:event.target.value});
};
handleChangeSapid=event=>{
    this.setState({sapid:event.target.value});
};

render()
{
    return(
        <div className="MyForm">
            <form className="f">
            <label className="g">NAME  :</label>
        <input type="text" value={this.state.name
        } onChange={this.handleChangeName}/>
    <br></br><br></br>
<label className="g">BRANCH :</label>
<input type="text" value={this.state.branch
} onChange={this.handleChangeBranch}/>
 <br></br><br></br>
<label className="g">SAPID:</label>
<input type="text" value={this.state.sapid
} onChange={this.handleChangeSapid}/>
 <br></br><br></br>
</form>
<div className="a">
    <MyFormm info={this.state}/>
</div>
</div>

    );
}
}
export default MyForm;
