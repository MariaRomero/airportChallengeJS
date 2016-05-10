function Airport(capacity) {
  this.capacity = capacity || 20
  this.hangar = [];

}

Airport.prototype.land = function(plane,weatherConditions) {
  if (weatherConditions === 'stormy') {
    return "Unable to land, it is stormy!"
  } else {
    this.hangar.push(plane);
  }
}

Airport.prototype.takeOf = function(plane,weatherConditions) {
  if (weatherConditions === 'stormy') {
    throw new Error("Unable to take of, it is stormy!")
  } else {
    this.hangar.pop(plane);
  }
}

Airport.prototype.isFull = function() {
  var hangarLength = this.hangar.length
  var capacity = this.capacity
  if (hangarLength => capacity) {
    return true
  } else {
    return false
  }
}
