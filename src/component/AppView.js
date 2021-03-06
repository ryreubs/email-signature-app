import React, {Component} from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faLinkedin, faTwitterSquare, faInstagram} from '@fortawesome/fontawesome-free-brands';
import '../css/appView.css'

export default class AppView extends Component {
    render() {
        const {Social} = this.props;
        const size = Social.linkcolor;
        const fc = Social.feactureColor;
        const tc = Social.textColor;
        const fs = Social.fontSize;
        const ff = Social.fontFamily;
        const ta = Social.textAlign
        const dStyle = {
            margin: '5px'
        }
        const cStyle = {
            display: 'none'
        }
        const bStyle = {
            fontSize: '1rem',
            fontFamily: ff,
            color: tc,
            textAlign: 'left'
        }
        const bl = {
            color: tc,
            margin: '0px'
        }
        const br = {

            borderRightColor: '#12B981',
            borderRightStyle: 'solid',
            borderRightWidth: '4px',
            verticalAlign: 'top'
        }
        const fon = '3';
        const p = fon !== '3'
            ? {
                display: 'none'
            }
            : {
                color: '#12B981',
                fontSize: '1rem',
                fontFamily: ff,
                textAlign: 'left',
                width: '20'
            };
        const j = fon !== '3'
            ? {
                display: 'none'
            }
            : {
                color: tc,
                fontSize: '1rem',
                fontFamily: ff,
                textAlign: 'left'
            };
        const w = "mailto:" + Social.email;
        const dis = Social.facebook === undefined || Social.facebook === "";
        const sty = dis
            ? cStyle
            : dStyle;
        const disp = Social.twitter === undefined || Social.twitter === "";
        const styl = disp
            ? cStyle
            : dStyle;
        const displ = Social.linkedIn === undefined || Social.linkedIn === "";
        const style = displ
            ? cStyle
            : dStyle;
        const displa = Social.instagram === undefined || Social.instagram === "";
        const s = displa
            ? cStyle
            : dStyle;
        const a = Social.phoneNo === undefined || Social.phoneNo === "";
        const b = a
            ? cStyle
            : bStyle;
        const c = Social.officePhoneNo === undefined || Social.officePhoneNo === "";
        const d = c
            ? cStyle
            : bStyle;
        const e = Social.officeFaxNo === undefined || Social.officeFaxNo === "";
        const f = e
            ? cStyle
            : bStyle;
        const g = Social.address1 === undefined || Social.address1 === ""
        const h = g
            ? cStyle
            : bStyle;
        const y = Social.address2 === undefined || Social.address2 === ""
        const z = y
            ? cStyle
            : bStyle;
        const k = Social.website === undefined || Social.website === "";
        const l = k
            ? cStyle
            : {
                color: '#12B981',
                fontSize: fs,
                fontFamily: ff,
                textAlign: ta
            };
        const m = Social.email === undefined || Social.email === "";
        const n = m
            ? cStyle
            : {
                color: '#12B981',
                fontSize: fs,
                fontFamily: ff,
                textAlign: ta
            }
        const fac = <a href={this.props.Social.facebook}><FontAwesomeIcon icon={faFacebookSquare} style={sty} size="2x"/></a>
        const twt = <a href={this.props.Social.twitter}><FontAwesomeIcon icon={faTwitterSquare} style={styl} size="2x"/></a>
        const lin = <a href={this.props.Social.linkedIn}><FontAwesomeIcon icon={faLinkedin} style={style} size="2x"/></a>
        const Ig = <a href={this.props.Social.instagram}><FontAwesomeIcon icon={faInstagram} style={s} size="2x"/></a>
        const pho = <span style={d}>
            <span style={p}>
            </span>{Social.officePhoneNo}</span>
        const tel = <span style={b}>
            <span style={p}>
            </span>{Social.phoneNo}</span>
        const fax = <span style={f}>
            <span style={p}>
            </span>{Social.officeFaxNo}</span>
        const add = <span style={h}>
            <span style={p}>
            </span>{Social.address1}</span>
        const add2 = <span style={z}>
            <span style={p}>
            </span>{Social.address2}</span>
        const web = <a href={Social.website} style={l}>
            <span style={p}>
            </span>{Social.website}</a>
        const email = <a style={n} href={w}>
            <span style={p}>
            </span>{Social.email}</a>
        const img = <img src={Social.avatar} alt={Social.lastName}/>
        const lname = <b style={p}>{Social.lastName}<span>&#160;</span>{Social.firstName}</b>

        if (Social.signatureStyle === '1') {
            return (
                <table className="opc">
                    <tbody style={j}>
                        <tr>
                            <td>{lname}</td>
                        </tr>
                        <tr colSpan="2">
                            <td>{img}</td>
                        </tr>
                        <tr colSpan="2">
                            <td>{Social.jobTitle}</td>
                        </tr>
                        <tr colSpan="2">
                            <td>{Social.department}</td>
                        </tr>
                        <tr colSpan="2">
                            <td>{Social.companyName}</td>
                        </tr>
                        <tr>
                            <td>{tel}
                                <span>&#160;</span>{pho}</td>
                        </tr>
                        <tr colSpan="2">
                            <td>{fax}</td>
                        </tr>
                        <tr colSpan="2">
                            <td>{add}</td>
                        </tr>
                        <tr colSpan="2">
                            <td>{add2}</td>
                        </tr>
                        <tr>
                            <td>{web}
                            </td>
                        </tr>
                        <tr>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                display: 'inline-flex',
                                marginBottom: '0px'
                            }}>
                                {fac}{twt}{lin}{Ig}
                            </td>
                        </tr>
                    </tbody>
                </table>
            )
        }
        if (Social.signatureStyle === '2') {
            return (
                <table className="">
                    <tbody style={j}>
                        <tr>
                            <td>{lname}</td>
                        </tr>
                        <tr colSpan="2">
                            <td>{Social.jobTitle}</td>
                        </tr>
                        <tr colSpan="2">
                            <td>{Social.department}</td>
                        </tr>
                        <tr colSpan="2">
                            <td>{Social.companyName}</td>
                        </tr>
                        <tr>
                            <td>{tel}
                                <span>&#160;</span>{pho}</td>
                        </tr>
                        <tr colSpan="2">
                            <td>{fax}</td>
                        </tr>
                        <tr colSpan="2">
                            <td>{add}</td>
                        </tr>
                        <tr colSpan="2">
                            <td>{add2}</td>
                        </tr>
                        <tr>
                            <td>{web}
                            </td>
                        </tr>
                        <tr>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <td
                                style={{
                                display: 'inline-flex',
                                marginBottom: '0px'
                            }}>
                                {fac}{twt}{lin}{Ig}
                            </td>
                        </tr>
                        <tr colSpan="2">
                            <td>{img}</td>
                        </tr>
                    </tbody>
                </table>
            )
        }
        if (Social.signatureStyle === '3') {
            return (
                <table style={bl}>
                    <tbody style={j}>
                        <tr>
                        <td style={br}>{img}</td>
                        <td>
                            <table style={{margin: '0px'}}>
                                <tbody>
                                <tr style={{fontWeight:'larger'}}>
                                    <td>{lname}</td>
                                </tr>
                                <tr colSpan="2">
                                    <td>{Social.jobTitle}</td>
                                </tr>
                                <tr>
                                    <td>{email}</td>
                                </tr>
                                <tr>
                                    <td>{tel}</td>
                                </tr>
                                <tr>
                                    <td>{web}</td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                        </tr>
                    </tbody>
                </table>
            )
        }
        return (
            <table style={bl}>
                    <tbody style={j}>
                        <tr>
                        <td style={br}>{img}</td>
                        <td>
                            <table style={{margin: '0px'}}>
                                <tbody>
                                <tr style={{fontWeight:'larger'}}>
                                    <td>{lname}</td>
                                </tr>
                                <tr colSpan="2">
                                    <td>{Social.jobTitle}</td>
                                </tr>
                                <tr>
                                    <td>{email}</td>
                                </tr>
                                <tr>
                                    <td>{tel}</td>
                                </tr>
                                <tr>
                                    <td>{web}</td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                        </tr>
                    </tbody>
                </table>
        );
    }
}