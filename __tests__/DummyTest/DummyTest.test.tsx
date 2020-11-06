import React from 'react';
import { render } from '@testing-library/react';
import DummyTest from '../../src/app/client/components/DummyTest';

it('renders DummyTest component', () => {
    const container = render(<DummyTest message={'test'} />);
    expect(container).toMatchSnapshot();
});