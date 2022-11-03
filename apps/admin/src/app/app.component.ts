import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin';
  dadds: ElementRef = {} as ElementRef;
  // dadds1 =  document.querySelector('#progress-circle');
  // @Input() progress: number = 0;

  constructor(private host: ElementRef<HTMLElement>) { }
    
  // ngOnChanges(changes: any) {
  //   const value = changes.progress.currentValue;

  //   const property = 'stroke-dashoffset' // or 'background' depending on the approach you choose
  //   const progressValue = this.computeProgressValue(value);

  //   this.host.nativeElement.style.setProperty(`--progress-${property}`, progressValue);
  // }
    
  computeProgressValue(val: number) {
    // if conic-gradient approach
    const angle = 360 * val;
    return `radial-gradient(white 50%, transparent 51%),
    conic-gradient(transparent 0deg ${angle}deg, gainsboro ${angle}deg 360deg),
    conic-gradient(#40C081 0deg, #40C081 90deg, #40C081 180deg, #40C081)`;
    
    // if SVG approach
    // return 100 - (100 * val);
  }

  csacsd(val: any){
    const property = 'background' // or 'background' depending on the approach you choose
    const progressValue = this.computeProgressValue(val);
setTimeout(() => {
  const gv= document.querySelector('#progress-circle') as HTMLElement | null;
  if (gv!= null) {
    gv.style.setProperty(`--progress-${property}`, progressValue);
    const root = document.documentElement
    console.log(`--progress-${property}`, progressValue, root, document.querySelector('#progress-circle'));
  }
 
}, 1000);
   
    
  }

  // nhvj(){
  //   this.computeProgressValue(.3);
  // }

  ngOnInit(){
    // this.asdcsd();
    this.csacsd(1);
    // this.timer()

  }
  // scsad = 0;
  // asdcsd(){

  // this.timer()
  // }

  timer(){
    var sec = 10;
    var total = 100;
    var fwe = total/sec;
    var asc = 0;
    const  hbj = this;
    var timer = setInterval(()=>{
      // var self = this;
      console.log(sec, 'sec');
        // document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        total = total - fwe;
        if (sec < 0) {
            clearInterval(timer);
        }
        let val = total/100;
        console.log(val, 'total');
        hbj.csacsd(val);
        
    }, 1000);
}
}
