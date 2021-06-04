import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import SinglePieceOfDoctrine from "./SinglePieceOfDoctrine";
import renderer from 'react-test-renderer';
import strings from "./strings_longer";


const delay = ms => new Promise(res => setTimeout(res, ms));

test('renders correctly', () => {
    const tree = renderer
        .create(<SinglePieceOfDoctrine doctrineKey="commonLanguage" state={{}}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('render regular piece of doctrine', () => {
    const {getByText} = render(<SinglePieceOfDoctrine doctrineKey="commonLanguage" state={{}}/>);
    const text = getByText(strings.commonLanguage.mainText);
    expect(text).toBeInTheDocument();
});

test('check tooltip appearing', () => {
    const baseDom = render(<SinglePieceOfDoctrine doctrineKey="commonLanguage" state={{}}/>);

    fireEvent.keyDown(baseDom.getByTestId("commonLanguage"), {key: 'h'});

    expect(
        baseDom.getByText(strings.commonLanguage.explanations[0])
    ).toBeInTheDocument();

});