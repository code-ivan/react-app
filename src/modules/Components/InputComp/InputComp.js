import React from 'react'
import Validation from 'react-validation';

class InputComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {focus: false};
    }
    onFocus(){
      this.setState({focus: true})
    }

    onBlur(){
        this.setState({focus: false})
    }

    onChange(evt){
      this.props.onChange(evt)
    }
    
    render() {
      const styles = require('./InputComp.scss')

      return (
        
          <div className={ `${styles.formGroup} form-group`}>
              <label className={ this.state.focus ? styles.infocus : "" }>
                  {this.props.label}
              </label>
              <Validation.components.Input 
              placeholder={this.props.label}
              value={ this.props.value }
              onChange={this.onChange.bind(this)} 
              onBlur={this.onBlur.bind(this)} 
              onFocus={this.onFocus.bind(this)} 
              name={this.props.name}
              validations={this.props.validations} 
              errorClassName={styles.error}
              containerClassName={styles.inputval}
              className={styles.formControl + ' form-control'} />
              {/* { this.props.hint && <div className="help-block">{this.props.hint}</div> } */}
          </div>
      )
    }
  };

  InputComp.displayName = 'InputComp'

  export default InputComp;
  