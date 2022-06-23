import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit {
ngOnInit(): void {
    
}
  
  // videoIPlaylist = [
  //   {
  //     name: 'Video 1',
  //     src: 'http://static.videogular.com/assets/videos/videogular.mp4',
  //     type: 'video/mp4'
  //   },
  //   {
  //     name: 'Video 2',
  //     src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
  //     type: 'video/mp4'
  //   },
  //   {
  //     name: 'Video 3',
  //     src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
  //     type: 'video/mp4'
  //   },    
  // ];

  // activeIndex = 0;
  // currentVid = this.videoIPlaylist[this.activeIndex];
  // data;

  // constructor() { }

  // ngOnInit(): void { }

  // invokePlaylist(data) {
  //   this.data = data;

  //   this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.evokeVideo.bind(this));
  //   this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVdo.bind(this));
  // }

  // nextVdo() {
  //   this.activeIndex++;

  //   if (this.activeIndex === this.videoIPlaylist.length) {
  //     this.activeIndex = 0;
  //   }

  //   this.currentVid = this.videoIPlaylist[this.activeIndex];
  // }

  // evokeVideo() {
  //   this.data.play();
  // }

  // startPlayer(item, index: number) {
  //   this.activeIndex = index;
  //   this.currentVid = item;
  // }

}
