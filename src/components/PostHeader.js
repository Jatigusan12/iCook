import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export default class PostHeader extends Component {

    render() {
        return (
            <div>
                <div className="header">
                  <nav>
                    {/* adding the image logo */}
                    <img className="logo" alt="joke" src={require('../photos/logo.png')} />
                    <Icon name='user circle' circular />
                  </nav>

                </div>
            </div>
          )
    }
}