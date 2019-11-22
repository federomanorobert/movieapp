import { Component, OnInit } from '@angular/core';
import { MovieDetail } from '../model/moviedetail';


@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})

export class ListMoviesComponent implements OnInit {
  movie: MovieDetail = {
    title : "FrancoLotta",
    year : "2015",
    rated : "100 e lode",
    released : "Mai",
    runtime : "Centotre min",
    genre : "Spinto",
    director: "Gennaro Er Napoletano",
    writer: "Consuela del Venezuela",
    actors: "Tutti",
    plot: "Brutta trama",
    language: "Italiano",
    country: "Italianmondo",
    awards: "Nobel per la pace",
    poster: "Amazon.it", 
    metascore: "Assaicazzo",
    imdbrating: "Assaifiga",
    idbmvotes: "Poco",
    imsbID: "11100A",
    type: "Bis",
    DVD: "2012",
    boxoffice: "100.000.000.000,000 Euro",
    production: "Imagine",
    website: "N/A",
    response: "string"
  };

  constructor() { }

  ngOnInit() {
  }

}
