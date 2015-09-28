app.directive('ngxRadioComp', function() {
  // Runs during compile
  return {
    restrict: 'E', 
    link: function(scope, element) {
      var test = [{
        "codeId": "9c017dd7-b96d-4251-bdc5-f435bea9930f",
        "libraryTypeCode": "ProblemChronicity",
        "code": "Acute",
        "constantName": "Acute",
        "description": "Acute",
        "codePlusDescription": "Acute - Acute",
        "isSystem": false,
        "libraryItemId": "9c017dd7-b96d-4251-bdc5-f435bea9930f",
        "isActive": true
      }, {
        "codeId": "f4312454-7f2f-4275-94cf-2b7fd485e7cc",
        "libraryTypeCode": "ProblemChronicity",
        "code": "Chronic",
        "constantName": "Chronic",
        "description": "Chronic",
        "codePlusDescription": "Chronic - Chronic",
        "isSystem": false,
        "libraryItemId": "f4312454-7f2f-4275-94cf-2b7fd485e7cc",
        "isActive": true
      }];

  //     var List = React.createClass({
    
  //      render: function() {
        
  //           return (<div>
            
  //             { 
  //                 this.props.test.map(function(item) {
  //                   console.log(item);
  //                   return <div > 
  //                     <label>
  //                       <input class="react-radio react-radio-label" type="radio" value ={item.codeId}> {item.description}</input>
  //                       </label>
  //                       </div>
  //               })
  //           }
  //           </div>);
  //       }
  //   });
  //     React.renderComponent(List({
  //       test:{ test }  
  //     }), element[0]);
  //   }
  };

});