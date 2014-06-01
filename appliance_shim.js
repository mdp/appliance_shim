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

  // ApplianceBridge is the global we expect on the Android Wrapper
  var Bridge = root.ApplianceBridge;

  // Am I on the Appliance, or on a client device
  // @return Boolean
  var available = exports.available = function() {
    return typeof Bridge !== 'undefined';
  }

  // Sets the orientation
  // @params "L" for Landscape, "P" for Portrait
  exports.setOrientation = function(o) {
    if (!available()) { return false; }
    Bridge.setOrientation(o);
  }

  // Gets the orientation
  // @return String L or P
  exports.getOrientation = function() {
    if (!available()) { return false; }
    return Bridge.getOrientation();
  }

  // Gets the volume
  // @return int 0-100
  exports.getVolume = function() {
    if (!available()) { return false; }
    return Bridge.getVolume();
  }

  // Sets the volume
  // @params volume 0-100
  exports.setVolume = function(v) {
    if (!available()) { return false; }
    return Bridge.setVolume(v);
  }

  // Sets the watchdog timer
  // @params int delay in milliseconds
  // You can set this to 0 if you want to remove it
  // Calling it again resets the timer.
  exports.setOrientation = function() {
    if (!available()) { return false; }
    return Bridge.getOrientation(o);
  }

}));
