(function() {
"use strict";

window.addEventListener("DOMContentLoaded", function (event) {

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
      maxZoom: 19,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors.'
    }),
    "Open Street Maps\\OSM mapnik DE": L.tileLayer("https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors.'
    }),
    "Open Street Maps\\OSM mapnik FR": L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors.'
    }),
    "Open Street Maps\\ÖPNVKarte": L.tileLayer("https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: 'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'
    }),
    "Open Street Maps\\Open Topo Map": L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
      maxZoom: 17,
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    }),
    "Open Street Maps\\CycIOSM": L.tileLayer("https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png", {
      maxZoom: 20,
      attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }),
    'Esri\\Topographic': L.tileLayer('https://{s}.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      'attribution': 'Tiles &copy; <a href="https://static.arcgis.com/attribution/World_Topo_Map" target="_blank">Esri</a>',
      'maxZoom': 19,
      'minZoom': 1,
      'subdomains': ['server', 'services']
    }),
    'Esri\\Streets': L.tileLayer('https://{s}.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      'attribution': 'Tiles &copy; <a href="https://static.arcgis.com/attribution/World_Street_Map" target="_blank">Esri</a>',
      'maxZoom': 19,
      'minZoom': 1,
      'subdomains': ['server', 'services']
    }),
    'Esri\\NationalGeographic': L.tileLayer('https://{s}.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
      'attribution': 'Tiles &copy; Esri',
      'maxZoom': 16,
      'minZoom': 1,
      'subdomains': ['server', 'services']
    }),
    'Esri\\Oceans': L.tileLayer('https://{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}', {
      'attribution': 'Tiles &copy; <a href="https://static.arcgis.com/attribution/Ocean_Basemap" target="_blank">Esri</a>',
      'maxZoom': 16,
      'minZoom': 1,
      'subdomains': ['server', 'services']
    }),
    'Esri\\Gray': L.tileLayer('https://{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      'attribution': 'Tiles &copy; Esri, NAVTEQ, DeLorme',
      'maxZoom': 16,
      'minZoom': 1,
      'subdomains': ['server', 'services']
    }),
    'Esri\\DarkGray': L.tileLayer('https://{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      'attribution': 'Tiles &copy; Esri, DeLorme, HERE',
      'maxZoom': 16,
      'minZoom': 1,
      'subdomains': ['server', 'services']
    }),
    'Esri\\Imagery': L.tileLayer('https://{s}.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      'attribution': 'Tiles &copy; Esri, DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community',
      'maxZoom': 19,
      'minZoom': 1,
      'subdomains': ['server', 'services']
    }),
    'Esri\\ShadedRelief': L.tileLayer('https://{s}.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}', {
      'attribution': 'Tiles &copy; ESRI, NAVTEQ, DeLorme',
      'maxZoom': 13,
      'minZoom': 1,
      'subdomains': ['server', 'services']
    }),
    'Bing\\Road': L.tileLayer.quad("https://ecn.t{s}.tiles.virtualearth.net/tiles/r{q}?g=1236", {
      attribution: "Tiles <a target=\"_blank\" href=\"https://www.bing.com/maps\">Bing</a> &copy; Microsoft and suppliers",
      maxZoom: 19,
      subdomains: "01234567"
    }),
    'Bing\\Aerial': L.tileLayer.quad("https://ecn.t{s}.tiles.virtualearth.net/tiles/a{q}?g=1236", {
      attribution: "Tiles <a target=\"_blank\" href=\"https://www.bing.com/maps\">Bing</a> &copy; Microsoft and suppliers",
      maxZoom: 19,
      subdomains: "01234567"
    }),
    'Bing\\Hybrid': L.tileLayer.quad("https://ecn.t{s}.tiles.virtualearth.net/tiles/h{q}?g=1236", {
      attribution: "Tiles <a target=\"_blank\" href=\"https://www.bing.com/maps\">Bing</a> &copy; Microsoft and suppliers",
      maxZoom: 19,
      subdomains: "01234567"
    }),
    "地理院地図\\標準地図": L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png", {
      minZoom: 2,
      attribution: '<a href="https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\暖色地図": L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png", {
      minZoom: 2,
      attribution: '<a href="https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\白地図": L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/blank/{z}/{x}/{y}.png", {
      minZoom: 5,
      maxNativeZoom: 14,
      attribution: '<a href="https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\Romanized": L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/english/{z}/{x}/{y}.png", {
      minZoom: 4,
      maxNativeZoom: 11,
      attribution: '<a href="https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\オルソ画像\\全国最新写真": L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg", {
      minZoom: 2,
      maxNativeZoom: 18,
      attribution: '<a href="https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>, Landsat8(GSI,TSIC,GEO Grid/AIST), Landsat8(courtesy of the U.S. Geological Survey), 海底地形(GEBCO), Images on 世界衛星モザイク画像 obtained from site <a href="https://lpdaac.usgs.gov/data_access">https://lpdaac.usgs.gov/data_access</a> maintained by the NASA Land Processes Distributed Active Archive Center (LP DAAC), USGS/Earth Resources Observation and Science (EROS) Center, Sioux Falls, South Dakota, (Year). Source of image data product.'
    }),
    "地理院地図\\オルソ画像\\2007年～": L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg", {
      minZoom: 10,
      maxNativeZoom: 18,
      attribution: '<a href="https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\オルソ画像\\1987年～1990年": L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/gazo4/{z}/{x}/{y}.jpg", {
      minZoom: 10,
      maxNativeZoom: 17,
      attribution: '<a href="https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\オルソ画像\\1984年～1986年": L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/gazo3/{z}/{x}/{y}.jpg", {
      minZoom: 10,
      maxNativeZoom: 17,
      attribution: '<a href="https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\オルソ画像\\1979年～1983年": L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/gazo2/{z}/{x}/{y}.jpg", {
      minZoom: 10,
      maxNativeZoom: 17,
      attribution: '<a href="https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\オルソ画像\\1974年～1978年": L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/gazo1/{z}/{x}/{y}.jpg", {
      minZoom: 10,
      maxNativeZoom: 17,
      attribution: '<a href="https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\オルソ画像\\1961年～1969年": L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/ort_old10/{z}/{x}/{y}.png", {
      minZoom: 2,
      maxNativeZoom: 17,
      attribution: '<a href="https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\オルソ画像\\1945年～1950年(米軍)": L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/ort_USA10/{z}/{x}/{y}.png", {
      minZoom: 2,
      maxNativeZoom: 17,
      attribution: '<a href="https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\オルソ画像\\1936年～1942年頃(陸軍)": L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/ort_riku10/{z}/{x}/{y}.png", {
      minZoom: 2,
      maxNativeZoom: 18,
      attribution: '<a href="https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\オルソ画像\\1928年頃": L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/ort_1928/{z}/{x}/{y}.png", {
      minZoom: 2,
      maxNativeZoom: 18,
      attribution: '<a href="https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "地理院地図\\色別標高図": L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/relief/{z}/{x}/{y}.png", {
      minZoom: 5,
      maxNativeZoom: 15,
      attribution: '<a href="https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院、海域部は海上保安庁海洋情報部の資料を使用して作成</a>'
    }),
    "地理院地図\\陰影起伏図": L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/hillshademap/{z}/{x}/{y}.png", {
      minZoom: 2,
      maxNativeZoom: 16,
      attribution: '<a href="https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
    "農研機構\\歴史的農業環境\\迅速測図（関東平野、1880年代）": L.tileLayer("https://habs.rad.naro.go.jp/rapid16/{z}/{x}/{y}.png", {
      tms: true,
      minZoom: 8,
      maxZoom: 17,
      attribution: '<a target="_blank" href="https://www.naro.go.jp/laboratory/niaes/">農研機構農業環境研究部門</a>'
    }),
    "農研機構\\歴史的農業環境\\東京五千分の一（1883年）": L.tileLayer("https://boiledorange73.sakura.ne.jp/ws/tile/Tokyo5000-900913/{z}/{x}/{y}.png", {//"https://habs.rad.naro.go.jp/tokyo5k/{z}/{x}/{y}.png", {
      minZoom: 8,
      maxZoom: 18,
      attribution: '<a target="_blank" href="https://www.naro.go.jp/laboratory/niaes/">農研機構農業環境研究部門</a>'
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
    "今昔マップ on the web\\沖縄編\\1919年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/okinawas/00/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\沖縄編\\1973-1975年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/okinawas/01/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\沖縄編\\1992-1994年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/okinawas/02/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\沖縄編\\2005-2008年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/okinawas/03/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\浜松・豊橋編\\1889-1890年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/hamamatsu/00/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\浜松・豊橋編\\1916-1918年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/hamamatsu/01/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\浜松・豊橋編\\1938-1950年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/hamamatsu/02/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\浜松・豊橋編\\1956-1959年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/hamamatsu/03/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\浜松・豊橋編\\1975-1988年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/hamamatsu/04/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\浜松・豊橋編\\1988-1995年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/hamamatsu/05/{z}/{x}/{y}.png", kjmapopt),
    "今昔マップ on the web\\浜松・豊橋編\\1996-2010年": L.tileLayer("http://ktgis.net/kjmapw/kjtilemap/hamamatsu/06/{z}/{x}/{y}.png", kjmapopt),
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
    //"農研機構\\基板地図25000": L.tileLayer("https://aginfo.cgk.affrc.go.jp/ws/tmc/1.0.0/KBN25000BBB-900913/{z}/{x}/{y}.png", {
    //  tms: true,
    //  maxZoom: 18,
    //  attribution: '<a href="https://aginfo.cgk.affrc.go.jp/wsdocs/kibanwms/index.html.ja" target="_blank">基板地図WMS配信サービス</a>'
    //}), 
    //"農研機構\\地名": L.tileLayer("https://aginfo.cgk.affrc.go.jp/ws/tmc/1.0.0/pntms-900913/{z}/{x}/{y}.png", {
    //  tms: true,
    //  maxZoom: 18,
    //  attribution: '<a href="https://aginfo.cgk.affrc.go.jp/wsdocs/pnwms/index.html.ja" target="_blank">地名WMS配信サービス</a>'
    //}), 
    "地理院地図\\土地条件数値地図25000": L.tileLayer("https://maps.gsi.go.jp/xyz/LCM25K_2012/{z}/{x}/{y}.png", {
      minZoom: 4,
      maxZoom: 16,
      attribution: '<a href="https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }), 
    "地理院地図\\明治期の低湿地": L.tileLayer("https://maps.gsi.go.jp/xyz/swale/{z}/{x}/{y}.png", {
      minZoom: 5,
      maxZoom: 16,
      attribution: '<a href="https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }), 
    "地理院地図\\都市圏活断層図": L.tileLayer("https://maps.gsi.go.jp/xyz/afm/{z}/{x}/{y}.png", {
      minZoom: 2,
      maxZoom: 16,
      attribution: '<a href="https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>'
    }),
  }
  var defaultBaseLayerId = Object.keys(baseLayers)[0];
  var defaultOverlayLayerIds = [];

  var map = L.map("map", {center: [36, 138.75], zoom: 5, zoomControl: false});

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
      } else if (pairs[i][0] == "base") {
        if (pairs[i][1] in baseLayers) {
          defaultBaseLayerId = pairs[i][1];
        }
      } else if (pairs[i][0] == "overlay") {
        if (pairs[i][1] in overlayLayers) {
          defaultOverlayLayerIds.push(pairs[i][1]);
        }
      }
    }
  }

  L.hash(map);

  L.control.scale().addTo(map);
  map.addControl(new L.Control.Zoomslider());

  var geocoder = L.Control.Geocoder.nominatim();
  L.Control.geocoder({geocoder: geocoder}).addTo(map);

  map.addControl(new L.Control.Gps());

  L.Control.layerTreeControl(baseLayers, overlayLayers).addTo(map);
  baseLayers[defaultBaseLayerId].addTo(map);
  for (var i = 0; i < defaultOverlayLayerIds.length; i++) {
    overlayLayers[defaultOverlayLayerIds[i]].addTo(map);
  }

  map.addControl(new L.Control.LinkToGeoHack());

}, false);

})();
