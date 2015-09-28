 // var Radio = React.createClass({  
                //      propTypes: {
                //         onChange: React.PropTypes.func,
                //         name: React.PropTypes.string,
                //         selectedValue: React.PropTypes.oneOfType([
                //           React.PropTypes.string,
                //           React.PropTypes.number,
                //           React.PropTypes.bool,
                //         ])
                //       },  
                //       getInitialState(){
                //         return {
                //           compSelectedValue: this.props.selectedValue
                //         }
                //       },
                //       handleClick(event) {
                //         //Clear selected value if clicked again
                //         if (this.refs.input.getDOMNode().value === this.state.compSelectedValue) {
                //            this.refs.input.getDOMNode().value = '';
                //         }        
                //         this.props.onChange.call(null, this.refs.input.getDOMNode().value);
                //       },
                //       render() {
                //      var classes = classNames("react-radio", "react-radio-label", { "react-radio-label-checked": this.state.compSelectedValue === this.props.value });
                //       return React.createElement("input", _extends({}, this.props, {
                //         ref: "input",
                //         className: classes,
                //         type: "radio",
                //         name: this.props.name,
                //         onChange: this.handleClick }));
                //     }
                //   });

                //  var yesNoRadioComponent = React.createClass({
                //     displayName: "YesNoRadioComponent",
                //     render: function render() {
                //       React.createElement(
                //         "div",
                //         null,
                //         React.createElement(
                //           "label",
                //           null,
                //           React.createElement(Radio, { value: "acute", name: scope.name, selectedValue: scope.selectedValue, onChange: scope.onChangeCallback }),
                //           "Acute"
                //         ),
                //         React.createElement(
                //           "label",
                //           null,
                //           React.createElement(Radio, { value: "chronic", name: scope.name, selectedValue: scope.selectedValue, onChange: scope.onChangeCallback }),
                //           "Chronic"
                //         ),
                //         React.createElement(
                //           "label",
                //           null,
                //           React.createElement(Radio, { value: "none", name: scope.name, selectedValue: scope.selectedValue, onChange: scope.onChangeCallback }),
                //           "Not Documented"
                //         )
                //       );
                //     }
                //   });

//  var MYCOMPONENT = React.createClass({
    
//     render: function() {
    
//         return (<div>
        
//           { 
//               this.props.test.map(function(item) {
//                 console.log(item);
//                 return <div > 
//                   <label>
//                     <input class="react-radio react-radio-label" type="radio" value ={item.codeId}> {item.description}</input>
//                     </label>
//                     </div>
//             })
//         }
//         </div>);
//     }
// });

