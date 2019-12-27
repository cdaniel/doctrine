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

function App() {

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
                            <SinglePieceOfDoctrine doctrineKey="knowYourUsers" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="systematicLearning" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="highSituationalAwareness" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="commonLanguage" state={state}/>
                        </tr>
                        <tr>
                            <SinglePieceOfDoctrine doctrineKey="challenge" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="focusOnUserNeeds" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="bias" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="thinkSmall" state={state}/>
                        </tr>
                        <tr>
                            <SinglePieceOfDoctrine doctrineKey="methods" state={state}/>
                            <td colSpan={3}/>
                        </tr>


                        <tr>
                            <th rowSpan={4} scope="row">{strings.phaseII}</th>
                            <SinglePieceOfDoctrine doctrineKey="beTransparent" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="moveFast" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="bePragmatic" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="thinkFast" state={state}/>
                        </tr>
                        <tr>
                            <SinglePieceOfDoctrine doctrineKey="focusOutcome" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="appropriateTools" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="manageInertia" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="effectivenessOverEfficiency" state={state}/>
                        </tr>
                        <tr>
                            <SinglePieceOfDoctrine doctrineKey="thinkAptitudeAndAttitude" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="thinkSmallTeam" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="standards" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="failure" state={state}/>
                        </tr>
                        <tr>
                            <SinglePieceOfDoctrine doctrineKey="iterativeStrategy" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="action" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="distributePower" state={state}/>
                            <td/>
                        </tr>

                        <tr>
                            <th rowSpan={3} scope="row">{strings.phaseIII}</th>
                            <SinglePieceOfDoctrine doctrineKey="purpose" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="exceptionalStandards" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="direction" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="biasTowardsNew" state={state}/>
                        </tr>
                        <tr>
                            <SinglePieceOfDoctrine doctrineKey="betterWithLess" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="optimiseFlow" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="thinkBig" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="beHumble" state={state}/>
                        </tr>
                        <tr>
                            <SinglePieceOfDoctrine doctrineKey="beOwner" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="complexStrategy" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="seekTheBest" state={state}/>
                            <td/>
                        </tr>


                        <tr>
                            <th rowSpan={2} scope="row">{strings.phaseIV}</th>
                            <SinglePieceOfDoctrine doctrineKey="landscape" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="noCore" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="ecosystem" state={state}/>
                            <SinglePieceOfDoctrine doctrineKey="noOneCulture" state={state}/>
                        </tr>
                        <tr>
                            <SinglePieceOfDoctrine doctrineKey="constantEvolution" state={state}/>
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
}

export default App;
