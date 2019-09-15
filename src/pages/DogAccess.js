import React, { Component } from 'react'
import classes from "./stateLegislation.module.css"
import { LanguageContext } from "../contexts/LanguageContext"
import Translate from "../components/translate"

export default class DogAccess extends Component {
    render() {
        return (
            <div className={classes.content}>
                <LanguageContext.Consumer>
                    {languageContext => (
                        <Translate from={languageContext.defaultLang} to={languageContext.currentLang}>
                            <h1 className={classes.header}>Guide Dog Access Basics</h1>
                            <hr />
                            <h3>
                                Throughout Australia, Guide Dogs are legally allowed to enter
                                all public places, including:
                            </h3>
                            <br />
                            <ul>
                                <li>
                                    <h5>shops and supermarkets</h5>
                                </li>
                                <li>
                                    <h5>cafes, restaurants and pubs</h5>
                                </li>
                                <li>
                                    <h5>hotels and motels</h5>
                                </li>
                                <li>
                                    <h5>hospitals, medical practices and dental surgeries</h5>
                                </li>
                                <li>
                                    <h5>all forms of public transport, including taxis</h5>
                                </li>
                            </ul>
                        </Translate>
                    )}
                </LanguageContext.Consumer>
            </div>
        )
    }
}
