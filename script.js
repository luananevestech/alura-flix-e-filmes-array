var listaFilmes = []
var filmeLu = 'https://es.web.img2.acsta.net/pictures/21/05/10/23/27/0599462.jpg';

var filmeLua = 'https://upload.wikimedia.org/wikipedia/pt/d/d8/RuPaulsDragRaceSeason13.jpg';

var filmeLuana = 'https://upload.wikimedia.org/wikipedia/en/5/55/Van_Helsing_poster.jpg';

var listaFilmes = ['https://es.web.img2.acsta.net/pictures/21/05/10/23/27/0599462.jpg', 'https://upload.wikimedia.org/wikipedia/pt/d/d8/RuPaulsDragRaceSeason13.jpg', 'https://upload.wikimedia.org/wikipedia/en/5/55/Van_Helsing_poster.jpg', 'https://http2.mlstatic.com/D_NQ_NP_684244-MLB51647067571_092022-O.jpg'];
//listaFilmes [0] = 'https://es.web.img2.acsta.net/pictures/21/05/10/23/27/0599462.jpg';
//listaFilmes [1] = //'https://upload.wikimedia.org/wikipedia/pt/d/d8/RuPaulsDragRaceSeason13.jpg';
//listaFilmes [2] = //'https://upload.wikimedia.org/wikipedia/en/5/55/Van_Helsing_poster.jpg';

for (var i= 0; i< listaFilmes.length; i++) { 
document.write("<img src=" + listaFilmes [i] + '>');
}
