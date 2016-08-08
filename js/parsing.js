function getVal(chartData,productType,zone,product){
 var i=0
 if(productType=="Coffee"){ 
  if(zone=="Central"){
    var i=0;
    while(chartData.dataset[0].values[0].data[i].product!=product)
    i++;
    return {"sop":chartData.dataset[0].values[0].data[i].sop,"sos":chartData.dataset[0].values[0].data[i].sos};
 } 
 else if(zone=="East"){
    i=0;
    while(chartData.dataset[0].values[1].data[i].product!=product)
    i++;
    return {"sop":chartData.dataset[0].values[1].data[i].sop,"sos":chartData.dataset[0].values[1].data[i].sos};
 }
 else if(zone=="South"){
    i=0;
    while(chartData.dataset[0].values[2].data[i].product!=product)
    i++;
    return {"sop":chartData.dataset[0].values[2].data[i].sop,"sos":chartData.dataset[0].values[2].data[i].sos};
 }
 else if(zone=="East"){
    i=0;
    while(chartData.dataset[0].values[3].data[i].product!=product)
    i++;
    return {"sop":chartData.dataset[0].values[3].data[i].sop,"sos":chartData.dataset[0].values[3].data[i].sos};
 }

 }
else if(productType=="Espresso"){ 
  if(zone=="Central"){
    i=0;
    while(chartData.dataset[1].values[0].data[i].product!=product)
    i++;
    return {"sop":chartData.dataset[1].values[0].data[i].sop,"sos":chartData.dataset[1].values[0].data[i].sos};
 } 
 else if(zone=="East"){
    i=0;
    while(chartData.dataset[1].values[1].data[i].product!=product)
    i++;
    return {"sop":chartData.dataset[1].values[1].data[i].sop,"sos":chartData.dataset[1].values[1].data[i].sos};
 }
 else if(zone=="South"){
    i=0;
    while(chartData.dataset[1].values[2].data[i].product!=product)
    i++;
    return {"sop":chartData.dataset[1].values[2].data[i].sop,"sos":chartData.dataset[1].values[2].data[i].sos};
 }
 else if(zone=="East"){
    i=0;
    while(chartData.dataset[1].values[3].data[i].product!=product)
    i++;
    return {"sop":chartData.dataset[1].values[3].data[i].sop,"sos":chartData.dataset[1].values[3].data[i].sos};
 }
  }
  if(productType=="Herbal Tea"){ 
    if(zone=="Central"){
    var i=0;
    while(chartData.dataset[2].values[0].data[i].product!=product)
    i++;
    return {"sop":chartData.dataset[2].values[0].data[i].sop,"sos":chartData.dataset[2].values[0].data[i].sos};
 } 
 else if(zone=="East"){
    i=0;
    while(chartData.dataset[2].values[1].data[i].product!=product)
    i++;
    return {"sop":chartData.dataset[2].values[1].data[i].sop,"sos":chartData.dataset[2].values[1].data[i].sos};
 }
 else if(zone=="South"){
    i=0;
    while(chartData.dataset[2].values[2].data[i].product!=product)
    i++;
    return {"sop":chartData.dataset[2].values[2].data[i].sop,"sos":chartData.dataset[2].values[2].data[i].sos};
 }
 else if(zone=="East"){
    i=0;
    while(chartData.dataset[2].values[3].data[i].product!=product)
    i++
    return {"sop":chartData.dataset[2].values[3].data[i].sop,"sos":chartData.dataset[2].values[3].data[i].sos};
 }

  }
  else{
    if(zone=="Central"){
    var i=0;
    while(chartData.dataset[3].values[0].data[i].product!=product)
    i++;
    return {"sop":chartData.dataset[3].values[0].data[i].sop,"sos":chartData.dataset[3].values[0].data[i].sos};
 } 
 else if(zone=="East"){
    i=0;
    while(chartData.dataset[3].values[1].data[i].product!=product)
    i++;
    return {"sop":chartData.dataset[3].values[1].data[i].sop,"sos":chartData.dataset[3].values[1].data[i].sos};
 }
 else if(zone=="South"){
    i=0;
    while(chartData.dataset[3].values[2].data[i].product!=product)
    i++;
    return {"sop":chartData.dataset[3].values[2].data[i].sop,"sos":chartData.dataset[3].values[2].data[i].sos};
 }
 else if(zone=="East"){
    i=0;
    while(chartData.dataset[3].values[3].data[i].product!=product)
    i++;
    return {"sop":chartData.dataset[3].values[3].data[i].sop,"sos":chartData.dataset[3].values[3].data[i].sos};
 }
}
}
