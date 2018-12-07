import React from 'react'
import {connect} from 'react-redux'
import './VoicemailsTable.css'
import Audioplayer from './Audioplayer'
import moment from 'moment'
import { parsePhoneNumber } from 'libphonenumber-js'

const Message = (props) => {
  let from = props.from;
  let to = props.to;
  return (
    <div className = {`tr-content row ${(props.playStatus.audioPlay && props.audioId !== props.playStatus.audioId)?'disabledbutton': ''}`}>
      <div className="col-md-2 row">
        <div className="col-md-3">
          <input type='checkbox' className="checkbox"/>
        </div>
        <div className="col-md-9">
          {props.folder == "new" ? <span className="newstatus">New</span> : <span className="listenedstatus">Listened</span>}
        </div>

      </div>
      <div className="col-md-2">{moment.unix(props.timestamp/100).format('MM/DD/YYYY')}<br /><span className='grey'>{moment.unix(props.timestamp/1000).format('HH:mm:ss')}</span></div>
      <div className="col-md-2">{props.caller_id_name}<br/><span className='grey'>{getPhoneNumber((from).split("@")[0])}</span></div>
      <div className="col-md-2">{getPhoneNumber((to).split("@")[0])}</div>
      <div className="col-md-4">
      { (props.playStatus.audioPlay && props.audioId === props.playStatus.audioId)?
        <div className="row">
          <div className="col-md-10"><Audioplayer/></div>
          <div className="col-md-2"><button className="audio-close" onClick={()=>props.audioPlayer(props.audioId)}>Close</button></div>
        </div> :
        <div className="row">
          <div className="col-md-6">{getDuration(props.length/1000)}</div>
          <div className="col-md-6">
            <div className="text-right pr-2">
              <button className="audioplay mr-3" onClick={()=>props.audioPlayer(props.audioId)}><img src='../../play.png' width="120%"/></button>
              <button className="audiodown"><img src='../../download.png' width="120%" /></button>
            </div>
          </div>
        </div>
      }
      </div>
    </div>
  )
}

// convert senconds to HH-MM-SS format - customization
function getDuration (totalSeconds) {
  let hours   = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
  let seconds = Math.floor(totalSeconds - (hours * 3600) - (minutes * 60));
  // round seconds
  seconds = Math.round(seconds * 100) / 100

  let result = "";
  if(hours != 0) {  // hour is 0 then don't display hour format
    (hours < 10 ? "0" + hours : hours) + ":";
  }
  result += (minutes < 10 ? "0" + minutes : minutes) + ":";
  result += (seconds  < 10 ? "0" + seconds : seconds);

  return result;
}
function getPhoneNumber(number){
  let phoneNumber = parsePhoneNumber("+"+number).formatInternational();
  let number_arr = phoneNumber.split(" ");
  // console.log(number_arr[0]);
  // console.log(number_arr[3]+" "+number_arr[2])
  var number = number_arr[0]+" "+number_arr[1]+"-"+number_arr[2]+"-"+number_arr[3];
  return number
}

class VoicemailsTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allmessages: [],
      audioPlay: false,
      audioId: ''
    }
    //does whatever stuff
    this.audioPlayer = this.audioPlayer.bind(this);

  }



  componentDidUpdate(preProps, preState) {

    const {allmessages} = this.props
    // console.log('test',allmessages);
    // if(allmessages != preProps.allmessages) {
    //   console.log('Set allmessages with data')
    //   this.setState({allmessages})
    // }
  }
  audioPlayer(key){
    console.log(key)
    this.setState({
      audioId: key,
      audioPlay: !this.state.audioPlay
    })
  }
  render () {
    const {allmessages} = this.props
    console.log("testestsetset",allmessages);
    return (
      <div className="row text-left">
        <div className='voicemailtable'>
          <div className="row1">
            <div className="col-md-2 row">
              <div className="col-md-3"> </div>
              <div className="col-md-6">STATUS</div>
            </div>
            <div className="col-md-2">DATE/TIME</div>
            <div className="col-md-2">FROM</div>
            <div className="col-md-2">TO</div>
            <div className="col-md-2">DURATION</div>
            <div className="col-md-2"></div>
          </div>
          { allmessages && allmessages.length > 0 ? allmessages.map((message, index) => <Message audioPlayer={this.audioPlayer} playStatus={this.state} audioId = {index} key={index} {...message}/>) : null }
        </div>
      </div>
    )
  }
}

export default VoicemailsTable
