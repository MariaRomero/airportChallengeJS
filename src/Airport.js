function Airport() {
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
