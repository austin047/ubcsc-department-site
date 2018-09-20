import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { HomeInfo, DefaultMessage, HodUpdate, HomeUpdate } from './home.interface';
import { AppInitUrl } from './../../app-init-url'

import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = `${this.appInitUrl.BaseUrl}/api/home`

  constructor(private http:HttpClient, private appInitUrl: AppInitUrl ) { }

    /* GET HomePage details*/

    getHomePageInfo (): Observable<HomeInfo> {
      return this.http
      .get<HomeInfo>(this.apiUrl)
      .pipe(
        tap(data => {
          return data;
        }),
        catchError(this.handleError<HomeInfo>('Error'))
        );
    }  


    /**
     * PUT - Delete Home page picture
     * @param {Objectid } id - Id of image to delete
     */
    deleteHomeImage (id: string): Observable<DefaultMessage> {  
      return this.http
       .delete<DefaultMessage>(`${this.apiUrl}/pictures/${id}`)
        .pipe(
          tap( data => data),
          catchError((error: any): Observable<any> => {
            console.log(error);
            return of(error)
          })
        )
    }

    /**
     * PUT - Update HOD message email and contact
     * @param {string} email - new email to update
     * @param {string} contactNumber - contact to update
     * @returns {HomeUpdate}
     */
    updateHomeInfo(email: string, contactNumber: string): Observable<HomeUpdate>{
      console.log(email);
      console.log(contactNumber)
      return this.http
       .put<HomeUpdate>(this.apiUrl, {email, contactNumber})
       .pipe(
         tap( data => data), //Return what ever is send back as a response form the sever
         catchError((err: any): Observable<HomeUpdate> => {return of(err)})
       )
    }

    /**
     * Put Update eaisting HOD Message 
     * @param {string} hodMessage - The new Hod message
     * @returns {HodUpdate}
     */
    updateHodmessage(hodMessage: string): Observable<HodUpdate>{  
      console.log(hodMessage);  
    return  this.http
       .put<HodUpdate>(`${this.apiUrl}/hodmessage`, {hodMessage})
       .pipe(
         tap( data => data),  //Return what ever is send back as a response form the sever
         catchError(this.handleError<HodUpdate>('Error'))
       )
    }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {


      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      if(error.error instanceof ErrorEvent ) {
        // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      } else {
          // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      }

      // Let the app keep running by returning an empty result.
      return of(result as T);

      //return an observable with a user-facing error message
      //return throwError('Something bad happened; please try again later.');
    };
  }
}
