'use strict';

describe('myApp.integers module', function() {
  var $scope, ctrl;

  beforeEach(module('myApp.integers'));

  describe('integers controller', function(){
    
    beforeEach(inject(function($rootScope, $controller) {		
      $scope = $rootScope.$new();

      ctrl = $controller('integersCtrl', {
        $scope: $scope
      });
    }));

    it('should exist', function() {
      expect(ctrl).toBeDefined();
    });
    
    it('should find the largest integer if more than 1 integer is input', function() {
      //for more information on writing jasmine unit tests:  http://jasmine.github.io/2.4/introduction.html
      //run the tests with npm test
      
      // 1.  set up your data for testing
      // var testData = <data here>;
      // 2.  assign your data to the model
      // $scope.<your model> = testData;
      // 3.  execute your function 
      // $scope.<your function>;
      // 4.  expect a result   
      // expect(<your result>).toBe(<the expected result>);
      
      expect(true).toBe(true); 
    });
    
    //what other tests do you need?
  });
});
