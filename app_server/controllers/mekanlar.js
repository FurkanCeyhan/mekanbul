const anaSayfa = function (req, res) {
  res.render('anasayfa', { "baslik": "Ana Sayfa","sayfaBaslik": {
    "siteAd":"MekanBul",
    "slogan":"Civardaki Mekanlari Kesfet!"
  },
  "mekanlar": [
    {
      "ad":"Piyola Cafe",
      "adres":"Carsi",
      "puan":"4",
      "imkanlar": ["Kahveler","Kekler","Pastalar"],
      "mesafe":"1km"
    }
    ,
    {
      "ad":"Zater Doner",
      "adres":"Carsi Ici",
      "puan":"3",
      "imkanlar": ["Kahve","Cay","Pasta"],
      "mesafe":"500m"
    }
  ]
 });
}

const mekanBilgisi = function (req, res) {
  res.render('mekanbilgisi', {
     "baslik": "Mekan bilgisi",
      "mekanBaslik": "Yeni Mekan",
      "mekanDetay": {
        "ad":"Yeni Mekan",
        "adres":"Yeni Adres",
        "puan":"4",
        "imkanlar": ["Yeni Kahveler"," Yeni Kekler","Pastalar"],
        "koordinatlar": {
           "enlem":"37.94",
           "boylam":"30.59"
        },
        "saatler": [
          {
            "gunler":"Pazartesi-Cuma",
            "acilis":"09.00",
            "kapanis":"23.00",
            "kapali": false
          },
          {
            "gunler":"Cumartesi-Pazar",
            "acilis":"10.00",
            "kapanis":"22.00",
            "kapali": false
          }
        ],
        "yorumlar": [
          {
            "yorumYapan":"Ahmet Furkan Ceyhan",
            "puan":"5",
            "tarih":"20 Ekim 2022",
            "yorumMetni":"Mukemmel"

          }
        ]
      }
    });
}

const yorumEkle = function (req, res, next) {
  res.render('yorumekle', { 'title': 'Yorum ekle' });
};


module.exports = {

  anaSayfa,
  mekanBilgisi,
  yorumEkle


}