import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { HttpClient } from '@angular/common/http';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent implements OnInit {
  constructor(private http:HttpClient,private service:AlbumService){}
albums : Album[] = [];
ngOnInit(): void {
this.fetchAlbums();
}
fetchAlbums(){
const url ='http://localhost:3000/album'
this.http.get<Album[]>(url).subscribe((data)=>{
  this.albums = data;
},
  (err)=>{
    console.log(err);

  }
)
}
deleteAlbum(id: number | undefined): void {
  if (id !== undefined) {
    this.service.delete(id).subscribe(
      () => {
        this.fetchAlbums(); // Refresh the list of albums
      },
      (err) => {
        console.error('Error:', err); // Log the error for debugging
      }
    );
  } else {
    console.error('Invalid album ID');
  }
}

}
