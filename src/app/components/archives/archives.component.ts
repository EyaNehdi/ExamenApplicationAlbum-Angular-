import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {
  constructor(private http:HttpClient){}
albums: Album [] = [];
ngOnInit(): void {
  this.fetchAlbums();
}
fetchAlbums(){
  const url='http://localhost:3000/album';
  this.http.get<Album[]>(url).subscribe((data)=>{this.albums = data;},(err)=>{console.log(err);})
}
}
