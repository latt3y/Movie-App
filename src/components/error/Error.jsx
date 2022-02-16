import React from 'react';

export default class Error extends React.Component {
    constructor(props){
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(){
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo){
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render(){
        if(this.state.hasError){
            return <h1>Something Went Wrong</h1>
        }
        return this.props.children
    }
}