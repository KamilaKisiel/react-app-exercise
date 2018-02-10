import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppBar from 'material-ui/AppBar';

import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Player from './player';

export default () => {
    return <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <React.Fragment>
                <Header/>
                <AppBar title="Player table" />
                <Route path="/" exact component={MainContent}/>
                <Route path="/player/:id" component={Player}/>
                <Footer/>
            </React.Fragment>
        </MuiThemeProvider>
    </BrowserRouter>

}