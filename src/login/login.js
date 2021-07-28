import './login.css';
import React, {Component}  from "react";
import './login.css';

export default class Login extends Component{

    render(){
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            {/*<img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"*/}
                            {/*     className="d-inline-block align-text-top"/>*/}
                                跨境医保核验平台
                        </a>
                    </div>
                </nav>
                <div className="row">
                    <div className= "container">
                        <h1 id="title">登录</h1>
                        <form action="/login" method="post">
                            <div className="form-group mb-3">
                                <input className="form-control" type="text" name="username" placeholder="账号"/>
                            </div>
                            <div className="form-group mb-3">
                                <input className="form-control" type="password" name="password" placeholder="密码"/>
                            </div>
                            <div className="mb-3">
                                <label className="radio-inline">
                                    <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/> 医院
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/> 患者
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/> 保险机构
                                </label>
                            </div>


                            <div className="form-group">
                                <button className="btn btn-lg btn-primary btn-block">确认登录</button>
                            </div>
                        </form>
                        <a href="../landing/landing.js">返回</a>
                    </div>
                </div>
            </div>

        );
    }
}


