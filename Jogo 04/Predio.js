function Predio(x){
  this.imagem = new Image();
  this.imagem.src = "predio.png";
  this.id = x;
  this.x = 50 + (180 * x);
  this.y = 400;
  this.height = 80;
  this.vx=1;
  this.width = 50;
  this.vida = 3;
  this.color = "gray";

  this.somQuebrado = new Audio();
  this.somQuebrado.src = "Som/Crash.m4a";

}

Predio.prototype.desenhar = function (ctx) {
//  ctx.fillStyle = this.color;
  //ctx.fillRect(this.x,this.y,this.width,this.height);

  if(this.vida==3){
    if(this.id==0){
      ctx.drawImage(this.imagem,0,0,100,240,this.x,this.y,this.width,this.height);
    } else if(this.id==1){
      ctx.drawImage(this.imagem,100,0,100,240,this.x,this.y,this.width,this.height);
    } else if(this.id==2){
      ctx.drawImage(this.imagem,200,0,100,240,this.x,this.y,this.width,this.height);
    } else if(this.id==3){
      ctx.drawImage(this.imagem,300,0,100,240,this.x,this.y,this.width,this.height);
    }

  } else if (this.vida==2){
    if(this.id==0){
      ctx.drawImage(this.imagem,0,250,100,240,this.x,this.y,this.width,this.height);
    } else if(this.id==1){
      ctx.drawImage(this.imagem,100,250,100,240,this.x,this.y,this.width,this.height);
    } else if(this.id==2){
      ctx.drawImage(this.imagem,200,250,100,240,this.x,this.y,this.width,this.height);
    } else if(this.id==3){
      ctx.drawImage(this.imagem,300,250,100,240,this.x,this.y,this.width,this.height);
    }

  } else if (this.vida ==1){
    if(this.id==0){
      ctx.drawImage(this.imagem,0,500,100,240,this.x,this.y,this.width,this.height);
    } else if(this.id==1){
      ctx.drawImage(this.imagem,100,500,100,240,this.x,this.y,this.width,this.height);
    } else if(this.id==2){
      ctx.drawImage(this.imagem,200,500,100,240,this.x,this.y,this.width,this.height);
    } else if(this.id==3){
      ctx.drawImage(this.imagem,300,500,100,240,this.x,this.y,this.width,this.height);
    }

  }

};

Predio.prototype.demolir = function () {
  this.vida -=1;
  if(this.vida <1){
    this.color = "black";
    this.somQuebrado.load();
    this.somQuebrado.play();
  } else {
    this.color = "blue";
  }

};

Predio.prototype.mover = function () {
  this.x = this.x + this.vx;
};

Predio.prototype.verificaColisao = function (asteroide) {
  if(this.color != "black"){
    if((asteroide.x<this.x+this.width && asteroide.x>this.x)||(asteroide.x+asteroide.width>this.x && asteroide.x+asteroide.width<this.x+this.width)){
      if((asteroide.y<this.y+this.height && asteroide.y>this.y)||(asteroide.y+asteroide.height>this.y && asteroide.y+asteroide.width<this.y+this.height)){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

Predio.prototype.morte
