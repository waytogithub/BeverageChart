function Axes(url){
this.url=url;
}
Axes.prototype.createLines=function(svg,x1,y1,x2,y2,style){
	var lineXY = document.createElementNS(this.url, "line");
    lineXY.setAttributeNS(null, "x1",x1);
    lineXY.setAttributeNS(null, "y1",y1);
    lineXY.setAttributeNS(null, "x2",x2);
    lineXY.setAttributeNS(null, "y2",y2);
    lineXY.setAttribute('style', style);
    //lineXY.setAttributeNS(null,"stroke-width",3);
    svg.appendChild(lineXY);
};
Axes.prototype.createText = function(svg,x,y,textVal,textColor){
        var newText = document.createElementNS(this.url,"text");
            newText.setAttributeNS(null,"x",x);     
            newText.setAttributeNS(null,"y",y); 
            newText.setAttributeNS(null,"font-size","13");
            newText.setAttributeNS(null,"text-anchor","middle");
            newText.setAttributeNS(null, "fill", textColor);
        var textNode = document.createTextNode(textVal);
            newText.appendChild(textNode);
            svg.appendChild(newText);

    };
