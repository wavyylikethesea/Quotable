import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): any {
    let currentTime = new Date().getTime();
    value = value.getTime();
    var timeSinceCreated:string = "";
    var timeDifference = Math.abs(value - currentTime);
    var timeDifferenceHMS = Math.round(timeDifference/60000);
    if(timeDifferenceHMS <59){
       return timeSinceCreated = timeDifferenceHMS+" minutes ago";
    }else if (timeDifferenceHMS>59 && timeDifferenceHMS<1439){
      timeDifferenceHMS = Math.round(timeDifferenceHMS/60);
      return timeSinceCreated = timeDifferenceHMS+ " hours ago";
    }else if (timeDifferenceHMS>1439){
      timeDifferenceHMS =Math.round(timeDifferenceHMS/1440) ;
      return timeSinceCreated = timeDifferenceHMS+ " days ago";
    }

  }

}
