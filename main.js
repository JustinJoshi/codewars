function arrCheck(val) {
  return val.every(function(x) {
    return Array.isArray(x);
  });
};