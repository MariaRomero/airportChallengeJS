'use strict';

describe("Feature Test", function() {
var plane = {};
var airport;
airport = new Airport();

  it('lands a plane', function() {
    airport.land(plane,'sunny');
    expect(airport.hangar[0]).toEqual(plane);
  });

  xit('cannot land a plane', function() {
    expect(function(){airport.land(plane,'stormy');}).toThrowError('Unable to land, it is stormy!');
  });

  it('plane takes off', function() {
    airport.takeOf(plane,'sunny');
    expect(airport.hangar[0]).toEqual(undefined);
  });

  xit('plane cannot take off when stormy', function() {
    airport.takeOf(plane,'stormy');
    expect(airport.hangar[0]).toEqual(plane);
  });

  it('planes cannot land when hangar is full', function() {
    var x = 0;
    while(x < 21 ) {
      airport.land(plane,'sunny');
      x++;
    }
    expect(airport.isFull()).toEqual(true);
  });

});
