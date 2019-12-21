import React from 'react';
import './App.css';
import {Col, Container, Navbar, NavbarBrand, Row, Table} from 'reactstrap';
import strings from './strings';
import SinglePieceOfDoctrine from './SinglePieceOfDoctrine';


const logoStyle = {
    height: 30,
    marginTop: -5
};

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
                            <SinglePieceOfDoctrine doctrineKey="knowYourUsers"/>
                            <SinglePieceOfDoctrine doctrineKey="systematicLearning"/>
                            <SinglePieceOfDoctrine doctrineKey="highSituationalAwareness"/>
                            <SinglePieceOfDoctrine doctrineKey="commonLanguage"/>
                        </tr>
                        <tr>
                            <SinglePieceOfDoctrine doctrineKey="challenge"/>
                            <SinglePieceOfDoctrine doctrineKey="focusOnUserNeeds"/>
                            <SinglePieceOfDoctrine doctrineKey="bias"/>
                            <SinglePieceOfDoctrine doctrineKey="thinkSmall"/>
                        </tr>
                        <tr>
                            <SinglePieceOfDoctrine doctrineKey="methods"/>
                            <td colSpan={3}/>
                        </tr>


                        <tr>
                            <th rowSpan={4} scope="row">{strings.phaseII}</th>
                            <SinglePieceOfDoctrine doctrineKey="beTransparent"/>
                            <SinglePieceOfDoctrine doctrineKey="moveFast"/>
                            <SinglePieceOfDoctrine doctrineKey="bePragmatic"/>
                            <SinglePieceOfDoctrine doctrineKey="thinkFast"/>
                        </tr>
                        <tr>
                            <SinglePieceOfDoctrine doctrineKey="focusOutcome"/>
                            <SinglePieceOfDoctrine doctrineKey="appropriateTools"/>
                            <SinglePieceOfDoctrine doctrineKey="manageInertia"/>
                            <SinglePieceOfDoctrine doctrineKey="effectivenessOverEfficiency"/>
                        </tr>
                        <tr>
                            <SinglePieceOfDoctrine doctrineKey="thinkAptitudeAndAttitude"/>
                            <SinglePieceOfDoctrine doctrineKey="thinkSmallTeam"/>
                            <SinglePieceOfDoctrine doctrineKey="standards"/>
                            <SinglePieceOfDoctrine doctrineKey="failure"/>
                        </tr>
                        <tr>
                            <SinglePieceOfDoctrine doctrineKey="iterativeStrategy"/>
                            <SinglePieceOfDoctrine doctrineKey="action"/>
                            <SinglePieceOfDoctrine doctrineKey="distributePower"/>
                            <td/>
                        </tr>

                        <tr>
                            <th rowSpan={3} scope="row">{strings.phaseIII}</th>
                            <SinglePieceOfDoctrine doctrineKey="purpose"/>
                            <SinglePieceOfDoctrine doctrineKey="exceptionalStandards"/>
                            <SinglePieceOfDoctrine doctrineKey="direction"/>
                            <SinglePieceOfDoctrine doctrineKey="biasTowardsNew"/>
                        </tr>
                        <tr>
                            <SinglePieceOfDoctrine doctrineKey="betterWithLess"/>
                            <SinglePieceOfDoctrine doctrineKey="optimiseFlow"/>
                            <SinglePieceOfDoctrine doctrineKey="thinkBig"/>
                            <SinglePieceOfDoctrine doctrineKey="beHumble"/>
                        </tr>
                        <tr>
                            <SinglePieceOfDoctrine doctrineKey="beOwner"/>
                            <SinglePieceOfDoctrine doctrineKey="complexStrategy"/>
                            <SinglePieceOfDoctrine doctrineKey="seekTheBest"/>
                            <td/>
                        </tr>


                        <tr>
                            <th rowSpan={2} scope="row">{strings.phaseIV}</th>
                            <SinglePieceOfDoctrine doctrineKey="landscape"/>
                            <SinglePieceOfDoctrine doctrineKey="noCore"/>
                            <SinglePieceOfDoctrine doctrineKey="ecosystem"/>
                            <SinglePieceOfDoctrine doctrineKey="noOneCulture"/>
                        </tr>
                        <tr>
                            <SinglePieceOfDoctrine doctrineKey="constantEvolution"/>
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
