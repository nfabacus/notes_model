(function() {
  console.log("hi");
})();

(function () {
  var EXCLAMATION_MARK_COUNT = 5

  function exclaim(string) {
    return string + "!".repeat(EXCLAMATION_MARK_COUNT);
  };


})(exclaim('Yes'));

(function () {
  console.log("hi");
});
