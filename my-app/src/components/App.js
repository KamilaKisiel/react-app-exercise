import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

export default () => {
    return <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <React.Fragment>
                <Header/>
                <Route path="/" exact component={MainContent()}/>
                <Route path="/player/:id" component={MainContent()}/>
                <Footer/>
            </React.Fragment>
        </MuiThemeProvider>
    </BrowserRouter>

}