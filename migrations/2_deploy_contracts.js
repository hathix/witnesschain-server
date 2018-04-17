var Evidence = artifacts.require("Evidence");

module.exports = function(deployer) {
  //uint[] _clearImages, uint[] _blurredImages, int _lat, int _long, uint _price, string _desc, address _receiver, uint _violation_type
  var clearImages = ["buzz", "woody", "marlin", "nemo"];
  var blurredImages = ["zzub", "ydoow", "nilram", "omen"];
  var lat = 42000000;
  var lon = -73000000;
  var price = "1000000000000000000"; // 1 ether, in wei
  var desc = "hello";
  var creator = "0xf17f52151EbEF6C7334FAD080c5704D77216b732";
  var receiver = "0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef";
  var violation_type = 1;
  deployer.deploy(Evidence, clearImages, blurredImages, lat, lon, price, desc, creator, receiver, violation_type);
};
