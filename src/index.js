import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import First from './components/First'
import Parameter from './components/Parameter'
import Fragement from './components/Fragement'



ReactDOM.render(
    <div id='app'> 
        <First></First>
        <Parameter title = 'Game' 
        subtitle = 'Monopoly' 
        rate ={4.5} />
        <Parameter title = 'Game' 
        subtitle = 'Trivial' 
        rate ={3.5} />
        <Fragement />
    </div>,
    document.getElementById('root')
)