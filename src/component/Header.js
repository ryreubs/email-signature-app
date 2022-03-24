import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <img src="https://drive.google.com/uc?id=1vtmaGM2PtnHvawKgUOCVIz3Mkx53OAbb" alt="Sindica Corp"/>
                    <h1>Email Signature Creator</h1>
                    <ul className="actions">
                        <li><a href="#two" className="button scrolly">Create Signature</a></li>
                    </ul>
                </div>
            </section>
        );
    }
}
