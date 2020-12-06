import * as React from "react";
import strings from './strings_longer';
import {UncontrolledPopover,Popover, PopoverHeader, PopoverBody} from 'reactstrap';
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

    toggleHover() {
      let hover = false;
      if(this.state){
        hover = this.state.hover;
      }
       this.setState({hover : !hover});
    }
    enableHover(){
      this.setState({hover:true});
    }
    disableHover(){
      this.setState({hover:false});
    }
    constructor() {
        super();
        this.setState({hover : false});
        this.toggleHover = this.toggleHover.bind(this);
        this.enableHover = this.enableHover.bind(this);
        this.disableHover = this.disableHover.bind(this);
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
            fontSize: '0.9rem',
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

        let callback = null;
        if (this.props.callback) {
            callback = this.props.callback.bind(this.props.callback.this, this.props.doctrineKey);
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
        if(this.state){
          hover = this.state.hover;
        }

        let explanations = [];
        if(strings[this.props.doctrineKey].explanations){
          explanations = strings[this.props.doctrineKey].explanations.map(function(cv){
            return (<li>{cv}</li>);
          });
        }

        if(explanations.length === 0){
          hover = false;
        }


        return (<td onClick={callback} style={cellStyle} rowSpan={rowSpan} colSpan={colSpan} id={this.props.doctrineKey} onMouseEnter={this.enableHover} onMouseLeave={this.disableHover}>
            <div style={{display: 'flex', userSelect:'none'}} >
                <span style={textStyle}>{text}</span>
                {discussion}
            </div>
            <Popover placement="bottom" target={this.props.doctrineKey} isOpen={hover} boundariesElement="window">
              <PopoverHeader>{text}</PopoverHeader>
              <PopoverBody>
                <ul>
                  {explanations}
                </ul>
              </PopoverBody>
            </Popover >
        </td>);
    }
}

export default SinglePieceOfDoctrine;

// <!-- , verticalAlign: 'middle', textAlign: 'center' -->
