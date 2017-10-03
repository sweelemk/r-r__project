import React, { Component } from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { routeConst } from '../constants/mainConstants';

export default class PageContainer extends Component {
    static propTypes = {
        children: propTypes.element,
        selectedPage: propTypes.string
    }
    componentDidMount() {
        
    }
    getLinks = () => {

        return routeConst.map((link, index) => {
            const pathName = link.defaultHash;
            const classes = classnames('header__link', {
                'header__link--selected': this.props.selectedPage === link.page,
            });
            
            return (
                <Link to={ {pathname: pathName} } key={ index } className={ classes }>{ link.name }</Link>
            );
        });
    }

    render() {
        return(
            <div className="root-frame">
                <div className="header">
                    <div className="navigation__site">
                        {this.getLinks()}
                    </div>
                </div>
                <div className="content-container">
                    {console.log(this.props.children)}
                    {this.props.children}
                </div>
            </div>
        )
    }
}