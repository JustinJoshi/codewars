
function seqlist(first, c, l) {
  for (var list = []; list.length < l; )
    list.push(first + c * list.length);
  return list;
}