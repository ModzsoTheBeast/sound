import { Component, OnInit } from '@angular/core';
import { Gallery } from 'angular-gallery';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private gallery: Gallery) {
    
   }

  ngOnInit(): void {
  }

  index: number;

  showGallery(index: number) {
    let prop = {
      images: [
        { path: '../../assets/images/galleryFullSizeImages/1.jpg' },
        { path: '../../assets/images/galleryFullSizeImages/2.jpg' },
        { path: '../../assets/images/galleryFullSizeImages/3.jpg' },
        { path: '../../assets/images/galleryFullSizeImages/4.jpg' },
        { path: '../../assets/images/galleryFullSizeImages/5.jpg' },
        { path: '../../assets/images/galleryFullSizeImages/6.jpg' }
      ],
      index
    };
    this.gallery.load(prop);
  }

}
