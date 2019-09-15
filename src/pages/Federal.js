import React, { Component } from 'react'
import classes from "./stateLegislation.module.css"
import { LanguageContext } from "../contexts/LanguageContext"
import Translate from "../components/translate"

export default class Federal extends Component {
    render() {
        return (
            <div className={classes.content}>
                <LanguageContext.Consumer>
                    {languageContext => (
                        <Translate from={languageContext.defaultLang} to={languageContext.currentLang}>
                            <h1 className={classes.header}>Federal Legislation</h1>
                            <hr />
                            <p>
                                Under the Federal Disability Discrimination Act 1992, Guide
                                and Seeing Eye Dogs are covered by the term "Assistance
                                Animals".
                        </p>
                            <br />
                            <p>
                                While the Disability Discrimination Act includes a section on
                                exemptions to access for assistance animals (Section 54A), it
                                does not explicitly state the types of establishments where
                                assistance animals are not permitted. As a result of
                                precedents that have been established through case law,
                                however, it is generally accepted that dog guides are not
                                permitted in operating theatres, hospital burns units,
                                commercial kitchens and some zoos.
                        </p>
                            <br />
                            <p>
                                When it comes to medical facilities, even solicitors seem to
                                have some confusion in regards to where assistance animals are
                                and are not permitted. This being the case, we have had
                                several members that have been granted access to intensive
                                care units with their dog guides, so this precedent has
                                already been established.
                        </p>
                        </Translate>
                    )}
                </LanguageContext.Consumer>
            </div>
        )
    }
}
