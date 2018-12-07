import React from 'react'
import { Topbar } from '../Common/Topbar'
import './DevicesNumbers.css'

export class DevicesNumbers extends React.Component {
  render () {
    return (
      <div className='main devices'>
        <Topbar title='Devices & Numbers' />
        <br /><br />
        <div>
            Devices
          <div className='devices-top-wrap'>
            <div className='devices-top'>
              <img className='corner' src='desk-avatar.png' />
              <img src='desk.png' />
              <p>Desk Yealink</p>
              <span className='grey'>
                  00:04:f2:80:09:69
              </span>
            </div>
            <div className='devices-top'>
              <img className='corner' src='iphone.png' />
              <img src='cell.png' />
              <p>Work iPhone</p>
              <span className='grey'>
                  00:04:f2:80:09:69
              </span>
            </div>
          </div>
          <br /><br />
            Numbers
          <div className='devices-top-wrap'>
            <div className='devices-top'>
                + 1 415-249-6694 <img src='usa.png' />
              <p><span id='today'>Today</span> | Past Week</p>
              <hr />
              <div className='numbers-wrap'>
                <h2>85%</h2>
                <span className='grey'>
                    All Calls
                </span>
              </div>
              <img id='donut' src='donut.png' />
            </div>
            <div className='devices-top'>
                + 1 415-249-6694 <img src='usa.png' />
              <p><span id='today'>Today</span> | Past Week</p>
              <hr />
              <div className='numbers-wrap'>
                <h2>85%</h2>
                <span className='grey'>
                    All Calls
                </span>
              </div>
              <img id='donut' src='donut.png' />
            </div>
            <div className='devices-top'>
                + 1 415-249-6694 <img src='usa.png' />
              <p><span id='today'>Today</span> | Past Week</p>
              <hr />
              <div className='numbers-wrap'>
                <h2>85%</h2>
                <span className='grey'>
                    All Calls
                </span>
              </div>
              <img id='donut' src='donut.png' />
            </div>
            <div className='devices-top'>
                + 1 415-249-6694 <img src='usa.png' />
              <p><span id='today'>Today</span> | Past Week</p>
              <hr />
              <div className='numbers-wrap'>
                <h2>85%</h2>
                <span className='grey'>
                    All Calls
                </span>
              </div>
              <img id='donut' src='donut.png' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
