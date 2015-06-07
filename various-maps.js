(function() {
"use strict";

window.addEventListener("DOMContentLoaded", function (event) {

  var osmAttribution = "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors.";
  var kjmapopt = {
    tms: true,
    maxNativeZoom: 16,
    minZoom: 8,
    attribution: 'この地図は、時系列地形図閲覧サイト「<a href="http://ktgis.net/kjmapw/index.html" target="_blank">今昔マップ on the web</a>」（(C)谷　謙二）により作成したものです。'
  };
  var kjmapopt_tohoku_kanto = {
    tms: true,
    maxNativeZoom: 15,
    minZoom: 8,
    attribution: 'この地図は、時系列地形図閲覧サイト「<a href="http://ktgis.net/kjmapw/index.html" target="_blank">今昔マップ on the web</a>」（(C)谷　謙二）により作成したものです。'
  };
  var baseLayers = {
    "Open Street Maps\\OSM mapnik": L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      'maxZoom': 19,
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
    'Esri\\Topographic': L.tileLayer('http://{s}.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      'attribution': 'Tiles &copy; <a href="https://static.arcgis.com/attribution/World_Topo_Map" target="_blank">Esri</a>',
      'maxZoom': 19,
      'minZoom': 1,
      'subdomains': ['server', 'services']
    }),
    'Esri\\Streets': L.tileLayer('http://{s}.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      'attribution': 'Tiles &copy; <a href="https://static.arcgis.com/attribution/World_Street_Map" target="_blank">Esri</a>',
      'maxZoom': 19,
      'minZoom': 1,
      'subdomains': ['server', 'services']
    }),
    'Esri\\NationalGeographic': L.tileLayer('http://{s}.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
      'attribution': 'Tiles &copy; Esri',
      'maxZoom': 16,
      'minZoom': 1,
      'subdomains': ['server', 'services']
    }),
    'Esri\\Oceans': L.tileLayer('http://{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}', {
      'attribution': 'Tiles &copy; <a href="https://static.arcgis.com/attribution/Ocean_Basemap" target="_blank">Esri</a>',
      'maxZoom': 16,
      'minZoom': 1,
      'subdomains': ['server', 'services']
    }),
    'Esri\\Gray': L.tileLayer('http://{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      'attribution': 'Tiles &copy; Esri, NAVTEQ, DeLorme',
      'maxZoom': 16,
      'minZoom': 1,
      'subdomains': ['server', 'services']
    }),
    'Esri\\DarkGray': L.tileLayer('http://{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      'attribution': 'Tiles &copy; Esri, DeLorme, HERE',
      'maxZoom': 16,
      'minZoom': 1,
      'subdomains': ['server', 'services']
    }),
    'Esri\\Imagery': L.tileLayer('http://{s}.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      'attribution': 'Tiles &copy; Esri, DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community',
      'maxZoom': 19,
      'minZoom': 1,
      'subdomains': ['server', 'services']
    }),
    'Esri\\ShadedRelief': L.tileLayer('http://{s}.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}', {
      'attribution': 'Tiles &copy; ESRI, NAVTEQ, DeLorme',
      'maxZoom': 13,
      'minZoom': 1,
      'subdomains': ['server', 'services']
    }),
    'Bing\\Road': L.tileLayer.quad("https://ecn.t{s}.tiles.virtualearth.net/tiles/r{q}?g=1236", {
      attribution: "Tiles <a target=\"_blank\" href=\"http://www.bing.com/maps\">Bing</a> &copy; Microsoft and suppliers",
      maxZoom: 19,
      subdomains: "01234567"
    }),
    'Bing\\Aerial': L.tileLayer.quad("https://ecn.t{s}.tiles.virtualearth.net/tiles/a{q}?g=1236", {
      attribution: "Tiles <a target=\"_blank\" href=\"http://www.bing.com/maps\">Bing</a> &copy; Microsoft and suppliers",
      maxZoom: 19,
      subdomains: "01234567"
    }),
    'Bing\\Hybrid': L.tileLayer.quad("https://ecn.t{s}.tiles.virtualearth.net/tiles/h{q}?g=1236", {
      attribution: "Tiles <a target=\"_blank\" href=\"http://www.bing.com/maps\">Bing</a> &copy; Microsoft and suppliers",
      maxZoom: 19,
      subdomains: "01234567"
    }),
    "Google Maps\\RoadMap": new L.Google("ROADMAP", {maxZoom: 20}),
    "Google Maps\\Satellite": new L.Google("SATELLITE", {maxZoom: 20}),
    "Google Maps\\Hybrid": new L.Google("HYBRID", {maxZoom: 20}),
    "Google Maps\\Terrain": new L.Google("TERRAIN"),
    "Google Maps\\Traffic": (new L.Google("ROADMAP")).addOneTimeEventListener("MapObjectInitialized", function (event) {
      (new google.maps.TrafficLayer()).setMap(event.mapObject);
    }, false),
    "Google Maps\\Transit": (new L.Google("ROADMAP")).addOneTimeEventListener("MapObjectInitialized", function (event) {
      (new google.maps.TransitLayer()).setMap(event.mapObject);
    }, false),
    "Google Maps\\Bicycling": (new L.Google("ROADMAP")).addOneTimeEventListener("MapObjectInitialized", function (event) {
      (new google.maps.BicyclingLayer()).setMap(event.mapObject);
    }, false),
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
      maxNativeZoom: 17,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\オルソ画像\\1988年～1990年": L.tileLayer("http://cyberjapandata.gsi.go.jp/xyz/gazo4/{z}/{x}/{y}.jpg", {
      minZoom: 10,
      maxNativeZoom: 17,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\オルソ画像\\1984年～1987年": L.tileLayer("http://cyberjapandata.gsi.go.jp/xyz/gazo3/{z}/{x}/{y}.jpg", {
      minZoom: 10,
      maxNativeZoom: 17,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\オルソ画像\\1979年～1983年": L.tileLayer("http://cyberjapandata.gsi.go.jp/xyz/gazo2/{z}/{x}/{y}.jpg", {
      minZoom: 10,
      maxNativeZoom: 17,
      attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\オルソ画像\\1974年～1978年": L.tileLayer("http://cyberjapandata.gsi.go.jp/xyz/gazo1/{z}/{x}/{y}.jpg", {
      minZoom: 10,
      maxNativeZoom: 17,
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
    "今昔マップ on the web\\首都圏編\\1896-1909年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/tokyo50/2man/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\首都圏編\\1917-1924年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/tokyo50/00/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\首都圏編\\1927-1939年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/tokyo50/01/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\首都圏編\\1944-1954年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/tokyo50/02/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\首都圏編\\1965-1968年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/tokyo50/03/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\首都圏編\\1975-1978年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/tokyo50/04/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\首都圏編\\1983-1987年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/tokyo50/05/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\首都圏編\\1992-1995年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/tokyo50/06/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\首都圏編\\1998-2005年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/tokyo50/07/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\中京圏編\\1888-1898年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/chukyo/2man/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\中京圏編\\1920年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/chukyo/00/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\中京圏編\\1932年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/chukyo/01/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\中京圏編\\1937-1938年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/chukyo/02/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\中京圏編\\1947年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/chukyo/03/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\中京圏編\\1959-1960年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/chukyo/04/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\中京圏編\\1968-1973年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/chukyo/05/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\中京圏編\\1976-1980年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/chukyo/06/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\中京圏編\\1984-1989年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/chukyo/07/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\中京圏編\\1992-1996年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/chukyo/08/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\京阪神圏編\\1892-1910年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/keihansin/2man/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\京阪神圏編\\1922-1923年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/keihansin/00/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\京阪神圏編\\1927-1935年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/keihansin/01/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\京阪神圏編\\1947-1950年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/keihansin/02/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\京阪神圏編\\1954-1956年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/keihansin/03/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\京阪神圏編\\1961-1964年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/keihansin/03x/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\京阪神圏編\\1967-1970年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/keihansin/04/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\京阪神圏編\\1975-1979年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/keihansin/05/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\京阪神圏編\\1983-1988年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/keihansin/06/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\京阪神圏編\\1993-1997年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/keihansin/07/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\札幌編\\1916年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/sapporo/00/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\札幌編\\1935年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/sapporo/01/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\札幌編\\1950-1952年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/sapporo/02/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\札幌編\\1975-1976年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/sapporo/03/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\札幌編\\1995-1998年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/sapporo/04/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\仙台編\\1928-1933年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/sendai/00/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\仙台編\\1946年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/sendai/01/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\仙台編\\1963-1967年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/sendai/02/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\仙台編\\1977-1978年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/sendai/03/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\仙台編\\1995-2000年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/sendai/04/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\広島編\\1925-1932年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/hiroshima/00/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\広島編\\1950年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/hiroshima/01/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\広島編\\1967-1969年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/hiroshima/02/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\広島編\\1987年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/hiroshima/03/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\広島編\\1992-2000年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/hiroshima/04/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\福岡・北九州編\\1922-1926年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/fukuoka/00/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\福岡・北九州編\\1936-1938年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/fukuoka/01/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\福岡・北九州編\\1948-1956年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/fukuoka/02/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\福岡・北九州編\\1967-1972年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/fukuoka/03/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\福岡・北九州編\\1982-1986年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/fukuoka/04/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\福岡・北九州編\\1991-2000年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/fukuoka/05/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\東北地方太平洋岸編\\1901-1913年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/tohoku_pacific_coast/00/{z}/{x}/{y}.png", kjmapopt_tohoku_kanto),
    "今昔マップ on the web\\東北地方太平洋岸編\\1949-1953年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/tohoku_pacific_coast/01/{z}/{x}/{y}.png", kjmapopt_tohoku_kanto),
    "今昔マップ on the web\\東北地方太平洋岸編\\1969-1982年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/tohoku_pacific_coast/02/{z}/{x}/{y}.png", kjmapopt_tohoku_kanto),
    "今昔マップ on the web\\東北地方太平洋岸編\\1990-2008年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/tohoku_pacific_coast/03/{z}/{x}/{y}.png", kjmapopt_tohoku_kanto),
    "今昔マップ on the web\\関東編\\1894-1915年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/kanto/00/{z}/{x}/{y}.png", kjmapopt_tohoku_kanto),
    "今昔マップ on the web\\関東編\\1928-1945年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/kanto/01/{z}/{x}/{y}.png", kjmapopt_tohoku_kanto),
    "今昔マップ on the web\\関東編\\1972-1982年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/kanto/02/{z}/{x}/{y}.png", kjmapopt_tohoku_kanto),
    "今昔マップ on the web\\関東編\\1988-2008年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/kanto/03/{z}/{x}/{y}.png", kjmapopt_tohoku_kanto),
    "Stamen\\Toner": L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: 'abcd',
      minZoom: 0,
      maxZoom: 20
    }), 
    "Stamen\\Toner Background": L.tileLayer('http://{s}.tile.stamen.com/toner-background/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: 'abcd',
      minZoom: 0,
      maxZoom: 20
    }), 
    "Stamen\\Toner Lite": L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: 'abcd',
      minZoom: 0,
      maxZoom: 20
    }), 
    "Stamen\\Watercolor": L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: 'abcd',
      minZoom: 1,
      maxZoom: 16
    }), 
  };
  
  var overlayLayers = {
    'Esri\\World Boundaries and Places': L.tileLayer('https://{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
      'attribution': 'Tiles &copy; Esri',
      'maxZoom': 19,
      'minZoom': 1,
      'subdomains': ['server', 'services']
    }),
    'Esri\\World Transportation': L.tileLayer('https://{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}', {
      'attribution': 'Tiles &copy; Esri',
      'maxZoom': 19,
      'minZoom': 1,
      'subdomains': ['server', 'services']
    }),
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
    "Stamen\\Toner Hybrid": L.tileLayer('http://{s}.tile.stamen.com/toner-hybrid/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: 'abcd',
      minZoom: 0,
      maxZoom: 20
    }), 
    "Stamen\\Toner Lines": L.tileLayer('http://{s}.tile.stamen.com/toner-lines/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: 'abcd',
      minZoom: 0,
      maxZoom: 20
    }), 
    "Stamen\\Toner Labels": L.tileLayer('http://{s}.tile.stamen.com/toner-labels/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: 'abcd',
      minZoom: 0,
      maxZoom: 20
    }), 
    "OpenWeatherMap\\Clouds": L.tileLayer("http://{s}.tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png", {
      attribution: '<a href="http://www.openstreetmap.org/copyright" target="_blank">OpenWeatherMap</a>',
      opacity: 0.7,
      maxZoom: 18
    }),
    "OpenWeatherMap\\Precipitation": L.tileLayer("http://{s}.tile.openweathermap.org/map/precipitation/{z}/{x}/{y}.png", {
      attribution: '<a href="http://www.openstreetmap.org/copyright" target="_blank">OpenWeatherMap</a>',
      opacity: 0.7,
      maxZoom: 18
    }),
    "OpenWeatherMap\\Sea level pressure": L.tileLayer("http://{s}.tile.openweathermap.org/map/pressure/{z}/{x}/{y}.png", {
      attribution: '<a href="http://www.openstreetmap.org/copyright" target="_blank">OpenWeatherMap</a>',
      opacity: 0.7,
      maxZoom: 18
    }),
    "OpenWeatherMap\\Wind speed": L.tileLayer("http://{s}.tile.openweathermap.org/map/wind/{z}/{x}/{y}.png", {
      attribution: '<a href="http://www.openstreetmap.org/copyright" target="_blank">OpenWeatherMap</a>',
      opacity: 0.7,
      maxZoom: 18
    }),
    "OpenWeatherMap\\Temperature": L.tileLayer("http://{s}.tile.openweathermap.org/map/temp/{z}/{x}/{y}.png", {
      attribution: '<a href="http://www.openstreetmap.org/copyright" target="_blank">OpenWeatherMap</a>',
      opacity: 0.7,
      maxZoom: 18
    }),
  }

  var map = L.map("map", {center: [36, 138.75], zoom: 5}/*{center: [0, 0], zoom: 2}*/);

  if (location.search) {
    var pairs = location.search.substring(1).split("&").map(function(pair) {
      return pair.split("=", 2).map(function(v) { return decodeURIComponent(v); });
    });
    for (var i = 0; i < pairs.length; i++) {
      if (pairs[i][0] == "geojson") {
        (function (geojsonurl) {
          var xhr = new XMLHttpRequest();
          xhr.overrideMimeType('text/json');
          xhr.open("GET", geojsonurl, true);
          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              var geojsonFeature = JSON.parse(xhr.responseText);
              L.geoJson(geojsonFeature).addTo(map);
            }
          };
          xhr.send(null);
        })(pairs[i][1]);
      }
    }
  }

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
