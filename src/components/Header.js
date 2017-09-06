import React, { Component } from 'react'
import Vivus from 'vivus'
import Container from './utils/Container'
import Title from './Title'
import Tagline from './Tagline'
import logo from '../img/sl-strokes.svg'
import ShowCaseVideo from './ShowCaseVideo'

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            readylogo: false,
            readytitle: false,
            readytag: false,
            fill: false
        }

        this.toggleFill = this.toggleFill.bind(this);
        this.toggleReady = this.toggleReady.bind(this);
    }

    toggleReady() {
        console.log('ready');
        this.setState(prevState => ({
            ready: !prevState.ready
        }))
    }

    toggleFill() {
        this.setState(prevState => ({
            fill: !prevState.fill
        }))
    }

    componentDidMount() {
        const _this = this
        new Vivus('drawlogo', {duration: 200, 
            onReady: function () { 
                _this.setState(prevState => ({
                    readylogo: !prevState.readylogo
            }))} 
        });
        new Vivus('title', {duration: 200, 
            onReady: function () { 
                _this.setState(prevState => ({
                    readytitle: !prevState.readytitle
            }))} });
        new Vivus('slogan', {duration: 200, 
            onReady: function () { 
                _this.setState(prevState => ({
                    readytag: !prevState.readytag
            }))} }, this.toggleFill);
    }

    render() {
        return (
            <div>
                <ShowCaseVideo />    
            
            <div className="sl-header d-flex align-items-center">
                <Container>
                    <div className={'header-logo-img mx-auto ' + (this.state.readylogo ? 'fill-svg' : '')} >
                        <svg id="drawlogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1076 1076"><defs></defs><title>several levels logo</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle className="cls-1" cx="538" cy="538" r="513"/><path className={this.state.fill ? 'cls-2 fillw': 'cls-2'} d="M527.47,689.93q0,27-10,48a97.79,97.79,0,0,1-28.32,35.55Q470.82,788,445.44,795.39t-55.86,7.42a214.1,214.1,0,0,1-66.21-10.35,157.37,157.37,0,0,1-22.85-9.37q-9.37-4.88-13.67-8.79a22.43,22.43,0,0,1-6.25-10.94q-2-7-2-19.14a83.63,83.63,0,0,1,.78-12.5,42.33,42.33,0,0,1,2-8.2A8.73,8.73,0,0,1,284.7,719a8.9,8.9,0,0,1,4.88-1.37q4.29,0,12.7,5.27T323,734.46A190.49,190.49,0,0,0,352.08,746q16.79,5.27,38.67,5.27a116.07,116.07,0,0,0,29.69-3.52,71.89,71.89,0,0,0,23-10.35,46.08,46.08,0,0,0,15-17.38q5.27-10.55,5.27-25,0-14.84-7.62-25a73.41,73.41,0,0,0-20.12-18,167.2,167.2,0,0,0-28.12-13.87q-15.63-6.05-32.23-12.7a330.27,330.27,0,0,1-32.42-15A123.85,123.85,0,0,1,315,589.93,93.43,93.43,0,0,1,294.85,561q-7.62-16.79-7.62-40.23a100.8,100.8,0,0,1,8-39.65,92,92,0,0,1,24-33.2q16-14.25,40-22.85t56.05-8.59a170.8,170.8,0,0,1,28.13,2.34,193.23,193.23,0,0,1,25.39,5.86,122.36,122.36,0,0,1,19.34,7.62,84.48,84.48,0,0,1,12.11,7.23,21.42,21.42,0,0,1,5.47,5.47,17.06,17.06,0,0,1,2,5.27q.59,2.93,1.17,7.23a80,80,0,0,1,.59,10.55,98.15,98.15,0,0,1-.59,11.52,28.82,28.82,0,0,1-2,8,10.4,10.4,0,0,1-3.32,4.49,7.31,7.31,0,0,1-4.3,1.37q-3.52,0-10.16-4.3A143.6,143.6,0,0,0,472,480a191,191,0,0,0-24.8-9.18q-14.26-4.29-32.62-4.3a101.89,101.89,0,0,0-28.91,3.71q-12.51,3.72-20.51,10.55A44.61,44.61,0,0,0,353.05,497a50.13,50.13,0,0,0-4.1,20.31q0,15.23,7.81,25.59A74.38,74.38,0,0,0,377.08,561a170.14,170.14,0,0,0,28.52,14.06q16,6.25,32.62,12.89T471,602.82a122.79,122.79,0,0,1,28.71,19.92,90.11,90.11,0,0,1,20.12,28.13Q527.47,667.27,527.47,689.93Z"/><path className={this.state.fill ? 'cls-2 fillw': 'cls-2'} d="M684.11,785.63a8.73,8.73,0,0,1-1.56,5.27,12.22,12.22,0,0,1-5.08,3.71A36.09,36.09,0,0,1,667.7,797a134.18,134.18,0,0,1-16,.78,130,130,0,0,1-15.62-.78,39,39,0,0,1-10-2.34A10.66,10.66,0,0,1,621,790.9a9.57,9.57,0,0,1-1.37-5.27V263.75a10.62,10.62,0,0,1,1.37-5.47,10.15,10.15,0,0,1,5.08-3.91,39,39,0,0,1,10-2.34,130,130,0,0,1,15.63-.78,134.18,134.18,0,0,1,16,.78,36.09,36.09,0,0,1,9.77,2.34,11.52,11.52,0,0,1,5.08,3.91,9.66,9.66,0,0,1,1.56,5.47Z"/></g></g></svg>
                    </div>
                    <div className={'header-title-img mx-auto mb-1 ' + (this.state.readytitle ? 'fill-svg' : '')}>
                        <svg id="title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1085.39 152.2"><defs></defs><title>several levels title</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className={this.state.fill ? 'cls-t fillw': 'cls-t'} d="M9.21,128a46.12,46.12,0,0,0,23.2,7c12.8,0,18.8-6.4,18.8-14.4,0-8.4-5-13-18-17.8C15.81,96.6,7.61,87,7.61,75.4,7.61,59.8,20.21,47,41,47c9.8,0,18.4,2.8,23.8,6L60.4,65.8a37.68,37.68,0,0,0-19.8-5.6c-10.4,0-16.2,6-16.2,13.2,0,8,5.8,11.6,18.4,16.4,16.8,6.4,25.4,14.8,25.4,29.2,0,17-13.2,29-36.2,29-10.6,0-20.4-2.6-27.2-6.6Z"/><path className={this.state.fill ? 'cls-t fillw': 'cls-t'} d="M100.6,100.8c.4,23.8,15.6,33.6,33.2,33.6,12.6,0,20.2-2.2,26.8-5l3,12.6c-6.2,2.8-16.8,6-32.2,6-29.8,0-47.6-19.6-47.6-48.8S101,47,129.2,47c31.6,0,40,27.8,40,45.6a66.33,66.33,0,0,1-.6,8.2Zm51.6-12.6c.2-11.2-4.6-28.6-24.4-28.6-17.8,0-25.6,16.4-27,28.6Z"/><path className={this.state.fill ? 'cls-t fillw': 'cls-t'} d="M197.8,49.2l19,54.4a249,249,0,0,1,7.8,24.8h.6c2.2-8,5-16,8.2-24.8l18.8-54.4h18.4l-38,96.8H215.8L179,49.2Z"/><path className={this.state.fill ? 'cls-t fillw': 'cls-t'} d="M295,100.8c.4,23.8,15.6,33.6,33.2,33.6,12.6,0,20.2-2.2,26.8-5l3,12.6c-6.2,2.8-16.8,6-32.2,6-29.8,0-47.6-19.6-47.6-48.8S295.4,47,323.6,47c31.6,0,40,27.8,40,45.6a66.31,66.31,0,0,1-.6,8.2Zm51.6-12.6c.2-11.2-4.6-28.6-24.4-28.6-17.8,0-25.6,16.4-27,28.6Z"/><path className={this.state.fill ? 'cls-t fillw': 'cls-t'} d="M385.4,79.4c0-11.4-.2-21.2-.8-30.2H400l.6,19h.8c4.4-13,15-21.2,26.8-21.2a19,19,0,0,1,5,.6V64.2a26.43,26.43,0,0,0-6-.6c-12.4,0-21.2,9.4-23.6,22.6a49.47,49.47,0,0,0-.8,8.2V146H385.4Z"/><path className={this.state.fill ? 'cls-t fillw': 'cls-t'} d="M503.4,146,502,133.8h-.6c-5.4,7.6-15.8,14.4-29.6,14.4-19.6,0-29.6-13.8-29.6-27.8,0-23.4,20.8-36.2,58.2-36v-2c0-8-2.2-22.4-22-22.4a48.22,48.22,0,0,0-25.2,7.2l-4-11.6c8-5.2,19.6-8.6,31.8-8.6,29.6,0,36.8,20.2,36.8,39.6v36.2a136.37,136.37,0,0,0,1.6,23.2Zm-2.6-49.4c-19.2-.4-41,3-41,21.8,0,11.4,7.6,16.8,16.6,16.8,12.6,0,20.6-8,23.4-16.2a18.35,18.35,0,0,0,1-5.6Z"/><path className={this.state.fill ? 'cls-t fillw': 'cls-t'} d="M546.2,4h17.6V146H546.2Z"/><path className={this.state.fill ? 'cls-t fillw': 'cls-t'} d="M635.8,4h17.6V146H635.8Z"/><path className={this.state.fill ? 'cls-t fillw': 'cls-t'} d="M692.79,100.8c.4,23.8,15.6,33.6,33.2,33.6,12.6,0,20.2-2.2,26.8-5l3,12.6c-6.2,2.8-16.8,6-32.2,6-29.8,0-47.6-19.6-47.6-48.8S693.2,47,721.39,47c31.6,0,40,27.8,40,45.6a66.31,66.31,0,0,1-.6,8.2Zm51.6-12.6c.2-11.2-4.6-28.6-24.4-28.6-17.8,0-25.6,16.4-27,28.6Z"/><path className={this.state.fill ? 'cls-t fillw': 'cls-t'} d="M790,49.2l19,54.4a248.86,248.86,0,0,1,7.8,24.8h.6c2.2-8,5-16,8.2-24.8l18.8-54.4h18.4l-38,96.8H808l-36.8-96.8Z"/><path className={this.state.fill ? 'cls-t fillw': 'cls-t'} d="M887.19,100.8c.4,23.8,15.6,33.6,33.2,33.6,12.6,0,20.2-2.2,26.8-5l3,12.6c-6.2,2.8-16.8,6-32.2,6-29.8,0-47.6-19.6-47.6-48.8S887.59,47,915.79,47c31.6,0,40,27.8,40,45.6a66.31,66.31,0,0,1-.6,8.2Zm51.6-12.6c.2-11.2-4.6-28.6-24.4-28.6-17.8,0-25.6,16.4-27,28.6Z"/><path className={this.state.fill ? 'cls-t fillw': 'cls-t'} d="M977.59,4h17.6V146h-17.6Z"/><path className={this.state.fill ? 'cls-t fillw': 'cls-t'} d="M1022.39,128a46.12,46.12,0,0,0,23.2,7c12.8,0,18.8-6.4,18.8-14.4,0-8.4-5-13-18-17.8-17.4-6.2-25.6-15.8-25.6-27.4,0-15.6,12.6-28.4,33.4-28.4,9.8,0,18.4,2.8,23.8,6l-4.4,12.8a37.68,37.68,0,0,0-19.8-5.6c-10.4,0-16.2,6-16.2,13.2,0,8,5.8,11.6,18.4,16.4,16.8,6.4,25.4,14.8,25.4,29.2,0,17-13.2,29-36.2,29-10.6,0-20.4-2.6-27.2-6.6Z"/></g></g></svg>
                    </div>
                    <div className={'header-tagline-img mx-auto mb-1 ' + (this.state.readytag ? 'fill-svg' : '')}>
                        <svg id="slogan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1689.56 142.2"><defs></defs><title>several-levels-slogan</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className={this.state.fill ? 'cls-s fillw': 'cls-s'} d="M17.54,36.9l9.6,36.9c2.1,8.1,4,15.6,5.4,23.1H33c1.65-7.35,4-15.15,6.45-22.95l11.85-37h11.1L73.64,73.2c2.7,8.7,4.8,16.35,6.45,23.7h.45a218.25,218.25,0,0,1,5.55-23.55L96.43,36.9h13l-23.4,72.6h-12L63,74.85A241.93,241.93,0,0,1,56.54,51h-.3a214.72,214.72,0,0,1-6.6,24l-11.7,34.5h-12L4,36.9Z"/><path className={this.state.fill ? 'cls-s fillw': 'cls-s'} d="M128.54,75.6c.3,17.85,11.7,25.2,24.9,25.2,9.45,0,15.15-1.65,20.1-3.75l2.25,9.45c-4.65,2.1-12.6,4.5-24.15,4.5-22.35,0-35.7-14.7-35.7-36.6s12.9-39.15,34-39.15c23.7,0,30,20.85,30,34.2a49.83,49.83,0,0,1-.45,6.15Zm38.7-9.45c.15-8.4-3.45-21.45-18.3-21.45-13.35,0-19.2,12.3-20.25,21.45Z"/><path className={this.state.fill ? 'cls-s fillw': 'cls-s'} d="M195.74,109.5c.3-5,.6-12.3.6-18.75V3h13V48.6h.3c4.65-8.1,13-13.35,24.75-13.35,18,0,30.75,15,30.6,37,0,25.95-16.35,38.85-32.55,38.85-10.5,0-18.9-4-24.3-13.65h-.45l-.6,12Zm13.65-29.1a24.69,24.69,0,0,0,.6,4.8c2.55,9.15,10.2,15.45,19.8,15.45,13.8,0,22-11.25,22-27.9,0-14.55-7.5-27-21.6-27-9,0-17.4,6.15-20.1,16.2a26,26,0,0,0-.75,5.4Z"/><path className={this.state.fill ? 'cls-s fillw': 'cls-s'} d="M353.68,109.5l-1-9.15h-.45c-4,5.7-11.85,10.8-22.2,10.8-14.7,0-22.2-10.35-22.2-20.85,0-17.55,15.6-27.15,43.65-27V61.8c0-6-1.65-16.8-16.5-16.8A36.17,36.17,0,0,0,316,50.4l-3-8.7c6-3.9,14.7-6.45,23.85-6.45,22.2,0,27.6,15.15,27.6,29.7V92.1a102.23,102.23,0,0,0,1.2,17.4Zm-2-37C337.33,72.15,321,74.7,321,88.8c0,8.55,5.7,12.6,12.45,12.6A18.06,18.06,0,0,0,351,89.25a13.78,13.78,0,0,0,.75-4.2Z"/><path className={this.state.fill ? 'cls-s fillw': 'cls-s'} d="M385.78,56.55c0-7.5-.15-13.65-.6-19.65h11.7l.75,12h.3c3.6-6.9,12-13.65,24-13.65,10,0,25.65,6,25.65,30.9V109.5h-13.2V67.65c0-11.7-4.35-21.45-16.8-21.45-8.7,0-15.45,6.15-17.7,13.5a19,19,0,0,0-.9,6.15V109.5h-13.2Z"/><path className={this.state.fill ? 'cls-s fillw': 'cls-s'} d="M531.73,3V90.75c0,6.45.15,13.8.6,18.75H520.48l-.6-12.6h-.3c-4,8.1-12.9,14.25-24.75,14.25-17.55,0-31-14.85-31-36.9-.15-24.15,14.85-39,32.55-39,11.1,0,18.6,5.25,21.9,11.1h.3V3Zm-13.2,63.45a23.28,23.28,0,0,0-.6-5.55,19.41,19.41,0,0,0-19-15.3c-13.65,0-21.75,12-21.75,28,0,14.7,7.2,26.85,21.45,26.85,8.85,0,16.95-5.85,19.35-15.75a22.92,22.92,0,0,0,.6-5.7Z"/><path className={this.state.fill ? 'cls-s fillw': 'cls-s'} d="M625.63,109.5l-1-9.15h-.45c-4,5.7-11.85,10.8-22.2,10.8-14.7,0-22.2-10.35-22.2-20.85,0-17.55,15.6-27.15,43.65-27V61.8c0-6-1.65-16.8-16.5-16.8A36.18,36.18,0,0,0,588,50.4l-3-8.7c6-3.9,14.7-6.45,23.85-6.45,22.2,0,27.6,15.15,27.6,29.7V92.1a102.18,102.18,0,0,0,1.2,17.4Zm-1.95-37c-14.4-.3-30.75,2.25-30.75,16.35,0,8.55,5.7,12.6,12.45,12.6a18.06,18.06,0,0,0,17.55-12.15,13.77,13.77,0,0,0,.75-4.2Z"/><path className={this.state.fill ? 'cls-s fillw': 'cls-s'} d="M657.73,60.6c0-9.3-.3-16.8-.6-23.7H669l.6,12.45h.3c5.4-8.85,14-14.1,25.8-14.1,17.55,0,30.75,14.85,30.75,36.9,0,26.1-15.9,39-33,39-9.6,0-18-4.2-22.35-11.4h-.3V139.2h-13Zm13,19.35a29.73,29.73,0,0,0,.6,5.4,20.37,20.37,0,0,0,19.8,15.45c13.95,0,22-11.4,22-28,0-14.55-7.65-27-21.6-27-9,0-17.4,6.45-19.95,16.35a21.41,21.41,0,0,0-.9,5.4Z"/><path className={this.state.fill ? 'cls-s fillw': 'cls-s'} d="M743.08,60.6c0-9.3-.3-16.8-.6-23.7h11.85l.6,12.45h.3c5.4-8.85,14-14.1,25.8-14.1,17.55,0,30.75,14.85,30.75,36.9,0,26.1-15.9,39-33,39-9.6,0-18-4.2-22.35-11.4h-.3V139.2h-13Zm13,19.35a29.73,29.73,0,0,0,.6,5.4,20.37,20.37,0,0,0,19.8,15.45c13.95,0,22-11.4,22-28,0-14.55-7.65-27-21.6-27-9,0-17.4,6.45-19.95,16.35a21.41,21.41,0,0,0-.9,5.4Z"/><path className={this.state.fill ? 'cls-s fillw': 'cls-s'} d="M922.92,3V90.75c0,6.45.15,13.8.6,18.75H911.67l-.6-12.6h-.3c-4,8.1-12.9,14.25-24.75,14.25-17.55,0-31-14.85-31-36.9-.15-24.15,14.85-39,32.55-39,11.1,0,18.6,5.25,21.9,11.1h.3V3Zm-13.2,63.45a23.28,23.28,0,0,0-.6-5.55,19.41,19.41,0,0,0-19-15.3c-13.65,0-21.75,12-21.75,28,0,14.7,7.2,26.85,21.45,26.85,8.85,0,16.95-5.85,19.35-15.75a22.92,22.92,0,0,0,.6-5.7Z"/><path className={this.state.fill ? 'cls-s fillw': 'cls-s'} d="M952.17,75.6c.3,17.85,11.7,25.2,24.9,25.2,9.45,0,15.15-1.65,20.1-3.75l2.25,9.45c-4.65,2.1-12.6,4.5-24.15,4.5-22.35,0-35.7-14.7-35.7-36.6s12.9-39.15,34-39.15c23.7,0,30,20.85,30,34.2a49.71,49.71,0,0,1-.45,6.15Zm38.7-9.45c.15-8.4-3.45-21.45-18.3-21.45-13.35,0-19.2,12.3-20.25,21.45Z"/><path className={this.state.fill ? 'cls-s fillw': 'cls-s'} d="M1025.07,36.9l14.25,40.8a186.81,186.81,0,0,1,5.85,18.6h.45c1.65-6,3.75-12,6.15-18.6l14.1-40.8h13.8l-28.5,72.6h-12.6L1011,36.9Z"/><path className={this.state.fill ? 'cls-s fillw': 'cls-s'} d="M1098,75.6c.3,17.85,11.7,25.2,24.9,25.2,9.45,0,15.15-1.65,20.1-3.75l2.25,9.45c-4.65,2.1-12.6,4.5-24.15,4.5-22.35,0-35.7-14.7-35.7-36.6s12.9-39.15,34-39.15c23.7,0,30,20.85,30,34.2a49.71,49.71,0,0,1-.45,6.15Zm38.7-9.45c.15-8.4-3.45-21.45-18.3-21.45-13.35,0-19.2,12.3-20.25,21.45Z"/><path className={this.state.fill ? 'cls-s fillw': 'cls-s'} d="M1165.77,3H1179V109.5h-13.2Z"/><path className={this.state.fill ? 'cls-s fillw': 'cls-s'} d="M1266.86,72.6c0,26.85-18.6,38.55-36.15,38.55-19.65,0-34.8-14.4-34.8-37.35,0-24.3,15.9-38.55,36-38.55C1252.77,35.25,1266.86,50.4,1266.86,72.6Zm-57.6.75c0,15.9,9.15,27.9,22,27.9,12.6,0,22-11.85,22-28.2,0-12.3-6.15-27.9-21.75-27.9S1209.27,59.55,1209.27,73.35Z"/><path className={this.state.fill ? 'cls-s fillw': 'cls-s'} d="M1283.52,60.6c0-9.3-.3-16.8-.6-23.7h11.85l.6,12.45h.3c5.4-8.85,14-14.1,25.8-14.1,17.55,0,30.75,14.85,30.75,36.9,0,26.1-15.9,39-33,39-9.6,0-18-4.2-22.35-11.4h-.3V139.2h-13Zm13,19.35a29.73,29.73,0,0,0,.6,5.4A20.37,20.37,0,0,0,1317,100.8c13.95,0,22-11.4,22-28,0-14.55-7.65-27-21.6-27-9,0-17.4,6.45-19.95,16.35a21.41,21.41,0,0,0-.9,5.4Z"/><path className={this.state.fill ? 'cls-s fillw': 'cls-s'} d="M1368.86,56.55c0-7.5-.15-13.65-.6-19.65h11.55l.6,11.7h.45c4-6.9,10.8-13.35,22.8-13.35,9.9,0,17.4,6,20.55,14.55h.3a29.91,29.91,0,0,1,8.1-9.45c4.35-3.3,9.15-5.1,16-5.1,9.6,0,23.85,6.3,23.85,31.5V109.5h-12.9V68.4c0-13.95-5.1-22.35-15.75-22.35-7.5,0-13.35,5.55-15.6,12a21.75,21.75,0,0,0-1,6.6V109.5h-12.9V66c0-11.55-5.1-19.95-15.15-19.95-8.25,0-14.25,6.6-16.35,13.2a18.2,18.2,0,0,0-1.05,6.45v43.8h-12.9Z"/><path className={this.state.fill ? 'cls-s fillw': 'cls-s'} d="M1501.31,75.6c.3,17.85,11.7,25.2,24.9,25.2,9.45,0,15.15-1.65,20.1-3.75l2.25,9.45c-4.65,2.1-12.6,4.5-24.15,4.5-22.35,0-35.7-14.7-35.7-36.6s12.9-39.15,34-39.15c23.7,0,30,20.85,30,34.2a49.71,49.71,0,0,1-.45,6.15Zm38.7-9.45c.15-8.4-3.45-21.45-18.3-21.45-13.35,0-19.2,12.3-20.25,21.45Z"/><path className={this.state.fill ? 'cls-s fillw': 'cls-s'} d="M1569.11,56.55c0-7.5-.15-13.65-.6-19.65h11.7l.75,12h.3c3.6-6.9,12-13.65,24-13.65,10,0,25.65,6,25.65,30.9V109.5h-13.2V67.65c0-11.7-4.35-21.45-16.8-21.45-8.7,0-15.45,6.15-17.7,13.5a19,19,0,0,0-.9,6.15V109.5h-13.2Z"/><path className={this.state.fill ? 'cls-s fillw': 'cls-s'} d="M1667.66,16V36.9h18.9v10h-18.9V86.1c0,9,2.55,14.1,9.9,14.1a29.41,29.41,0,0,0,7.65-.9l.6,9.9a32.31,32.31,0,0,1-11.7,1.8c-6.15,0-11.1-2-14.25-5.55-3.75-3.9-5.1-10.35-5.1-18.9V46.95h-11.25v-10h11.25V19.5Z"/></g></g></svg>
                    </div>

                    {/* <Title /> */}
                    {/* <Tagline /> */}
                </Container>
                </div>
            </div>
        )
    }
}

// const Header = () =>
//     <div className="sl-header d-flex align-items-center">
//         <Container>
//             <div id="drawlogo"></div>
//             <img id="logo" src={logo} className="header-logo-img" alt="several levels logo" />
//             <Title />
//             <Tagline />
//         </Container>
//     </div>

export default Header