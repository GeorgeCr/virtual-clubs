import React, { Component } from 'react';
import { DummyTestProps } from '../../interfaces/props';
import './styles.css';

export default class DummyTest extends Component<DummyTestProps> {
    render() {
        return (
            <div>Hello World!</div>
        )
    }
}