import * as React from "react";
import strings from './strings';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faComments} from '@fortawesome/free-regular-svg-icons';

const LEF_RED = "#E36B52";
const LEF_YELLOW = "#EAD065";
const LEF_GREEN = "#9CE47F";

class SinglePieceOfDoctrine extends React.Component {

    stopEventPropagation(e) {
        e.stopPropagation();
    }

    render() {
        let text = strings[this.props.doctrineKey];

        let evaluation = 0;
        if (this.props.state[this.props.doctrineKey]) {
            evaluation = this.props.state[this.props.doctrineKey].evaluation;
        }

        let cellStyle = {};
        let textStyle = {
            flex: 1
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

        return (<td onClick={callback} style={cellStyle}>
            <div style={{display: 'flex'}}>
                <span style={textStyle}>{text}</span>
                {discussion}
            </div>
        </td>);
    }
}

export default SinglePieceOfDoctrine;