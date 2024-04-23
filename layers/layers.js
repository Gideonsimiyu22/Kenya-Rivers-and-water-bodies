var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ken_admbnda_adm1_iebc_20191031_1 = new ol.format.GeoJSON();
var features_ken_admbnda_adm1_iebc_20191031_1 = format_ken_admbnda_adm1_iebc_20191031_1.readFeatures(json_ken_admbnda_adm1_iebc_20191031_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ken_admbnda_adm1_iebc_20191031_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ken_admbnda_adm1_iebc_20191031_1.addFeatures(features_ken_admbnda_adm1_iebc_20191031_1);
var lyr_ken_admbnda_adm1_iebc_20191031_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ken_admbnda_adm1_iebc_20191031_1, 
                style: style_ken_admbnda_adm1_iebc_20191031_1,
                popuplayertitle: "ken_admbnda_adm1_iebc_20191031",
                interactive: true,
                title: '<img src="styles/legend/ken_admbnda_adm1_iebc_20191031_1.png" /> ken_admbnda_adm1_iebc_20191031'
            });
var format_ken_water_areas_dcw_2 = new ol.format.GeoJSON();
var features_ken_water_areas_dcw_2 = format_ken_water_areas_dcw_2.readFeatures(json_ken_water_areas_dcw_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ken_water_areas_dcw_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ken_water_areas_dcw_2.addFeatures(features_ken_water_areas_dcw_2);
var lyr_ken_water_areas_dcw_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ken_water_areas_dcw_2, 
                style: style_ken_water_areas_dcw_2,
                popuplayertitle: "ken_water_areas_dcw",
                interactive: true,
                title: '<img src="styles/legend/ken_water_areas_dcw_2.png" /> ken_water_areas_dcw'
            });
var format_ke_waterbodies_3 = new ol.format.GeoJSON();
var features_ke_waterbodies_3 = format_ke_waterbodies_3.readFeatures(json_ke_waterbodies_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ke_waterbodies_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ke_waterbodies_3.addFeatures(features_ke_waterbodies_3);
var lyr_ke_waterbodies_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ke_waterbodies_3, 
                style: style_ke_waterbodies_3,
                popuplayertitle: "ke_waterbodies",
                interactive: true,
                title: '<img src="styles/legend/ke_waterbodies_3.png" /> ke_waterbodies'
            });
var format_ken_water_lines_dcw_4 = new ol.format.GeoJSON();
var features_ken_water_lines_dcw_4 = format_ken_water_lines_dcw_4.readFeatures(json_ken_water_lines_dcw_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ken_water_lines_dcw_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ken_water_lines_dcw_4.addFeatures(features_ken_water_lines_dcw_4);
var lyr_ken_water_lines_dcw_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ken_water_lines_dcw_4, 
                style: style_ken_water_lines_dcw_4,
                popuplayertitle: "ken_water_lines_dcw",
                interactive: true,
                title: '<img src="styles/legend/ken_water_lines_dcw_4.png" /> ken_water_lines_dcw'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ken_admbnda_adm1_iebc_20191031_1.setVisible(true);lyr_ken_water_areas_dcw_2.setVisible(true);lyr_ke_waterbodies_3.setVisible(true);lyr_ken_water_lines_dcw_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ken_admbnda_adm1_iebc_20191031_1,lyr_ken_water_areas_dcw_2,lyr_ke_waterbodies_3,lyr_ken_water_lines_dcw_4];
lyr_ken_admbnda_adm1_iebc_20191031_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_ken_water_areas_dcw_2.set('fieldAliases', {'ISO': 'ISO', 'COUNTRY': 'COUNTRY', 'F_CODE_DES': 'F_CODE_DES', 'HYC_DESCRI': 'HYC_DESCRI', 'NAME': 'NAME', });
lyr_ke_waterbodies_3.set('fieldAliases', {'LCID': 'LCID', 'LANDCOVER': 'LANDCOVER', });
lyr_ken_water_lines_dcw_4.set('fieldAliases', {'F_CODE_DES': 'F_CODE_DES', 'HYC_DESCRI': 'HYC_DESCRI', 'NAM': 'NAM', 'ISO': 'ISO', 'NAME_0': 'NAME_0', });
lyr_ken_admbnda_adm1_iebc_20191031_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_ken_water_areas_dcw_2.set('fieldImages', {'ISO': '', 'COUNTRY': '', 'F_CODE_DES': '', 'HYC_DESCRI': '', 'NAME': '', });
lyr_ke_waterbodies_3.set('fieldImages', {'LCID': '', 'LANDCOVER': '', });
lyr_ken_water_lines_dcw_4.set('fieldImages', {'F_CODE_DES': 'TextEdit', 'HYC_DESCRI': 'TextEdit', 'NAM': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', });
lyr_ken_admbnda_adm1_iebc_20191031_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'inline label - always visible', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_ken_water_areas_dcw_2.set('fieldLabels', {'ISO': 'no label', 'COUNTRY': 'no label', 'F_CODE_DES': 'no label', 'HYC_DESCRI': 'no label', 'NAME': 'no label', });
lyr_ke_waterbodies_3.set('fieldLabels', {'LCID': 'no label', 'LANDCOVER': 'inline label - always visible', });
lyr_ken_water_lines_dcw_4.set('fieldLabels', {'F_CODE_DES': 'no label', 'HYC_DESCRI': 'inline label - always visible', 'NAM': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', });
lyr_ken_water_lines_dcw_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});