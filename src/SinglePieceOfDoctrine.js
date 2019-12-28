import * as React from "react";
import strings from './strings';


const LEF_RED = "#E36B52";
const LEF_YELLOW = "#EAD065";
const LEF_GREEN = "#9CE47F";

class SinglePieceOfDoctrine extends React.Component {

    render() {
        let text = strings[this.props.doctrineKey];

        let evaluation = 0;
        if (this.props.state[this.props.doctrineKey]) {
            evaluation = this.props.state[this.props.doctrineKey].evaluation;
        }

        let cellStyle = {};
        let textStyle = {};

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

        return (<td onClick={callback} style={cellStyle}><span style={textStyle}>{text}</span></td>);
    }
}

export default SinglePieceOfDoctrine;