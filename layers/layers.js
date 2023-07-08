var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Batas_Desa_1 = new ol.format.GeoJSON();
var features_Batas_Desa_1 = format_Batas_Desa_1.readFeatures(json_Batas_Desa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Desa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Desa_1.addFeatures(features_Batas_Desa_1);
var lyr_Batas_Desa_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas_Desa_1, 
                style: style_Batas_Desa_1,
                interactive: true,
                title: '<img src="styles/legend/Batas_Desa_1.png" /> Batas_Desa'
            });
var format_DESA_KABALUTAN_2 = new ol.format.GeoJSON();
var features_DESA_KABALUTAN_2 = format_DESA_KABALUTAN_2.readFeatures(json_DESA_KABALUTAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DESA_KABALUTAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DESA_KABALUTAN_2.addFeatures(features_DESA_KABALUTAN_2);
var lyr_DESA_KABALUTAN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DESA_KABALUTAN_2, 
                style: style_DESA_KABALUTAN_2,
                interactive: true,
    title: 'DESA_KABALUTAN<br />\
    <img src="styles/legend/DESA_KABALUTAN_2_0.png" /> Bangunan Pondasi<br />\
    <img src="styles/legend/DESA_KABALUTAN_2_1.png" /> Fungsi Hunian<br />\
    <img src="styles/legend/DESA_KABALUTAN_2_2.png" /> Fungsi Hunian dan Usaha/Jasa<br />\
    <img src="styles/legend/DESA_KABALUTAN_2_3.png" /> Fungsi Keagamaan<br />\
    <img src="styles/legend/DESA_KABALUTAN_2_4.png" /> Fungsi Pendidikan<br />\
    <img src="styles/legend/DESA_KABALUTAN_2_5.png" /> Fungsi Sosial dan Budaya<br />\
    <img src="styles/legend/DESA_KABALUTAN_2_6.png" /> Fungsi Telekomunikasi<br />\
    <img src="styles/legend/DESA_KABALUTAN_2_7.png" /> Fungsi Usaha/Jasa<br />'
        });
var format_DESA_KADODA_3 = new ol.format.GeoJSON();
var features_DESA_KADODA_3 = format_DESA_KADODA_3.readFeatures(json_DESA_KADODA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DESA_KADODA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DESA_KADODA_3.addFeatures(features_DESA_KADODA_3);
var lyr_DESA_KADODA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DESA_KADODA_3, 
                style: style_DESA_KADODA_3,
                interactive: true,
    title: 'DESA_KADODA<br />\
    <img src="styles/legend/DESA_KADODA_3_0.png" /> Bangunan Pondasi<br />\
    <img src="styles/legend/DESA_KADODA_3_1.png" /> Fungsi Hunian<br />\
    <img src="styles/legend/DESA_KADODA_3_2.png" /> Fungsi Hunian dan Usaha/Jasa<br />\
    <img src="styles/legend/DESA_KADODA_3_3.png" /> Fungsi Keagamaan<br />\
    <img src="styles/legend/DESA_KADODA_3_4.png" /> Fungsi Pendidikan<br />\
    <img src="styles/legend/DESA_KADODA_3_5.png" /> Fungsi Sosial dan Budaya<br />\
    <img src="styles/legend/DESA_KADODA_3_6.png" /> Fungsi Telekomunikasi<br />\
    <img src="styles/legend/DESA_KADODA_3_7.png" /> Fungsi Usaha/Jasa<br />'
        });
var format_DESA_KALIA_4 = new ol.format.GeoJSON();
var features_DESA_KALIA_4 = format_DESA_KALIA_4.readFeatures(json_DESA_KALIA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DESA_KALIA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DESA_KALIA_4.addFeatures(features_DESA_KALIA_4);
var lyr_DESA_KALIA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DESA_KALIA_4, 
                style: style_DESA_KALIA_4,
                interactive: true,
    title: 'DESA_KALIA<br />\
    <img src="styles/legend/DESA_KALIA_4_0.png" /> Bangunan Pondasi<br />\
    <img src="styles/legend/DESA_KALIA_4_1.png" /> Fungsi Hunian<br />\
    <img src="styles/legend/DESA_KALIA_4_2.png" /> Fungsi Hunian dan Usaha/Jasa<br />\
    <img src="styles/legend/DESA_KALIA_4_3.png" /> Fungsi Keagamaan<br />\
    <img src="styles/legend/DESA_KALIA_4_4.png" /> Fungsi Pendidikan<br />\
    <img src="styles/legend/DESA_KALIA_4_5.png" /> Fungsi Sosial dan Budaya<br />\
    <img src="styles/legend/DESA_KALIA_4_6.png" /> Fungsi Telekomunikasi<br />\
    <img src="styles/legend/DESA_KALIA_4_7.png" /> Fungsi Usaha/Jasa<br />'
        });
var format_DESA_MALENGE_5 = new ol.format.GeoJSON();
var features_DESA_MALENGE_5 = format_DESA_MALENGE_5.readFeatures(json_DESA_MALENGE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DESA_MALENGE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DESA_MALENGE_5.addFeatures(features_DESA_MALENGE_5);
var lyr_DESA_MALENGE_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DESA_MALENGE_5, 
                style: style_DESA_MALENGE_5,
                interactive: true,
    title: 'DESA_MALENGE<br />\
    <img src="styles/legend/DESA_MALENGE_5_0.png" /> Fungsi Hunian<br />\
    <img src="styles/legend/DESA_MALENGE_5_1.png" /> Fungsi Hunian dan Usaha/Jasa<br />\
    <img src="styles/legend/DESA_MALENGE_5_2.png" /> Fungsi Keagamaan<br />\
    <img src="styles/legend/DESA_MALENGE_5_3.png" /> Fungsi Pendidikan<br />\
    <img src="styles/legend/DESA_MALENGE_5_4.png" /> Fungsi Sosial dan Budaya<br />\
    <img src="styles/legend/DESA_MALENGE_5_5.png" /> Fungsi Telekomunikasi<br />\
    <img src="styles/legend/DESA_MALENGE_5_6.png" /> Fungsi Usaha/Jasa<br />'
        });
var format_DESA_TUMOTOK_6 = new ol.format.GeoJSON();
var features_DESA_TUMOTOK_6 = format_DESA_TUMOTOK_6.readFeatures(json_DESA_TUMOTOK_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DESA_TUMOTOK_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DESA_TUMOTOK_6.addFeatures(features_DESA_TUMOTOK_6);
var lyr_DESA_TUMOTOK_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DESA_TUMOTOK_6, 
                style: style_DESA_TUMOTOK_6,
                interactive: true,
    title: 'DESA_TUMOTOK<br />\
    <img src="styles/legend/DESA_TUMOTOK_6_0.png" /> Bangunan Pondasi<br />\
    <img src="styles/legend/DESA_TUMOTOK_6_1.png" /> Fungsi Hunian<br />\
    <img src="styles/legend/DESA_TUMOTOK_6_2.png" /> Fungsi Hunian dan Usaha/Jasa<br />\
    <img src="styles/legend/DESA_TUMOTOK_6_3.png" /> Fungsi Keagamaan<br />\
    <img src="styles/legend/DESA_TUMOTOK_6_4.png" /> Fungsi Pendidikan<br />\
    <img src="styles/legend/DESA_TUMOTOK_6_5.png" /> Fungsi Sosial dan Budaya<br />\
    <img src="styles/legend/DESA_TUMOTOK_6_6.png" /> Fungsi Telekomunikasi<br />\
    <img src="styles/legend/DESA_TUMOTOK_6_7.png" /> Fungsi Usaha/Jasa<br />'
        });
var format_DESA_PAUTU_7 = new ol.format.GeoJSON();
var features_DESA_PAUTU_7 = format_DESA_PAUTU_7.readFeatures(json_DESA_PAUTU_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DESA_PAUTU_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DESA_PAUTU_7.addFeatures(features_DESA_PAUTU_7);
var lyr_DESA_PAUTU_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DESA_PAUTU_7, 
                style: style_DESA_PAUTU_7,
                interactive: true,
    title: 'DESA_PAUTU<br />\
    <img src="styles/legend/DESA_PAUTU_7_0.png" /> Bangunan Pondasi<br />\
    <img src="styles/legend/DESA_PAUTU_7_1.png" /> Fungsi Hunian<br />\
    <img src="styles/legend/DESA_PAUTU_7_2.png" /> Fungsi Hunian dan Usaha/Jasa<br />\
    <img src="styles/legend/DESA_PAUTU_7_3.png" /> Fungsi Keagamaan<br />\
    <img src="styles/legend/DESA_PAUTU_7_4.png" /> Fungsi Pendidikan<br />\
    <img src="styles/legend/DESA_PAUTU_7_5.png" /> Fungsi Sosial dan Budaya<br />\
    <img src="styles/legend/DESA_PAUTU_7_6.png" /> Fungsi Telekomunikasi<br />\
    <img src="styles/legend/DESA_PAUTU_7_7.png" /> Fungsi Usaha/Jasa<br />'
        });
var format_SHP_Jalan_Asistensi_Database_2021_8 = new ol.format.GeoJSON();
var features_SHP_Jalan_Asistensi_Database_2021_8 = format_SHP_Jalan_Asistensi_Database_2021_8.readFeatures(json_SHP_Jalan_Asistensi_Database_2021_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHP_Jalan_Asistensi_Database_2021_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHP_Jalan_Asistensi_Database_2021_8.addFeatures(features_SHP_Jalan_Asistensi_Database_2021_8);
var lyr_SHP_Jalan_Asistensi_Database_2021_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SHP_Jalan_Asistensi_Database_2021_8, 
                style: style_SHP_Jalan_Asistensi_Database_2021_8,
                interactive: true,
                title: '<img src="styles/legend/SHP_Jalan_Asistensi_Database_2021_8.png" /> SHP_Jalan_Asistensi_Database_2021'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Batas_Desa_1.setVisible(true);lyr_DESA_KABALUTAN_2.setVisible(true);lyr_DESA_KADODA_3.setVisible(true);lyr_DESA_KALIA_4.setVisible(true);lyr_DESA_MALENGE_5.setVisible(true);lyr_DESA_TUMOTOK_6.setVisible(true);lyr_DESA_PAUTU_7.setVisible(true);lyr_SHP_Jalan_Asistensi_Database_2021_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Batas_Desa_1,lyr_DESA_KABALUTAN_2,lyr_DESA_KADODA_3,lyr_DESA_KALIA_4,lyr_DESA_MALENGE_5,lyr_DESA_TUMOTOK_6,lyr_DESA_PAUTU_7,lyr_SHP_Jalan_Asistensi_Database_2021_8];
lyr_Batas_Desa_1.set('fieldAliases', {'FID_Admin_': 'FID_Admin_', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'Garis': 'Garis', });
lyr_DESA_KABALUTAN_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'NAMA_PEMIL': 'NAMA PEMILIK BANGUNAN', 'PEKERJAA_1': 'PEKERJAAN', 'SUMBER_A_2': 'SUMBER AIR MINUM', 'STATUS_KEP': 'STATUS KEPEMILIKAN BANGUNAN', 'JENIS_BANG': 'JENIS BANGUNAN', 'PONDASI_1': 'PONDASI', 'JENIS_LANT': 'JENIS LANTAI', 'JENIS_DIND': 'JENIS DINDING', 'JENIS_AT_1': 'JENIS ATAP', 'KONSTRUK_1': 'KONSTRUKSI', 'JUMLAH_LAN': 'JUMLAH LANTAI', 'TAHUN_PEMB': 'TAHUN PEMBANGUNAN', 'IMB_1': 'IMB', 'BUKTI_KEPE': 'BUKTI KEPEMILIKAN TANAH', 'FASILITAS': 'FASILITAS PEMBUANGAN AIR BESAR', 'JENIS_SEPT': 'JENIS SEPTIC TANK', 'DAMIJA': 'DAMIJA', 'GARIS_SEMP': 'GARIS SEMPADAN BANGUNAN', 'KOORDINAT': 'KOODINAT LINTANG', 'KOORDINA_1': 'KOORDINAT BUJUR', 'KONDISI_BA': 'KONDISI BANGUNAN', 'KONDISI_SU': 'KONDISI SUMBER AIR MINUM', 'KONDISI_SA': 'KONDISI SANITASI', 'SURVEYOR_1': 'SURVEYOR', 'CATATAN': 'CATATAN', 'FOTO_BANGU': 'FOTO BANGUNAN', 'FOTO_PEMIL': 'FOTO PEMILIK BANGUNAN', 'FOTO_SUMBE': 'FOTO SUMBER AIR MINUM', 'FOTO_SANIT': 'FOTO SANITASI', 'LUAS_BANGU': 'LUAS BANGUNAN', 'FUNGSI_BAN': 'FUNGSI BANGUNAN', 'NOMOR_URUT': 'NOMOR URUT', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_DESA_KADODA_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'NAMA_PEMIL': 'NAMA PEMILIK BANGUNAN', 'PEKERJAA_1': 'PEKERJAAN', 'SUMBER_A_2': 'SUMBER AIR MINUM', 'STATUS_KEP': 'STATUS KEPEMILIKAN BANGUNAN', 'JENIS_BANG': 'JENIS BANGUNAN', 'PONDASI_1': 'PONDASI', 'JENIS_LANT': 'JENIS LANTAI', 'JENIS_DIND': 'JENIS DINDING', 'JENIS_AT_1': 'JENIS ATAP', 'KONSTRUK_1': 'KONSTRUKSI', 'JUMLAH_LAN': 'JUMLAH LANTAI', 'TAHUN_PEMB': 'TAHUN PEMBANGUNAN', 'IMB_1': 'IMB', 'BUKTI_KEPE': 'BUKTI KEPEMILIKAN TANAH', 'FASILITAS': 'FASILITAS PEMBUANGAN AIR BESAR', 'JENIS_SEPT': 'JENIS SEPTIC TANK', 'DAMIJA': 'DAMIJA', 'GARIS_SEMP': 'GARIS SEMPADAN BANGUNAN', 'KOORDINAT': 'KOODINAT LINTANG', 'KOORDINA_1': 'KOORDINAT BUJUR', 'KONDISI_BA': 'KONDISI BANGUNAN', 'KONDISI_SU': 'KONDISI SUMBER AIR MINUM', 'KONDISI_SA': 'KONDISI SANITASI', 'SURVEYOR_1': 'SURVEYOR', 'CATATAN': 'CATATAN', 'FOTO_BANGU': 'FOTO BANGUNAN', 'FOTO_PEMIL': 'FOTO PEMILIK BANGUNAN', 'FOTO_SUMBE': 'FOTO SUMBER AIR MINUM', 'FOTO_SANIT': 'FOTO SANITASI', 'LUAS_BANGU': 'LUAS BANGUNAN', 'FUNGSI_BAN': 'FUNGSI BANGUNAN', 'NOMOR_URUT': 'NOMOR URUT', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_DESA_KALIA_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'NAMA_PEMIL': 'NAMA PEMILIK BANGUNAN', 'PEKERJAA_1': 'PEKERJAAN', 'SUMBER_A_2': 'SUMBER AIR MINUM', 'STATUS_KEP': 'STATUS KEPEMILIKAN BANGUNAN', 'JENIS_BANG': 'JENIS BANGUNAN', 'PONDASI_1': 'PONDASI', 'JENIS_LANT': 'JENIS LANTAI', 'JENIS_DIND': 'JENIS DINDING', 'JENIS_AT_1': 'JENIS ATAP', 'KONSTRUK_1': 'KONSTRUKSI', 'JUMLAH_LAN': 'JUMLAH LANTAI', 'TAHUN_PEMB': 'TAHUN PEMBANGUNAN', 'IMB_1': 'IMB', 'BUKTI_KEPE': 'BUKTI KEPEMILIKAN TANAH', 'FASILITAS': 'FASILITAS PEMBUANGAN AIR BESAR', 'JENIS_SEPT': 'JENIS SEPTIC TANK', 'DAMIJA': 'DAMIJA', 'GARIS_SEMP': 'GARIS SEMPADAN BANGUNAN', 'KOORDINAT': 'KOODINAT LINTANG', 'KOORDINA_1': 'KOORDINAT BUJUR', 'KONDISI_BA': 'KONDISI BANGUNAN', 'KONDISI_SU': 'KONDISI SUMBER AIR MINUM', 'KONDISI_SA': 'KONDISI SANITASI', 'SURVEYOR_1': 'SURVEYOR', 'CATATAN': 'CATATAN', 'FOTO_BANGU': 'FOTO BANGUNAN', 'FOTO_PEMIL': 'FOTO PEMILIK BANGUNAN', 'FOTO_SUMBE': 'FOTO SUMBER AIR MINUM', 'FOTO_SANIT': 'FOTO SANITASI', 'LUAS_BANGU': 'LUAS BANGUNAN', 'FUNGSI_BAN': 'FUNGSI BANGUNAN', 'NOMOR_URUT': 'NOMOR URUT', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_DESA_MALENGE_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'NAMA_PEMIL': 'NAMA PEMILIK BANGUNAN', 'PEKERJAA_2': 'PEKERJAAN', 'SUMBER_A_2': 'SUMBER AIR MINUM', 'STATUS_KEP': 'STATUS KEPEMILIKAN BANGUNAN', 'JENIS_BANG': 'JENIS BANGUNAN', 'PONDASI_1': 'PONDASI', 'JENIS_LANT': 'JENIS LANTAI', 'JENIS_DIND': 'JENIS DINDING', 'JENIS_AT_1': 'JENIS ATAP', 'KONSTRUK_1': 'KONSTRUKSI', 'JUMLAH_LAN': 'JUMLAH LANTAI', 'TAHUN_PEMB': 'TAHUN PEMBANGUNAN', 'IMB_1': 'IMB', 'BUKTI_KEPE': 'BUKTI KEPEMILIKAN TANAH', 'FASILITAS': 'FASILITAS PEMBUANGAN AIR BESAR', 'JENIS_SEPT': 'JENIS SEPTIC TANK', 'DAMIJA': 'DAMIJA', 'GARIS_SEMP': 'GARIS SEMPADAN BANGUNAN', 'KOORDINAT': 'KOODINAT LINTANG', 'KOORDINA_1': 'KOORDINAT BUJUR', 'KONDISI_BA': 'KONDISI BANGUNAN', 'KONDISI_SU': 'KONDISI SUMBER AIR MINUM', 'KONDISI_SA': 'KONDISI SANITASI', 'SURVEYOR_1': 'SURVEYOR', 'CATATAN': 'CATATAN', 'FOTO_BANGU': 'FOTO BANGUNAN', 'FOTO_PEMIL': 'FOTO PEMILIK BANGUNAN', 'FOTO_SUMBE': 'FOTO SUMBER AIR MINUM', 'FOTO_SANIT': 'FOTO SANITASI', 'LUAS_BANGU': 'LUAS BANGUNAN', 'FUNGSI_BAN': 'FUNGSI BANGUNAN', 'NOMOR_URUT': 'NOMOR URUT', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_DESA_TUMOTOK_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'NAMA_PEMIL': 'NAMA PEMILIK BANGUNAN', 'PEKERJAA_1': 'PEKERJAAN', 'SUMBER_A_2': 'SUMBER AIR MINUM', 'STATUS_KEP': 'STATUS KEPEMILIKAN BANGUNAN', 'JENIS_BANG': 'JENIS BANGUNAN', 'PONDASI_1': 'PONDASI', 'JENIS_LANT': 'JENIS LANTAI', 'JENIS_DIND': 'JENIS DINDING', 'JENIS_AT_1': 'JENIS ATAP', 'KONSTRUK_1': 'KONSTRUKSI', 'JUMLAH_LAN': 'JUMLAH LANTAI', 'TAHUN_PEMB': 'TAHUN PEMBANGUNAN', 'IMB_1': 'IMB', 'BUKTI_KEPE': 'BUKTI KEPEMILIKAN TANAH', 'FASILITAS': 'FASILITAS PEMBUANGAN AIR BESAR', 'JENIS_SEPT': 'JENIS SEPTIC TANK', 'DAMIJA': 'DAMIJA', 'GARIS_SEMP': 'GARIS SEMPADAN BANGUNAN', 'KOORDINAT': 'KOODINAT LINTANG', 'KOORDINA_1': 'KOORDINAT BUJUR', 'KONDISI_BA': 'KONDISI BANGUNAN', 'KONDISI_SU': 'KONDISI SUMBER AIR MINUM', 'KONDISI_SA': 'KONDISI SANITASI', 'SURVEYOR_1': 'SURVEYOR', 'CATATAN': 'CATATAN', 'FOTO_BANGU': 'FOTO BANGUNAN', 'FOTO_PEMIL': 'FOTO PEMILIK BANGUNAN', 'FOTO_SUMBE': 'FOTO SUMBER AIR MINUM', 'FOTO_SANIT': 'FOTO SANITASI', 'LUAS_BANGU': 'LUAS BANGUNAN', 'FUNGSI_BAN': 'FUNGSI BANGUNAN', 'NOMOR_URUT': 'NOMOR URUT', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_DESA_PAUTU_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'NAMA_PEMIL': 'NAMA PEMILIK BANGUNAN', 'PEKERJAA_1': 'PEKERJAAN', 'SUMBER_A_2': 'SUMBER AIR MINUM', 'STATUS_KEP': 'STATUS KEPEMILIKAN BANGUNAN', 'JENIS_BANG': 'JENIS BANGUNAN', 'PONDASI_1': 'PONDASI', 'JENIS_LANT': 'JENIS LANTAI', 'JENIS_DIND': 'JENIS DINDING', 'JENIS_ATAP': 'JENIS ATAP', 'KONSTRUK_1': 'KONSTRUKSI', 'JUMLAH_LAN': 'JUMLAH LANTAI', 'TAHUN_PEMB': 'TAHUN PEMBANGUNAN', 'IMB_1': 'IMB', 'BUKTI_KEPE': 'BUKTI KEPEMILIKAN TANAH', 'FASILITAS': 'FASILITAS PEMBUANGAN AIR BESAR', 'JENIS_SEPT': 'JENIS SEPTIC TANK', 'DAMIJA': 'DAMIJA', 'GARIS_SEMP': 'GARIS SEMPADAN BANGUNAN', 'KOORDINAT': 'KOODINAT LINTANG', 'KOORDINA_1': 'KOORDINAT BUJUR', 'KONDISI_BA': 'KONDISI BANGUNAN', 'KONDISI_SU': 'KONDISI SUMBER AIR MINUM', 'KONDISI_SA': 'KONDISI SANITASI', 'SURVEYOR_1': 'SURVEYOR', 'CATATAN': 'CATATAN', 'FOTO_BANGU': 'FOTO BANGUNAN', 'FOTO_PEMIL': 'FOTO PEMILIK BANGUNAN', 'FOTO_SUMBE': 'FOTO SUMBER AIR MINUM', 'FOTO_SANIT': 'FOTO SANITASI', 'LUAS_BANGU': 'LUAS BANGUNAN', 'FUNGSI_BAN': 'FUNGSI BANGUNAN', 'NOMOR_URUT': 'NOMOR URUT', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SHP_Jalan_Asistensi_Database_2021_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OBJECTID_1': 'OBJECTID_1', 'Nama_Ruas': 'Nama_Ruas', 'Kl_Dat_Das': 'Kl_Dat_Das', 'Thn_Data': 'Thn_Data', 'Status': 'Status', 'Fungsi': 'Fungsi', 'Mendukung': 'Mendukung', 'Kd_Bd_PU': 'Kd_Bd_PU', 'Kd_Jns_Inf': 'Kd_Jns_Inf', 'Kd_Inf': 'Kd_Inf', 'Propinsi': 'Propinsi', 'Kab_Kot': 'Kab_Kot', 'Kecamatan': 'Kecamatan', 'Desa_Kel': 'Desa_Kel', 'Tk_Ruas_Aw': 'Tk_Ruas_Aw', 'Tk_Ruas_Ak': 'Tk_Ruas_Ak', 'Km_Awal': 'Km_Awal', 'Km_Akhir': 'Km_Akhir', 'Nm_Lintas': 'Nm_Lintas', 'Kon_Baik': 'Kon_Baik', 'Kon_Sdg': 'Kon_Sdg', 'Kon_Rgn': 'Kon_Rgn', 'Kon_Rusak': 'Kon_Rusak', 'Kon_Mntp': 'Kon_Mntp', 'Kon_T_Mntp': 'Kon_T_Mntp', 'Panjang': 'Panjang', 'Lbr_Keras': 'Lbr_Keras', 'Tipe_Jln': 'Tipe_Jln', 'Tipe_Keras': 'Tipe_Keras', 'Tanah_Kri': 'Tanah_Kri', 'Macadam': 'Macadam', 'Aspal': 'Aspal', 'Rigid': 'Rigid', 'Tanah': 'Tanah', 'Kerikil': 'Kerikil', 'Lapen': 'Lapen', 'Hotmix': 'Hotmix', 'Thn_Pen_Ak': 'Thn_Pen_Ak', 'Jns_Pen': 'Jns_Pen', 'Koord_X_Aw': 'Koord_X_Aw', 'Koord_Y_Aw': 'Koord_Y_Aw', 'Koord_X_Ak': 'Koord_X_Ak', 'Koord_Y_Ak': 'Koord_Y_Ak', 'Shape_Leng': 'Shape_Leng', 'kode': 'kode', 'Kondisi_Ja': 'Kondisi_Ja', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Batas_Desa_1.set('fieldImages', {'FID_Admin_': 'Range', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'Garis': 'TextEdit', });
lyr_DESA_KABALUTAN_2.set('fieldImages', {'OBJECTID': 'Hidden', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'NAMA_PEMIL': 'TextEdit', 'PEKERJAA_1': 'TextEdit', 'SUMBER_A_2': 'TextEdit', 'STATUS_KEP': 'TextEdit', 'JENIS_BANG': 'TextEdit', 'PONDASI_1': 'TextEdit', 'JENIS_LANT': 'TextEdit', 'JENIS_DIND': 'TextEdit', 'JENIS_AT_1': 'TextEdit', 'KONSTRUK_1': 'TextEdit', 'JUMLAH_LAN': 'TextEdit', 'TAHUN_PEMB': 'TextEdit', 'IMB_1': 'TextEdit', 'BUKTI_KEPE': 'TextEdit', 'FASILITAS': 'TextEdit', 'JENIS_SEPT': 'TextEdit', 'DAMIJA': 'TextEdit', 'GARIS_SEMP': 'TextEdit', 'KOORDINAT': 'TextEdit', 'KOORDINA_1': 'TextEdit', 'KONDISI_BA': 'TextEdit', 'KONDISI_SU': 'TextEdit', 'KONDISI_SA': 'TextEdit', 'SURVEYOR_1': 'TextEdit', 'CATATAN': 'TextEdit', 'FOTO_BANGU': 'TextEdit', 'FOTO_PEMIL': 'TextEdit', 'FOTO_SUMBE': 'TextEdit', 'FOTO_SANIT': 'TextEdit', 'LUAS_BANGU': 'TextEdit', 'FUNGSI_BAN': 'TextEdit', 'NOMOR_URUT': 'TextEdit', 'Shape_Length': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_DESA_KADODA_3.set('fieldImages', {'OBJECTID': 'Hidden', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'NAMA_PEMIL': 'TextEdit', 'PEKERJAA_1': 'TextEdit', 'SUMBER_A_2': 'TextEdit', 'STATUS_KEP': 'TextEdit', 'JENIS_BANG': 'TextEdit', 'PONDASI_1': 'TextEdit', 'JENIS_LANT': 'TextEdit', 'JENIS_DIND': 'TextEdit', 'JENIS_AT_1': 'TextEdit', 'KONSTRUK_1': 'TextEdit', 'JUMLAH_LAN': 'TextEdit', 'TAHUN_PEMB': 'TextEdit', 'IMB_1': 'TextEdit', 'BUKTI_KEPE': 'TextEdit', 'FASILITAS': 'TextEdit', 'JENIS_SEPT': 'TextEdit', 'DAMIJA': 'TextEdit', 'GARIS_SEMP': 'TextEdit', 'KOORDINAT': 'TextEdit', 'KOORDINA_1': 'TextEdit', 'KONDISI_BA': 'TextEdit', 'KONDISI_SU': 'TextEdit', 'KONDISI_SA': 'TextEdit', 'SURVEYOR_1': 'TextEdit', 'CATATAN': 'TextEdit', 'FOTO_BANGU': 'TextEdit', 'FOTO_PEMIL': 'TextEdit', 'FOTO_SUMBE': 'TextEdit', 'FOTO_SANIT': 'TextEdit', 'LUAS_BANGU': 'TextEdit', 'FUNGSI_BAN': 'TextEdit', 'NOMOR_URUT': 'TextEdit', 'Shape_Length': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_DESA_KALIA_4.set('fieldImages', {'OBJECTID': 'Hidden', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'NAMA_PEMIL': 'TextEdit', 'PEKERJAA_1': 'TextEdit', 'SUMBER_A_2': 'TextEdit', 'STATUS_KEP': 'TextEdit', 'JENIS_BANG': 'TextEdit', 'PONDASI_1': 'TextEdit', 'JENIS_LANT': 'TextEdit', 'JENIS_DIND': 'TextEdit', 'JENIS_AT_1': 'TextEdit', 'KONSTRUK_1': 'TextEdit', 'JUMLAH_LAN': 'TextEdit', 'TAHUN_PEMB': 'TextEdit', 'IMB_1': 'TextEdit', 'BUKTI_KEPE': 'TextEdit', 'FASILITAS': 'TextEdit', 'JENIS_SEPT': 'TextEdit', 'DAMIJA': 'TextEdit', 'GARIS_SEMP': 'TextEdit', 'KOORDINAT': 'TextEdit', 'KOORDINA_1': 'TextEdit', 'KONDISI_BA': 'TextEdit', 'KONDISI_SU': 'TextEdit', 'KONDISI_SA': 'TextEdit', 'SURVEYOR_1': 'TextEdit', 'CATATAN': 'TextEdit', 'FOTO_BANGU': 'TextEdit', 'FOTO_PEMIL': 'TextEdit', 'FOTO_SUMBE': 'TextEdit', 'FOTO_SANIT': 'TextEdit', 'LUAS_BANGU': 'TextEdit', 'FUNGSI_BAN': 'TextEdit', 'NOMOR_URUT': 'TextEdit', 'Shape_Length': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_DESA_MALENGE_5.set('fieldImages', {'OBJECTID': 'Hidden', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'NAMA_PEMIL': 'TextEdit', 'PEKERJAA_2': 'TextEdit', 'SUMBER_A_2': 'TextEdit', 'STATUS_KEP': 'TextEdit', 'JENIS_BANG': 'TextEdit', 'PONDASI_1': 'TextEdit', 'JENIS_LANT': 'TextEdit', 'JENIS_DIND': 'TextEdit', 'JENIS_AT_1': 'TextEdit', 'KONSTRUK_1': 'TextEdit', 'JUMLAH_LAN': 'TextEdit', 'TAHUN_PEMB': 'TextEdit', 'IMB_1': 'TextEdit', 'BUKTI_KEPE': 'TextEdit', 'FASILITAS': 'TextEdit', 'JENIS_SEPT': 'TextEdit', 'DAMIJA': 'TextEdit', 'GARIS_SEMP': 'TextEdit', 'KOORDINAT': 'TextEdit', 'KOORDINA_1': 'TextEdit', 'KONDISI_BA': 'TextEdit', 'KONDISI_SU': 'TextEdit', 'KONDISI_SA': 'TextEdit', 'SURVEYOR_1': 'TextEdit', 'CATATAN': 'TextEdit', 'FOTO_BANGU': 'TextEdit', 'FOTO_PEMIL': 'TextEdit', 'FOTO_SUMBE': 'TextEdit', 'FOTO_SANIT': 'TextEdit', 'LUAS_BANGU': 'TextEdit', 'FUNGSI_BAN': 'TextEdit', 'NOMOR_URUT': 'TextEdit', 'Shape_Length': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_DESA_TUMOTOK_6.set('fieldImages', {'OBJECTID': 'Hidden', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'NAMA_PEMIL': 'TextEdit', 'PEKERJAA_1': 'TextEdit', 'SUMBER_A_2': 'TextEdit', 'STATUS_KEP': 'TextEdit', 'JENIS_BANG': 'TextEdit', 'PONDASI_1': 'TextEdit', 'JENIS_LANT': 'TextEdit', 'JENIS_DIND': 'TextEdit', 'JENIS_AT_1': 'TextEdit', 'KONSTRUK_1': 'TextEdit', 'JUMLAH_LAN': 'TextEdit', 'TAHUN_PEMB': 'TextEdit', 'IMB_1': 'TextEdit', 'BUKTI_KEPE': 'TextEdit', 'FASILITAS': 'TextEdit', 'JENIS_SEPT': 'TextEdit', 'DAMIJA': 'TextEdit', 'GARIS_SEMP': 'TextEdit', 'KOORDINAT': 'TextEdit', 'KOORDINA_1': 'TextEdit', 'KONDISI_BA': 'TextEdit', 'KONDISI_SU': 'TextEdit', 'KONDISI_SA': 'TextEdit', 'SURVEYOR_1': 'TextEdit', 'CATATAN': 'TextEdit', 'FOTO_BANGU': 'TextEdit', 'FOTO_PEMIL': 'TextEdit', 'FOTO_SUMBE': 'TextEdit', 'FOTO_SANIT': 'TextEdit', 'LUAS_BANGU': 'TextEdit', 'FUNGSI_BAN': 'TextEdit', 'NOMOR_URUT': 'TextEdit', 'Shape_Length': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_DESA_PAUTU_7.set('fieldImages', {'OBJECTID': 'Hidden', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'NAMA_PEMIL': 'TextEdit', 'PEKERJAA_1': 'TextEdit', 'SUMBER_A_2': 'TextEdit', 'STATUS_KEP': 'TextEdit', 'JENIS_BANG': 'TextEdit', 'PONDASI_1': 'TextEdit', 'JENIS_LANT': 'TextEdit', 'JENIS_DIND': 'TextEdit', 'JENIS_ATAP': 'TextEdit', 'KONSTRUK_1': 'TextEdit', 'JUMLAH_LAN': 'TextEdit', 'TAHUN_PEMB': 'TextEdit', 'IMB_1': 'TextEdit', 'BUKTI_KEPE': 'TextEdit', 'FASILITAS': 'TextEdit', 'JENIS_SEPT': 'TextEdit', 'DAMIJA': 'TextEdit', 'GARIS_SEMP': 'TextEdit', 'KOORDINAT': 'TextEdit', 'KOORDINA_1': 'TextEdit', 'KONDISI_BA': 'TextEdit', 'KONDISI_SU': 'TextEdit', 'KONDISI_SA': 'TextEdit', 'SURVEYOR_1': 'TextEdit', 'CATATAN': 'TextEdit', 'FOTO_BANGU': 'TextEdit', 'FOTO_PEMIL': 'TextEdit', 'FOTO_SUMBE': 'TextEdit', 'FOTO_SANIT': 'TextEdit', 'LUAS_BANGU': 'TextEdit', 'FUNGSI_BAN': 'TextEdit', 'NOMOR_URUT': 'TextEdit', 'Shape_Length': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_SHP_Jalan_Asistensi_Database_2021_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'Nama_Ruas': 'TextEdit', 'Kl_Dat_Das': 'TextEdit', 'Thn_Data': 'TextEdit', 'Status': 'TextEdit', 'Fungsi': 'TextEdit', 'Mendukung': 'TextEdit', 'Kd_Bd_PU': 'TextEdit', 'Kd_Jns_Inf': 'TextEdit', 'Kd_Inf': 'TextEdit', 'Propinsi': 'TextEdit', 'Kab_Kot': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa_Kel': 'TextEdit', 'Tk_Ruas_Aw': 'TextEdit', 'Tk_Ruas_Ak': 'TextEdit', 'Km_Awal': 'TextEdit', 'Km_Akhir': 'TextEdit', 'Nm_Lintas': 'TextEdit', 'Kon_Baik': 'TextEdit', 'Kon_Sdg': 'TextEdit', 'Kon_Rgn': 'TextEdit', 'Kon_Rusak': 'TextEdit', 'Kon_Mntp': 'TextEdit', 'Kon_T_Mntp': 'TextEdit', 'Panjang': 'TextEdit', 'Lbr_Keras': 'TextEdit', 'Tipe_Jln': 'TextEdit', 'Tipe_Keras': 'TextEdit', 'Tanah_Kri': 'TextEdit', 'Macadam': 'TextEdit', 'Aspal': 'TextEdit', 'Rigid': 'TextEdit', 'Tanah': 'TextEdit', 'Kerikil': 'TextEdit', 'Lapen': 'TextEdit', 'Hotmix': 'TextEdit', 'Thn_Pen_Ak': 'TextEdit', 'Jns_Pen': 'TextEdit', 'Koord_X_Aw': 'TextEdit', 'Koord_Y_Aw': 'TextEdit', 'Koord_X_Ak': 'TextEdit', 'Koord_Y_Ak': 'TextEdit', 'Shape_Leng': 'TextEdit', 'kode': 'TextEdit', 'Kondisi_Ja': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Batas_Desa_1.set('fieldLabels', {'FID_Admin_': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'Garis': 'no label', });
lyr_DESA_KABALUTAN_2.set('fieldLabels', {'KECAMATAN': 'inline label', 'DESA': 'inline label', 'NAMA_PEMIL': 'inline label', 'PEKERJAA_1': 'inline label', 'SUMBER_A_2': 'inline label', 'STATUS_KEP': 'inline label', 'JENIS_BANG': 'inline label', 'PONDASI_1': 'inline label', 'JENIS_LANT': 'inline label', 'JENIS_DIND': 'inline label', 'JENIS_AT_1': 'inline label', 'KONSTRUK_1': 'inline label', 'JUMLAH_LAN': 'inline label', 'TAHUN_PEMB': 'inline label', 'IMB_1': 'inline label', 'BUKTI_KEPE': 'inline label', 'FASILITAS': 'inline label', 'JENIS_SEPT': 'inline label', 'DAMIJA': 'inline label', 'GARIS_SEMP': 'inline label', 'KOORDINAT': 'inline label', 'KOORDINA_1': 'inline label', 'KONDISI_BA': 'inline label', 'KONDISI_SU': 'inline label', 'KONDISI_SA': 'inline label', 'SURVEYOR_1': 'inline label', 'CATATAN': 'inline label', 'FOTO_BANGU': 'inline label', 'FOTO_PEMIL': 'inline label', 'FOTO_SUMBE': 'inline label', 'FOTO_SANIT': 'inline label', 'LUAS_BANGU': 'inline label', 'FUNGSI_BAN': 'inline label', 'NOMOR_URUT': 'inline label', });
lyr_DESA_KADODA_3.set('fieldLabels', {'KECAMATAN': 'inline label', 'DESA': 'inline label', 'NAMA_PEMIL': 'inline label', 'PEKERJAA_1': 'inline label', 'SUMBER_A_2': 'inline label', 'STATUS_KEP': 'inline label', 'JENIS_BANG': 'inline label', 'PONDASI_1': 'inline label', 'JENIS_LANT': 'inline label', 'JENIS_DIND': 'inline label', 'JENIS_AT_1': 'inline label', 'KONSTRUK_1': 'inline label', 'JUMLAH_LAN': 'inline label', 'TAHUN_PEMB': 'inline label', 'IMB_1': 'inline label', 'BUKTI_KEPE': 'inline label', 'FASILITAS': 'inline label', 'JENIS_SEPT': 'inline label', 'DAMIJA': 'inline label', 'GARIS_SEMP': 'inline label', 'KOORDINAT': 'inline label', 'KOORDINA_1': 'inline label', 'KONDISI_BA': 'inline label', 'KONDISI_SU': 'inline label', 'KONDISI_SA': 'inline label', 'SURVEYOR_1': 'inline label', 'CATATAN': 'inline label', 'FOTO_BANGU': 'inline label', 'FOTO_PEMIL': 'inline label', 'FOTO_SUMBE': 'inline label', 'FOTO_SANIT': 'inline label', 'LUAS_BANGU': 'inline label', 'FUNGSI_BAN': 'inline label', 'NOMOR_URUT': 'inline label', });
lyr_DESA_KALIA_4.set('fieldLabels', {'KECAMATAN': 'inline label', 'DESA': 'inline label', 'NAMA_PEMIL': 'inline label', 'PEKERJAA_1': 'inline label', 'SUMBER_A_2': 'inline label', 'STATUS_KEP': 'inline label', 'JENIS_BANG': 'inline label', 'PONDASI_1': 'inline label', 'JENIS_LANT': 'inline label', 'JENIS_DIND': 'inline label', 'JENIS_AT_1': 'inline label', 'KONSTRUK_1': 'inline label', 'JUMLAH_LAN': 'inline label', 'TAHUN_PEMB': 'inline label', 'IMB_1': 'inline label', 'BUKTI_KEPE': 'inline label', 'FASILITAS': 'inline label', 'JENIS_SEPT': 'inline label', 'DAMIJA': 'inline label', 'GARIS_SEMP': 'inline label', 'KOORDINAT': 'inline label', 'KOORDINA_1': 'inline label', 'KONDISI_BA': 'inline label', 'KONDISI_SU': 'inline label', 'KONDISI_SA': 'inline label', 'SURVEYOR_1': 'inline label', 'CATATAN': 'inline label', 'FOTO_BANGU': 'inline label', 'FOTO_PEMIL': 'inline label', 'FOTO_SUMBE': 'inline label', 'FOTO_SANIT': 'inline label', 'LUAS_BANGU': 'inline label', 'FUNGSI_BAN': 'inline label', 'NOMOR_URUT': 'inline label', });
lyr_DESA_MALENGE_5.set('fieldLabels', {'KECAMATAN': 'inline label', 'DESA': 'inline label', 'NAMA_PEMIL': 'inline label', 'PEKERJAA_2': 'inline label', 'SUMBER_A_2': 'inline label', 'STATUS_KEP': 'inline label', 'JENIS_BANG': 'inline label', 'PONDASI_1': 'inline label', 'JENIS_LANT': 'inline label', 'JENIS_DIND': 'inline label', 'JENIS_AT_1': 'inline label', 'KONSTRUK_1': 'inline label', 'JUMLAH_LAN': 'inline label', 'TAHUN_PEMB': 'inline label', 'IMB_1': 'inline label', 'BUKTI_KEPE': 'inline label', 'FASILITAS': 'inline label', 'JENIS_SEPT': 'inline label', 'DAMIJA': 'inline label', 'GARIS_SEMP': 'inline label', 'KOORDINAT': 'inline label', 'KOORDINA_1': 'inline label', 'KONDISI_BA': 'inline label', 'KONDISI_SU': 'inline label', 'KONDISI_SA': 'inline label', 'SURVEYOR_1': 'inline label', 'CATATAN': 'inline label', 'FOTO_BANGU': 'inline label', 'FOTO_PEMIL': 'inline label', 'FOTO_SUMBE': 'inline label', 'FOTO_SANIT': 'inline label', 'LUAS_BANGU': 'inline label', 'FUNGSI_BAN': 'inline label', 'NOMOR_URUT': 'inline label', });
lyr_DESA_TUMOTOK_6.set('fieldLabels', {'KECAMATAN': 'inline label', 'DESA': 'inline label', 'NAMA_PEMIL': 'inline label', 'PEKERJAA_1': 'inline label', 'SUMBER_A_2': 'inline label', 'STATUS_KEP': 'inline label', 'JENIS_BANG': 'inline label', 'PONDASI_1': 'inline label', 'JENIS_LANT': 'inline label', 'JENIS_DIND': 'inline label', 'JENIS_AT_1': 'inline label', 'KONSTRUK_1': 'inline label', 'JUMLAH_LAN': 'inline label', 'TAHUN_PEMB': 'inline label', 'IMB_1': 'inline label', 'BUKTI_KEPE': 'inline label', 'FASILITAS': 'inline label', 'JENIS_SEPT': 'inline label', 'DAMIJA': 'inline label', 'GARIS_SEMP': 'inline label', 'KOORDINAT': 'inline label', 'KOORDINA_1': 'inline label', 'KONDISI_BA': 'inline label', 'KONDISI_SU': 'inline label', 'KONDISI_SA': 'inline label', 'SURVEYOR_1': 'inline label', 'CATATAN': 'inline label', 'FOTO_BANGU': 'inline label', 'FOTO_PEMIL': 'inline label', 'FOTO_SUMBE': 'inline label', 'FOTO_SANIT': 'inline label', 'LUAS_BANGU': 'inline label', 'FUNGSI_BAN': 'inline label', 'NOMOR_URUT': 'inline label', });
lyr_DESA_PAUTU_7.set('fieldLabels', {'KECAMATAN': 'inline label', 'DESA': 'inline label', 'NAMA_PEMIL': 'inline label', 'PEKERJAA_1': 'inline label', 'SUMBER_A_2': 'inline label', 'STATUS_KEP': 'inline label', 'JENIS_BANG': 'inline label', 'PONDASI_1': 'inline label', 'JENIS_LANT': 'inline label', 'JENIS_DIND': 'inline label', 'JENIS_ATAP': 'inline label', 'KONSTRUK_1': 'inline label', 'JUMLAH_LAN': 'inline label', 'TAHUN_PEMB': 'inline label', 'IMB_1': 'inline label', 'BUKTI_KEPE': 'inline label', 'FASILITAS': 'inline label', 'JENIS_SEPT': 'inline label', 'DAMIJA': 'inline label', 'GARIS_SEMP': 'inline label', 'KOORDINAT': 'inline label', 'KOORDINA_1': 'inline label', 'KONDISI_BA': 'inline label', 'KONDISI_SU': 'inline label', 'KONDISI_SA': 'inline label', 'SURVEYOR_1': 'inline label', 'CATATAN': 'inline label', 'FOTO_BANGU': 'inline label', 'FOTO_PEMIL': 'inline label', 'FOTO_SUMBE': 'inline label', 'FOTO_SANIT': 'inline label', 'LUAS_BANGU': 'inline label', 'FUNGSI_BAN': 'inline label', 'NOMOR_URUT': 'inline label', });
lyr_SHP_Jalan_Asistensi_Database_2021_8.set('fieldLabels', {'OBJECTID': 'no label', 'OBJECTID_1': 'no label', 'Nama_Ruas': 'no label', 'Kl_Dat_Das': 'no label', 'Thn_Data': 'no label', 'Status': 'no label', 'Fungsi': 'no label', 'Mendukung': 'no label', 'Kd_Bd_PU': 'no label', 'Kd_Jns_Inf': 'no label', 'Kd_Inf': 'no label', 'Propinsi': 'no label', 'Kab_Kot': 'no label', 'Kecamatan': 'no label', 'Desa_Kel': 'no label', 'Tk_Ruas_Aw': 'no label', 'Tk_Ruas_Ak': 'no label', 'Km_Awal': 'no label', 'Km_Akhir': 'no label', 'Nm_Lintas': 'no label', 'Kon_Baik': 'no label', 'Kon_Sdg': 'no label', 'Kon_Rgn': 'no label', 'Kon_Rusak': 'no label', 'Kon_Mntp': 'no label', 'Kon_T_Mntp': 'no label', 'Panjang': 'no label', 'Lbr_Keras': 'no label', 'Tipe_Jln': 'no label', 'Tipe_Keras': 'no label', 'Tanah_Kri': 'no label', 'Macadam': 'no label', 'Aspal': 'no label', 'Rigid': 'no label', 'Tanah': 'no label', 'Kerikil': 'no label', 'Lapen': 'no label', 'Hotmix': 'no label', 'Thn_Pen_Ak': 'no label', 'Jns_Pen': 'no label', 'Koord_X_Aw': 'no label', 'Koord_Y_Aw': 'no label', 'Koord_X_Ak': 'no label', 'Koord_Y_Ak': 'no label', 'Shape_Leng': 'no label', 'kode': 'no label', 'Kondisi_Ja': 'no label', 'Shape_Le_1': 'no label', });
lyr_SHP_Jalan_Asistensi_Database_2021_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});