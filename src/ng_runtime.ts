// Angular
import '@angular/animations';
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/common/http';
import '@angular/router';
import '@angular/forms';

// RxJS
import {Observable} from 'rxjs/internal/Observable';
import {throwError} from 'rxjs/internal/observable/throwError';
import {catchError, map, share, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';
import {Subscription} from 'rxjs/internal/Subscription';
