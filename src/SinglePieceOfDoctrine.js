import * as React from "react";
import strings from './strings';


class SinglePieceOfDoctrine extends React.Component {

    toggleBackground() {

        let backgroundColor = this.state.style.backgroundColor;
        let textShadow = this.state.style.textShadow;

        let evaluation = this.state.evaluation;
        evaluation = evaluation + 1;
        if (evaluation > 3) evaluation = 0;

        if (evaluation === 1) {
            backgroundColor = "OrangeRed";
        } else {
            if (evaluation === 2) {
                backgroundColor = "Gold";
            } else {
                if (evaluation === 3) {
                    backgroundColor = "LimeGreen";
                } else {
                    backgroundColor = null;
                }
            }
        }

        this.setState({evaluation: evaluation, style: {backgroundColor, textShadow}});
    }

    constructor(props) {
        super(props);
        this.toggleBackground = this.toggleBackground.bind(this);
        let style = {
            textShadow: "0 0 1px white",
            backgroundColor: null
        };
        this.state = {evaluation: 0, style};
    }


    render() {
        let children = this.props.children;
        let text = strings[this.props.doctrineKey];

        let style = this.state.style;

        return (<td onClick={this.toggleBackground} style={style}><span style={style}>{text}</span></td>);
    }
}

export default SinglePieceOfDoctrine;