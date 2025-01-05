import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/models/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.css']
})
export class ListPhotosComponent implements OnInit {
photos : Photo[] = [];
constructor(private router : ActivatedRoute,private service:PhotoService,private http:HttpClient){}
ngOnInit(): void {
  this.fetchPhotos();
}
fetchPhotos(){
//this.http.get<Photo[]>(`http://localhost:3000/photo/${this.router.snapshot.params.id}/photo`).subscribe((data)=>{
//  this.photos = data;
//},(err)=>{
 // console.log(err);});
}
}
