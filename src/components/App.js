import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainContainer from '../containerPages/MainPages'; 

export default class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <MainContainer />
            </BrowserRouter>
        )
    }
}