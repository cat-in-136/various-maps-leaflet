(function() {
"use strict";

L.Control.LinkToGeoHack = L.Control.Layers.extend({
  options: {
    position: "topright"
  },
  onAdd: function (map) {
    var container = L.DomUtil.create("div", "leaflet-bar leaflet-control leaflet-control-link-to-geohack");
    container.setAttribute("title", "Link to GeoHack");
    var btn = L.DomUtil.create("a", "leaflet-control-link-to-geohack-button");
    btn.href = "javascript:void(0);";
    container.appendChild(btn);

    this.btn = btn;
    this.map = map;
    map.on("moveend", this._onMapMove, this);

    return container;
  },
  onRemove: function (map) {
    map.off("moveend", this._onMapMove, this);
  },
  _onMapMove: function () {
    var map = this.map;

    if (!this.map._loaded) {
      return false;
    }

    var center = map.getCenter();
    var dms = this.convertToDMS(center.lat, center.lng);
    var geohack_url = "https://tools.wmflabs.org/geohack/geohack.php?&params=" +
      dms[0].join("_") + "_" + dms[1].join("_");

    this.btn.href = geohack_url;
  },
  convertToDMS: function (lat, lng) {
    var lata = Math.abs(lat);
    var lnga = Math.abs(lng);

    var lat_deg = ~~(lata);
    var lat_min = ~~((lata - lat_deg) * 60);
    var lat_sec = ~~(((lata - lat_deg) * 60 - lat_min) * 60);
    var lng_deg = ~~(lnga);
    var lng_min = ~~((lnga - lng_deg) * 60);
    var lng_sec = ~~(((lnga - lng_deg) * 60 - lng_min) * 60);

    return [
      [lat_deg, lat_min, lat_sec, (lat > 0)? "N" : "S"],
      [lng_deg, lng_min, lng_sec, (lng > 0)? "E" : "W"]
    ];
  }
});

})();
