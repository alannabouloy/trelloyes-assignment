import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import renderer from 'react-test-renderer';

//Smoke test

it ('renders without crashing', () => {
    //create a DOM element to render the component
    const div = document.createElement('div');

    //render the component. 

    ReactDOM.render(<List header= 'testHeader' cards = {[{ id: 'a', title: 'First card', content: 'lorem ipsum' }]}/>, div );

    //clean up code
    ReactDOM.unmountComponentAtNode(div);
});

//Snapshot Test
it('renders the UI as expected', () => {
    const tree = renderer
        .create(<List header= 'testHeader' cards = {[{ id: 'a', title: 'First card', content: 'lorem ipsum' }]}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});