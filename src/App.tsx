import React from "react";
import Home from "./Home";
import FacebookLoginComponent from './FacebookLoginComponent';

interface State{
    isLoggedIn: boolean;
    name: string;
    email: string;
    picture: string;
}
class App extends React.Component<{}, State> {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
            name: "",
            email: "",
            picture: "",
        }
    }
    render() {
        if(this.state.isLoggedIn){
            return ( <Home /> );
        } else {
            return(
                <FacebookLoginComponent onResponseFacebook={this.onResponseFacebook} />
            );
        }        
    }

    onResponseFacebook = (response) => {
        this.setState({
            isLoggedIn: true,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url,
        });
    }
}

export default App;
