function Canvas(url){
this.url=url;
}
Canvas.prototype.createRectangle = function(svg,height,width,x,y,col){
  var rect = document.createElementNS(this.url, "rect");
    rect.setAttributeNS(null, "x",x);
    rect.setAttributeNS(null, "y",y);
    rect.setAttributeNS(null, "height",height);
    rect.setAttributeNS(null, "width",width);
    rect.setAttributeNS(null,"fill",col);
    svg.appendChild(rect);
};
