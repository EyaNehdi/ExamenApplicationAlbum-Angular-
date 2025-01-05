import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../models/album';
import { map, Observable,switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http:HttpClient) { }
  url : string = 'http://localhost:3000/album';
  add(album: Partial<Album>): Observable<Album> {
    return this.http.get<Album[]>(this.url).pipe(
      map((albums) => {
        const maxId = Math.max(...albums.map((a) => a.id || 0));
        album.id = maxId + 1; // Assign auto-incremented id
        return album;
      }),
      switchMap((newAlbum) =>
        this.http.post<Album>(this.url, newAlbum)
      )
    );
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/album/${id}`);
  }

}
