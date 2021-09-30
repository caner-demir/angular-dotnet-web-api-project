import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer, icon } from 'leaflet';
import { coordinatesMap } from './coordinate.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  @Input()
  loadSelectedLocation: coordinatesMap[] = [];

  @Output()
  onSelectedLocation: EventEmitter<coordinatesMap> = new EventEmitter<coordinatesMap>();

  ngOnInit(): void { 
    this.layers = this.loadSelectedLocation.map(el => marker([el.latitude, el.longitude], {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'leaflet/marker-icon.png',
        iconRetinaUrl: 'leaflet/marker-icon-2x.png',
        shadowUrl: 'leaflet/marker-shadow.png'
    })}));
  }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Angular Movies' })
    ],
    zoom: 12,
    center: latLng(39.95062831408293, -327.16907930400345)
  };

  layers: Marker<any>[] = [];

  onMapClick(event: LeafletMouseEvent){
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log({latitude, longitude});
    this.layers = [];
    this.layers.push(marker([ latitude, longitude ], {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'leaflet/marker-icon.png',
        iconRetinaUrl: 'leaflet/marker-icon-2x.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })
    }));
    this.onSelectedLocation.emit({latitude, longitude});
  }

}
