function minMax(arr){
    let largest=arr[0] ;
    let smallest =arr[0];
    let sum=0;
    for(i=0;i<=arr.length-1;i++){
        sum+= arr[i];
        
    }console.log(sum);
    for(i=0;i<=arr.length-1;i++){
         if(arr[i]>=largest){
            largest=arr[i];
         }

         if(arr[i]<smallest){
            smallest =arr[i];
         }


    }
    console.log(`Smallest sum :${sum-largest}`);
    console.log(`Largest sum :${sum-smallest}`);

}
minMax([1,2,3])