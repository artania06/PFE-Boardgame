import React, {Component} from "react";
import {Button, Label} from 'react-bootstrap';
import "./qrView.css";
import QrReader from "react-qr-reader";
import Modal from "react-bootstrap/es/Modal";
import * as utils from "../../utils"

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            delay: 300
        };
        this.handleScan = this.handleScan.bind(this);
    }

    handleScan(data) {
        if (data) {
            console.log(utils.getParty(data));
            this.props.changeData({data});
        }
    }

    handleError(err) {
        console.error(err);
    }

    render(){
        return (
            <div id="container">
                {this.state.showModal ?
                    <Modal.Dialog>
                        <Modal.Body>Partie rejointe avec succès, entrez votre pseudo et choisissez votre place pour commencer la partie</Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.toggleFullScreen.bind(this)}>Accepter</Button>
                            <Button bsStyle="primary" onClick={this.handleDismiss.bind(this)}>Refuser</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                    : null
                }
                <Label id="label">Bienvenue scannez le QRCode affiché sur la table pour rejoindre la partie</Label>
                <div id="QRDiv">
                    <QrReader
                        delay={this.state.delay}
                        onError={this.handleError}
                        onScan={this.handleScan}
                    />
                </div>
            </div>
        );
    }
}

export default Home;