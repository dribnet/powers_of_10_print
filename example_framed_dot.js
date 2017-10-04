function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  console.log(y1, y2);
  p5.background(255);
  p5.rectMode(p5.CORNERS);

  var cx = p5.map(512-960/2, x1, x2, 0, 256);
  var cy = p5.map(512-720/2, y1, y2, 0, 256);
  var cx2 = p5.map(512+960/2, x1, x2, 0, 256);
  var cy2 = p5.map(512+720/2, y1, y2, 0, 256);
  p5.fill(255, 0, 0);
  p5.rect(cx, cy, cx2, cy2);

  cx = p5.map(512-940/2, x1, x2, 0, 256);
  cy = p5.map(512-700/2, y1, y2, 0, 256);
  cx2 = p5.map(512+940/2, x1, x2, 0, 256);
  cy2 = p5.map(512+700/2, y1, y2, 0, 256);
  p5.fill(0);
  p5.rect(cx, cy, cx2, cy2);

  var cx = p5.map(512, x1, x2, 0, 256);
  var cy = p5.map(512, y1, y2, 0, 256);
  var cx2 = p5.map(512+50, x1, x2, 0, 256);
  p5.fill(0, 0, 255);
  p5.ellipse(cx, cy, (cx2-cx));

  var cx = p5.map(412, x1, x2, 0, 256);
  var cy = p5.map(412, y1, y2, 0, 256);
  var cx2 = p5.map(412+50, x1, x2, 0, 256);
  p5.fill(0, 255, 0);
  p5.ellipse(cx, cy, (cx2-cx));
}
