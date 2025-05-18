function polyDerivative(p) {
  return p.slice(1).map((a, i) => (i + 1) * a);
}