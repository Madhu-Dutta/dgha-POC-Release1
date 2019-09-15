import React, { Component } from "react"
import classes from "./stateLegislation.module.css"
import { LanguageContext } from "../contexts/LanguageContext"
import Translate from "../components/translate"

class StateLegislation extends Component {
  state = {
    loaded: true,
    userState: "Victoria",
  }

  render() {
    let content = <h1>Hi There</h1>

    if (this.state.userState === "Australian Capital Territory") {
      content = (
        <div className={classes.slide}>
          <div className={classes.content}>
            <h1 className={classes.header}>State Legislation</h1>
            <hr />
            <h2>Australian Capital Territory</h2>
            <h4>Primary Act: </h4>
            <h5>Domestic Animals Act 2000</h5>
            <h6>Sections Applicable:</h6>
            <p>
              Section 104, Rights of Persons Accompanied by Assistance Animals
            </p>
            <p>
              Section 105, Exclusion of Assistance Animals from Public Place
            </p>
            <p>
              Section 106, Imposition of Exess Charges for Assistance Animal
            </p>
            <h6>Excerpt from Section 104:</h6>
            <p>
              ? (1) Despite any other territory law (other than the
              Discrimination Act 1991 ), a person with a disability accompanied
              by an assistance animal has the same right of access to, and the
              same right to the use of, a public place as a person who is not
              accompanied by an assistance animal. (2) Without limiting
              subsection (1), a person with a disability does not commit an
              offence merely by taking an assistance animal onto or into, or
              allowing the animal to enter, a public place. “
            </p>
            <h6>Maximum Fine for Breach of Act:</h6>
            <p>10 penalty units</p>
            <p>Value of one penalty unit as of 2012</p>
            <p>$110.00</p>
            <h6>Exceptions to Access under Act:</h6>
            <p>
              It is not unlawful to impose a charge to a person with a dog guide
              if expense is reasonably occurred by the third person because of
              the presence of the dog guide.
            </p>
            <h6>Other Relevant Legislation:</h6>
            <p>Discrimination Act (NT)</p>
          </div>
        </div>
      )
    } else if (this.state.userState === "New South Wales") {
      content = (
        <div className={classes.slide}>
          <div className={classes.content}>
            <h1 className={classes.header}>State Legislation</h1>
            <hr />
            <h2>New South Wales</h2>
            <h4>Primary Act:</h4>
            <h5>Companion Animals Act 1998</h5>
            <h6>Sections Applicable:</h6>
            <p>14, Dogs Prohibited in Some Public Places</p>
            <p>
              59, Person with a Disability entitled to be Accompanied by
              Assistance Animal
            </p>
            <p>60, Assistance Animal Not to be Denied Entry</p>
            <p>61, Unlawful to Impose Charge for Entry of Assistance Animal</p>
            <h6>Excerpt from Section 59: </h6>
            <p>
              (1) A person with a disability is entitled to be accompanied by an
              assistance animal being used bona fide by the person to assist the
              person, into or onto any building or place open to or used by the
              public or on any public transport.
            </p>
            <p>
              (2) The person is not guilty of an offence merely because the
              person takes the animal into or onto or permits the animal to
              enter or be in or on any such building or place or any public
              transport while the person is using the animal bona fide to assist
              the person.
            </p>
            <p>
              (3) This section applies despite the provisions of any other Act
              or instrument made under an Act.
            </p>
            <h6>Maximum Fine for Breach of Act:</h6>
            <p>8 penalty units</p>
            <p>Value of one penalty unit as of 2012</p>
            <p>$110.00</p>
            <h6>Fines Issued By:</h6>
            <p>NSW Police</p>
            <p>Local Councils</p>
            <h6>Exceptions to Access Under Act: </h6>
            <p>
              It is not unlawful to impose a charge to a person with a dog guide
              if expense is reasonably occurred by the third person because of
              the presence of the dog guide.
            </p>
            <h6>Other Relevant Legislation</h6>
            <p>Anti-Discrimination Act 1977 (New South Wales)</p>
            <p>Passenger Transport Act 1990 (New South Wales)</p>
            <p>Rail Safety Act 1993 (New South Wales)</p>
          </div>
        </div>
      )
    } else if (this.state.userState === "Northern Territory") {
      content = (
        <div className={classes.slide}>
          <div className={classes.content}>
            <h1 className={classes.header}>State Legislation</h1>
            <hr />
            <h2>Northern Territory</h2>
            <h4>Primary Act:</h4>
            <h5>Anti Discrimination Act 1992</h5>
            <h6>Sections Applicable</h6>
            <p>Section 21, Discrimination by Refusal to Allow Guide Dog.</p>
            <h6>Excerpt from Section 21:</h6>
            <p>
              (1) For the purposes of this Act, a person discriminates on the
              ground of impairment against a person with a visual, hearing or
              mobility impairment if the person treats the person with the
              impairment less favourably because the person has a guide dog.
            </p>
            <h6>Maximum Fine for Breach of Act:</h6>
            <p>Fixed penalty of $500</p>
          </div>
        </div>
      )
    } else if (this.state.userState === "Queensland") {
      content = (
        <div className={classes.slide}>
          <div className={classes.content}>
            <h1 className={classes.header}>State Legislation</h1>
            <hr />
            <h2>Queensland</h2>
            <h4>Primary Act:</h4>
            <h5>Guide, Hearing and Assistance Dogs Act 2009</h5>
            <h6>Sections Applicable</h6>
            <p>
              Section 8, People with a Disability May be Accompanied by Their
              Guide, Hearing and Assistance Dogs
            </p>
            <h6>Excerpt from Section 8:</h6>
            <p>
              (1) Despite any other Act, a person with a disability who relies
              on a guide, hearing or assistance dog to reduce the person’s need
              for support may be accompanied by the guide, hearing or assistance
              dog in a public place or public passenger vehicle. (2) Also, a
              person with a disability who relies on a guide, hearing or
              assistance dog to reduce the person’s need for support does not
              commit an offence merely by taking the guide, hearing or
              assistance dog into a public place or public passenger vehicle. “
            </p>
            <h6>Maximum Fine for Breach of Act:</h6>
            <p>2 Penalty Units</p>
            <p>Value of One Penalty Unit as of 2012:</p>
            <p>$100.00</p>
            <h6>Exceptions to Access Under Act:</h6>
            <p> an in-patient ward</p>
            <p> a labour ward</p>
            <p> a procedure room</p>
            <p> a procedure room</p>
            <p>
              an area in which the standard of hygiene is maintained at a
              significantly high level for the purpose of preventing infection
              or the spread of disease
            </p>
            <p> an ambulance</p>
            <p>
              a part of a public place or public passenger vehicle where food is
              ordinarily prepared
            </p>
            <p>
              It is not unlawful for a person with an dog guide to be asked to
              produce evidence to certify that their dog is an assistance
              animal.
            </p>
            <h6>Other Legislation:</h6>
            <p>Anti-Discrimination Act 1991</p>
            <p>Building Units and Group Titles Act 1980.</p>
          </div>
        </div>
      )
    } else if (this.state.userState === "South Australia") {
      content = (
        <div className={classes.slide}>
          <div className={classes.content}>
            <h1 className={classes.header}>State Legislation</h1>
            <hr />
            <h2>South Australia</h2>
            <h4>Primary Act: </h4>
            <h5>Dog and Cat Management Act 1995</h5>
            <h6>Section/s Applicable:</h6>
            <p>Section 21, Accreditation of Disability Dogs, Guide Dogs etc</p>
            <p>Section 81, Disability Dogs, Guide Dogs etc</p>
            <h6>Excerpt from Secion 7:</h6>
            <p>(1) Despite this Act or any other Act?</p>
            <p>
              (a) a person who is wholly or partially blind or deaf, or
              otherwise disabled, is entitled to be accompanied by an accredited
              disability dog, guide dog or hearing dog in a public place or
              public passenger vehicle; and
            </p>
            <p>
              (b) the occupier or person in charge of a public place or public
              passenger vehicle must not refuse access to the place or vehicle
              to a person who is wholly or partially blind or deaf, or otherwise
              disabled, on the ground that the person is accompanied by a
              disability dog, guide dog or hearing dog.”
            </p>
            <h6>Maximum Fine for Breach of Act:</h6>
            <p>$250</p>
            <h6>Exceptions to Access Under Act:</h6>
            <p>
              It is not unlawful for a person with an assistance animal to be
              asked to produce evidence that their dog is an assistance animal.
            </p>
          </div>
        </div>
      )
    } else if (this.state.userState === "Tasmania") {
      content = (
        <div className={classes.slide}>
          <div className={classes.content}>
            <h1 className={classes.header}>State Legislation</h1>
            <hr />
            <h2>Tasmania</h2>
            <h4>Primary Act: </h4>
            <h5>Guide Dogs and Hearing Dogs Act 1967</h5>
            <h6>Sections Applicable:</h6>
            <p>
              Section 3, Rights of Guide Dog Users and Trainers in Respect of
              Public Places and Transport
            </p>
            <h6>Excerpt from Secion 7:</h6>
            <p>
              (1) A person who is blind or vision impaired, deaf or hearing
              impaired or a trainer
            </p>
            <p>
              (a) is entitled to be accompanied by a guide dog into any public
              place or onto any public passenger vehicle; and
            </p>
            <p>
              (b) does not commit an offence by taking a guide dog into or onto,
              or permitting a guide dog to remain in or on, a public place or
              public passenger vehicle.
            </p>
            <p>
              (2) A person who is in charge of a public place or public
              passenger vehicle, or the servant or agent of a person in charge
              of a public place or public passenger vehicle, must not
            </p>
            <p>
              (a) refuse to allow a person accompanied by a guide dog into that
              place or onto that vehicle; or
            </p>
            <p>
              (b) direct a person accompanied by a guide dog to leave that place
              or vehicle; or
            </p>
            <p>
              (c) deny accommodation or service to a person accompanied by a
              guide dog.
            </p>
            <h6>Maximum Fine for Breach of Act:</h6>
            <p>20 penalty units</p>
            <p>Value of One Penalty Unit as of 2012:</p>
            <p>$130.00</p>
          </div>
        </div>
      )
    } else if (this.state.userState === "Victoria") {
      content = (
        <div className={classes.slide}>
          <div className={classes.content}>
            <h1 className={classes.header}>State Legislation</h1>
            <hr />
            <h2>Victoria</h2>
            <h4>Primary Act: </h4>
            <h5>DOMESTIC ANIMALS ACT 1994</h5>
            <h6>Sections Applicable:</h6>
            <p>Section 7, Exemptions for Guide Dogs</p>
            <h6>Excerpt from Secion 7:</h6>
            <p>
              1) A visually impaired person or hearing impaired person who keeps
              and uses a dog as a guide dog is not liable for an offence under
              this Act in respect of that dog, where, in acting in the manner
              which would constitute the offence, the dog was performing its
              functions as a guide dog.
            </p>
            <p>
              (4) Despite anything in any other Act or subordinate instrument a
              visually impaired person, hearing impaired person or person
              fftraining a guide dog may, at all times and in all places, be
              accompanied by a dog kept and used, or trained by him or her as a
              guide dog.
            </p>
            <h6>Maximum Fine for Breach of Act:</h6>
            <p>Value of One Penalty Unit as of 2012:</p>
            <p>$125.19</p>
          </div>
        </div>
      )
    } else if (this.state.userState === "Western Australia") {
      content = (
        <div className={classes.slide}>
          <div className={classes.content}>
            <h1 className={classes.header}>State Legislation</h1>
            <hr />
            <h2>Western Australia</h2>
            <h4>Primary Act: </h4>
            <h5>Dog Act 1976</h5>
            <h6>Section/s Applicable:</h6>
            <p>Section 8, Special Provisions for Guide Dogs</p>
            <h6>Excerpt from Secion 8:</h6>
            <p>
              (1) Notwithstanding anything contained elsewhere in this Act or in
              any other Act, regulation, local law or by-law a person who is
              blind or partially blind
            </p>
            <p>
              (a) is entitled to be accompanied by a dog bona fide used by him
              as a guide dog, in any building or place open to or used by the
              public, for any purpose, or in any public transport; and
            </p>
            <p>
              (b) is not guilty of an offence by reason only that he takes that
              dog into or permits that dog to enter any building or place open
              to or used by the public or on any public transport.
            </p>
            <h6>Maximum Fine for Breach of Act:</h6>
            <p>Value of One Penalty Unit as of 2012:</p>
            <p>$125.19</p>
          </div>
        </div>
      )
    }

    return (
      <LanguageContext.Consumer>
        {languageContext => (
          <Translate from={languageContext.defaultLang} to={languageContext.currentLang}>
            {content}
          </Translate>
        )}
      </LanguageContext.Consumer>
    );
  }
}

export default StateLegislation;
