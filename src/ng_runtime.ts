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

// NgRx
import '@ngrx/store';
import '@ngrx/router-store';
import '@ngrx/effects';
import {INITIAL_STATE, StoreModule, Action, Store, ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {routerReducer, RouterReducerState, RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {Actions, Effect, ofType, EffectsModule} from '@ngrx/effects';

// Ngx Bootstrap
import {BsModalRef, BsModalService, ModalModule} from 'ngx-bootstrap';

// File Saver
import * as FileSaver from 'file-saver';

// Immutable Ics
import {Component, Property} from 'immutable-ics';
