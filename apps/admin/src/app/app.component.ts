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
    // this.csacsd(1);
    // this.timer()s

    // this.fzfcsd();
  // this.timer()

  // this.dfgdrbzd(100)s
  
  }

  dfgdrbzd(val){
    var progress = document.querySelector('.progress') as HTMLElement,
    totalLength = (progress.offsetWidth * 2) + (progress.offsetHeight * 2);
console.log(progress.offsetWidth,progress.offsetHeight, totalLength );

  // var btn = document.querySelector('#enter'),
  //   progressVal = document.querySelector('#progress') as HTMLElement;

  // btn.addEventListener('click', function() {
    const progressVal = {value: val};
  const  input = (progressVal.value > 100) ? 100 : progressVal.value;
  const  borderLen = (input / 100) * 400;
  let backgroundPos;
    console.log(borderLen, totalLength);
  // -500+400 = -100
  // -500+100 = -400
    if (borderLen <= progress.offsetWidth) {
      backgroundPos = 'background-position: ' + (-500 + borderLen) + 'px 0px';
      progress.setAttribute('style', backgroundPos);
    }
    //  else if (borderLen <= (progress.offsetWidth + progress.offsetHeight)) {
    //   backgroundPos = 'background-position: 0px 0px, 495px ' + (-300 + (borderLen - progress.offsetWidth)) + 'px, 500px 295px, 0px 300px';
    //   progress.setAttribute('style', backgroundPos);
    // } else if (borderLen <= (progress.offsetWidth * 2 + progress.offsetHeight)) {
    //   backgroundPos = 'background-position: 0px 0px, 495px 0px, ' + (500 - (borderLen - progress.offsetWidth - progress.offsetHeight)) + 'px 295px, 0px 300px';
    //   progress.setAttribute('style', backgroundPos);
    // } else {
    //   backgroundPos = 'background-position: 0px 0px, 495px 0px, 0px 295px, 0px ' + (300 - (borderLen - (progress.offsetWidth * 2) - progress.offsetHeight)) + 'px';
    //   progress.setAttribute('style', backgroundPos);
    // }
  // });

  }
  // scsad = 0;
  // asdcsd(){

  // this.timer()
  // }


  fzfcsd(questionCounter, MAX_QUESTIONS){
    const progressBarFull = document.getElementById('progressBarFull') as HTMLElement;

// let questionCounter = 5;
// const MAX_QUESTIONS = 10;

 progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
console.log(progressBarFull.style.width);

  }

  timer(){
    var sec = 20;
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
        // let val = total/100;
        console.log(total,sec, 'total');
        // hbj.csacsd(val);
        this.fzfcsd(sec,20);
        // this.dfgdrbzd(total)
    }, 1000);
}
}
