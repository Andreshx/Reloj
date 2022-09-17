const mostrarReloj = ()=>{ 
    let fecha = new Date(); 
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let sec = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML =`${hr} : ${min} : ${sec} `;

     const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
     const dias = ['Lun','Mar','Mier','Jue','Vier','Sab','Dom',]; 
     let diaSemana = dias[fecha.getDay()];
     let dia = formatoFecha(fecha.getDate()) 
     let mes = meses[fecha.getMonth()];

     document.getElementById('fecha').innerHTML =`${diaSemana} / ${dia} / ${mes} `;


}
const formatoHora = (hora)=>{ 
    if(hora < 10 )
        hora = '0' +hora ; 
        return hora ; 
    
}

const formatoFecha=(dia)=>{ 
    if(dia < 10 )
    dia = '0' + dia ; 
    return dia; 
}
setInterval(mostrarReloj , 1000);