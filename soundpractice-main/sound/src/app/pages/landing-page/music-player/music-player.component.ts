import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit,AfterViewInit {
  @ViewChild('musicplayer') audio: ElementRef;
  private index: number = 0;
  private playButtonState: boolean = true;

  //Az időzitőhöz kellenek
  private interval : any;

  //Ezek a sliderhez kellenek
  public value:number =0;
  public maxTime:number= 999999;
  public playState: string = "play_arrow";

  public musicTitle:string = playList[this.index];

  constructor() { }

  ngAfterViewInit(): void {
    this.audio.nativeElement.src = path+playList[this.index];
  }

  ngOnInit(): void {
    this.index=0;
    this.playButtonState = true;
  }

  setAudio(nextMusicNumber: number): void{
    this.index += nextMusicNumber;
    if(this.index<0){this.index=playList.length-1};
    if(this.index>playList.length-1){this.index=0};
    this.audio.nativeElement.src = path+playList[this.index];
    this.musicTitle = playList[this.index];
    this.value=0;
    console.log(this.audio)
    this.playState = "pause";
    this.playButtonState=false;
    this.audio.nativeElement.play();
    this.maxTime= this.audio.nativeElement.duration;
    this.startTimer();
  }

  setplayButtonState(){
    this.value= this.audio.nativeElement.currentTime
    this.playButtonState = !this.playButtonState;
    if(this.playButtonState){this.audio.nativeElement.pause(); this.playState = "play_arrow"; this.pauseTimer()}
    else{this.audio.nativeElement.play(); this.playState = "pause";this.startTimer()}
  }

  setMusicCurrentTime(value : number){
    this.audio.nativeElement.currentTime = value;
  }

  startTimer() {
    this.interval = setInterval(() => {
        this.value = this.audio.nativeElement.currentTime;
        if(isNaN(this.maxTime) || this.maxTime== 999999){
          this.maxTime = this.audio.nativeElement.duration;
        }else if(this.value>=this.maxTime){
            this.setAudio(1);
        }
    },500)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}

const path:string = "./../../../../assets/music/";
const playList: string[] =[
"JPB - LONG NIGHT (feat. Marvin Divine) [NCS Release].mp3",
"NEFFEX - Careless _ [Copyright Free].mp3",
"NEFFEX - Best of Me _ [Copyright Free].mp3"
]
