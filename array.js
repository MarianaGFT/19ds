let array=[2,3,-4,5,-6];

function swap(i,m){
    temporal= array[i];
    array[i]=array[m];
    array[m]=temporal;
}

function bubble(array){
    let i,j;
    for(i=0;i<array.length;i++){
        for(j=0;j<array.length-1;j++){
            if(array[j]>array[j+1])
                swap(j,j+1)//intercambiar elementos
            
        }
        
        console.log(array);
    }
}
console.log(array)
bubble(array);
