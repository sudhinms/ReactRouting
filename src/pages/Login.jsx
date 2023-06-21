import "../style.css"
import logo from "../assets/arrow.png"
export default function Register(){
    return(
    <div className="container">
        <div className="row">
            <div className="col-md-10 offsewt=md-1">
                <div className="row">
                    <div className="col-md-5 register-left">
                    
                   <img src={logo} id="image" alt=""/>
                    <h3>Join us</h3>
                    <p>dhgfdshfsdhhhhhhhhhhhhhhhhh</p>
                    <button type="button" className="btn btn-primary">About us</button>
                    </div>
                    <div className="col-md-7 register-right">
                        <div className="color">
                        <div id="regbody">
                            <h2>Register</h2>
                            <div id="inputdiv">
                                <form action="#" method="post">
                                    <input type="text" id="name" className="form-control"  placeholder="name"/>
                                    <input type="text" className="form-control"  placeholder="username"/>
                                    <input type="text" className="form-control"  placeholder="email"/>
                                    <input type="text" className="form-control"  placeholder="password"/>
                                    <input type="submit" id="button" className="btn btn-primary" value="Register"></input>
                                </form>
                    </div></div></div>
                    </div>
                </div>
    </div>
    </div>
        </div>
    )
}