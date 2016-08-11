function RenderChart(chartHeight,chartWidth,chartData){
this.chartHeight=chartHeight;
this.chartWidth=chartWidth;
this.chartData=chartData;

}

RenderChart.prototype.calSumTotal = function(chartData) {

 var sum=0,sumStringobj={},sumArray=[],sumArray=[],sumTotal=[];
 var noOfLines=this.chartData.dataset[0].length;
 
 for(var i=0;i<this.chartData.dataset.length;i++){
 
    for(var j=0;j<this.chartData.dataset[i].values.length;j++){
    var sumOfProfit=0,sumOfSales=0;
    for(k=0;k<this.chartData.dataset[i].values[j].data.length;k++){
      
      sumOfProfit+=this.chartData.dataset[i].values[j].data[k].sop;
    }
   
    for(k=0;k<this.chartData.dataset[i].values[j].data.length;k++){
     var l=this.chartData.dataset[i].values[j].data[k].sos.length;
     sumOfSales+=this.chartData.dataset[i].values[j].data[k].sos;
    }      
     sumArray[j]={"sumOfProfit":sumOfProfit,"sumOfSales":sumOfSales}; 

 }
   sumTotal[i]={"sumArray":sumArray};
 
 }

var maxSopSos={};
maxSopSos=getMaxSopSos(this.chartData);
//console.log(maxSopSos);
render(this.chartData,this.chartHeight,this.chartWidth,maxSopSos.maxSos);

}
function getMaxSopSos(chartData){
   var maxSopPos,maxSopNeg=-Infinity;
   //console.log
    
    maxSopPos=chartData.dataset[0].values[0].data[0].sop;
    
   var maxSos=chartData.dataset[0].values[0].data[0].sos;
   for(var i=0;i<chartData.dataset.length;i++){
    for(var j=0;j<chartData.dataset[i].values.length;j++){
     for(k=0;k<chartData.dataset[i].values[j].data.length;k++){
       if(chartData.dataset[i].values[j].data[k].sop>0){
          if(chartData.dataset[i].values[j].data[k].sop>maxSopPos)
             maxSopPos=chartData.dataset[i].values[j].data[k].sop;
          }
          else
          {  
             if(maxSopNeg==(-Infinity))
               maxSopNeg=chartData.dataset[i].values[j].data[k].sop;
             else
             {
               if(Math.abs(chartData.dataset[i].values[j].data[k].sop)>Math.abs(maxSopNeg))
                maxSopNeg=chartData.dataset[i].values[j].data[k].sop;
          
             }
         }
          
          if(chartData.dataset[i].values[j].data[k].sos>maxSos)
             maxSos=chartData.dataset[i].values[j].data[k].sos;
        }
      }
   }
console.log(maxSopPos,maxSopNeg);  
return {"maxSopPos":maxSopPos,"maxSopNeg":maxSopNeg,"maxSos":maxSos};
}
function getShade(val,maxSopPos,maxSopNeg){
//console.log(maxSopNeg);
if(val>0){
 if(val<=(maxSopPos/4))
    return "#7e7e7e";
   else if(val>(maxSopPos/4) &&(val<=(maxSopPos/2)))
      return "#545454";
   else if(val>(maxSopPos/2) && val<=((3*maxSopPos)/4))
       return "#3f3f3f";
   else 
     return "#000000";
}
else{

 if(Math.abs(val)<=(Math.abs(maxSopNeg/4)))
    return "#ffe5e5";
   else if(Math.abs(val)>Math.abs((maxSopNeg/4)) &&(Math.abs(val)<=Math.abs((maxSopNeg/2))))
      return "#ffb2b2";
   else if(Math.abs(val)>Math.abs((maxSopNeg/2)) && (Math.abs(val)<=Math.abs(((3*maxSopNeg)/4))))
       return "#ff7f7f";
   else 
     return "#ff1919";
}

}
function render(chartData,chartHeight,chartWidth,maxSos){
var svgHeight=110; 
var svgWidth=150;
var gap=2;
var margin=6;
var divisionX=svgWidth/maxSos;
var url = "http://www.w3.org/2000/svg";
var divId=document.getElementById("container");
for(var k=0;k<chartData.dataset.length;k++){
     var svg = document.createElementNS(url, "svg");
     svg.setAttribute('width', svgWidth);
     svg.setAttribute('height', svgHeight);
     divId.appendChild(svg);
var line=new Axes(url);
line.createLines(svg,0,0,0,110,"stroke:#000000");
line.createLines(svg,0,0,svgWidth,0,"stroke:#000000");
line.createLines(svg,0,110,150,110,"stroke:#000000"); 
var text=new Axes(url);
text.createText(svg,margin+40,margin+60,chartData.dataset[k].productType,"blue");
//console.log((chartData.dataset[k].values.length)+1);
for(var j=0;j<(chartData.dataset[k].values.length)+1;j++){
     var svg = document.createElementNS(url, "svg");
     svg.setAttribute('width', svgWidth);
     svg.setAttribute('height', svgHeight);
     divId.appendChild(svg);
var line=new Axes(url);
line.createLines(svg,margin,0,margin,110,"stroke:#000000");
line.createLines(svg,0,0,svgWidth,0,"stroke:#000000");
line.createLines(svg,0,110,150,110,"stroke:#000000"); 
if((j==(chartData.dataset[k].values.length)))
line.createLines(svg,svgWidth,0,svgWidth,svgHeight,"stroke:#000000");    
if(k==0 && j>0){
var text=new Axes(url);
text.createText(svg,50,10,chartData.dataset[k].values[j-1].zone,"blue");
 }
if(j==0){
  if(k==0){  
  var text=new Axes(url);
  text.createText(svg,0,0,"Product","blue");  
  }
for(var n=0;n<chartData.dataset[k].values[j].data.length;n++){  
var text=new Axes(url);
var divY=(100-margin)/(chartData.dataset[k].values[j].data.length);
text.createText(svg,margin+80,margin+20+(divY*n),chartData.dataset[k].values[j].data[n].product,"blue");
}
}
else{
 //zone
 var divisionY=(svgHeight/(chartData.dataset[k].values[j-1].data.length));
 for(var i=0;i<chartData.dataset[k].values[j-1].data.length;i++){
 var sosVal=chartData.dataset[k].values[j-1].data[i].sos;
 var sopVal=chartData.dataset[k].values[j-1].data[i].sop;
 //console.log(sopVal);
 var maxSopSos=getMaxSopSos(chartData);
 
 var maxSopPos=maxSopSos.maxSopPos;
 var maxSopNeg=maxSopSos.maxSopNeg;
 var col=getShade(sopVal,maxSopPos,maxSopNeg); 
 
 var width=divisionX*sosVal;
 


var canvas=new Canvas(url);  
canvas.createRectangle(svg,divisionY-((chartData.dataset[k].values[j-1].data.length-1)*gap)-(2*(margin)),width,margin,(divisionY*i)+(margin+5),col);


 }
}
}

}
}