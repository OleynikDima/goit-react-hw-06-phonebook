import React, {Component}from 'react';
import {CSSTransition} from 'react-transition-group'
import styles from './Form.module.css'
import './transition/animation.css'
import redAlert from './transition/alert.module.css'
import MessageRed from './alert.js'

import taskAction from '../redux/taskAction'
import {connect} from 'react-redux'



class Form extends Component {
    state={
        text:'',
        number:'',
        showAlert:false,
    }
//change text in state
    handleChangeText = e => {
        this.setState({
            text: e.target.value,
        })
    }
//change number in state 
    handleChangeNumber = e => {
        this.setState({
            number: e.target.value,
        })
    }

// push in store.state redux
    handleSubmit = e =>{
       e.preventDefault();
       const {text,number} = this.state

              //check for similar name
        const contacts = this.props.state
        const filterName = contacts.map(user => user.text)
         
        if(filterName.includes(text)){
              // if name already -> it's messageRed 
            setTimeout(() => this.setState({showAlert:false}),2000)
             this.setState({showAlert:true})
        }else {
              // if name not repeat -> it's ok 
            this.props.onAddText({text,number})
        }

    //remove input
        this.setState({
            text:'',
            number:'',
        })
    }


render(){
 return (
    <div className={styles.container}>
        <div className={styles.header}>
            <CSSTransition  in={true} timeout={500} appear={true} classNames="titleIn" unmountOnExit>
                    <h2 className={styles.title}> Phonebook </h2>
            </CSSTransition>

            <CSSTransition in={this.state.showAlert} timeout={250} classNames={redAlert} unmountOnExit>
                     <MessageRed text="Contact is already" />
            </CSSTransition>
        </div>

    <form  className={styles.form} onSubmit={this.handleSubmit} >
        <label>Name
            <input 
            className={styles.input}
            type="input" 
            value={this.state.text}
            onChange={this.handleChangeText}
            placeholder="please write name"
            />
         </label>

         <label> Number
            <input 
            className={styles.input_number}
            type="input" 
            country="US"
            value={this.state.number}
            onChange={this.handleChangeNumber}
            placeholder="number phone"
            />
         </label>


         <button 
            className={styles.button} 
            type="submit"
            disabled={!this.state.text}
            >
                Add contact 
         </button>
    </form>   
    </div>
  )
 }
}



const mapStateToProps = state => {
      return {
        state:state.contacts.items,  
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onAddText:(text,number) => dispatch(taskAction.newObj(text,number)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Form);