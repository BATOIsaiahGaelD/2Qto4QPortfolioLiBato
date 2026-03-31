function plotPoint(x0,y0,x,y) {
    console.log(x0, y0, x, y); // checks the arguments passed to this function
    in1.innerHTML = x0 + " " + y0 + " " + x + " " + y;
    var point = document.createElement('div');  
    point.className = 'point';
    /* control where to place the div on the screen using left and bottom of position:absolute */
    if ((x0,y0>-10000 && x0,y0<10000) && (x,y>=-10000 && x,y<=10000)) {
      point.style.left = (x - x0 + 200 - 5) + 'px'; // subtract half the width of the point to center it by changing left css property
      point.style.bottom = (y - y0 + 200 - 5) + 'px'; // subtract half the height of the point to center it by changing bottom css property
      document.getElementById('coordinatePlane').appendChild(point);
      if (x > x0 && y > y0){
        out1.innerHTML = "NE"
      }
      else if (x < x0 && y < y0){
        out1.innerHTML = "SO"
      }
      else if (x > x0 && y < y0){
        out1.innerHTML = "SE"
      }
      else if (x < x0 && y > y0){
        out1.innerHTML = "NO"
      }
      else{
        out1.innerHTML = "divisa"
      }
    }
    else {
      alert("Coordinates too large! Enter coordinates greater than -10000 or less than 10000 for borders, and greater than or equal to -10000 or less than or equal to 10000 for coordinates.");
    }
    /* references
    Coyier, C. (2017). Css sprites: what they are, why they're cool, and how to use them | css-tricks. CSSTricks. https://css-tricks.com/css-sprites/.
    CSS Animations. (n.d.). https://www.w3schools.com/css/css3_animations.asp
    CSS Image Sprites. (n.d.). https://www.w3schools.com/css/css_image_sprites.asp */
  }