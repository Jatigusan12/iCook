import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'

export default class Header extends Component {

    render() {
        return (
            <div>
                <div>
                    <Header>
                        <img className="logo" alt="icon" src={require('../photos/logo.png')} />
                    </Header>
                </div>
            </div>
        )
    }
}