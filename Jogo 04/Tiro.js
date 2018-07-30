function Tiro (sentido, atirador){
  this.imagem = new Image();
  this.imagem.src = "Imagem/tiro.png";
  this.x = atirador.x+(atirador.width/2)-5; //*  Math.sin(atirador.angulo * Math.PI / 180) ;
  this.height = 10;
  this.width = 10;
  this.ativo = true;
  this.cor = atirador.color;
  this.color = "blue";
  this.y = atirador.y+(atirador.height/2)-5;
  this.vy = -600 *  Math.cos(atirador.angulo * Math.PI / 180);
  this.vx = 600 *  Math.sin(atirador.angulo * Math.PI / 180);
  this.corOriginal=this.color;


}

Tiro.prototype.desenhar = function (ctx) {
  //ctx.fillStyle = this.color;
  //ctx.fillRect(this.x,this.y,this.width,this.height);
  if(this.cor=="lime"){
    ctx.drawImage(this.imagem,0,0,10,10,this.x,this.y,this.width,this.height);
  } else if(this.cor == "wheat"){
    ctx.drawImage(this.imagem,10,0,10,10,this.x,this.y,this.width,this.height);

  } else if(this.cor=="Teal"){
    ctx.drawImage(this.imagem,20,0,10,10,this.x,this.y,this.width,this.height);

  }
};

Tiro.prototype.mover = function (dt) {
  this.y = this.y + this.vy*dt;
  this.x = this.x + this.vx*dt;

};

Tiro.prototype.verificaSaidaTela = function(){
  if(this.y<0 || this.y>500){
    return true;
  }
  if(this.x<0 || this.x>700){
    return true;
  }
  return false;
}

Tiro.prototype.verificaColisao = function (alvo) {
  if((this.y >= alvo.y && this.y<=alvo.y+alvo.height) || (this.y+this.height >= alvo.y && this.y+this.height <=alvo.y+alvo.height) ){
    if((this.x > alvo.x && this.x<=alvo.x+alvo.width) || (this.x+this.width > alvo.x && this.x+this.width<=alvo.x+alvo.width)){
      //if(this.ativo==true){
      this.color = "darkblue";
      return true;
      //}
      //  return false;
    }
    return false;
  }
  return false;
};

Tiro.prototype.isAtivo = function () {
  return this.ativo;
};
