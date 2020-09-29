import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import renderer from 'react-test-renderer';

//Smoke Test
it ('renders without crashing', () => {
    //create a DOM element to render the component
    const div = document.createElement('div');

    //render the component. 

    ReactDOM.render(<Card/>, div );

    //clean up code
    ReactDOM.unmountComponentAtNode(div);
});

//Snapshot Test
it('renders the UI as expected', () => {
    const tree = renderer
        .create(<Card title='test' content='testing'/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});