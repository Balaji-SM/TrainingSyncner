import React from "react";
import "./style.css";

class Popup extends React.Component{
    render(){
        return(
        <div className="popup">
            <div className="popup-inner">
                <h1 className="close" >X</h1>
                <br/>
                <br/>
                <center>
                    <span className="tick">&#10003;</span>
                </center>
                <h2 className="text2">
                    Submitted Successfully!</h2>
            </div>
        </div>
    );
};
}
export default Popup;

