import * as React from "react";
import strings from './strings';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faComments} from '@fortawesome/free-regular-svg-icons';

const LEF_RED = "#EB5E5E"; //alt B71928
const LEF_YELLOW = "#E7E568";
const LEF_GREEN = "#459B47";

class SinglePieceOfDoctrine extends React.Component {

    stopEventPropagation(e) {
        e.stopPropagation();
    }

    render() {
        let text = strings[this.props.doctrineKey];

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

        return (<td onClick={callback} style={cellStyle} rowSpan={rowSpan} colSpan={colSpan}>
            <div style={{display: 'flex'}}>
                <span style={textStyle}>{text}</span>
                {discussion}
            </div>
        </td>);
    }
}

export default SinglePieceOfDoctrine;

// <!-- , verticalAlign: 'middle', textAlign: 'center' -->
