(function(root, factory) {

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['exports'], function(exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Appliance = factory(root, exports);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    factory(root, exports);

  // Finally, as a browser global.
  } else {
    root.Appliance = factory(root, {});
  }

}(this, function(root, exports) {

  var ApplianceShim = exports.ApplianceShim = function(){
    this.Bridge = window.ApplianceBridge;
    return this;
  }

  // Am I on the Appliance, or on a client device
  // @return Boolean
  ApplianceShim.prototype.available = function() {
    return typeof this.Bridge !== 'undefined';
  }

  // Sets the orientation
  // @params "L" for Landscape, "P" for Portrait
  ApplianceShim.prototype.setOrientation = function(o) {
    if (!this.available()) { return false; }
    this.Bridge.setOrientation(o);
  }

  // Gets the orientation
  // @return String L or P
  ApplianceShim.prototype.getOrientation = function() {
    if (!this.available()) { return false; }
    return this.Bridge.getOrientation();
  }

  // Gets the volume max int
  ApplianceShim.prototype.getMaxVolume = function() {
    if (!this.available()) { return false; }
    return this.Bridge.getMaxVolume();
  }

  // Gets the volume
  // @return int 0-Max
  ApplianceShim.prototype.getVolume = function() {
    if (!this.available()) { return false; }
    return this.Bridge.getVolume();
  }

  // Sets the volume
  // @params volume 0-Max
  ApplianceShim.prototype.setVolume = function(v) {
    if (!this.available()) { return false; }
    return this.Bridge.setVolume(v);
  }

  // Sets the watchdog timer
  // @params int delay in milliseconds
  // You can set this to 0 if you want to remove it
  // Calling it again resets the timer.
  ApplianceShim.prototype.watchdog = function(ms) {
    if (!this.available()) { return false; }
    this.Bridge.watchdog(ms);
  }

}));
