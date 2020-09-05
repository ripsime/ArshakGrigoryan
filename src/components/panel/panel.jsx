import React, { Component } from 'react';

import './panel.css';

export default class Panel extends Component{
    
    state = {
        items: [
            { classes: "fas fa-home", text: 'Home', href: 'home', title: false },
            { classes: "fas fa-tachometer-alt", text: 'Dashboard', href: 'dashboard', title: false }
        ],
        panelMinimize: false
    }
    
    onPanelChange = () => {
        this.setState(({panelMinimize}) => {
            return {
                panelMinimize: !panelMinimize
            }
        })
    }

    onMouseHover = (clazzez, title) => {
        const newItems = []
        this.state.items.forEach(({classes, text, href}, idx) => {
            if(classes === clazzez) {
                newItems[idx] = { classes, text, href, title: title }
            } else {
                newItems[idx] = { classes, text, href, title: false }
            }
        })
        return {
            items: newItems
        }
    }

    onMouseOver = (e) => {
        if(this.state.panelMinimize) {
            const clazzez = e.target.classList.value
            this.setState(() => {
                return this.onMouseHover(clazzez, true)
            })
        }
    }

    onMouseOut = (e) => {
        if(this.state.panelMinimize) {
            const clazzez = e.target.classList.value
            this.setState(() => {
                return this.onMouseHover(clazzez, false)
            })
        }
    }

    render() {
        const { panelMinimize, items } = this.state
        
        const classNames = panelMinimize ? 'panel-def panel-minimize' : 'panel-def panel'
        const listItems = items.map(({classes, text, href, title}) => {
            return (
                <li key={text} >
                    <a href={href}>
                        <i className={classes} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}></i>
                        { panelMinimize ? null : <span>{text}</span> }                        
                    </a>
                    { title ? <div className='title'>{text}</div> : null }
                </li>
            )
        })

        return (
            <div className={classNames}>
                <div className="burger" onClick={this.onPanelChange}>
                    <i className="fas fa-bars"></i>
                </div>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}