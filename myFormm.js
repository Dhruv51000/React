import React from "react";





class MyFormm extends React.Component
{


render()
 {
  let p=null
  let branchs=null
  let sap=null
  if(this.props.info.name||this.props.info.branch||this.props.info.sapid)
  { p=this.props.info.name
    branchs=this.props.info.branch
    sap=this.props.info.sapid

}
  return(
       <div className="myFormm">
         
<form >
 <p >NAME:{p}</p>
<p>BRANCH:{branchs}</p>
  <p>SAPID:{sap}</p>
  </form>
</div>

    );
}
}
export default MyFormm;
