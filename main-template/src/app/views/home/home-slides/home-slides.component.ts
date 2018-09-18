import { Component, OnInit, Input } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { HomeService } from '../home.service';
import { HomeImage } from '../home.interface';
import swal from 'sweetalert';


@Component({
  selector: 'app-home-slides',
  templateUrl: './home-slides.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true } }
  ],
  styleUrls: ['./home-slides.component.scss']
})
export class HomeSlidesComponent implements OnInit {

   myInterval: number = 6000;
  @Input() slides: HomeImage[];
  activeSlideIndex: number = 0;
  pausedActivatedSlideIndex: number = 0;
  noWrapSlides: boolean = false;
  newFileAdded: any = {};


  constructor(private homeService: HomeService) { }


  addSlide(response): void {
  	//Add a file from the UploadPicture Component
  	this.slides.push({filename: response.filename, _id: response._id});
  }

  removeSlide_index(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }

  removeSlide(): void {
    let toRemove = this.pausedActivatedSlideIndex
    let selectedElement = this.slides.splice(toRemove, 1);
    this.homeService.deleteHomeImage(selectedElement[0]._id)
      .subscribe(
        data => {
          data.isFulfilled 
          ? swal("Success!", `Image with name: ${selectedElement[0].filename} is deleted`, 'success')
          : swal("Failure! ", 'Internal Server Error', 'notfound');
        }
      )
  }

  pauseSlide(): void {
    this.pausedActivatedSlideIndex = this.activeSlideIndex;
  	this.noWrapSlides = true;
  }

  ngOnInit(){
  	
  }
}
