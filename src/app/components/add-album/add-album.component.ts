import { Component } from '@angular/core';
import { Album } from 'src/app/models/album';
import { HttpClient } from '@angular/common/http';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent {
  album: Album = {
    title: '',
    coverPicture: '',
    creationDate: new Date(),
    archived: 0,
  };
  constructor(private http:HttpClient,private service:AlbumService) { }


submit(){
return this.service.add(this.album).subscribe((data)=>{
  console.log(data);
});
}
}
