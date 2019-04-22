import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css'; 
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";  

class ViewMyprofile extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            M.Modal.init(elems, options);
          });
    }
    render(){
        <div>
            <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
                <div id="modal1" class="modal bottom-sheet">
                <div class="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
                </div>
        </div>
    }

}
export default ViewMyprofile