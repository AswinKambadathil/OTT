import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-continue-watch',
  standalone: true,
  imports: [],
  templateUrl: './continue-watch.component.html',
  styleUrl: './continue-watch.component.scss'
})
export class ContinueWatchComponent {
  
  @Input() styleChange: "1stStyle" | "2ndStyle" = "1stStyle"
  arrowLeft = false
  arrowRight = true

  
  imageArray = [
    {
      id : 1,
      imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait1.jpeg',
      name: 'Kantara'
    },
    {
      id : 2,
      imageUrl: 'assets/Login/Movies/neru.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/neru-name.jpeg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait2.jpeg',
      name: 'Kantara1'
    },
    {
      id : 3,
      imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait3.jpeg',
      name: 'Kantara2'
    },
    {
      id : 4,
      imageUrl: 'assets/Login/Movies/ozler.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/ozler-name.jpeg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait4.jpg',
      name: 'Kantara3'
    },
    {
      id : 5,
      imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait5.jpg',
      name: 'Kantara4'
    }
    ,
    {
      id : 6,
      imageUrl: 'assets/Login/Movies/animal.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/animal-name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait6.jpeg',
      name: 'Kantara5'
    }
  ];


  transformImg() {
    let mainImageWrap = document.getElementById("mainImageWrap") as HTMLDivElement
    mainImageWrap.scrollLeft += 300
    this.arrowLeft = true
    if(mainImageWrap.scrollLeft + mainImageWrap.clientWidth+1 >= mainImageWrap.scrollWidth){
      this.arrowRight = false
    }
  }


  transformImgleft() {
    let mainImageWrap = document.getElementById("mainImageWrap") as HTMLDivElement
    mainImageWrap.scrollLeft -= 200
    this.arrowRight=true
    let leftscroll = mainImageWrap.scrollLeft -= 100
    if(leftscroll<=0){
      this.arrowLeft = false
    }
  }



  onFocus(item:any,e:Event){
    let image = (e.target as HTMLImageElement)    
    image.src = item.discriptUrl
    console.log(image.src);
    
    let parentDiv = image.parentElement
    let childDiv = parentDiv?.querySelector('.playWrapMain') as HTMLDivElement
    childDiv.style.display = 'block'


  }


  onRelease(item:any,e:Event){
    let mainImg = document.getElementById("mainImg"+item.id) as HTMLImageElement
    mainImg.src=item.potrait
    let image = (e.target as HTMLImageElement)
    let parentDiv = image.parentElement
    let childDiv = parentDiv?.querySelector('.playWrapMain') as HTMLDivElement
    childDiv.style.display = 'none'
  }
}
