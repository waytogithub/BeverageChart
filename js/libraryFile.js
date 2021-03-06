function RenderChart(chartWidth,chartData){
this.chartWidth=chartWidth;
this.chartData=chartData;

}

RenderChart.prototype.calSumTotal = function() {

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
render(this.chartData,this.chartWidth,maxSopSos.maxSos);

}
function getMaxSopSos(chartData){
   var maxSopPos,maxSopNeg=(-Infinity);
   
    
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

return {"maxSopPos":maxSopPos,"maxSopNeg":maxSopNeg,"maxSos":maxSos};
}
function getShade(val,maxSopPos,maxSopNeg){
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
function render(chartData,chartWidth,maxSos){
var svgWidth=chartWidth/((chartData.dataset[0].values.length)+2);
var gap=5, margin=10,rectHeight=18,canvas,divId,svg,svgHeight,text;
var sosVal,sopVal,maxSopSos,maxSopPos,maxSopNeg,col,width;
var divisionX=svgWidth/maxSos;
var url = "http://www.w3.org/2000/svg";
divId=document.getElementById("container");
canvas=new Canvas(url);
//console.log((chartData.dataset[k].values.length)+1);
for(var i=0;i<(chartData.dataset[0].values.length)+2;i++){
canvas=new Canvas(url);
svg=canvas.createSvg(svgWidth,100);
divId.appendChild(svg);

if(i==0)
canvas.createText(svg,7*margin,100-margin,"Product Type","blue",13);
if(i>1){
canvas.createLines(svg,margin,80,margin,100,"stroke:#000000");
if(i==2){
canvas.createText(svg,80,20,chartData.chart.caption,"blue",15);
canvas.createText(svg,80,40,chartData.chart.subcaption,"blue",13);  
}
}
if(i==1)
canvas.createText(svg,8*margin,100-margin,"Product","blue",13); 
if(i>1){
canvas.createText(svg,5*margin,100-margin,chartData.dataset[0].values[i-2].zone,"blue",13);
}
}

for(var k=0;k<((chartData.dataset.length));k++){

for(var j=0;j<(chartData.dataset[k].values.length)+2;j++){
canvas=new Canvas(url);
svgHeight=(rectHeight*(chartData.dataset[k].values[0].data.length))+(2*margin)+((chartData.dataset[k].values[0].data.length)-1)*gap;
svg=canvas.createSvg(svgWidth,svgHeight);
divId.appendChild(svg);
canvas.createLines(svg,0,0,svgWidth,0,"stroke:#000000");
if(j>0)
canvas.createLines(svg,margin,0,margin,svgHeight,"stroke:#000000");
canvas.createLines(svg,0,svgHeight,svgWidth,svgWidth,"stroke:#000000"); 
if((j==(chartData.dataset[k].values.length)+1))
canvas.createLines(svg,svgWidth,0,svgWidth,svgHeight,"stroke:#000000");
if((k==chartData.dataset.length)-1)
canvas.createLines(svg,0,svgHeight,svgWidth,svgHeight,"stroke:#000000");    
if(j==0 ){
text=new Canvas(url);
text.createText(svg,50,50,chartData.dataset[k].productType,"blue",13);
}
 
if(j==1){
var divY;
for(var n=0;n<chartData.dataset[k].values[j].data.length;n++){  
text=new Canvas(url);
divY=(svgHeight/(chartData.dataset[k].values[j].data.length));
text.createText(svg,margin+80,(2*margin)+((divY-5)*n)+5,chartData.dataset[k].values[j].data[n].product,"blue",12);
}
}

if(j>1){
 for(var i=0;i<chartData.dataset[k].values[j-2].data.length;i++){
 sosVal=chartData.dataset[k].values[j-2].data[i].sos;
 sopVal=chartData.dataset[k].values[j-2].data[i].sop;
 //console.log(sopVal);
 maxSopSos=getMaxSopSos(chartData);
 
 maxSopPos=maxSopSos.maxSopPos;
 maxSopNeg=maxSopSos.maxSopNeg;
 col=getShade(sopVal,maxSopPos,maxSopNeg); 
 
 width=divisionX*sosVal;
 canvas=new Canvas(url);  
 canvas.createRectangle(svg,rectHeight,width,margin,(rectHeight*i)+margin+(gap*i),col);
 }
}
}
}
for(var i=0;i<(chartData.dataset[0].values.length)+2;i++){
canvas=new Canvas(url);
svg=canvas.createSvg(svgWidth,40);
divId.appendChild(svg);
if(i>1)
canvas.createLines(svg,margin,0,margin,30,"stroke:#000000");

if(i>1){
for(var k=0;k<3;k++){
canvas.createLines(svg,margin+(svgWidth/4)*(k+1),0,margin+(svgWidth/4)*(k+1),5,"stroke:#000000");
text=(((maxSos/4)*(k+1)));
if(text<10000)
text=text.toString().slice(0,1);
else
text=text.toString().slice(0,2);
canvas.createText(svg,margin+(svgWidth/4)*(k+1),20,text+"K","blue",11);
}  
canvas.createText(svg,8*margin,4*margin,"Sum of Sales","blue",13);
}
}

}


