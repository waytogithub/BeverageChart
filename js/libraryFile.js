function RenderChart(chartHeight,chartWidth,chartData){
this.chartHeight=chartHeight;
this.chartWidth=chartWidth;
this.chartData=chartData;
//console.log(getVal(this.chartData,"Espresso","East","Caffe Mocha"));
}

RenderChart.prototype.calSumTotal = function(chartData) {

 var sum=0,sumStringobj={},sumArray=[],sumArray=[],sumTotal=[];
 var noOfLines=this.chartData.dataset[0].length;
 for(var i=0;i<this.chartData.dataset.length;i++){
 
    for(var j=0;j<this.chartData.dataset[i].values.length;j++){
    var sumOfProfit=0,sumOfSales=0;
    for(k=0;k<this.chartData.dataset[i].values[j].data.length;k++){
      var l=this.chartData.dataset[i].values[j].data[k].sop.length;
      sumOfProfit+=(parseInt(this.chartData.dataset[i].values[j].data[k].sop.slice(1,l)));
    }
   
    for(k=0;k<this.chartData.dataset[i].values[j].data.length;k++){
     var l=this.chartData.dataset[i].values[j].data[k].sos.length;
     sumOfSales+=(parseInt(this.chartData.dataset[i].values[j].data[k].sos.slice(1,l)));
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
   var sopLength=chartData.dataset[0].values[0].data[0].sop.length;
   var sosLength=chartData.dataset[0].values[0].data[0].sos.length;
   var maxSop=parseInt(chartData.dataset[0].values[0].data[0].sop.slice(1,sopLength));
   var maxSos=parseInt(chartData.dataset[0].values[0].data[0].sos.slice(1,sosLength));
   for(var i=0;i<chartData.dataset.length;i++){
    for(var j=0;j<chartData.dataset[i].values.length;j++){
     for(k=0;k<chartData.dataset[i].values[j].data.length;k++){
       sopLength=chartData.dataset[i].values[j].data[k].sop.length;
       sosLength=chartData.dataset[i].values[j].data[k].sos.length;
       if(parseInt(chartData.dataset[i].values[j].data[k].sop.slice(1,sopLength))>maxSop)
         maxSop=chartData.dataset[i].values[j].data[k].sop.slice(1,sopLength);
       if(parseInt(chartData.dataset[i].values[j].data[k].sos.slice(1,sosLength))>maxSos)
         maxSos=chartData.dataset[i].values[j].data[k].sos.slice(1,sosLength);
     }
    }
   }
return {"maxSop":maxSop,"maxSos":maxSos};
}
function getShade(val,maxSop){
// console.log(maxSop);
 if(val<=(maxSop/4))
    return "#939393";
   else if(val>(maxSop/4) &&(val<=(maxSop/2)))
      return "#545454";
   else if(val>(maxSop/2) && val<=((3*maxSop)/4))
       return "#3f3f3f";
   else 
     return "#000000";

}
function render(chartData,chartHeight,chartWidth,maxSos){
var svgHeight=100; 
var svgWidth=200;
var gap=2;
var margin=10;
var divisionX=svgWidth/maxSos;
var url = "http://www.w3.org/2000/svg";
var divId=document.getElementById("container");


for(var k=0;k<chartData.dataset.length;k++){
  for(var j=0;j<chartData.dataset[k].values.length;j++){
     var svg = document.createElementNS(url, "svg");
     svg.setAttribute('width', svgWidth);
     svg.setAttribute('height', svgHeight);
     divId.appendChild(svg);
 var line=new Axes(url);
 
 line.createLines(svg,((divisionX*j)-1)+margin,margin+((chartData.dataset[k].values[j].data.length-1)*gap),((divisionX*j)-1)+margin,(svgHeight-((((chartData.dataset[k].values[j].data.length)-1)*gap))+margin),"stroke:rgb(0,0,0);stroke-width:2");
 
 //zone
 if(k==0){
 var text=new Axes(url);
  
 var text=new Axes(url);
 text.createText(svg,((divisionX*j)+(margin*3))+margin+50,margin,chartData.dataset[k].values[j].zone,"blue");
 }
 var divisionY=(svgHeight/(chartData.dataset[k].values[j].data.length));
 for(var i=0;i<chartData.dataset[k].values[j].data.length;i++){
 var canvas=new Canvas(url);
 
 var sosLength=chartData.dataset[k].values[j].data[i].sos.length;
 var sopLength=chartData.dataset[k].values[j].data[i].sop.length;
 //console.log(sosLength);
 var sosVal=parseInt(chartData.dataset[k].values[j].data[i].sos.slice(1,sosLength));
 var sopVal=parseInt(chartData.dataset[k].values[j].data[i].sop.slice(1,sopLength));
 //console.log(sopVal);
 var maxSopSos=getMaxSopSos(chartData);
 
 var maxSop=maxSopSos.maxSop;
 
 var col=getShade(sopVal,maxSop); 
 console.log(col);
 //console.log(sosVal);
 var width=divisionX*sosVal;
 if(k==0 && j==0){
 var text=new Axes(url);
 text.createText(svg,20,(divisionY*i)+margin+5,chartData.dataset[k].values[j].data[i].product,"blue");
 }

canvas.createRectangle(svg,divisionY-((chartData.dataset[k].values[j].data.length-1)*gap)-(margin),width,margin+50,(divisionY*i)+(margin+5),col);
 

 }
}
}

}