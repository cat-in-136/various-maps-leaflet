(function() {
"use strict";

L.Control.LayerTreeControl = L.Control.Layers.extend({
  _addItem: function (obj) {
    var ancestorNode = (obj.overlay)? this._overlaysList : this._baseLayersList;
    var parentContainer = ancestorNode;
    var path = obj.name.split("\\");
    for (var j = 0; j < path.length - 1; j++) {
      var folderPath = path.slice(0, j + 1).join("");
      var folder = ancestorNode.querySelector("*[data-folder='" + folderPath.replace(/(\"\'\\)/g, "\\$1") + "']");
      if (!folder) {
        folder = L.DomUtil.create("div", "leaflet-control-layer-tree-folder", parentContainer);
        folder.setAttribute("data-folder", folderPath);
        var label = L.DomUtil.create("div", "leaflet-control-layer-tree-folder-label", folder);
        label.appendChild(document.createTextNode(path[j]));

        (function (folder, label) {
          L.DomEvent.on(label, "click", function () {
            folder.setAttribute("data-extend", (folder.getAttribute("data-extend") == "true")? "false" : "true");
          }, this);
        })(folder, label);
      }
      parentContainer = folder;
    }

    var checked = this._map.hasLayer(obj.layer);
    var item = L.DomUtil.create("label", "leaflet-control-layer-tree-item");
    var input = L.DomUtil.create("input", "leaflet-control-layers-selector", item); 
    if (obj.overlay) {
      input.type = "checkbox"; 
    } else {
      input.type = "radio"; 
      input.name = "leaflet-base-layers";
    }
    input.defaultChecked = checked;
    input.layerId = L.stamp(obj.layer);

    L.DomEvent.on(input, "click", this._onInputClick, this);

    var itemName = obj.name.split("\\").slice(-1)[0];
    var name = L.DomUtil.create("span", null, item);
    name.appendChild(document.createTextNode(itemName));

    parentContainer.appendChild(item);

    return item;
  }
});

L.Control.layerTreeControl = function(baseLayers, overlays, options) {
  return new L.Control.LayerTreeControl(baseLayers, overlays, options);
};

})();
