var util = {
 returnTwoBiggest: function (data) {

	if (data.length <= 1) {
  	return "error";
  }
  
  var a = data[0];
  var b = data[1];
  
  // Insure a starts larger than b
  if (a<b) {
  	var temp = a;
    a = b;
    b = temp;
  }
  
  for (i=2;i<data.length;i++) {
  	if (data[i] > a) {
    	 b = a;
       a = data[i];
    } else if (data[i] > b) {
    	b = data[i];
    }   
  }
  
 return a + " " + b;

}

};

// specs code
describe("test two biggest", function() {
    
  it("return error if the array is empty", function() {
    expect(util.returnTwoBiggest([])).toEqual("error");
  });
 
  it("return error if the array has only 1 value", function() {
    expect(util.returnTwoBiggest([1])).toEqual("error");
  });
  
  it("return the right values when biggest comes prior to second biggest", function() {
    expect(util.returnTwoBiggest([500,300,400,200])).toEqual("500 400");
  });
  
  it("return the right values when biggest comes after second biggest", function() {
    expect(util.returnTwoBiggest([500,300,400,200,1000])).toEqual("1000 500");
  });
  
  it("return the right values when negative numbers are included", function() {
    expect(util.returnTwoBiggest([-500,-300,-400,-200,-1000])).toEqual("-200 -300");
  });
  
  it("return the right values when all the numbers are the same", function() {
    expect(util.returnTwoBiggest([12,12,12,12,12])).toEqual("12 12");
  });

});

// load jasmine htmlReporter
(function() {
  var env = jasmine.getEnv();
  env.addReporter(new jasmine.HtmlReporter());
  env.execute();
}());
