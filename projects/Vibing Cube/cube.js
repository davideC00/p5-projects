class Cube {

  constructor(size, meshScale) {
    this.size = size;
    this.meshScale = meshScale;
    this.cols = Math.round(size / meshScale);
    this.rows = Math.round(size / meshScale);
    this.noise = [];
   this.setNoise(0);

  }
  
  
  setNoise(h) {
    
    for (let x = 0; x <= this.rows; x++) {
      this.noise[x] = [];
      for (let y = 0; y <= this.cols; y++) {
        this.noise[x][y] = map(noise(random(0,20), y), 0,1,0,h);
        if( x == 0 || y == 0 || y == this.cols|| x == this.rows){
          this.noise[x][y] = 0;
        }
      }
    }
  }  

  createFaces() {
    let i, j;
    let x, y1, y2, z;
    for (j = 0; j < this.rows; j++) {
      y1 = j * this.meshScale - this.size / 2;
      y2 = (j + 1) * this.meshScale - this.size / 2;
      z = this.size / 2;

      beginShape(TRIANGLE_STRIP);
      for (i = 0; i <= this.cols; i++) {
        x = i * this.meshScale - this.size / 2;
        vertex(x, y1, z + this.noise[j][i]);
        vertex(x, y2, z + this.noise[j+1][i]);
      }
      endShape();

      beginShape(TRIANGLE_STRIP);
      for (i = 0; i <= this.cols; i++) {
        x = i * this.meshScale - this.size / 2;
        vertex(x, y1, -z - this.noise[j][i]);
        vertex(x, y2, -z - this.noise[j+1][i]);
      }
      endShape();

      beginShape(TRIANGLE_STRIP);
      for (i = 0; i <= this.cols; i++) {
        x = i * this.meshScale - this.size / 2;
        vertex(z + this.noise[j][i], y1, x);
        vertex(z + this.noise[j+1][i], y2, x);
      }
      endShape();

      beginShape(TRIANGLE_STRIP);
      for (i = 0; i <= this.cols; i++) {
        x = i * this.meshScale - this.size / 2;
        vertex(-z - this.noise[j][i], y1, x);
        vertex(-z - this.noise[j+1][i], y2, x);
      }
      endShape();

      beginShape(TRIANGLE_STRIP);
      for (i = 0; i <= this.cols; i++) {
        x = i * this.meshScale - this.size / 2;
        vertex(y1, z + this.noise[j][i], x);
        vertex(y2, z + this.noise[j+1][i], x);
      }
      endShape();

      beginShape(TRIANGLE_STRIP);
      for (i = 0; i <= this.cols; i++) {
        x = i * this.meshScale - this.size / 2;
        vertex(y1, -z - this.noise[j][i], x);
        vertex(y2, -z - this.noise[j+1][i], x);
      }
      endShape();
    }
  }

}