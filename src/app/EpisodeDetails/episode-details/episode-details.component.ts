import { Component } from '@angular/core';

@Component({
  selector: 'app-episode-details',
  standalone: true,
  imports: [],
  templateUrl: './episode-details.component.html',
  styleUrl: './episode-details.component.scss'
})
export class EpisodeDetailsComponent {

  Episodes= 'Episode1'
  sliceText(text: string, start: number, end: number): string {
    return text.slice(start, end);
  }
  
  
  

  imageArray = [
    {
      id: 1,
      imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait1.jpeg',
      name: 'Kantara',
      isFavorite: 'false',
      episode: 'Episode1',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      time: '2 h 28 min'
    },
    {
      id: 2,
      imageUrl: 'assets/Login/Movies/neru.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/neru-name.jpeg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait2.jpeg',
      name: 'Kantara1',
      isFavorite: 'false',
      episode: 'Episode2',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      time: '2 h 28 min'
    },
    {
      id: 3,
      imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait3.jpeg',
      name: 'Kantara2',
      isFavorite: 'false',
      episode: 'Episode3',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      time: '2 h 28 min'
    },
    {
      id: 4,
      imageUrl: 'assets/Login/Movies/kantara-Name.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/ozler-name.jpeg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait4.jpg',
      name: 'Kantara3',
      isFavorite: 'false',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      time: '2 h 28 min',
      rating: 'IMDb 6.1',
      year: '2023',
      ua: 'U/A 13+',
      category1: 'Suspense',
      category2: 'Action',
      category3: 'Drama',
      category4: 'Adventure',
      amazon: 'Play in Amazon Prime',
      sony: 'Play in Sony Liv',
      aha: 'Play in Aha Telugu',
      disney: 'Play in Disney+',
      episode: 'Episode4'
    },
    {
      id: 5,
      imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait5.jpg',
      name: 'Kantara4',
      isFavorite: 'false',
      episode: 'Episode5',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      time: '2 h 28 min'
    }
    ,
    {
      id: 6,
      imageUrl: 'assets/Login/Movies/animal.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/animal-name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait6.jpeg',
      name: 'Kantara5',
      isFavorite: 'false',
      episode: 'Episode6',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      time: '2 h 28 min'
    }
  ];

  imageArray1:any = {
    "Episode1":[
    {
      id: 1,
      imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait1.jpeg',
      name: 'Kantara',
      isFavorite: 'false',
      episode: 'Episode 1',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      time: '2 h 28 min'
    },
    {
      id: 2,
      imageUrl: 'assets/Login/Movies/neru.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/neru-name.jpeg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait2.jpeg',
      name: 'Kantara1',
      isFavorite: 'false',
      episode: 'Episode 2',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      time: '2 h 28 min'
    },
    {
      id: 3,
      imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait3.jpeg',
      name: 'Kantara2',
      isFavorite: 'false',
      episode: 'Episode 3',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      time: '2 h 28 min'
    },
    {
      id: 4,
      imageUrl: 'assets/Login/Movies/kantara-Name.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/ozler-name.jpeg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait4.jpg',
      name: 'Kantara3',
      isFavorite: 'false',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      time: '2 h 28 min',
      rating: 'IMDb 6.1',
      year: '2023',
      ua: 'U/A 13+',
      category1: 'Suspense',
      category2: 'Action',
      category3: 'Drama',
      category4: 'Adventure',
      amazon: 'Play in Amazon Prime',
      sony: 'Play in Sony Liv',
      aha: 'Play in Aha Telugu',
      disney: 'Play in Disney+',
      episode: 'Episode 4'
    },
    {
      id: 5,
      imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait5.jpg',
      name: 'Kantara4',
      isFavorite: 'false',
      episode: 'Episode 5',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      time: '2 h 28 min'
    }
    ,
    {
      id: 6,
      imageUrl: 'assets/Login/Movies/animal.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/animal-name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait6.jpeg',
      name: 'Kantara5',
      isFavorite: 'false',
      episode: 'Episode 6',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      time: '2 h 28 min'
    }],
    "Episode2":[{
      id: 2,
      imageUrl: 'assets/Login/Movies/neru.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/neru-name.jpeg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait2.jpeg',
      name: 'Kantara1',
      isFavorite: 'false',
      episode: 'Episode 2',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      time: '2 h 28 min'
    },
    {
      id: 3,
      imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait3.jpeg',
      name: 'Kantara2',
      isFavorite: 'false',
      episode: 'Episode 3',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      time: '2 h 28 min'
    },
    {
      id: 4,
      imageUrl: 'assets/Login/Movies/kantara-Name.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/ozler-name.jpeg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait4.jpg',
      name: 'Kantara3',
      isFavorite: 'false',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      time: '2 h 28 min',
      rating: 'IMDb 6.1',
      year: '2023',
      ua: 'U/A 13+',
      category1: 'Suspense',
      category2: 'Action',
      category3: 'Drama',
      category4: 'Adventure',
      amazon: 'Play in Amazon Prime',
      sony: 'Play in Sony Liv',
      aha: 'Play in Aha Telugu',
      disney: 'Play in Disney+',
      episode: 'Episode 4'
    },
    {
      id: 5,
      imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait5.jpg',
      name: 'Kantara4',
      isFavorite: 'false',
      episode: 'Episode 5',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      time: '2 h 28 min'
    }
    ,
    {
      id: 6,
      imageUrl: 'assets/Login/Movies/animal.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/animal-name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait6.jpeg',
      name: 'Kantara5',
      isFavorite: 'false',
      episode: 'Episode 6',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      time: '2 h 28 min'
    }],
    "Episode3":[
    {
      id: 3,
      imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait3.jpeg',
      name: 'Kantara2',
      isFavorite: 'false',
      episode: 'Episode 3',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      time: '2 h 28 min'
    },
    {
      id: 4,
      imageUrl: 'assets/Login/Movies/kantara-Name.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/ozler-name.jpeg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait4.jpg',
      name: 'Kantara3',
      isFavorite: 'false',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      time: '2 h 28 min',
      rating: 'IMDb 6.1',
      year: '2023',
      ua: 'U/A 13+',
      category1: 'Suspense',
      category2: 'Action',
      category3: 'Drama',
      category4: 'Adventure',
      amazon: 'Play in Amazon Prime',
      sony: 'Play in Sony Liv',
      aha: 'Play in Aha Telugu',
      disney: 'Play in Disney+',
      episode: 'Episode 4'
    },
    {
      id: 5,
      imageUrl: 'assets/Login/Movies/kantara-Banner.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/kantara-Name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait5.jpg',
      name: 'Kantara4',
      isFavorite: 'false',
      episode: 'Episode 5',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      time: '2 h 28 min'
    }
    ,
    {
      id: 6,
      imageUrl: 'assets/Login/Movies/animal.jpg',
      description: 'Movie',
      title: '#1 in Trending',
      discriptUrl: 'assets/Login/Movies/animal-name.jpg',
      logoUrl: 'assets/Login/Movies/Amazon-Prime-Video-Icon.png',
      potrait: 'assets/Login/Movies/potrait6.jpeg',
      name: 'Kantara5',
      isFavorite: 'false',
      episode: 'Episode 6',
      brief: 'It involves culture of Kambala and Bhootha Kola.A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leadsto war between villagers and evil forces. Will he be able to regain peace in the village',
      time: '2 h 28 min'
    }]
  };

  func(){
    this.imageArray1[this.Episodes]
  }


  selectEpisode(item:any){
    this.Episodes = item.episode
    this.nodisplayStyle()
  }

  showMore(item:any){
    item.isFavorite =!item.isFavorite
  }

  displayStyle(){
    let image = document.getElementById('episodeSelectDrop')  as HTMLDivElement
    image.style.display = 'block'
  }

  nodisplayStyle(){
    let image = document.getElementById('episodeSelectDrop')  as HTMLDivElement
    image.style.display = 'none'
  }
}
