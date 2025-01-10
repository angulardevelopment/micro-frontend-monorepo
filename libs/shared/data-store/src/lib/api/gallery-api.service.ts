import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryApiService {

  constructor(private http: HttpClient) {
    console.log('GalleryApiService created');
  }

  getCatsList() {
    console.log('getCatsList called');
      const limit = 20;
      const url = `https://www.reddit.com/r/catswithjobs/.json?limit=${limit}`;
      return this.http.get(url).pipe(
          map((response: any) => {
              const cats = [] as any;
              response.data.children.forEach((res: any) => {
                  const title = res.data.title;
                  const id = res.data.id;
                  const url = res.data.preview?.images[0]?.resolutions[2]?.url;
                  if (url) {
                    console.log(cats, url)
                      cats.push({
                          id,
                          title,
                          url:url.replaceAll('&amp;', '&')
                      });
                  }
              });
              return cats;
         })
    );
  }
}
