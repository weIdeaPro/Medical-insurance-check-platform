import './landing.css';
import React, {Component}  from "react";
import {Link} from 'react-router-dom'
import main from '../main/main'

import { BrowserRouter as Router,Route} from 'react-router-dom';
import { withRouter } from 'react-router-dom'



export default class Landing extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state ={
    //     }
    // }

    // onClickBtn = (event) => {
    //    this.props.history.push("../main/main")
    // }
    render(){
        return (
            <div>
                <div id="landing-header">
                    <h1>跨境医疗保险核算</h1>

                    {/*<Link  to={{*/}
                    {/*    pathname: '../main/main',*/}
                    {/*}}>*/}
                        <button className="btn btn-md btn-info" onClick={this.onClickBtn}>服务</button>
                    {/*</Link>*/}


                </div>
                <ul className="slideshow">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        );
    }
}

