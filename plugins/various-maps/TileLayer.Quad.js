(function() {
"use strict";

L.TileLayer.Quad = L.TileLayer.extend({
  getTileUrl: function (tilePoint) {
    return L.Util.template(this._url, L.extend({
      s: this._getSubdomain(tilePoint),
      q: this._getQuad(tilePoint)
    }, this.options));
  },
  _getQuad: function(tilePoint) {
    var q = "";
    var x = tilePoint.x | 0;
    var y = tilePoint.y | 0;
    var z = this._getZoomForUrl() | 0;
    for (var i = z; i > 0; i--) {
      var digit = 0;
      var mask = 1 << (i - 1);
      if ((x & mask) != 0) {
        digit += 1;
      }
      if ((y & mask) != 0) {
        digit += 2;
      }
      q += digit;
    }

    return q;
  }
});

L.tileLayer.quad = function(baseUrl, options) {
  return new L.TileLayer.Quad(baseUrl, options);
};

})();
