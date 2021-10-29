import * as React from "react";
import strings from './strings_longer';
import {Button, ButtonGroup, PopoverBody, PopoverHeader, UncontrolledPopover} from 'reactstrap';
import './popover.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faComments} from '@fortawesome/free-regular-svg-icons';

const LEF_RED = "#EB5E5E"; //alt B71928
const LEF_YELLOW = "#E7E568";
const LEF_GREEN = "#459B47";

class SinglePieceOfDoctrine extends React.Component {

    stopEventPropagation(e) {
        e.stopPropagation();
    }

    doToggleHover() {
        let hover = false;
        if (this.state) {
            hover = this.state.hover;
        }
        this.setState({hover: !hover, expanded: true});
    }

    enableHover() {
        let _this = this;
        if (_this.hoverTimeout) {
            clearTimeout(_this.hoverTimeout);
            this.hoverTimeout = null;
        }
        this.setState({hover: true});
        this.singlePieceRef.current.focus();

    }

    focus() {
        let _this = this;
        if (_this.hoverTimeout) {
            clearTimeout(_this.hoverTimeout);
            this.hoverTimeout = null;
        }
        this.singlePieceRef.current.focus();
    }

    disableHover() {
        let _this = this;
        _this.hoverTimeout = setTimeout(function () {
            _this.setState({hover: false, expanded: false});
        }, 300);

    }

    constructor(props) {
        super(props);
        this.enableHover = this.enableHover.bind(this);
        this.disableHover = this.disableHover.bind(this);
        this.doToggleHover = this.doToggleHover.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.toggleDetailsExpansion = this.toggleDetailsExpansion.bind(this);
        this.setStateGood = this.setStateGood.bind(this);
        this.setStateMedium = this.setStateMedium.bind(this);
        this.setStateBad = this.setStateBad.bind(this);
        this.setStateClear = this.setStateClear.bind(this);
        this.focus = this.focus.bind(this);
        this.singlePieceRef = React.createRef();
    }

    componentDidMount() {
        this.setState({hover: false});
    }

    componentWillUnmount() {
        this.setState({mounted: false});
    }

    onKeyDown(event) {
        if (event.key === '1') {
            this.setStateBad(event);
        } else if (event.key === '2') {
            this.setStateMedium(event);
        } else if (event.key === '3') {
            this.setStateGood(event);
        } else if ((event.key === '4') || (event.key === '0')) {
            this.setStateClear(event);
        } else if ((event.key === '?') || (event.key === 'h')) {
            this.doToggleHover();
        } else if (event.keyCode === 27) { //esc
            this.setState({hover: false});
        }
    }

    setStateClear(e) {
        e.stopPropagation();
        this.props.callback(this.props.doctrineKey, 0);
    }

    setStateGood(e) {
        e.stopPropagation();
        this.props.callback(this.props.doctrineKey, 3);
    }

    setStateMedium(e) {
        e.stopPropagation();
        this.props.callback(this.props.doctrineKey, 2);
    }

    setStateBad(e) {
        e.stopPropagation();
        this.props.callback(this.props.doctrineKey, 1);
    }

    toggleDetailsExpansion(event) {
        if (event) {
            event.stopPropagation();
        }
        let expanded = false;
        if (this.state) {
            expanded = this.state.expanded;
        }
        this.setState({expanded: !expanded});
    }

    render() {
        let text = strings[this.props.doctrineKey].mainText || strings[this.props.doctrineKey];

        let rowSpan = this.props.rowSpan;
        let colSpan = this.props.colSpan;

        let evaluation = 0;
        if (this.props.state[this.props.doctrineKey]) {
            evaluation = this.props.state[this.props.doctrineKey].evaluation;
        }

        let cellStyle = {
            'text-align': 'center',
            'vertical-align': 'middle'
        };
        let textStyle = {
            flex: 1,
            fontSize: 'small',
        };

        if (evaluation === 1) {
            cellStyle.backgroundColor = LEF_RED;
            textStyle.color = 'white';
        } else {
            if (evaluation === 2) {
                cellStyle.backgroundColor = LEF_YELLOW;
            } else {
                if (evaluation === 3) {
                    cellStyle.backgroundColor = LEF_GREEN;
                    textStyle.color = 'white';
                } else {
                    cellStyle.backgroundColor = null;
                }
            }
        }

        let discussion = null;
        if (this.props.discussion) {
            discussion = <span style={{float: 'right'}} onClick={this.stopEventPropagation}>
               <a href={this.props.discussion}>
                <FontAwesomeIcon icon={faComments}/>
               </a>
           </span>;
        }

        let hover = false;
        if (this.state) {
            hover = this.state.hover;
        }

        let explanations = [];
        if (this.state && this.state.hover && this.state.expanded) {
            if (strings[this.props.doctrineKey].explanations) {
                explanations = strings[this.props.doctrineKey].explanations.map(function (cv) {
                    return (<li>{cv}</li>);
                });
            }
        }


        let buttonGroup = null;
        if (this.state && this.state.hover) {
            buttonGroup = <span><ButtonGroup size="sm">
                <Button color="success" onClick={this.setStateGood}>Good (3)</Button>
                <Button color="warning" onClick={this.setStateMedium}>Medium (2)</Button>
                <Button color="danger" onClick={this.setStateBad}>Bad (1)</Button>
                <Button color="light" onClick={this.setStateClear}>Clear (4)</Button>
            </ButtonGroup><ButtonGroup size="sm">
                <Button color="light" onClick={this.toggleDetailsExpansion}>More...</Button>
            </ButtonGroup></span>;
        }
        ;

        let popover = null;
        if (this.singlePieceRef.current) {
            popover =
                <UncontrolledPopover
                    placement="auto"
                    target={this.singlePieceRef.current}
                    isOpen={hover}
                    boundariesElement="scrollParent"
                    id={this.props.doctrineKey + "-tooltip"}
                    container={this.singlePieceRef.current}>
                    <PopoverHeader>{text}</PopoverHeader>
                    <PopoverBody>
                        {buttonGroup}
                        <ul>{explanations}</ul>
                    </PopoverBody>
                </UncontrolledPopover>;
        }


        let textContent = <span style={textStyle}>{text}</span>;


        return (<td onClick={this.enableHover}
                    style={cellStyle}
                    rowSpan={rowSpan}
                    colSpan={colSpan}
                    id={this.props.doctrineKey}
                    data-testid={this.props.doctrineKey}
                    ref={this.singlePieceRef}
                    onMouseEnter={this.focus}
                    onMouseLeave={this.disableHover}
                    onKeyDown={this.onKeyDown}
                    tabindex="0">
            <div style={{display: 'flex', userSelect: 'none'}}>
                {textContent}
                {discussion}
            </div>
            {popover}
        </td>);
    }
}

export default SinglePieceOfDoctrine;

// <!-- , verticalAlign: 'middle', textAlign: 'center' -->
