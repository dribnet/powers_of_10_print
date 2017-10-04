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

var c64_font = {
  "*": [
    "        ",
    " ##  ## ",
    "  ####  ",
    "########",
    "  ####  ",
    " ##  ## ",
    "        ",
    "        "
  ],
  "A": [
    "   ##   ",
    "  ####  ",
    " ##  ## ",
    " ###### ",
    " ##  ## ",
    " ##  ## ",
    " ##  ## ",
    "        "
  ],
  "B": [
    " #####  ",
    " ##  ## ",
    " ##  ## ",
    " #####  ",
    " ##  ## ",
    " ##  ## ",
    " #####  ",
    "        "
  ],
  "C": [
    "  ####  ",
    " ##  ## ",
    " ##     ",
    " ##     ",
    " ##     ",
    " ##  ## ",
    "  ####  ",
    "        "
  ],
  "D": [
    " ####   ",
    " ## ##  ",
    " ##  ## ",
    " ##  ## ",
    " ##  ## ",
    " ## ##  ",
    " ####   ",
    "        "
  ],
  "E": [
    " ###### ",
    " ##     ",
    " ##     ",
    " ####   ",
    " ##     ",
    " ##     ",
    " ###### ",
    "        "
  ],
  "F": [
    " ###### ",
    " ##     ",
    " ##     ",
    " ####   ",
    " ##     ",
    " ##     ",
    " ##     ",
    "        "
  ],
  "G": [
    "  ####  ",
    " ##  ## ",
    " ##     ",
    " ## ### ",
    " ##  ## ",
    " ##  ## ",
    "  ####  ",
    "        "
  ],
  "H": [
    " ##  ## ",
    " ##  ## ",
    " ##  ## ",
    " ###### ",
    " ##  ## ",
    " ##  ## ",
    " ##  ## ",
    "        "
  ],
  "I": [
    "  ####  ",
    "   ##   ",
    "   ##   ",
    "   ##   ",
    "   ##   ",
    "   ##   ",
    "  ####  ",
    "        "
  ],
  "K": [
    " ##  ## ",
    " ## ##  ",
    " ####   ",
    " ###    ",
    " ####   ",
    " ## ##  ",
    " ##  ## ",
    "        "
  ],
  "M": [
    " ##   ##",
    " ### ###",
    " #######",
    " ## # ##",
    " ##   ##",
    " ##   ##",
    " ##   ##",
    "        "
  ],
  "N": [
    " ##  ## ",
    " ### ## ",
    " ###### ",
    " ###### ",
    " ## ### ",
    " ##  ## ",
    " ##  ## ",
    "        "
  ],
  "O": [
    "  ####  ",
    " ##  ## ",
    " ##  ## ",
    " ##  ## ",
    " ##  ## ",
    " ##  ## ",
    "  ####  ",
    "        "
  ],
  "P": [
    " #####  ",
    " ##  ## ",
    " ##  ## ",
    " #####  ",
    " ##     ",
    " ##     ",
    " ##     ",
    "        "
  ],
  "R": [
    " #####  ",
    " ##  ## ",
    " ##  ## ",
    " #####  ",
    " ####   ",
    " ## ##  ",
    " ##  ## ",
    "        "
  ],
  "S": [
    "  ####  ",
    " ##  ## ",
    " ##     ",
    "  ####  ",
    "     ## ",
    " ##  ## ",
    "  ####  ",
    "        "
  ],
  "T": [
    " ###### ",
    "   ##   ",
    "   ##   ",
    "   ##   ",
    "   ##   ",
    "   ##   ",
    "   ##   ",
    "        "
  ],
  "U": [
    " ##  ## ",
    " ##  ## ",
    " ##  ## ",
    " ##  ## ",
    " ##  ## ",
    " ##  ## ",
    "  ####  ",
    "        "
  ],
  "V": [
    " ##  ## ",
    " ##  ## ",
    " ##  ## ",
    " ##  ## ",
    " ##  ## ",
    "  ####  ",
    "   ##   ",
    "        "
  ],
  "Y": [
    " ##  ## ",
    " ##  ## ",
    " ##  ## ",
    "  ####  ",
    "   ##   ",
    "   ##   ",
    "   ##   ",
    "        "
  ],
  "0": [
    "  ####  ",
    " ##  ## ",
    " ## ### ",
    " ### ## ",
    " ##  ## ",
    " ##  ## ",
    "  ####  ",
    "        "
  ],
  "1": [
    "   ##   ",
    "   ##   ",
    "  ###   ",
    "   ##   ",
    "   ##   ",
    "   ##   ",
    " ###### ",
    "        "
  ],
  "2": [
    "  ####  ",
    " ##  ## ",
    "     ## ",
    "    ##  ",
    "  ##    ",
    " ##     ",
    " ###### ",
    "        "
  ],
  "3": [
    "  ####  ",
    " ##  ## ",
    "     ## ",
    "   ###  ",
    "     ## ",
    " ##  ## ",
    "  ####  ",
    "        "
  ],
  "4": [
    "     ## ",
    "    ### ",
    "   #### ",
    " ##  ## ",
    " #######",
    "     ## ",
    "     ## ",
    "        "
  ],
  "5": [
    " ###### ",
    " ##     ",
    " #####  ",
    "     ## ",
    "     ## ",
    " ##  ## ",
    "  ####  ",
    "        "
  ],
  "6": [
    "  ####  ",
    " ##  ## ",
    " ##     ",
    " #####  ",
    " ##  ## ",
    " ##  ## ",
    "  ####  ",
    "        "
  ],
  "8": [
    "  ####  ",
    " ##  ## ",
    " ##  ## ",
    "  ####  ",
    " ##  ## ",
    " ##  ## ",
    "  ####  ",
    "        "
  ],
  "9": [
    "  ####  ",
    " ##  ## ",
    " ##  ## ",
    "  ##### ",
    "     ## ",
    " ##  ## ",
    "  ####  ",
    "        "
  ],
  ".": [
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
    "   ##   ",
    "   ##   ",
    "        "
  ],
  ";": [
    "        ",
    "        ",
    "   ##   ",
    "        ",
    "        ",
    "   ##   ",
    "   ##   ",
    "  ##    "
  ],
  ":": [
    "        ",
    "        ",
    "   ##   ",
    "        ",
    "        ",
    "   ##   ",
    "        ",
    "        "
  ],
  "(": [
    "    ##  ",
    "   ##   ",
    "  ##    ",
    "  ##    ",
    "  ##    ",
    "   ##   ",
    "    ##  ",
    "        "
  ],
  ")": [
    "  ##    ",
    "   ##   ",
    "    ##  ",
    "    ##  ",
    "    ##  ",
    "   ##   ",
    "  ##    ",
    "        "
  ],
  "+": [
    "        ",
    "   ##   ",
    "   ##   ",
    " ###### ",
    "   ##   ",
    "   ##   ",
    "        ",
    "        "
  ],
  "$": [
    "   ##    ",
    "  #####  ",
    " ##      ",
    "  ####   ",
    "     ##  ",
    " #####   ",
    "   ##    ",
    "         "
  ],
}

var text_lines = [
  "                                        ",
  "    **** COMMODORE 64 BASIC V2 ****     ",
  "                                        ",
  " 64K RAM SYSTEM  38911 BASIC BYTES FREE ",
  "                                        ",
  "READY.                                  ",
  "10 PRINT CHR$(205.5+RND(1)); : GOTO 10  ",
  "RUN                                     "
]

function render_char(p5, c, x_pos, y_pos, char_width, char_height) {
  if(c == " ") {
    return;
  }
  if (c in c64_font) {
    var char_map = c64_font[c];
    var pixel_width = char_width / 8.0;
    var pixel_height = char_height / 8.0;
    for(var j=0; j<8; j++) {
      var cur_y = y_pos + j * pixel_height;
      for(var i=0; i<8; i++) {
        var cur_x = x_pos + i * pixel_width;
        if(char_map[j][i] != " ") {
          p5.rect(cur_x, cur_y, 0.5+pixel_width, 0.5+pixel_height);
        }
      }
    }
  }
  else {
    p5.rect(x_pos, y_pos, char_width, char_height);
  }
}

var native_charsize = 22;
var offset_x = 3.0;
var offset_y = -35;
// at zoom=0 each slash is 16x16
function drawLayer(p5, slashsize, x1, x2, y1, y2, z, line_color, thinness, is_top) {
  var noiseScale=1/48.0;
  var startx = slashsize * (Math.floor(x1/slashsize) - 1);
  var starty = slashsize * (Math.floor(y1/slashsize) - 1);
  var endx = slashsize * (Math.floor(x2/slashsize) + 1);
  var endy = slashsize * (Math.floor(y2/slashsize) + 1);

  var scaled_slashsize = ((x2-x1)/slashsize);
  var thin_frac = 1.0 / (5 + thinness);
  var pixel_denom = p5.map(thin_frac, 1/6.0, 0, 4, 20)
  var char_width = 256 / ((x2-x1)/slashsize);
  var char_height = 256 / ((y2-y1)/slashsize);
  var pixel_width = char_width / pixel_denom;
  var pixel_height = char_height / pixel_denom;
  p5.strokeWeight(pixel_width);
  p5.strokeCap(p5.SQUARE);
  p5.fill(line_color);

  for(var x=startx; x<endx; x+=slashsize) {
    var n_x = x / native_charsize;
    var x_pos = p5.map(x, x1, x2, 0, 256);
    for(var y=starty; y<endy; y+=slashsize) {
      var n_y = y / native_charsize;
      var y_pos = p5.map(y, y1, y2, 0, 256);
      if(n_x - offset_x < 0 || n_x-offset_x >= 40 ||
         n_y - offset_y < 0 || n_y-offset_y >= 25) {
        p5.rectMode(p5.CORNER);
        p5.noStroke();
        p5.rect(x_pos, y_pos, char_width, char_height);
      }
      else if(n_y - offset_y < 8) {
        // do nothing if not top
        if(is_top) {
          var cur_line = Math.floor(n_y - offset_y);
          var cur_char = Math.floor(n_x - offset_x);
          p5.rectMode(p5.CORNER);
          p5.noStroke();
          render_char(p5, text_lines[cur_line][cur_char], x_pos, y_pos, char_width, char_height);          
        }
      }
      else {
        var isBackSlash = getIsBackslash(p5, x, y, z, noiseScale, slashsize);
        p5.noStroke();
        var p2 = pixel_width/2;
        var p4 = 0.35 * pixel_width;
        var diag_p2 = 1.414 * p2;
        p5.rectMode(p5.CENTER);
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
        }

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

  drawStack.push([native_charsize, x1, x2, y1, y2, light_blue, 1, true])

  // drawLayer(p5, 16, x1, x2, y1, y2);
  var nextLayerDown = 3.5;
  var nextLayerIncrement = 3.6;
  var nextLayerTarget = Math.floor(nextLayerDown);
  var alpha = 1.0;
  var curLineLayer = 2;
  for(var i=1; i<=zoom; i++) {
    if(i == nextLayerTarget) {
      var alpha = 0.90 * alpha;
      var curBlue = p5.lerpColor(p5.color(blue), p5.color(light_blue), alpha);
      nextLayerDown += nextLayerIncrement;
      nextLayerTarget = Math.floor(nextLayerDown);
      nextLayerIncrement += 0.8;
      var tileSize = native_charsize / Math.pow(2, i);
      drawStack.push([tileSize, x1, x2, y1, y2, curBlue, curLineLayer, false])
      curLineLayer = curLineLayer + 1;
    }
  }

  for(var i=drawStack.length-1; i>=0; i--) {
    var args = drawStack[i];
    p5.fill(args[5]);
    p5.stroke(args[5]);
    drawLayer(p5, args[0], args[1], args[2], args[3], args[4], z, args[5], args[6], args[7]);
  }
}
