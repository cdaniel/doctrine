import React from 'react';
import './App.css';
import {Badge, Col, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink, Row, Table} from 'reactstrap';
import strings from './strings';
import SinglePieceOfDoctrine from './SinglePieceOfDoctrine';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFileDownload, faFileUpload} from '@fortawesome/free-solid-svg-icons';
import Files from 'react-files';
import HttpsRedirect from 'react-https-redirect';


const logoStyle = {
    height: 30,
    marginTop: -5
};

const state = {};


class App extends React.Component {

    constructor() {
        super();
        this.updateEvaluation = this.updateEvaluation.bind(this);
        this.downlad = App.download.bind(this);
        this.onFilesChange = this.onFilesChange.bind(this);
        this.fileReader = new FileReader();
        this.fileReader.onload = (event) => {
            let loadedState = JSON.parse(event.target.result);
            const categories = ["knowYourUsers", "systematicLearning", "highSituationalAwareness",
                "commonLanguage", "challenge", "focusOnUserNeeds", "removeBiasAndDuplication",
                "thinkSmallDetails", "methods", "beTransparent", "moveFast", "bePragmatic",
                "thinkFast", "focusOutcome", "appropriateTools", "manageInertia", "effectivenessOverEfficiency",
                "thinkAptitudeAndAttitude", "thinkSmallTeam", "standards", "failure",
                "iterativeStrategy", "action", "distributePower", "purpose", "exceptionalStandards",
                "direction", "biasTowardsNew", "biasTowardsNew", "optimiseFlow", "thinkBig",
                "beHumble", "beOwner", "complexStrategy", "seekTheBest", "landscape",
                "noCore", "ecosystem", "noOneCulture", "constantEvolution"
            ];
            categories.forEach((category) => {
                if (loadedState[category] && loadedState[category].evaluation) {
                    if (loadedState[category].evaluation === 1) {
                        state[category] = {evaluation: 1};
                    } else if (loadedState[category].evaluation === 2) {
                        state[category] = {evaluation: 2};
                    } else if (loadedState[category].evaluation === 3) {
                        state[category] = {evaluation: 3};
                    } else {
                        state[category] = {evaluation: 0};
                    }
                } else {
                    state[category] = {evaluation: 0};
                }
            });
            this.forceUpdate();

        };
    }

    updateEvaluation(key) {
        if (!state[key]) {
            state[key] = {
                evaluation: 1
            }
        } else {
            state[key].evaluation = (state[key].evaluation + 1) % 4;
        }
        this.forceUpdate();
    };


    static download(e) {
        e.preventDefault();
        let contentType = "application/json;charset=utf-8;";
        let today = (new Date()).toLocaleString();
        let finalJSON = Object.assign({
            comment: "Assessment created at doctrine.wardleymaps.com",
            createdAt: today
        }, state);
        const a = document.createElement('a');
        a.download = 'Wardley\'s Doctrine assessment ' + today + '.json';
        a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(finalJSON));
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    onFilesChange(file) {
        this.fileReader.readAsText(file[0]);
    }

    render() {
        return (
            <HttpsRedirect>
                <Container>
                    <Row>
                        <Col sm={{size: 12}}>
                            <Navbar color="light" light expand="md">
                                <NavbarBrand href="/">
                                    <img src="/leflogo.svg" alt="Home" style={logoStyle}/>
                                </NavbarBrand>
                                <Nav navbar className='rightNav ml-auto'>
                                    <NavItem>
                                        <NavLink href="#load"><Files
                                            className='files-dropzone'
                                            onChange={this.onFilesChange}
                                            // onError={this.onFilesError}
                                            accepts={['application/json', '.json']}
                                            multiple={false}
                                            maxFiles={1}
                                            maxFileSize={100000}
                                            minFileSize={0}
                                            clickable
                                        >
                                            <FontAwesomeIcon icon={faFileUpload}/>&nbsp;Load
                                        </Files></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#save" onClick={App.download}><FontAwesomeIcon
                                            icon={faFileDownload}/>&nbsp;Download</NavLink>
                                    </NavItem>
                                </Nav>
                            </Navbar>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <Table bordered responsive size="sm">
                                <thead>
                                <tr>
                                    <th>{strings.category}</th>
                                    <th colSpan="4" style={{textAlign: "center"}}>{strings.doctrine}</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th rowSpan={3} scope="row">{strings.phaseI}</th>
                                    <SinglePieceOfDoctrine doctrineKey="knowYourUsers" state={state}
                                                           callback={this.updateEvaluation}
                                                           discussion="https://community.wardleymaps.com/t/know-your-users-what-does-it-mean-to-you/565"/>
                                    <SinglePieceOfDoctrine doctrineKey="systematicLearning" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="highSituationalAwareness" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="commonLanguage" state={state}
                                                           callback={this.updateEvaluation}/>
                                </tr>
                                <tr>
                                    <SinglePieceOfDoctrine doctrineKey="challenge" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="focusOnUserNeeds" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="removeBiasAndDuplication" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="thinkSmallDetails" state={state}
                                                           callback={this.updateEvaluation}/>
                                </tr>
                                <tr>
                                    <SinglePieceOfDoctrine doctrineKey="methods" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <td colSpan={3}/>
                                </tr>


                                <tr>
                                    <th rowSpan={4} scope="row">{strings.phaseII}</th>
                                    <SinglePieceOfDoctrine doctrineKey="beTransparent" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="moveFast" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="bePragmatic" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="thinkFast" state={state}
                                                           callback={this.updateEvaluation}/>
                                </tr>
                                <tr>
                                    <SinglePieceOfDoctrine doctrineKey="focusOutcome" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="appropriateTools" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="manageInertia" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="effectivenessOverEfficiency" state={state}
                                                           callback={this.updateEvaluation}/>
                                </tr>
                                <tr>
                                    <SinglePieceOfDoctrine doctrineKey="thinkAptitudeAndAttitude" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="thinkSmallTeam" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="standards" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="failure" state={state}
                                                           callback={this.updateEvaluation}/>
                                </tr>
                                <tr>
                                    <SinglePieceOfDoctrine doctrineKey="iterativeStrategy" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="action" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="distributePower" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <td/>
                                </tr>

                                <tr>
                                    <th rowSpan={3} scope="row">{strings.phaseIII}</th>
                                    <SinglePieceOfDoctrine doctrineKey="purpose" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="exceptionalStandards" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="direction" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="biasTowardsNew" state={state}
                                                           callback={this.updateEvaluation}/>
                                </tr>
                                <tr>
                                    <SinglePieceOfDoctrine doctrineKey="betterWithLess" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="optimiseFlow" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="thinkBig" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="beHumble" state={state}
                                                           callback={this.updateEvaluation}/>
                                </tr>
                                <tr>
                                    <SinglePieceOfDoctrine doctrineKey="beOwner" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="complexStrategy" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="seekTheBest" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <td/>
                                </tr>


                                <tr>
                                    <th rowSpan={2} scope="row">{strings.phaseIV}</th>
                                    <SinglePieceOfDoctrine doctrineKey="landscape" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="noCore" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="ecosystem" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <SinglePieceOfDoctrine doctrineKey="noOneCulture" state={state}
                                                           callback={this.updateEvaluation}/>
                                </tr>
                                <tr>
                                    <SinglePieceOfDoctrine doctrineKey="constantEvolution" state={state}
                                                           callback={this.updateEvaluation}/>
                                    <td colSpan={3}/>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{size: 12}} style={{textAlign: 'right', fontSize: 'smaller'}}>
                        <span>Based on Simon Wardley's work. Learn more at <a
                            href={"https://learn.wardleymaps.com/"}>https://learn.wardleymaps.com/</a>.&nbsp;</span>
                            <span><a href="https://github.com/cdaniel/doctrine/"><Badge
                                color="secondary">Fork me on Github!</Badge></a></span>
                        </Col>
                    </Row>
                </Container>
            </HttpsRedirect>
        );
    };
}

export default App;
