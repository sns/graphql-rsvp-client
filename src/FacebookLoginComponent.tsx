import * as React from "react";
import FacebookLogin from "react-facebook-login";

interface Props{
    onResponseFacebook(response: any): any;
}

class FacebookLoginComponent extends React.Component<Props, {}> {

    public componentClicked(){
        console.log("clicked");
    }
    
    public render(){
        return (
            <FacebookLogin
                appId="2016088945142770"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.props.onResponseFacebook} 
            />
        );
    }
}

export default FacebookLoginComponent;