import React from 'react';
import './App.css';
import {Badge, Col, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink, Row, Table} from 'reactstrap';
import strings from './strings';
import SinglePieceOfDoctrine from './SinglePieceOfDoctrine';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFileDownload, faFileUpload} from '@fortawesome/free-solid-svg-icons';
import Files from 'react-files';
import HttpsRedirect from 'react-https-redirect';
import html2canvas from 'html2canvas';

const logoStyle = {
    height: 30,
    marginTop: -5
};

const sectionHeaderStyle = {
    textAlign: "center",
    fontSize: '0.9rem'
}

const doctrineSectionStyle = {
    fontSize: '0.9rem'
}

const categoryHeaderStyle = {
    fontSize: '0.9rem',
    textAlign: 'right',
    fontStyle: 'italic'
}

const state = {};

class App extends React.Component {

    constructor() {
        super();
        this.tableRef = React.createRef();
        this.updateEvaluation = this.updateEvaluation.bind(this);
        this.downlad = App.download.bind(this);
        this.downloadPng = this.downloadPng.bind(this);
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

    downloadPng() {
		html2canvas(this.tableRef.current).then(canvas => {
			const base64image = canvas.toDataURL('image/png');
			const link = document.createElement('a');
			link.download = 'Doctrine';
			link.href = base64image;
			link.click();
		});
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
                                        <NavLink href="#load"  style={{fontSize:'0.9rem'}}><Files
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
                                        <NavLink href="#save" onClick={this.downlad}  style={{fontSize:'0.9rem'}}><FontAwesomeIcon
                                            icon={faFileDownload}/>&nbsp;Download</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#save" onClick={this.downloadPng}  style={{fontSize:'0.9rem'}}><FontAwesomeIcon
                                            icon={faFileDownload}/>&nbsp;Export as PNG</NavLink>
                                    </NavItem>
                                </Nav>
                            </Navbar>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <div ref={this.tableRef}>
                                <Table bordered responsive size="sm">
                                    <thead>
                                    <tr>
                                        <th style={doctrineSectionStyle}>{strings.category}</th>
                                        <th colSpan="6" style={sectionHeaderStyle}>{strings.doctrine}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th></th>
                                        <th style={categoryHeaderStyle}>{strings.communication}</th>
                                        <th style={categoryHeaderStyle}>{strings.development}</th>
                                        <th style={categoryHeaderStyle}>{strings.operation}</th>
                                        <th style={categoryHeaderStyle}>{strings.learning}</th>
                                        <th style={categoryHeaderStyle}>{strings.leading}</th>
                                        <th style={categoryHeaderStyle}>{strings.structure}</th>
                                    </tr>
                                    <tr>
                                        <th rowSpan={4} scope="row" style={sectionHeaderStyle}>{strings.phaseI}</th>
                                            <SinglePieceOfDoctrine doctrineKey="commonLanguage" state={state}
                                                                   callback={this.updateEvaluation}/>
                                            <SinglePieceOfDoctrine doctrineKey="knowYourUsers" state={state}
                                                                   callback={this.updateEvaluation}
                                                                   discussion="https://community.wardleymaps.com/t/know-your-users-what-does-it-mean-to-you/565"/>
                                            <SinglePieceOfDoctrine doctrineKey="thinkSmallDetails" state={state}
                                                                   callback={this.updateEvaluation} rowSpan={4}/>
                                            <SinglePieceOfDoctrine rowSpan={4} doctrineKey="systematicLearning" state={state}
                                                                   callback={this.updateEvaluation}/>
                                        <td colSpan={2} rowSpan={4}/>
                                    </tr>
                                    <tr>
                                        <SinglePieceOfDoctrine doctrineKey="challenge" state={state}
                                                            callback={this.updateEvaluation}/>
                                        <SinglePieceOfDoctrine doctrineKey="focusOnUserNeeds" state={state}
                                                            callback={this.updateEvaluation}
                                                            discussion="https://community.wardleymaps.com/t/know-your-users-what-does-it-mean-to-you/565"/>
                                    </tr>
                                    <tr>
                                        <SinglePieceOfDoctrine doctrineKey="highSituationalAwareness" state={state} rowSpan={2}
                                                               callback={this.updateEvaluation}/>
                                        <SinglePieceOfDoctrine doctrineKey="removeBiasAndDuplication" state={state}
                                                           callback={this.updateEvaluation}/>
                                    </tr>
                                    <tr>
                                        <SinglePieceOfDoctrine doctrineKey="methods" state={state}
                                                               callback={this.updateEvaluation}/>
                                    </tr>
                                    <tr>
                                        <th rowSpan={6} scope="row" style={sectionHeaderStyle}>{strings.phaseII}</th>

                                        <SinglePieceOfDoctrine doctrineKey="beTransparent" state={state} rowSpan={2}
                                                            callback={this.updateEvaluation}/>
                                        <SinglePieceOfDoctrine doctrineKey="focusOutcome" state={state}
                                                               callback={this.updateEvaluation}/>
                                        <SinglePieceOfDoctrine doctrineKey="manageInertia" state={state} rowSpan={2}
                                                               callback={this.updateEvaluation}/>
                                        <SinglePieceOfDoctrine doctrineKey="action" state={state} rowSpan={6}
                                                               callback={this.updateEvaluation}/>
                                        <SinglePieceOfDoctrine doctrineKey="moveFast" state={state} rowSpan={2}
                                                               callback={this.updateEvaluation}/>
                                        <SinglePieceOfDoctrine doctrineKey="thinkSmallTeam" state={state} rowSpan={2}
                                                               callback={this.updateEvaluation}/>
                                    </tr>
                                    <tr>

                                        <SinglePieceOfDoctrine doctrineKey="thinkFast" state={state}
                                                               callback={this.updateEvaluation}/>

                                    </tr>
                                    <tr>
                                        <td rowSpan={4}></td>

                                        <SinglePieceOfDoctrine doctrineKey="appropriateTools" state={state} rowSpan={1}
                                                               callback={this.updateEvaluation}/>
                                        <SinglePieceOfDoctrine doctrineKey="failure" state={state} rowSpan={2}
                                                               callback={this.updateEvaluation}/>

                                        <SinglePieceOfDoctrine doctrineKey="iterativeStrategy" state={state} rowSpan={4}
                                                               callback={this.updateEvaluation}/>
                                        <SinglePieceOfDoctrine doctrineKey="distributePower" state={state}
                                                               callback={this.updateEvaluation}/>
                                    </tr>
                                    <tr>
                                        <SinglePieceOfDoctrine doctrineKey="bePragmatic" state={state} rowSpan={2}
                                                               callback={this.updateEvaluation}/>
                                        <SinglePieceOfDoctrine doctrineKey="thinkAptitudeAndAttitude" state={state} rowSpan={3}
                                                               callback={this.updateEvaluation}/>
                                    </tr>
                                    <tr>

                                        <SinglePieceOfDoctrine doctrineKey="effectivenessOverEfficiency" state={state} rowSpan={2}
                                                               callback={this.updateEvaluation}/>

                                    </tr>
                                    <tr>
                                        <SinglePieceOfDoctrine doctrineKey="standards" state={state}
                                                               callback={this.updateEvaluation}/>

                                    </tr>
                                    <tr>
                                        <th rowSpan={5} scope="row" style={sectionHeaderStyle}>{strings.phaseIII}</th>
                                        <td colSpan={2} rowSpan={5}></td>
                                        <SinglePieceOfDoctrine doctrineKey="optimiseFlow" state={state}
                                                               callback={this.updateEvaluation}/>
                                        <SinglePieceOfDoctrine doctrineKey="biasTowardsNew" state={state} rowSpan={5}
                                                               callback={this.updateEvaluation}/>
                                        <SinglePieceOfDoctrine doctrineKey="direction" state={state}
                                                            callback={this.updateEvaluation}/>
                                        <SinglePieceOfDoctrine doctrineKey="purpose" state={state} rowSpan={2}
                                                               callback={this.updateEvaluation}/>
                                    </tr>
                                    <tr>
                                        <SinglePieceOfDoctrine doctrineKey="betterWithLess" state={state} rowSpan={2}
                                                               callback={this.updateEvaluation}/>
                                        <SinglePieceOfDoctrine doctrineKey="beOwner" state={state}
                                                               callback={this.updateEvaluation}/>
                                    </tr>
                                    <tr>
                                        <SinglePieceOfDoctrine doctrineKey="thinkBig" state={state}
                                                               callback={this.updateEvaluation}/>
                                        <SinglePieceOfDoctrine doctrineKey="seekTheBest" state={state} rowSpan={3}
                                                               callback={this.updateEvaluation}/>
                                    </tr>
                                    <tr>
                                        <SinglePieceOfDoctrine doctrineKey="exceptionalStandards" state={state} rowSpan={2}
                                                               callback={this.updateEvaluation}/>
                                        <SinglePieceOfDoctrine doctrineKey="complexStrategy" state={state}
                                                               callback={this.updateEvaluation}/>
                                    </tr>
                                    <tr>
                                        <SinglePieceOfDoctrine doctrineKey="beHumble" state={state}
                                                               callback={this.updateEvaluation}/>
                                    </tr>

                                    <tr>
                                        <th rowSpan={2} scope="row" style={sectionHeaderStyle}>{strings.phaseIV}</th>
                                        <td rowSpan={2} colSpan={3}></td>

                                        <SinglePieceOfDoctrine doctrineKey="ecosystem" state={state} rowSpan={2}
                                                               callback={this.updateEvaluation}/>
                                        <SinglePieceOfDoctrine doctrineKey="landscape" state={state}
                                                               callback={this.updateEvaluation}/>
                                        <SinglePieceOfDoctrine doctrineKey="noOneCulture" state={state}
                                                               callback={this.updateEvaluation}/>
                                    </tr>
                                    <tr>
                                        <SinglePieceOfDoctrine doctrineKey="noCore" state={state}
                                                               callback={this.updateEvaluation}/>
                                        <SinglePieceOfDoctrine doctrineKey="constantEvolution" state={state}
                                                               callback={this.updateEvaluation}/>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
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
