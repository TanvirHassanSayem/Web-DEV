 function getTime(time){
  let hours = parseInt(time / 3600);
  let remainingTime =time % 3600;

  let minutes = parseInt(remainingTime / 60);
   remainingTime = remainingTime % 60;

   return `${hours} hour ${minutes} minute ${remainingTime} second ago`
 }

 console.log(getTime(6661)); // Output: 1 hour 1 minute 1 second ago