var blue = "#0000AA"
var light_blue = "#0088FF"

function getIsBackslash(p5, x, y, z, noiseScale, slashsize) {
  var n_t_l = p5.noise(x * noiseScale, y * noiseScale, z);
  var n_t_r = p5.noise((x + slashsize) * noiseScale, y * noiseScale, z);
  var n_b_l = p5.noise(x * noiseScale, (y + slashsize) * noiseScale, z);
  var n_b_r = p5.noise((x + slashsize) * noiseScale, (y + slashsize) * noiseScale, z);
  var tilt_fs = Math.abs(n_b_l-n_t_r);
  var tilt_bs = Math.abs(n_t_l-n_b_r);
  return(tilt_fs > tilt_bs);
}

// at zoom=0 each slash is 16x16
function drawLayer(p5, slashsize, x1, x2, y1, y2, z, line_color) {
  var noiseScale=1/16.0;
  var startx = slashsize * (Math.floor(x1/slashsize) - 1);
  var starty = slashsize * (Math.floor(y1/slashsize) - 1);
  var endx = slashsize * (Math.floor(x2/slashsize) + 1);
  var endy = slashsize * (Math.floor(y2/slashsize) + 1);

  var char_width = 256 / ((x2-x1)/slashsize);
  var char_height = 256 / ((y2-y1)/slashsize);
  var pixel_width = char_width / 8;
  var pixel_height = char_height / 8;
  p5.strokeWeight(pixel_width);
  p5.strokeCap(p5.SQUARE);
  p5.rectMode(p5.CENTER);
  p5.fill(line_color);

  for(var x=startx; x<endx; x+=slashsize) {
    var n_x = x / slashsize;
    var x_pos = p5.map(x, x1, x2, 0, 256);
    for(var y=starty; y<endy; y+=slashsize) {
      var n_y = y / slashsize;
      var y_pos = p5.map(y, y1, y2, 0, 256);
      var isBackSlash = getIsBackslash(p5, x, y, z, noiseScale, slashsize);
      p5.noStroke();
      var p2 = pixel_width/2;
      var p4 = 0.35 * pixel_width;
      var diag_p2 = 1.414 * p2;
      if(isBackSlash) {
        p5.rect(x_pos+p4, y_pos+p4, diag_p2, diag_p2);
        p5.rect(x_pos+char_width-p4, y_pos+char_height-p4, diag_p2, diag_p2);
        p5.stroke(line_color);
        p5.line(x_pos+p4, y_pos+p4, x_pos+char_width-p4, y_pos+char_height-p4);
      }
      else {
        p5.rect(x_pos+p4, y_pos+char_height-p4, diag_p2, diag_p2);
        p5.rect(x_pos+char_width-p4, y_pos+p4, diag_p2, diag_p2);
        p5.stroke(line_color);
        p5.line(x_pos+p4, y_pos+char_height-p4, x_pos+char_width-p4, y_pos+p4);
        // for(var k=0;k<7;k++) {
        //   var xp = x_pos + k*pixel_width;
        //   var yp = y_pos + (6-k)*pixel_height;
        //   p5.rect(xp, yp, 2*pixel_width, 2*pixel_height)
        // }
      }
    }
  }
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  p5.noiseDetail(8,0.5);
  p5.noStroke();

  p5.fill(blue);
  p5.rect(0, 0, 256, 256);
  p5.fill(light_blue);

  var drawStack = [];

  drawStack.push([16, x1, x2, y1, y2, light_blue])

  // drawLayer(p5, 16, x1, x2, y1, y2);
  var nextLayerDown = 3.5;
  var nextLayerIncrement = 3.6;
  var nextLayerTarget = Math.floor(nextLayerDown);
  var alpha = 1.0;
  for(var i=1; i<=zoom; i++) {
    if(i == nextLayerTarget) {
      var alpha = 0.90 * alpha;
      var curBlue = p5.lerpColor(p5.color(blue), p5.color(light_blue), alpha);
      // p5.fill(curBlue);
      nextLayerDown += nextLayerIncrement;
      nextLayerTarget = Math.floor(nextLayerDown);
      nextLayerIncrement += 0.8;
      var tileSize = 16 / Math.pow(2, i);
      // drawLayer(p5, tileSize, x1, x2, y1, y2);
      drawStack.push([tileSize, x1, x2, y1, y2, curBlue])
    }
  }

  for(var i=drawStack.length-1; i>=0; i--) {
    var args = drawStack[i];
    p5.fill(args[5]);
    p5.stroke(args[5]);
    drawLayer(p5, args[0], args[1], args[2], args[3], args[4], z, args[5]);
  }

  // var numLayersDown = Math.floor(zoom/3);
  // for(var i=0; i<numLayersDown; i++) {
  //   var tileSize = 16 / Math.pow(2, 3*(i+1));
  //   drawLayer(p5, tileSize, x1, x2, y1, y2);    
  // }
}

function drawGrid1(p5, zoom, x1, x2, y1, y2) {
  var noiseScale=1.0;
  p5.noiseDetail(8,0.5);
  p5.noStroke();
  for(var i=0; i<16; i++) {
    var n_x = p5.map(i, 0, 16, x1, x2);
    for(var j=0; j<16; j++) {
      var n_y = p5.map(j, 0, 16, y1, y2);
      var noiseVal = p5.noise(n_x * noiseScale,
                          n_y * noiseScale);
      p5.fill(blue);
      p5.rect(i*16, j*16, 16, 16);
      p5.fill(light_blue);
      if(noiseVal < 0.5) {
        for(var k=0;k<7;k++) {
          var x1 = i*16 + k*2;
          var y1 = j*16 + k*2;
          p5.rect(x1, y1, 4, 4)
        }
      }
      else {
        for(var k=0;k<7;k++) {
          var x1 = i*16 + k*2;
          var y1 = j*16 + (12-k*2);
          p5.rect(x1, y1, 4, 4)
        }
      }
    }
  }
}
