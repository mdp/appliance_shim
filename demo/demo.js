var appliance = new window.Appliance();
$(document).ready(function(){
  $("#battery_level").html(getBatteryLevel());
  $("#sleep").on('click', function(){
    console.log("goto sleep");
    appliance.sleep();
  });
});

function getBatteryLevel() {
  return Math.round(appliance.getBatteryLevel()*100);
}
