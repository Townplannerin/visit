var _0x5ed71c=_0x1611;(function(_0x19afef,_0x35e399){var _0x306e18=_0x1611,_0x130738=_0x19afef();while(!![]){try{var _0x2e40cb=parseInt(_0x306e18(0x203))/0x1*(-parseInt(_0x306e18(0x1de))/0x2)+parseInt(_0x306e18(0x207))/0x3+parseInt(_0x306e18(0x1ee))/0x4*(-parseInt(_0x306e18(0x1fd))/0x5)+parseInt(_0x306e18(0x20d))/0x6*(-parseInt(_0x306e18(0x1ec))/0x7)+-parseInt(_0x306e18(0x204))/0x8*(parseInt(_0x306e18(0x1f9))/0x9)+parseInt(_0x306e18(0x1e4))/0xa*(-parseInt(_0x306e18(0x1e7))/0xb)+parseInt(_0x306e18(0x1d9))/0xc;if(_0x2e40cb===_0x35e399)break;else _0x130738['push'](_0x130738['shift']());}catch(_0x54a9e3){_0x130738['push'](_0x130738['shift']());}}}(_0x5c5c,0x64a9c));var map=L[_0x5ed71c(0x1f8)](_0x5ed71c(0x1f8),{'zoomSnap':0x0,'zoomDelta':0.25})[_0x5ed71c(0x1ed)]([12.9912,77.5999],0xb),hash=new L[(_0x5ed71c(0x1fc))](map),scale=L[_0x5ed71c(0x210)][_0x5ed71c(0x218)]();scale['addTo'](map),map[_0x5ed71c(0x1fe)][_0x5ed71c(0x1eb)]('<a\x20href=\x22https://leafletjs.com\x22\x20title=\x22A\x20JS\x20library\x20for\x20interactive\x20maps\x22>Leaflet</a>');var legend=L[_0x5ed71c(0x210)]();legend['onAdd']=function(_0x5b49b8){var _0x28928f=_0x5ed71c;return div=L[_0x28928f(0x1e3)][_0x28928f(0x20c)](_0x28928f(0x1e2),'info\x20legend'),div[_0x28928f(0x1dd)]=_0x28928f(0x1df),div;},legend[_0x5ed71c(0x1fa)](map);var north=L[_0x5ed71c(0x210)]({'position':_0x5ed71c(0x216)});north[_0x5ed71c(0x1dc)]=function(_0x1a1060){var _0xd25c7=_0x5ed71c,_0x384744=L[_0xd25c7(0x1e3)][_0xd25c7(0x20c)](_0xd25c7(0x1e2),_0xd25c7(0x205));return _0x384744[_0xd25c7(0x1dd)]=_0xd25c7(0x21b),_0x384744;},north['addTo'](map);var measureControl=new L[(_0x5ed71c(0x1e8))][(_0x5ed71c(0x1e6))]({'position':_0x5ed71c(0x212),'primaryLengthUnit':_0x5ed71c(0x1ef),'secondaryLengthUnit':_0x5ed71c(0x217),'primaryAreaUnit':'sqmeters','secondaryAreaUnit':'acres'});function popUp(_0x1e25ac,_0x15c77a){var _0x53bd80=_0x5ed71c,_0x244505=[];if(_0x1e25ac['properties']){for(key in _0x1e25ac[_0x53bd80(0x1f7)])_0x244505[_0x53bd80(0x1f6)](_0x53bd80(0x211)+key+'</b>\x20:\x20'+_0x1e25ac[_0x53bd80(0x1f7)][key]);_0x15c77a[_0x53bd80(0x214)](_0x244505[_0x53bd80(0x1e1)](_0x53bd80(0x1f2)));}}measureControl[_0x5ed71c(0x1fa)](map),document['getElementsByClassName'](_0x5ed71c(0x1d6))[0x0][_0x5ed71c(0x1dd)]='',document[_0x5ed71c(0x208)](_0x5ed71c(0x1d6))[0x0]['className']+=_0x5ed71c(0x1db);function _0x1611(_0x3a3013,_0x17d28d){var _0x5c5cce=_0x5c5c();return _0x1611=function(_0x161187,_0x31f3bf){_0x161187=_0x161187-0x1d6;var _0x57f5c5=_0x5c5cce[_0x161187];return _0x57f5c5;},_0x1611(_0x3a3013,_0x17d28d);}var featuresLayer1=new L[(_0x5ed71c(0x213))](Villages,{'style':function(_0x21cdc6){var _0x385619=_0x5ed71c;return{'opacity':0x1,'color':_0x385619(0x20a),'weight':0x1,'fillColor':_0x385619(0x1f4),'fillOpacity':0x0,'interactive':!0x0};},'onEachFeature':popUp});map[_0x5ed71c(0x1da)](featuresLayer1);var featuresLayer2=new L[(_0x5ed71c(0x213))](road,{'style':function(_0x332c27){var _0x203d4e=_0x5ed71c;return{'opacity':0x1,'color':'rgba(255,96,17,1.0)','lineCap':_0x203d4e(0x215),'lineJoin':_0x203d4e(0x215),'weight':0x6,'fillOpacity':0x0,'interactive':!0x0};}});map[_0x5ed71c(0x1da)](featuresLayer2);var featuresLayer3=new L['GeoJSON'](pd,{'style':function(_0x4401f2){var _0x223280=_0x5ed71c;return{'opacity':0x1,'color':_0x223280(0x1f1),'weight':0x1,'fillColor':'#FFFFFF00','fillOpacity':0x0,'interactive':!0x0};},'onEachFeature':popUp}),featuresLayer4=new L[(_0x5ed71c(0x213))](bbmp,{'style':function(_0x481717){var _0x3ddbe4=_0x5ed71c;return{'opacity':0x1,'color':'rgba(255,0,255,1.0)','weight':0x1,'fillColor':_0x3ddbe4(0x1f4),'fillOpacity':0x0,'interactive':!0x0};},'onEachFeature':popUp}),GoogleStreet=L[_0x5ed71c(0x20e)](_0x5ed71c(0x20b),{'attribution':'Map\x20data\x20&copy;2023\x20<a\x20href=\x22http://maps.google.com\x22>Google</a>\x20|\x20Terms\x20of\x20Use','maxZoom':0x15}),GoogleSatellite=L[_0x5ed71c(0x20e)]('https://www.google.com/maps/vt?lyrs=s@189&gl=com&x={x}&y={y}&z={z}',{'attribution':'Map\x20data\x20&copy;2023\x20<a\x20href=\x22http://maps.google.com\x22>Google</a>\x20|\x20Terms\x20of\x20Use','maxZoom':0x15}),GoogleHybrid=L[_0x5ed71c(0x20e)]('https://www.google.com/maps/vt?lyrs=s,h@189&gl=com&x={x}&y={y}&z={z}',{'attribution':'Map\x20data\x20&copy;2023\x20<a\x20href=\x22http://maps.google.com\x22>Google</a>\x20|\x20Terms\x20of\x20Use','maxZoom':0x15}),OpenStreetMap=L[_0x5ed71c(0x20e)](_0x5ed71c(0x200),{'attribution':_0x5ed71c(0x1e0),'maxZoom':0x15});map['addLayer'](GoogleStreet);var sslr=L[_0x5ed71c(0x1fb)][_0x5ed71c(0x209)]({'url':'','maxZoom':0x15}),RMP2015=L[_0x5ed71c(0x20e)](_0x5ed71c(0x1e9),{'transparent':!0x0,'opacity':0.5,'minZoom':0xf,'maxZoom':0x14,'tms':!0x1,'attribution':'SaiKPrajwal'})[_0x5ed71c(0x1fa)](map),baseMaps={'GoogleStreet':GoogleStreet,'GoogleSatellite':GoogleSatellite,'GoogleHybrid':GoogleHybrid,'OpenStreetMap':OpenStreetMap},overlayMaps={'Cadastral':sslr,'RMP2015':RMP2015,'Villages':featuresLayer1,'Road':featuresLayer2,'PlanningDistricts':featuresLayer3,'BbmpWardMap':featuresLayer4},layerControl=L[_0x5ed71c(0x210)][_0x5ed71c(0x1d7)](baseMaps,overlayMaps)['addTo'](map),searchControl=new L[(_0x5ed71c(0x1e8))][(_0x5ed71c(0x1ea))]({'layer':featuresLayer1,'propertyName':_0x5ed71c(0x201),'marker':!0x1,'moveToLocation':function(_0x2268af,_0xf3df74,_0x4bac63){var _0x4fa79f=_0x5ed71c,_0xcaad0d=_0x4bac63[_0x4fa79f(0x1e5)](_0x2268af[_0x4fa79f(0x1ff)]['getBounds']());_0x4bac63[_0x4fa79f(0x1ed)](_0x2268af,_0xcaad0d);}});function _0x5c5c(){var _0x340102=['825640BLHDpj','info\x20legend','right','492789glRqIF','getElementsByClassName','tiledMapLayer','rgba(255,234,1,1.0)','https://www.google.com/maps/vt?lyrs=m@189&gl=com&x={x}&y={y}&z={z}','create','42LLGxnK','tileLayer','addControl','control','<b>','topleft','GeoJSON','bindPopup','round','bottomleft','kilometers','scale','mySidepanelRight','top','<img\x20src=\x22css/images/NORTH.jpg\x22>','leaflet-control-measure-toggle','layers','rgba(255,0,204,1.0)','34454220afYfwL','addLayer','\x20fas\x20fa-ruler','onAdd','innerHTML','10CnATER','<h4><b>BANGALORE</b></h4>Revised\x20Master\x20Plan\x202015<br>Proposed\x20Land\x20Use\x20Map','Map\x20data\x20&copy;2023\x20OpenStreetMap\x20|\x20Terms\x20of\x20Use','join','div','DomUtil','1953760BtjBRH','getBoundsZoom','Measure','22WBkWTD','Control','data/geo/{z}/{x}/{y}.png','Search','setPrefix','688639JCGckR','setView','252SBFuNS','meters','Layer\x20Opacity','rgba(0,0,255,1.0)','<br\x20/>','_popup','#FFFFFF00','opacity','push','properties','map','45ryGGQx','addTo','esri','Hash','33085meFhtf','attributionControl','layer','https://tile.openstreetmap.org/{z}/{x}/{y}.png','V_Nm','search:locationfound','122169xUqDmB'];_0x5c5c=function(){return _0x340102;};return _0x5c5c();}searchControl['on'](_0x5ed71c(0x202),function(_0x4d220c){var _0x3c8564=_0x5ed71c;_0x4d220c[_0x3c8564(0x1ff)]['setStyle']({'color':_0x3c8564(0x1d8),'weight':0x6}),_0x4d220c[_0x3c8564(0x1ff)][_0x3c8564(0x1f3)]&&_0x4d220c['layer']['openPopup']();}),map[_0x5ed71c(0x20f)](searchControl);var sidepanelRight=L[_0x5ed71c(0x210)]['sidepanel'](_0x5ed71c(0x219),{'panelPosition':_0x5ed71c(0x206),'tabsPosition':_0x5ed71c(0x21a),'pushControls':!0x0})['addTo'](map);L[_0x5ed71c(0x210)][_0x5ed71c(0x1f5)](overlayMaps,{'label':_0x5ed71c(0x1f0),'collapsed':!0x0})[_0x5ed71c(0x1fa)](map);