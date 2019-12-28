import React from 'react';
import './App.css';
import {Col, Container, Navbar, NavbarBrand, Row, Table} from 'reactstrap';
import strings from './strings';
import SinglePieceOfDoctrine from './SinglePieceOfDoctrine';


const logoStyle = {
    height: 30,
    marginTop: -5
};

const state = {};


class App extends React.Component {

    constructor() {
        super();
        this.updateEvaluation = this.updateEvaluation.bind(this);
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

    render() {
        return (
            <Container>
                <Row>
                    <Col sm={{size: 12}}>
                        <Navbar color="light" light expand="md">
                            <NavbarBrand href="/">
                                <img src="/leflogo.svg" alt="Home" style={logoStyle}></img>
                            </NavbarBrand>
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
                                                       callback={this.updateEvaluation}/>
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
                                <SinglePieceOfDoctrine doctrineKey="bias" state={state}
                                                       callback={this.updateEvaluation}/>
                                <SinglePieceOfDoctrine doctrineKey="thinkSmall" state={state}
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
                    <Col sm={{size: 12}}>
                        Based on Simon Wardley's work. Learn more at <a
                        href={"https://learn.wardleymaps.com/"}>https://learn.wardleymaps.com/</a>.
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default App;
