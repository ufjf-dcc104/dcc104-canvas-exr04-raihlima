function Canhao(cor){
  this.imagem = new Image();
  this.imagem.src = "Imagem/canhao.png";
  this.torre = new Image();
  this.torre.src = "Imagem/torre.png";
  this.x = 330;
  this.y = 400;
  this.vx = 0;
  this.vy = 0;
  this.angulo = 0;
  this.aceleracaoAngular = 0;
  this.width = 30;
  this.height = 30;
  this.energia = 100;
  this.vida=3;

  this.tX = this.x + 0.5 * this.width;
  this.tY = this.y + 0.5 * this.height;

  //Seleção de color
  if(cor==0){
    this.color = "lime";
    this.corOriginal=this.color;
  } else if(cor==1){
    this.color = "wheat";
    this.corOriginal=this.color;
  } else {
    this.color = "Teal";
    this.corOriginal=this.color;
  }
}

Canhao.prototype.getVida = function () {
  return this.vida;
};

Canhao.prototype.getEnergia = function () {
  return this.energia;
};

Canhao.prototype.getVy = function () {
  return this.vy;
};

Canhao.prototype.resetar = function () {
  this.x = Math.floor(Math.random() * 700);
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.width = 30;
  this.height = 30;
  this.energia = 100;
};

Canhao.prototype.desenhar = function (ctx) {
  ctx.drawImage(this.torre,0,0,30,70,this.x,this.y+  10,30,70);
  this.angulo = this.angulo + this.aceleracaoAngular;

  ctx.fillStyle = "red";
  ctx.translate(this.tX, this.tY);
//  ctx.fillRect(this.x,this.y,50,50);
  ctx.rotate((Math.PI / 180)* this.angulo); //this.vAng)); // rotate
  ctx.translate(this.tX*(-1), this.tY*(-1));

  ctx.drawImage(this.imagem,0,0,30,30,this.x,this.y,this.width,this.height);
  //ctx.strokeStyle = "white";
};


Canhao.prototype.atualizar = function (dt) {
  //this.y = this.y + this.vy *0.015;

  this.tX = this.x + 0.5 * this.width;
  this.tY = this.y + 0.5 * this.height;
};
