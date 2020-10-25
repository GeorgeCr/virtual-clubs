import React, { Component } from 'react';
import { DummyTestProps } from '../../interfaces/props';
import './styles.css';

export default class DummyTest extends Component<DummyTestProps> {
    render() {
        const { message } = this.props;
        return (
        <div>{message}</div>
        )
    }
}