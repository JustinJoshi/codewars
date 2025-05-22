function wordSearch(query, seq){
  query = query.toLowerCase();
  var res = seq.filter(function(item) {
    return item.toLowerCase().indexOf(query) !== -1;
  });
  
  return res.length ? res : ["Empty"];
}