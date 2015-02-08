(function() {
"use strict";

window.addEventListener("DOMContentLoaded", function (event) {

  var osmAttribution = "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors.";
  var baseLayers = {
    "Open Street Maps\\OSM mapnik": L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: osmAttribution
    }),
    "Open Street Maps\\OpenCycleMap": L.tileLayer("https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png", {
      attribution: osmAttribution + ' Tiles Courtesy of <a href="http://www.thunderforest.com/" target="_blank">Andy Allan</a>'
    }),
    "Open Street Maps\\Transport": L.tileLayer("https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png", {
      attribution: osmAttribution + ' Tiles Courtesy of <a href="http://www.thunderforest.com/" target="_blank">Andy Allan</a>'
    }),
    "Open Street Maps\\Landscape": L.tileLayer("https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png", {
      attribution: osmAttribution + ' Tiles Courtesy of <a href="http://www.thunderforest.com/" target="_blank">Andy Allan</a>'
    }),
    "Google Maps\\RoadMap": new L.Google("ROADMAP"),
    "Google Maps\\Satellite": new L.Google("SATELLITE"),
    "Google Maps\\Terrain": new L.Google("TERRAIN"),
    "ISCGM\\Global Elevation": L.tileLayer("http://www.iscgm.org/tiles/global/el/v2/{z}/{x}/{y}.png", {
      maxZoom: 10,
      attribution: "<a href='http://www.iscgm.org/' target='_blank'>ISCGM</a>"
    }),
    "ISCGM\\Global Land Cover": L.tileLayer("http://www.iscgm.org/tiles/global/lc/v2/{z}/{x}/{y}.png", {
      maxZoom: 11,
      attribution: "<a href='http://www.iscgm.org/' target='_blank'>ISCGM</a>"
    }),
    "地理院地図\\標準地図": L.tileLayer("http://{s}.gsi.go.jp/xyz/std/{z}/{x}/{y}.png", {
      subdomains : [ 'cyberjapandata-t1', 'cyberjapandata-t2', 'cyberjapandata-t3' ],
      minZoom: 2,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\暖色地図": L.tileLayer("http://{s}.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png", {
      subdomains : [ 'cyberjapandata-t1', 'cyberjapandata-t2', 'cyberjapandata-t3' ],
      minZoom: 2,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\白地図": L.tileLayer("http://{s}.gsi.go.jp/xyz/blank/{z}/{x}/{y}.png", {
      subdomains : [ 'cyberjapandata-t1', 'cyberjapandata-t2', 'cyberjapandata-t3' ],
      minZoom: 5,
      maxNativeZoom: 14,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\Romanized": L.tileLayer("http://{s}.gsi.go.jp/xyz/english/{z}/{x}/{y}.png", {
      subdomains : [ 'cyberjapandata-t1', 'cyberjapandata-t2', 'cyberjapandata-t3' ],
      minZoom: 4,
      maxNativeZoom: 11,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\オルソ画像\\最新（2007年～）": L.tileLayer("http://{s}.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg", {
      subdomains : [ 'cyberjapandata-t1', 'cyberjapandata-t2', 'cyberjapandata-t3' ],
      minZoom: 10,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\オルソ画像\\1988年～1990年": L.tileLayer("http://cyberjapandata.gsi.go.jp/xyz/gazo4/{z}/{x}/{y}.jpg", {
      minZoom: 10,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\オルソ画像\\1984年～1987年": L.tileLayer("http://cyberjapandata.gsi.go.jp/xyz/gazo3/{z}/{x}/{y}.jpg", {
      minZoom: 10,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\オルソ画像\\1979年～1983年": L.tileLayer("http://cyberjapandata.gsi.go.jp/xyz/gazo2/{z}/{x}/{y}.jpg", {
      minZoom: 10,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\オルソ画像\\1974年～1978年": L.tileLayer("http://cyberjapandata.gsi.go.jp/xyz/gazo1/{z}/{x}/{y}.jpg", {
      minZoom: 10,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\色別標高図": L.tileLayer("http://cyberjapandata.gsi.go.jp/xyz/relief/{z}/{x}/{y}.png", {
      maxNativeZoom: 15,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "農研機構\\歴史的農業環境\\迅速測図（関東平野、1980年代）": L.tileLayer("http://www.finds.jp/ws/tms/1.0.0/Kanto_Rapid-900913/{z}/{x}/{y}.png", {
      tms: true,
      maxZoom: 17,
      attribution: '<a href="http://www.finds.jp/wsdocs/hawms/" target="_blank">歴史的農業環境WMS配信サービス</a>'
    }), 
    "農研機構\\歴史的農業環境\\東京五千分の一（1883年）": L.tileLayer("http://www.finds.jp/ws/tms/1.0.0/Tokyo5000-900913/{z}/{x}/{y}.png", {
      tms: true,
      maxZoom: 18,
      attribution: '<a href="http://www.finds.jp/wsdocs/hawms/" target="_blank">歴史的農業環境WMS配信サービス</a>'
    }), 
    "農研機構\\歴史的農業環境\\2万分の1正式図（福山、1899年）": L.tileLayer("http://www.finds.jp/ws/tmc/1.0.0/Fukuyama_1899-900913/{z}/{x}/{y}.png", {
      tms: true,
      maxZoom: 17,
      attribution: '<a href="http://www.finds.jp/wsdocs/hawms/" target="_blank">歴史的農業環境WMS配信サービス</a>'
    }), 
  };
  
  var overlayLayers = {
    "農研機構\\基板地図25000": L.tileLayer("http://www.finds.jp/ws/tmc/1.0.0/KBN25000BBB-900913/{z}/{x}/{y}.png", {
      tms: true,
      maxZoom: 18,
      attribution: '<a href="http://www.finds.jp/wsdocs/kibanwms/index.html.ja" target="_blank">基板地図WMS配信サービス</a>'
    }), 
    "農研機構\\地名": L.tileLayer("http://www.finds.jp/ws/tmc/1.0.0/pntms-900913/{z}/{x}/{y}.png", {
      tms: true,
      maxZoom: 18,
      attribution: '<a href="http://www.finds.jp/wsdocs/pnwms/index.html.ja" target="_blank">地名WMS配信サービス</a>'
    }), 
    "地理院地図\\土地条件数値地図25000": L.tileLayer("http://cyberjapandata.gsi.go.jp/xyz/LCM25K_2012/{z}/{x}/{y}.png", {
      minZoom: 4,
      maxZoom: 16,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }), 
    "地理院地図\\明治前期の低湿地": L.tileLayer("http://cyberjapandata.gsi.go.jp/xyz/swale/{z}/{x}/{y}.png", {
      minZoom: 5,
      maxZoom: 16,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }), 
    "地理院地図\\GSI\\内水域": L.tileLayer("http://www1.gsi.go.jp/geowww/globalmap-gsi/tiles/gm_jpn_2/inwatera_jpn/{z}/{x}/{y}.png", {
      maxZoom: 11,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }), 
    "地理院地図\\GSI\\航路": L.tileLayer("http://www1.gsi.go.jp/geowww/globalmap-gsi/tiles/gm_jpn_2/ferryl_jpn/{z}/{x}/{y}.png", {
      maxZoom: 11,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }), 
    "地理院地図\\GSI\\海岸線": L.tileLayer("http://www1.gsi.go.jp/geowww/globalmap-gsi/tiles/gm_jpn_2/coastl_jpn/{z}/{x}/{y}.png", {
      maxZoom: 11,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }), 
    "地理院地図\\GSI\\行政界": L.tileLayer("http://www1.gsi.go.jp/geowww/globalmap-gsi/tiles/gm_jpn_2/polbndl_jpn/{z}/{x}/{y}.png", {
      maxZoom: 11,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }), 
    "地理院地図\\GSI\\鉄道": L.tileLayer("http://www1.gsi.go.jp/geowww/globalmap-gsi/tiles/gm_jpn_2/rail_jpn/{z}/{x}/{y}.png", {
      maxZoom: 11,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }), 
    "地理院地図\\GSI\\河川": L.tileLayer("http://www1.gsi.go.jp/geowww/globalmap-gsi/tiles/gm_jpn_2/riverl_jpn/{z}/{x}/{y}.png", {
      maxZoom: 11,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }), 
    "地理院地図\\GSI\\道路": L.tileLayer("http://www1.gsi.go.jp/geowww/globalmap-gsi/tiles/gm_jpn_2/roadl_jpn/{z}/{x}/{y}.png", {
      maxZoom: 11,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }), 
    "地理院地図\\GSI\\駅": L.tileLayer("http://www1.gsi.go.jp/geowww/globalmap-gsi/tiles/gm_jpn_2/rstatp_jpn/{z}/{x}/{y}.png", {
      maxZoom: 11,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }), 
    "地理院地図\\GSI\\空港": L.tileLayer("http://www1.gsi.go.jp/geowww/globalmap-gsi/tiles/gm_jpn_2/airp_jpn/{z}/{x}/{y}.png", {
      maxZoom: 11,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }), 
    "地理院地図\\GSI\\港湾": L.tileLayer("http://www1.gsi.go.jp/geowww/globalmap-gsi/tiles/gm_jpn_2/port_jpn/{z}/{x}/{y}.png", {
      maxZoom: 11,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }), 
    "地理院地図\\GSI\\行政界（地名）": L.tileLayer("http://www1.gsi.go.jp/geowww/globalmap-gsi/tiles/gm_jpn_2/polbnda_jpn/{z}/{x}/{y}.png", {
      maxZoom: 11,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }), 
  }

  var map = L.map("map", {center: [36, 138.75], zoom: 5}/*{center: [0, 0], zoom: 2}*/);

  L.hash(map);

  L.control.scale().addTo(map);

  var geocoder = L.Control.Geocoder.nominatim({
    serviceUrl: 'https://nominatim.openstreetmap.org/'
  });
  L.Control.geocoder({geocoder: geocoder}).addTo(map);

  L.control.gps().addTo(map);

  L.Control.layerTreeControl(baseLayers, overlayLayers).addTo(map);
  baseLayers["Open Street Maps\\OSM mapnik"].addTo(map);

}, false);

})();
