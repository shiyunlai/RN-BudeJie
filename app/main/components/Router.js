/* jshint esversion: 6 */

import React, { Component } from 'react';
import Color from '../constant/Color';
import OriginalRouter from 'react-native-simple-router';

class Router extends React.Component {
    render() {
        return (
            <OriginalRouter
                firstRoute={{
                    component: this.props.route,
                    leftCorner: this.props.title.leftBarComponent,
                    titleComponent: this.props.title.titleBarComponent,
                    rightCorner: this.props.title.rightBarComponent,
                }}
                handleBackAndroid={true}
                backButtonComponent={this.props.title.backButtonComponent}
                headerStyle={{backgroundColor: Color.titleBackgroundColor}}
            />
        );
    }
}

export default Router;
