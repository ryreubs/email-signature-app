import React, {Component} from 'react';
import whiteLogo from '../images/sindica-logo-white.png'

export default class Header extends Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <img src={ whiteLogo } alt="Sindica Corp"/>
                    <h1>Email Signature Creator</h1>
                    <p>Easily create your Sindica Corporation email signature in a just a few clicks!</p>
                    <ul className="actions">
                        <li><a href="#two" className="button scrolly">Create My Signature</a></li>
                    </ul>
                </div>
            </section>
        );
    }
}
