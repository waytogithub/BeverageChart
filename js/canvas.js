function Canvas(url){
this.url=url;
}
Canvas.prototype.createSvg=function(svgWidth,svgHeight){
var svg = document.createElementNS(this.url, "svg");
     svg.setAttribute('width', svgWidth);
     svg.setAttribute('height', svgHeight);
     return svg;
}
Canvas.prototype.createRectangle=function(svg,height,width,x,y,col){
  var rect = document.createElementNS(this.url, "rect");
    rect.setAttributeNS(null, "x",x);
    rect.setAttributeNS(null, "y",y);
    rect.setAttributeNS(null, "height",height);
    rect.setAttributeNS(null, "width",width);
    rect.setAttributeNS(null,"fill",col);
    svg.appendChild(rect);
};
Canvas.prototype.createLines=function(svg,x1,y1,x2,y2,style){
	var lineXY = document.createElementNS(this.url, "line");
    lineXY.setAttributeNS(null, "x1",x1);
    lineXY.setAttributeNS(null, "y1",y1);
    lineXY.setAttributeNS(null, "x2",x2);
    lineXY.setAttributeNS(null, "y2",y2);
    lineXY.setAttribute('style', style);
    //lineXY.setAttributeNS(null,"stroke-width",3);
    svg.appendChild(lineXY);
};
Canvas.prototype.createText = function(svg,x,y,textVal,textColor,fontSize){
        var newText = document.createElementNS(this.url,"text");
            newText.setAttributeNS(null,"x",x);     
            newText.setAttributeNS(null,"y",y); 
            newText.setAttributeNS(null,"font-size",fontSize);
            newText.setAttributeNS(null,"text-anchor","middle");
            newText.setAttributeNS(null, "fill", textColor);
        var textNode = document.createTextNode(textVal);
            newText.appendChild(textNode);
            svg.appendChild(newText);

    };
