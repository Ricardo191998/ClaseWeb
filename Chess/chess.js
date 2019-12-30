var temp; 
var turn; 
var movValido = [];
var alphabet = ['a','b', 'c', 'd', 'e', 'f' , 'g', 'h']
var jaque = false;
var piezasJaque = [];

function comienzaJuego(){
    
    //Tablero

    let board = document.getElementById("board");
    let mBoard = [];

    //Piezas

    let white = {
        king : [],
        queen : [],
        bishop :[],
        horse:[],
        tower : [],
        pean : []
    };
    let black = {
        king : [],
        queen : [],
        bishop :[],
        horse:[],
        tower : [],
        pean : []
    };;

    board.style.visibility = "visible";
    document.getElementById("player1").style.visibility = "visible";
    document.getElementById("player1").style.backgroundColor = "#FFFACD";
    document.getElementById("player2").style.visibility = "visible";
    document.getElementById("menu").style.visibility = "hidden";
    
    turn = "p1";

     //Generado Piezas 

     for(var i = 1 ; i < 7 ; i ++){
   
        if(i == 1){
            for(var j =  0 ; j < 8 ; j ++){
                let pieceB = document.createElement("img");
                let pieceN = document.createElement("img");
                pieceB.className = "piece";
                pieceB.src = "images/"+i.toString()+"B.png";
                pieceB.id = j.toString()+"PB"
                pieceN.className = "piece";
                pieceN.src = "images/"+i.toString()+"N.png";
                pieceN.id = j.toString()+"PN"
                white.pean.push(pieceB);
                black.pean.push(pieceN);
            }
        }
        if( i == 2){
            for(var j =  0 ; j < 2 ; j ++){
                let pieceB = document.createElement("img");
                let pieceN = document.createElement("img");
                pieceB.className = "piece";
                pieceB.src = "images/"+i.toString()+"B.png";
                pieceB.id = j.toString()+"CB"
                pieceN.className = "piece";
                pieceN.src = "images/"+i.toString()+"N.png";
                pieceN.id = j.toString()+"CN"
                white.horse.push(pieceB);
                black.horse.push(pieceN);
            }
        }
        if(i == 3){
            for(var j =  0 ; j < 2 ; j ++){
                let pieceB = document.createElement("img");
                let pieceN = document.createElement("img");
                pieceB.className = "piece";
                pieceB.src = "images/"+i.toString()+"B.png";
                pieceB.id = j.toString()+"AB"
                pieceN.className = "piece";
                pieceN.src = "images/"+i.toString()+"N.png";
                pieceN.id = j.toString()+"AN"
                white.bishop.push(pieceB);
                black.bishop.push(pieceN);
            }
        }
        if(i == 4){
            for(var j =  0 ; j < 2 ; j ++){
                let pieceB = document.createElement("img");
                let pieceN = document.createElement("img");
                pieceB.className = "piece";
                pieceB.src = "images/"+i.toString()+"B.png";
                pieceB.id = j.toString()+"TB"
                pieceN.className = "piece";
                pieceN.src = "images/"+i.toString()+"N.png";
                pieceN.id = j.toString()+"TN"
                white.tower.push(pieceB);
                black.tower.push(pieceN);
            }
        }
        if( i == 5){
                let pieceB = document.createElement("img");
                let pieceN = document.createElement("img");
                pieceB.className = "piece";
                pieceB.src = "images/"+i.toString()+"B.png";
                pieceB.id = j.toString()+"QB"
                pieceN.className = "piece";
                pieceN.src = "images/"+i.toString()+"N.png";
                pieceN.id = j.toString()+"QN"
                white.queen.push(pieceB);
                black.queen.push(pieceN);
        }if( i == 6){
                let pieceB = document.createElement("img");
                let pieceN = document.createElement("img");
                pieceB.className = "piece";
                pieceB.src = "images/"+i.toString()+"B.png";
                pieceB.id = j.toString()+"KB"
                pieceN.className = "piece";
                pieceN.src = "images/"+i.toString()+"N.png";
                pieceN.id = j.toString()+"KN"
                white.king.push(pieceB);
                black.king.push(pieceN);
        }
    }


    //Generando Tablero

    for(var i = 0 ; i < 8 ; i ++){
        mBoard.push([]);
        let row = document.createElement("div");
        row.className = "row";
        for(var j = 0 ; j < 8 ; j++){
            
            let elem = document.createElement("button");
            elem.id =  (8-i).toString() + alphabet[j];
            elem.className = "cell";
            elem.addEventListener("click" , movimiento, elem);
            if( ((j+1) % 2 == 0 && (8 - i) % 2 == 0 ) || (j+1) % 2 == 1 && (8 - i) % 2 == 1 ){
                elem.style.backgroundColor = "gray";
            }else{
                elem.style.backgroundColor = "white";
            }
            if(i == 0 ){
                if(j == 0){
                    elem.appendChild(black.tower[0]);
                }
                if(j == 1){
                    elem.appendChild(black.horse[0]);
                }
                if(j == 2){
                    elem.appendChild(black.bishop[0]);
                }
                if(j == 3){
                    elem.appendChild(black.queen[0]);
                }
                if(j == 4){
                    elem.appendChild(black.king[0]);
                }
                if(j == 5){
                    elem.appendChild(black.bishop[1]);
                }
                if(j == 6){
                    elem.appendChild(black.horse[1]);
                } 
                if(j == 7){
                    elem.appendChild(black.tower[1]);
                }
            }
            if(i == 7 ){
                if(j == 0){
                    elem.appendChild(white.tower[0]);
                }
                if(j == 1){
                    elem.appendChild(white.horse[0]);
                }
                if(j == 2){
                    elem.appendChild(white.bishop[0]);
                }
                if(j == 3){
                    elem.appendChild(white.queen[0]);
                }
                if(j == 4){
                    elem.appendChild(white.king[0]);
                }
                if(j == 5){
                    elem.appendChild(white.bishop[1]);
                }
                if(j == 6){
                    elem.appendChild(white.horse[1]);
                } 
                if(j == 7){
                    elem.appendChild(white.tower[1]);
                }
            }
            if(i ==1){
                elem.appendChild(black.pean[j])
            }
            if(i ==6 ){
                elem.appendChild(white.pean[j])
            }
            mBoard[i].push(elem);
            row.appendChild(elem);
            
        }
        board.appendChild(row);
    }
    console.log(mBoard)

}

//Al presionar un pieza

function movimiento(elem){
    
    console.log(elem);
    let piece;
    let coor; 
    let movJaque;
    let movimientos = [];
    
    if(elem.target.tagName== "BUTTON"){
        piece = elem.target.firstChild;
        coor = elem.target
    }else{
        piece = elem.target;
        coor = elem.target.parentNode;
    }

    if(temp == undefined){
        if(piece != null){
            coor.style.backgroundColor = "#21C6E3";
            temp = coor.id;
            if(jaque){
                if(turn == "p2"){
                    movValido = todosMovimientos("N");
                }else if(turn == "p1"){
                    movValido = todosMovimientos("B");
                }
                
                if(movValido.length == 0){
                    console.log("Jaque mate");
                }
            }else{
                movValido = obtenerMovimientos(piece.id, coor.id, false); 
            }
            console.log(movValido);
            if(movValido == null){
                alert("No es tu turno");
                if((parseInt(temp[0])% 2 == 0 && (alphabet.indexOf(temp[1]) + 1)% 2 == 0) || (parseInt(temp[0])% 2 == 1 && (alphabet.indexOf(temp[1]) +1 )% 2 == 1)){
                    document.getElementById(temp).style.backgroundColor = "gray";
                }else{
                    document.getElementById(temp).style.backgroundColor = "white";
                }
                temp = undefined;
            }else if(movValido.length == 0){
                
                if((parseInt(temp[0])% 2 == 0 && (alphabet.indexOf(temp[1]) + 1)% 2 == 0) || (parseInt(temp[0])% 2 == 1 && (alphabet.indexOf(temp[1]) +1 )% 2 == 1)){
                    document.getElementById(temp).style.backgroundColor = "gray";
                }else{
                    document.getElementById(temp).style.backgroundColor = "white";
                }
                temp = undefined;
            }else{
                for(var n= 0; n < movValido.length ; n++){
                    document.getElementById(movValido[n]).style.backgroundColor = "#21C6E3"
                }
            }
        }
    }else{
        if(movValido.indexOf(coor.id) != -1 ){
            console.log("Valido");
            let newPiece = document.getElementById(temp).firstChild
            document.getElementById(temp).removeChild(newPiece);
            
            if(coor.firstChild == null){
                coor.appendChild(newPiece);
                if((parseInt(temp[0])% 2 == 0 && (alphabet.indexOf(temp[1]) + 1)% 2 == 0) || (parseInt(temp[0])% 2 == 1 && (alphabet.indexOf(temp[1]) +1 )% 2 == 1)){
                    document.getElementById(temp).style.backgroundColor = "gray";
                }else{
                    document.getElementById(temp).style.backgroundColor = "white";
                }
                for(var n = 0 ; n < movValido.length ; n++){
                    if((parseInt(movValido[n][0])% 2 == 0 && (alphabet.indexOf(movValido[n][1]) + 1)% 2 == 0) || (parseInt(movValido[n][0])% 2 == 1 && (alphabet.indexOf(movValido[n][1]) +1 )% 2 == 1)){
                        document.getElementById(movValido[n]).style.backgroundColor = "gray";
                    }else{
                        document.getElementById(movValido[n]).style.backgroundColor = "white";
                    }
                }
                if(turn == "p1"){
                    document.getElementById("player1").style.backgroundColor = "white";
                    document.getElementById("player2").style.backgroundColor = "#FFFACD";
                    turn = "p2";
                }else{
                    document.getElementById("player2").style.backgroundColor = "white";
                    document.getElementById("player1").style.backgroundColor = "#FFFACD";
                    turn = "p1"
                }
            }else{
                coor.removeChild(coor.firstChild);
                coor.appendChild(newPiece);
                if((parseInt(temp[0])% 2 == 0 && (alphabet.indexOf(temp[1]) + 1)% 2 == 0) || (parseInt(temp[0])% 2 == 1 && (alphabet.indexOf(temp[1]) +1 )% 2 == 1)){
                    document.getElementById(temp).style.backgroundColor = "gray";
                }else{
                    document.getElementById(temp).style.backgroundColor = "white";
                }
                for(var n = 0 ; n < movValido.length ; n++){
                    if((parseInt(movValido[n][0])% 2 == 0 && (alphabet.indexOf(movValido[n][1]) + 1)% 2 == 0) || (parseInt(movValido[n][0])% 2 == 1 && (alphabet.indexOf(movValido[n][1]) +1 )% 2 == 1)){
                        document.getElementById(movValido[n]).style.backgroundColor = "gray";
                    }else{
                        document.getElementById(movValido[n]).style.backgroundColor = "white";
                    }
                }
                if(turn == "p1"){
                    document.getElementById("player1").style.backgroundColor = "white";
                    document.getElementById("player2").style.backgroundColor = "#FFFACD";
                    turn = "p2";
                }else{
                    document.getElementById("player2").style.backgroundColor = "white";
                    document.getElementById("player1").style.backgroundColor = "#FFFACD";
                    turn = "p1"
                }
            }
            
            if(turn == "p2"){
                movimientos = todosMovimientos("N");
                console.log(movimientos);
                
                if(movimientos.indexOf(document.getElementById("2KB").parentNode.id) != -1){
                    alert("Jaque");
                    jaque = true;
                }
        
            }else{
                movimientos = todosMovimientos("B")
                
                if(movimientos.indexOf(document.getElementById("2KN").parentNode.id) != -1)
                {
                    alert("Jaque");
                    jaque = true;
                }
        
            }

            temp = undefined;
        }else{
            console.log(temp)
            if((parseInt(temp[0])% 2 == 0 && (alphabet.indexOf(temp[1]) + 1)% 2 == 0) || (parseInt(temp[0])% 2 == 1 && (alphabet.indexOf(temp[1]) +1 )% 2 == 1)){
                document.getElementById(temp).style.backgroundColor = "gray";
            }else{
                document.getElementById(temp).style.backgroundColor = "white";
            }
            for(var n = 0 ; n < movValido.length ; n++){
                if((parseInt(movValido[n][0])% 2 == 0 && (alphabet.indexOf(movValido[n][1]) + 1)% 2 == 0) || (parseInt(movValido[n][0])% 2 == 1 && (alphabet.indexOf(movValido[n][1]) +1 )% 2 == 1)){
                    document.getElementById(movValido[n]).style.backgroundColor = "gray";
                }else{
                    document.getElementById(movValido[n]).style.backgroundColor = "white";
                }
            }
            temp = undefined
        }
    }
}

function movimientosJaque(){

}

function todosMovimientos(color){
    let movimientos = [];
    for(var n = 0 ; n < 8 ; n++){
        if(document.getElementById(n.toString()+"P"+color) != null){
            movimientos = movimientos.concat(obtenerMovimientos(n.toString()+"P"+color, document.getElementById(n.toString()+"P"+color).parentNode.id , true))
        }
    }


    for(var n = 0 ; n < 2 ; n++){
        if(document.getElementById(n.toString()+"C"+color) != null){
            movimientos = movimientos.concat(obtenerMovimientos(n.toString()+"C"+color, document.getElementById(n.toString()+"C"+color).parentNode.id, true))
        }
    }
    for(var n = 0 ; n < 2 ; n++){
        if(document.getElementById(n.toString()+"A"+color) != null){
            movimientos = movimientos.concat(obtenerMovimientos(n.toString()+"A"+color, document.getElementById(n.toString()+"A"+color).parentNode.id, true))
        }
    }
    for(var n = 0 ; n < 2 ; n++){
        if(document.getElementById(n.toString()+"T"+color) != null){
            movimientos = movimientos.concat(obtenerMovimientos(n.toString()+"T"+color, document.getElementById(n.toString()+"T"+color).parentNode.id, true))
        }
    }
    if(document.getElementById("2K"+color) != null){
        movimientos = movimientos.concat(obtenerMovimientos("2K"+color, document.getElementById("2K"+color).parentNode.id, true))
    }
    if(document.getElementById("2Q"+color) != null){
        movimientos = movimientos.concat(obtenerMovimientos("2Q"+color, document.getElementById("2Q"+color).parentNode.id, true))
    }
    console.log(movimientos)
    return movimientos;
}


function jaqueMate(movimientos, kcoor){
    // if(movimientos.indexOf(kcoor.first))
}

//Mostrara las casillas que son validas para que el usuario mueva
function obtenerMovimientos(piece , coor, ban){
    let mov = []; 
    let aux
    

    if((piece[2] == "B" && turn == "p1") || (piece[2] == "B" && ban) ){
        if(/\d+PB/.test(piece)){
            if(coor[0] == "2"){
                
                if(document.getElementById((parseInt(coor[0])+ 2).toString() +coor[1]).firstChild == null){
                    mov.push((parseInt(coor[0])+ 2).toString() +coor[1]);
                }
                if(document.getElementById((parseInt(coor[0])+ 1).toString() +coor[1]).firstChild == null){
                    mov.push((parseInt(coor[0])+ 1).toString() +coor[1]);
                }
                if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])+1])!= null){
                    if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]).firstChild != null ){
                        if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]).firstChild.id[2] != "B"){
                            mov.push((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]);
                        }
                    }
                }
                if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]) != null){
                    if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]).firstChild != null ){
                        if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]).firstChild.id[2] != "B"){
                            mov.push((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]);
                        }
                    }
                }
                
            }else{
                if(document.getElementById((parseInt(coor[0])+ 1).toString() +coor[1]).firstChild == null){
                    mov.push((parseInt(coor[0])+ 1).toString() +coor[1]);
                }
                if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])+1])!= null){
                    if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]).firstChild != null ){
                        if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]).firstChild.id[2] != "B"){
                            mov.push((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]);
                        }
                    }
                }
                if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]) != null){
                    if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]).firstChild != null ){
                        if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]).firstChild.id[2] != "B"){
                             mov.push((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]);
                        }
                    }
                }
            }
        }

        if(/\d+KB/.test(piece)){
                
            if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]) != null){
                if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]).firstChild.id[2] != "B"){
                        mov.push((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]);
                    }
                }else{
                    mov.push((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]);
                }
            }
            if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]) != null){
                if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]).firstChild.id[2] != "B"){
                        mov.push((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]);
                    }
                }else{
                    mov.push((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]);
                }
            }

            if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]) != null){
                if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]).firstChild.id[2] != "B"){
                        mov.push((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]);
                    }
                }else{
                    mov.push((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]);
                }
            }
            if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]) != null){
                if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]).firstChild.id[2] != "B"){
                        mov.push((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]);
                    }
                }else{
                    mov.push((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]);
                }
            }

            if(document.getElementById((parseInt(coor[0])+ 1).toString() +coor[1]) != null){
                if(document.getElementById((parseInt(coor[0])+ 1).toString() +coor[1]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])+ 1).toString() +coor[1]).firstChild.id[2] != "B"){
                        mov.push((parseInt(coor[0])+ 1).toString() +coor[1]);
                    }
                }else{
                    mov.push((parseInt(coor[0])+ 1).toString() +coor[1]);
                }
            }
            if(document.getElementById((parseInt(coor[0])- 1).toString() +coor[1]) != null){
                if(document.getElementById((parseInt(coor[0])- 1).toString() +coor[1]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])- 1).toString() +coor[1]).firstChild.id[2] != "B"){
                        mov.push((parseInt(coor[0])- 1).toString() +coor[1]);
                    }
                }else{
                    mov.push((parseInt(coor[0])- 1).toString() +coor[1]);
                }
            }
            if(document.getElementById(coor[0] +alphabet[alphabet.indexOf(coor[1])+1]) != null){
                if(document.getElementById(coor[0] +alphabet[alphabet.indexOf(coor[1])+1]).firstChild){
                    if(document.getElementById(coor[0] +alphabet[alphabet.indexOf(coor[1])+1]).firstChild.id[2] != "B"){
                        mov.push(coor[0] +alphabet[alphabet.indexOf(coor[1])+1]);
                    }
                }else{
                    mov.push(coor[0] +alphabet[alphabet.indexOf(coor[1])+1]);
                }
            }

            if(document.getElementById(coor[0] +alphabet[alphabet.indexOf(coor[1])-1]) != null){
                if(document.getElementById(coor[0] +alphabet[alphabet.indexOf(coor[1])-1]).firstChild != null){
                    if(document.getElementById(coor[0] +alphabet[alphabet.indexOf(coor[1])-1]).firstChild.id[2] != "B"){
                        mov.push(coor[0] +alphabet[alphabet.indexOf(coor[1])-1]);
                    }
                }else{
                    mov.push(coor[0] +alphabet[alphabet.indexOf(coor[1])-1]);
                }
            }

        }

          
        if(/\d+QB/.test(piece)){
            
            aux = 1;
             
            for(var i = alphabet.indexOf(coor[1]) + 1 ; i < alphabet.length ; i++){
                if(document.getElementById((parseInt(coor[0])+ aux).toString()+alphabet[i]) != null){
                    if(document.getElementById((parseInt(coor[0])+ aux).toString()+alphabet[i]).firstChild != null){
                        if(document.getElementById((parseInt(coor[0])+ aux).toString()+alphabet[i]).firstChild.id[2] != "B"){
                            mov.push((parseInt(coor[0])+ aux).toString()+alphabet[i]);
                        }
                        break;
                    }else{
                        mov.push((parseInt(coor[0])+ aux).toString()+alphabet[i]);
                    }
                }
                aux++;
            }
            aux = 1;
            for(var i = alphabet.indexOf(coor[1])+ 1 ; i < alphabet.length ; i++){
                if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]) != null){
                    if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]).firstChild != null){
                        if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]).firstChild.id[2] != "B"){
                            mov.push((parseInt(coor[0])- aux).toString()+alphabet[i]);
                        }
                        break;
                    }else{
                        mov.push((parseInt(coor[0])-aux).toString()+alphabet[i]);
                    }
                }
                aux++;
            }

            aux = 1;
            for(var i = alphabet.indexOf(coor[1]) - 1 ; i >-1 ; i--){
                if(document.getElementById((parseInt(coor[0])+aux).toString()+alphabet[i]) != null){
                    if(document.getElementById((parseInt(coor[0])+aux).toString()+alphabet[i]).firstChild != null){
                        if(document.getElementById((parseInt(coor[0])+aux).toString()+alphabet[i]).firstChild.id[2] != "B"){
                            mov.push((parseInt(coor[0])+aux).toString()+alphabet[i]);
                        }
                        break;
                    }else{
                        mov.push((parseInt(coor[0])+aux).toString()+alphabet[i]);
                    }
                }
                aux++;
            }
            aux = 1;
            for(var i = alphabet.indexOf(coor[1]) - 1 ; i > -1 ; i--){
                if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]) != null){
                    if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]).firstChild != null){
                        if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]).firstChild.id[2] != "B"){
                            mov.push((parseInt(coor[0])- aux).toString()+alphabet[i]);
                        }
                        break;
                    }else{
                        mov.push((parseInt(coor[0])- aux).toString()+alphabet[i]);
                    }
                }
                aux++
            }

            if(alphabet[alphabet.indexOf(coor[1])+1] != undefined){
                for(var i = alphabet.indexOf(coor[1]) + 1 ; i < alphabet.length ; i++){
                    if(document.getElementById(coor[0]+alphabet[i]).firstChild != null){
                        if(document.getElementById(coor[0]+alphabet[i]).firstChild.id[2] != "B"){
                            mov.push(coor[0]+alphabet[i]);
                        }
                        break;
                    }else{
                        mov.push(coor[0]+alphabet[i]);
                    }
                }
            }

            if(alphabet[alphabet.indexOf(coor[1])-1] != undefined){
                for(var i = alphabet.indexOf(coor[1]) - 1 ; i > -1 ; i--){
                    if(document.getElementById(coor[0]+alphabet[i]).firstChild != null){
                        if(document.getElementById(coor[0]+alphabet[i]).firstChild.id[2] != "B"){
                            mov.push(coor[0]+alphabet[i]);
                        }
                        break; 
                    }else{
                        mov.push(coor[0]+alphabet[i]);
                    }
                }
            }

            if(document.getElementById((parseInt(coor[0])- 1).toString() + coor[1])!= null){
                for(var i = (parseInt(coor[0])- 1) ; i > 0  ; i--){
                    if(document.getElementById(i.toString() + coor[1])!= null){
                        if(document.getElementById(i.toString() + coor[1]).firstChild != null){
                            if(document.getElementById(i.toString() + coor[1]).firstChild.id[2] != "B"){
                                mov.push(i.toString() + coor[1]);
                            }
                            break;
                        }else{
                            mov.push(i.toString() + coor[1]);
                        }
                    }
                }
                
            }

            if(document.getElementById((parseInt(coor[0])+ 1).toString() + coor[1])!= null){
                for(var i = (parseInt(coor[0])+ 1) ; i < 9  ; i++){
                    if(document.getElementById(i.toString() + coor[1])!= null){
                        if(document.getElementById(i.toString() + coor[1]).firstChild != null){
                            if(document.getElementById(i.toString() + coor[1]).firstChild.id[2] != "B"){
                                mov.push(i.toString() + coor[1]);
                            }
                            break;
                        }else{
                            mov.push(i.toString() + coor[1]);
                        }
                    }
                }
            }
        }

         
        if(/\d+CB/.test(piece)){

            if(document.getElementById((parseInt(coor[0])+2).toString()+ alphabet[alphabet.indexOf(coor[1])+1]) != null){
                if(document.getElementById((parseInt(coor[0])+2).toString()+ alphabet[alphabet.indexOf(coor[1])+1]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])+2).toString()+ alphabet[alphabet.indexOf(coor[1])+1]).firstChild.id[2] != "B"){
                        mov.push((parseInt(coor[0])+ 2).toString() +alphabet[alphabet.indexOf(coor[1])+1]);
                    }
                }else{
                    mov.push((parseInt(coor[0])+ 2).toString() +alphabet[alphabet.indexOf(coor[1])+1]);
                }
            }
            if(document.getElementById((parseInt(coor[0])+2).toString()+ alphabet[alphabet.indexOf(coor[1])-1]) != null){
                if(document.getElementById((parseInt(coor[0])+2).toString()+ alphabet[alphabet.indexOf(coor[1])-1]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])+2).toString()+ alphabet[alphabet.indexOf(coor[1])-1]).firstChild.id[2] != "B"){
                        mov.push((parseInt(coor[0])+ 2).toString() +alphabet[alphabet.indexOf(coor[1])-1]);
                    }
                }else{
                    mov.push((parseInt(coor[0])+ 2).toString() +alphabet[alphabet.indexOf(coor[1])-1]);
                }
            }
            if(document.getElementById((parseInt(coor[0])-2).toString()+ alphabet[alphabet.indexOf(coor[1])+1]) != null){
                if(document.getElementById((parseInt(coor[0])-2).toString()+ alphabet[alphabet.indexOf(coor[1])+1]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])-2).toString()+ alphabet[alphabet.indexOf(coor[1])+1]).firstChild.id[2] != "B"){
                        mov.push((parseInt(coor[0])- 2).toString() +alphabet[alphabet.indexOf(coor[1])+1]);
                    }
                }else{
                    mov.push((parseInt(coor[0])- 2).toString() +alphabet[alphabet.indexOf(coor[1])+1]);
                }
            }
            if(document.getElementById((parseInt(coor[0])-2).toString()+ alphabet[alphabet.indexOf(coor[1])-1]) != null){
                if(document.getElementById((parseInt(coor[0])-2).toString()+ alphabet[alphabet.indexOf(coor[1])-1]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])-2).toString()+ alphabet[alphabet.indexOf(coor[1])-1]).firstChild.id[2] != "B"){
                        mov.push((parseInt(coor[0])- 2).toString() +alphabet[alphabet.indexOf(coor[1])-1]);
                    }
                }else{
                    mov.push((parseInt(coor[0])- 2).toString() +alphabet[alphabet.indexOf(coor[1])-1]);
                }
            }
            
            if(document.getElementById((parseInt(coor[0])-1).toString()+ alphabet[alphabet.indexOf(coor[1])-2]) != null){
                if(document.getElementById((parseInt(coor[0])-1).toString()+ alphabet[alphabet.indexOf(coor[1])-2]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])-1).toString()+ alphabet[alphabet.indexOf(coor[1])-2]).firstChild.id[2] != "B"){
                        mov.push((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-2]);
                    }
                }else{
                    mov.push((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-2]);
                }
            }
            if(document.getElementById((parseInt(coor[0])+1).toString()+ alphabet[alphabet.indexOf(coor[1])-2]) != null){
                if(document.getElementById((parseInt(coor[0])+1).toString()+ alphabet[alphabet.indexOf(coor[1])-2]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])+1).toString()+ alphabet[alphabet.indexOf(coor[1])-2]).firstChild.id[2] != "B"){
                        mov.push((parseInt(coor[0])+1).toString() +alphabet[alphabet.indexOf(coor[1])-2]);
                    }
                }else{
                    mov.push((parseInt(coor[0])+1).toString() +alphabet[alphabet.indexOf(coor[1])-2]);
                }
            }
            if(document.getElementById((parseInt(coor[0])-1).toString()+ alphabet[alphabet.indexOf(coor[1])+2]) != null){
                if(document.getElementById((parseInt(coor[0])-1).toString()+ alphabet[alphabet.indexOf(coor[1])+2]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])-1).toString()+ alphabet[alphabet.indexOf(coor[1])+2]).firstChild.id[2] != "B"){
                        mov.push((parseInt(coor[0])-1).toString() +alphabet[alphabet.indexOf(coor[1])+2]);
                    }
                }else{
                    mov.push((parseInt(coor[0])-1).toString() +alphabet[alphabet.indexOf(coor[1])+2]);
                }
            }
            if(document.getElementById((parseInt(coor[0])+1).toString()+ alphabet[alphabet.indexOf(coor[1])+2]) != null){
                if(document.getElementById((parseInt(coor[0])+1).toString()+ alphabet[alphabet.indexOf(coor[1])+2]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])+1).toString()+ alphabet[alphabet.indexOf(coor[1])+2]).firstChild.id[2] != "B"){
                        mov.push((parseInt(coor[0])+1).toString() +alphabet[alphabet.indexOf(coor[1])+2]);
                    }
                }else{
                    mov.push((parseInt(coor[0])+1).toString() +alphabet[alphabet.indexOf(coor[1])+2]);
                }
            }
        }

        if(/\d+AB/.test(piece)){
        
            aux = 1;
             
            for(var i = alphabet.indexOf(coor[1]) + 1 ; i < alphabet.length ; i++){
                if(document.getElementById((parseInt(coor[0])+ aux).toString()+alphabet[i]) != null){
                    if(document.getElementById((parseInt(coor[0])+ aux).toString()+alphabet[i]).firstChild != null){
                        if(document.getElementById((parseInt(coor[0])+ aux).toString()+alphabet[i]).firstChild.id[2] != "B"){
                            mov.push((parseInt(coor[0])+ aux).toString()+alphabet[i]);
                        }
                        break;
                    }else{
                        mov.push((parseInt(coor[0])+ aux).toString()+alphabet[i]);
                    }
                }
                aux++;
            }
            aux = 1;
            for(var i = alphabet.indexOf(coor[1])+ 1 ; i < alphabet.length ; i++){
                if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]) != null){
                    if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]).firstChild != null){
                        if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]).firstChild.id[2] != "B"){
                            mov.push((parseInt(coor[0])- aux).toString()+alphabet[i]);
                        }
                        break;
                    }else{
                        mov.push((parseInt(coor[0])-aux).toString()+alphabet[i]);
                    }
                }
                aux++;
            }

            aux = 1;
            for(var i = alphabet.indexOf(coor[1]) - 1 ; i >-1 ; i--){
                if(document.getElementById((parseInt(coor[0])+aux).toString()+alphabet[i]) != null){
                    if(document.getElementById((parseInt(coor[0])+aux).toString()+alphabet[i]).firstChild != null){
                        if(document.getElementById((parseInt(coor[0])+aux).toString()+alphabet[i]).firstChild.id[2] != "B"){
                            mov.push((parseInt(coor[0])+aux).toString()+alphabet[i]);
                        }
                        break;
                    }else{
                        mov.push((parseInt(coor[0])+aux).toString()+alphabet[i]);
                    }
                }
                aux++;
            }
            aux = 1;
            for(var i = alphabet.indexOf(coor[1]) - 1 ; i > -1 ; i--){
                if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]) != null){
                    if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]).firstChild != null){
                        if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]).firstChild.id[2] != "B"){
                            mov.push((parseInt(coor[0])- aux).toString()+alphabet[i]);
                        }
                        break;
                    }else{
                        mov.push((parseInt(coor[0])- aux).toString()+alphabet[i]);
                    }
                }
                aux++
            }
            
        }

            
        if(/\d+TB/.test(piece)){
              
            if(alphabet[alphabet.indexOf(coor[1])+1] != undefined){
                for(var i = alphabet.indexOf(coor[1]) + 1 ; i < alphabet.length ; i++){
                    if(document.getElementById(coor[0]+alphabet[i]).firstChild != null){
                        if(document.getElementById(coor[0]+alphabet[i]).firstChild.id[2] != "B"){
                            mov.push(coor[0]+alphabet[i]);
                        }
                        break;
                    }else{
                        mov.push(coor[0]+alphabet[i]);
                    }
                }
            }

            if(alphabet[alphabet.indexOf(coor[1])-1] != undefined){
                for(var i = alphabet.indexOf(coor[1]) - 1 ; i > -1 ; i--){
                    if(document.getElementById(coor[0]+alphabet[i]).firstChild != null){
                        if(document.getElementById(coor[0]+alphabet[i]).firstChild.id[2] != "B"){
                            mov.push(coor[0]+alphabet[i]);
                        }
                        break; 
                    }else{
                        mov.push(coor[0]+alphabet[i]);
                    }
                }
            }

            if(document.getElementById((parseInt(coor[0])- 1).toString() + coor[1])!= null){
                for(var i = (parseInt(coor[0])- 1) ; i > 0  ; i--){
                    if(document.getElementById(i.toString() + coor[1])!= null){
                        if(document.getElementById(i.toString() + coor[1]).firstChild != null){
                            if(document.getElementById(i.toString() + coor[1]).firstChild.id[2] != "B"){
                                mov.push(i.toString() + coor[1]);
                            }
                            break;
                        }else{
                            mov.push(i.toString() + coor[1]);
                        }
                    }
                }
                
            }

            if(document.getElementById((parseInt(coor[0])+ 1).toString() + coor[1])!= null){
                for(var i = (parseInt(coor[0])+ 1) ; i < 9  ; i++){
                    if(document.getElementById(i.toString() + coor[1])!= null){
                        if(document.getElementById(i.toString() + coor[1]).firstChild != null){
                            if(document.getElementById(i.toString() + coor[1]).firstChild.id[2] != "B"){
                                mov.push(i.toString() + coor[1]);
                            }
                            break;
                        }else{
                            mov.push(i.toString() + coor[1]);
                        }
                    }
                }
            }
         
            
        }
        
        return mov 
    }else if( (piece[2] == "N" && turn == "p2") || (piece[2] == "N" && ban)) {

        if(/\d+PN/.test(piece)){
            if(coor[0] == "7"){

                if(document.getElementById((parseInt(coor[0])- 2).toString() +coor[1]).firstChild == null){
                    mov.push((parseInt(coor[0])- 2).toString() +coor[1]);
                }
                if(document.getElementById((parseInt(coor[0])- 1).toString() +coor[1]).firstChild == null){
                    mov.push((parseInt(coor[0])- 1).toString() +coor[1]);
                }
                if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])+1])!= null){
                    if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]).firstChild != null){
                        if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]).firstChild.id[2] != "N"){
                            mov.push((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]);
                        }   
                    }
                }
                if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]) != null){
                    if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]).firstChild != null){
                        if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]).firstChild.id[2] != "N"){
                            mov.push((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]);
                        }
                    }
                }


            }else{
                if(document.getElementById((parseInt(coor[0])- 1).toString() +coor[1]).firstChild == null){
                    mov.push((parseInt(coor[0])- 1).toString() +coor[1]);
                }
                if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])+1])!= null){
                    if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]).firstChild != null){
                        if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]).firstChild.id[2] != "N"){
                            mov.push((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]);
                        }
                    }
                }
                if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]) != null){
                    if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]).firstChild != null){
                        if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]).firstChild.id[2] != "N"){
                            mov.push((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]);
                        }
                    }
                }
            }
        }

        if(/\d+KN/.test(piece)){
            
            if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]) != null){
                if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]).firstChild.id[2] != "N"){
                        mov.push((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]);
                    }
                }else{
                    mov.push((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]);
                }
            }
            if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]) != null){
                if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]).firstChild.id[2] != "N"){
                        mov.push((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]);
                    }
                }else{
                    mov.push((parseInt(coor[0])+ 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]);
                }
            }

            if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]) != null){
                if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]).firstChild.id[2] != "N"){
                        mov.push((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]);
                    }
                }else{
                    mov.push((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-1]);
                }
            }
            if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]) != null){
                if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]).firstChild.id[2] != "N"){
                        mov.push((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]);
                    }
                }else{
                    mov.push((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])+1]);
                }
            }

            if(document.getElementById((parseInt(coor[0])+ 1).toString() +coor[1]) != null){
                if(document.getElementById((parseInt(coor[0])+ 1).toString() +coor[1]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])+ 1).toString() +coor[1]).firstChild.id[2] != "N"){
                        mov.push((parseInt(coor[0])+ 1).toString() +coor[1]);
                    }
                }else{
                    mov.push((parseInt(coor[0])+ 1).toString() +coor[1]);
                }
            }
            if(document.getElementById((parseInt(coor[0])- 1).toString() +coor[1]) != null){
                if(document.getElementById((parseInt(coor[0])- 1).toString() +coor[1]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])- 1).toString() +coor[1]).firstChild.id[2] != "N"){
                        mov.push((parseInt(coor[0])- 1).toString() +coor[1]);
                    }
                }else{
                    mov.push((parseInt(coor[0])- 1).toString() +coor[1]);
                }
            }
            if(document.getElementById(coor[0] +alphabet[alphabet.indexOf(coor[1])+1]) != null){
                if(document.getElementById(coor[0] +alphabet[alphabet.indexOf(coor[1])+1]).firstChild){
                    if(document.getElementById(coor[0] +alphabet[alphabet.indexOf(coor[1])+1]).firstChild.id[2] != "N"){
                        mov.push(coor[0] +alphabet[alphabet.indexOf(coor[1])+1]);
                    }
                }else{
                    mov.push(coor[0] +alphabet[alphabet.indexOf(coor[1])+1]);
                }
            }

            if(document.getElementById(coor[0] +alphabet[alphabet.indexOf(coor[1])-1]) != null){
                if(document.getElementById(coor[0] +alphabet[alphabet.indexOf(coor[1])-1]).firstChild != null){
                    if(document.getElementById(coor[0] +alphabet[alphabet.indexOf(coor[1])-1]).firstChild.id[2] != "N"){
                        mov.push(coor[0] +alphabet[alphabet.indexOf(coor[1])-1]);
                    }
                }else{
                    mov.push(coor[0] +alphabet[alphabet.indexOf(coor[1])-1]);
                }
            }

        }
            
        if(/\d+QN/.test(piece)){
                
            aux = 1;
             
            for(var i = alphabet.indexOf(coor[1]) + 1 ; i < alphabet.length ; i++){
                if(document.getElementById((parseInt(coor[0])+ aux).toString()+alphabet[i]) != null){
                    if(document.getElementById((parseInt(coor[0])+ aux).toString()+alphabet[i]).firstChild != null){
                        if(document.getElementById((parseInt(coor[0])+ aux).toString()+alphabet[i]).firstChild.id[2] != "N"){
                            mov.push((parseInt(coor[0])+ aux).toString()+alphabet[i]);
                        }
                        break;
                    }else{
                        mov.push((parseInt(coor[0])+ aux).toString()+alphabet[i]);
                    }
                }
                aux++;
            }
            aux = 1;
            for(var i = alphabet.indexOf(coor[1])+ 1 ; i < alphabet.length ; i++){
                if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]) != null){
                    if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]).firstChild != null){
                        if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]).firstChild.id[2] != "N"){
                            mov.push((parseInt(coor[0])- aux).toString()+alphabet[i]);
                        }
                        break;
                    }else{
                        mov.push((parseInt(coor[0])-aux).toString()+alphabet[i]);
                    }
                }
                aux++;
            }

            aux = 1;
            for(var i = alphabet.indexOf(coor[1]) - 1 ; i >-1 ; i--){
                if(document.getElementById((parseInt(coor[0])+aux).toString()+alphabet[i]) != null){
                    if(document.getElementById((parseInt(coor[0])+aux).toString()+alphabet[i]).firstChild != null){
                        if(document.getElementById((parseInt(coor[0])+aux).toString()+alphabet[i]).firstChild.id[2] != "N"){
                            mov.push((parseInt(coor[0])+aux).toString()+alphabet[i]);
                        }
                        break;
                    }else{
                        mov.push((parseInt(coor[0])+aux).toString()+alphabet[i]);
                    }
                }
                aux++;
            }
            aux = 1;
            for(var i = alphabet.indexOf(coor[1]) - 1 ; i > -1 ; i--){
                if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]) != null){
                    if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]).firstChild != null){
                        if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]).firstChild.id[2] != "N"){
                            mov.push((parseInt(coor[0])- aux).toString()+alphabet[i]);
                        }
                        break;
                    }else{
                        mov.push((parseInt(coor[0])- aux).toString()+alphabet[i]);
                    }
                }
                aux++
            }

            if(alphabet[alphabet.indexOf(coor[1])+1] != undefined){
                for(var i = alphabet.indexOf(coor[1]) + 1 ; i < alphabet.length ; i++){
                    if(document.getElementById(coor[0]+alphabet[i]).firstChild != null){
                        if(document.getElementById(coor[0]+alphabet[i]).firstChild.id[2] != "N"){
                            mov.push(coor[0]+alphabet[i]);
                        }
                        break;
                    }else{
                        mov.push(coor[0]+alphabet[i]);
                    }
                }
            }

            if(alphabet[alphabet.indexOf(coor[1])-1] != undefined){
                for(var i = alphabet.indexOf(coor[1]) - 1 ; i > -1 ; i--){
                    if(document.getElementById(coor[0]+alphabet[i]).firstChild != null){
                        if(document.getElementById(coor[0]+alphabet[i]).firstChild.id[2] != "N"){
                            mov.push(coor[0]+alphabet[i]);
                        }
                        break; 
                    }else{
                        mov.push(coor[0]+alphabet[i]);
                    }
                }
            }

            if(document.getElementById((parseInt(coor[0])- 1).toString() + coor[1])!= null){
                for(var i = (parseInt(coor[0])- 1) ; i > 0  ; i--){
                    if(document.getElementById(i.toString() + coor[1])!= null){
                        if(document.getElementById(i.toString() + coor[1]).firstChild != null){
                            if(document.getElementById(i.toString() + coor[1]).firstChild.id[2] != "N"){
                                mov.push(i.toString() + coor[1]);
                            }
                            break;
                        }else{
                            mov.push(i.toString() + coor[1]);
                        }
                    }
                }
                
            }

            if(document.getElementById((parseInt(coor[0])+ 1).toString() + coor[1])!= null){
                for(var i = (parseInt(coor[0])+ 1) ; i < 9  ; i++){
                    if(document.getElementById(i.toString() + coor[1])!= null){
                        if(document.getElementById(i.toString() + coor[1]).firstChild != null){
                            if(document.getElementById(i.toString() + coor[1]).firstChild.id[2] != "N"){
                                mov.push(i.toString() + coor[1]);
                            }
                            break;
                        }else{
                            mov.push(i.toString() + coor[1]);
                        }
                    }
                }
            }

        }
         
        if(/\d+CN/.test(piece)){

            if(document.getElementById((parseInt(coor[0])+2).toString()+ alphabet[alphabet.indexOf(coor[1])+1]) != null){
                if(document.getElementById((parseInt(coor[0])+2).toString()+ alphabet[alphabet.indexOf(coor[1])+1]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])+2).toString()+ alphabet[alphabet.indexOf(coor[1])+1]).firstChild.id[2] != "N"){
                        mov.push((parseInt(coor[0])+ 2).toString() +alphabet[alphabet.indexOf(coor[1])+1]);
                    }
                }else{
                    mov.push((parseInt(coor[0])+ 2).toString() +alphabet[alphabet.indexOf(coor[1])+1]);
                }
            }
            if(document.getElementById((parseInt(coor[0])+2).toString()+ alphabet[alphabet.indexOf(coor[1])-1]) != null){
                if(document.getElementById((parseInt(coor[0])+2).toString()+ alphabet[alphabet.indexOf(coor[1])-1]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])+2).toString()+ alphabet[alphabet.indexOf(coor[1])-1]).firstChild.id[2] != "N"){
                        mov.push((parseInt(coor[0])+ 2).toString() +alphabet[alphabet.indexOf(coor[1])-1]);
                    }
                }else{
                    mov.push((parseInt(coor[0])+ 2).toString() +alphabet[alphabet.indexOf(coor[1])-1]);
                }
            }
            if(document.getElementById((parseInt(coor[0])-2).toString()+ alphabet[alphabet.indexOf(coor[1])+1]) != null){
                if(document.getElementById((parseInt(coor[0])-2).toString()+ alphabet[alphabet.indexOf(coor[1])+1]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])-2).toString()+ alphabet[alphabet.indexOf(coor[1])+1]).firstChild.id[2] != "N"){
                        mov.push((parseInt(coor[0])- 2).toString() +alphabet[alphabet.indexOf(coor[1])+1]);
                    }
                }else{
                    mov.push((parseInt(coor[0])- 2).toString() +alphabet[alphabet.indexOf(coor[1])+1]);
                }
            }
            if(document.getElementById((parseInt(coor[0])-2).toString()+ alphabet[alphabet.indexOf(coor[1])-1]) != null){
                if(document.getElementById((parseInt(coor[0])-2).toString()+ alphabet[alphabet.indexOf(coor[1])-1]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])-2).toString()+ alphabet[alphabet.indexOf(coor[1])-1]).firstChild.id[2] != "N"){
                        mov.push((parseInt(coor[0])- 2).toString() +alphabet[alphabet.indexOf(coor[1])-1]);
                    }
                }else{
                    mov.push((parseInt(coor[0])- 2).toString() +alphabet[alphabet.indexOf(coor[1])-1]);
                }
            }
            
            if(document.getElementById((parseInt(coor[0])-1).toString()+ alphabet[alphabet.indexOf(coor[1])-2]) != null){
                if(document.getElementById((parseInt(coor[0])-1).toString()+ alphabet[alphabet.indexOf(coor[1])-2]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])-1).toString()+ alphabet[alphabet.indexOf(coor[1])-2]).firstChild.id[2] != "N"){
                        mov.push((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-2]);
                    }
                }else{
                    mov.push((parseInt(coor[0])- 1).toString() +alphabet[alphabet.indexOf(coor[1])-2]);
                }
            }
            if(document.getElementById((parseInt(coor[0])+1).toString()+ alphabet[alphabet.indexOf(coor[1])-2]) != null){
                if(document.getElementById((parseInt(coor[0])+1).toString()+ alphabet[alphabet.indexOf(coor[1])-2]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])+1).toString()+ alphabet[alphabet.indexOf(coor[1])-2]).firstChild.id[2] != "N"){
                        mov.push((parseInt(coor[0])+1).toString() +alphabet[alphabet.indexOf(coor[1])-2]);
                    }
                }else{
                    mov.push((parseInt(coor[0])+1).toString() +alphabet[alphabet.indexOf(coor[1])-2]);
                }
            }
            if(document.getElementById((parseInt(coor[0])-1).toString()+ alphabet[alphabet.indexOf(coor[1])+2]) != null){
                if(document.getElementById((parseInt(coor[0])-1).toString()+ alphabet[alphabet.indexOf(coor[1])+2]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])-1).toString()+ alphabet[alphabet.indexOf(coor[1])+2]).firstChild.id[2] != "N"){
                        mov.push((parseInt(coor[0])-1).toString() +alphabet[alphabet.indexOf(coor[1])+2]);
                    }
                }else{
                    mov.push((parseInt(coor[0])-1).toString() +alphabet[alphabet.indexOf(coor[1])+2]);
                }
            }
            if(document.getElementById((parseInt(coor[0])+1).toString()+ alphabet[alphabet.indexOf(coor[1])+2]) != null){
                if(document.getElementById((parseInt(coor[0])+1).toString()+ alphabet[alphabet.indexOf(coor[1])+2]).firstChild != null){
                    if(document.getElementById((parseInt(coor[0])+1).toString()+ alphabet[alphabet.indexOf(coor[1])+2]).firstChild.id[2] != "N"){
                        mov.push((parseInt(coor[0])+1).toString() +alphabet[alphabet.indexOf(coor[1])+2]);
                    }
                }else{
                    mov.push((parseInt(coor[0])+1).toString() +alphabet[alphabet.indexOf(coor[1])+2]);
                }
            }
        }

        if(/\d+AN/.test(piece)){
        
            
            aux = 1;
             
            for(var i = alphabet.indexOf(coor[1]) + 1 ; i < alphabet.length ; i++){
                if(document.getElementById((parseInt(coor[0])+ aux).toString()+alphabet[i]) != null){
                    if(document.getElementById((parseInt(coor[0])+ aux).toString()+alphabet[i]).firstChild != null){
                        if(document.getElementById((parseInt(coor[0])+ aux).toString()+alphabet[i]).firstChild.id[2] != "N"){
                            mov.push((parseInt(coor[0])+ aux).toString()+alphabet[i]);
                        }
                        break;
                    }else{
                        mov.push((parseInt(coor[0])+ aux).toString()+alphabet[i]);
                    }
                }
                aux++;
            }
            aux = 1;
            for(var i = alphabet.indexOf(coor[1])+ 1 ; i < alphabet.length ; i++){
                if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]) != null){
                    if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]).firstChild != null){
                        if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]).firstChild.id[2] != "N"){
                            mov.push((parseInt(coor[0])- aux).toString()+alphabet[i]);
                        }
                        break;
                    }else{
                        mov.push((parseInt(coor[0])-aux).toString()+alphabet[i]);
                    }
                }
                aux++;
            }

            aux = 1;
            for(var i = alphabet.indexOf(coor[1]) - 1 ; i >-1 ; i--){
                if(document.getElementById((parseInt(coor[0])+aux).toString()+alphabet[i]) != null){
                    if(document.getElementById((parseInt(coor[0])+aux).toString()+alphabet[i]).firstChild != null){
                        if(document.getElementById((parseInt(coor[0])+aux).toString()+alphabet[i]).firstChild.id[2] != "N"){
                            mov.push((parseInt(coor[0])+aux).toString()+alphabet[i]);
                        }
                        break;
                    }else{
                        mov.push((parseInt(coor[0])+aux).toString()+alphabet[i]);
                    }
                }
                aux++;
            }
            aux = 1;
            for(var i = alphabet.indexOf(coor[1]) - 1 ; i > -1 ; i--){
                if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]) != null){
                    if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]).firstChild != null){
                        if(document.getElementById((parseInt(coor[0])- aux).toString()+alphabet[i]).firstChild.id[2] != "N"){
                            mov.push((parseInt(coor[0])- aux).toString()+alphabet[i]);
                        }
                        break;
                    }else{
                        mov.push((parseInt(coor[0])- aux).toString()+alphabet[i]);
                    }
                }
                aux++
            }
        }


        if(/\d+TN/.test(piece)){
            
            if(alphabet[alphabet.indexOf(coor[1])+1] != undefined){
                for(var i = alphabet.indexOf(coor[1]) + 1 ; i < alphabet.length ; i++){
                    if(document.getElementById(coor[0]+alphabet[i]).firstChild != null){
                        if(document.getElementById(coor[0]+alphabet[i]).firstChild.id[2] != "N"){
                            mov.push(coor[0]+alphabet[i]);
                        }
                        break;
                    }else{
                        mov.push(coor[0]+alphabet[i]);
                    }
                }
            }

            if(alphabet[alphabet.indexOf(coor[1])-1] != undefined){
                for(var i = alphabet.indexOf(coor[1]) - 1 ; i > -1 ; i--){
                    if(document.getElementById(coor[0]+alphabet[i]).firstChild != null){
                        if(document.getElementById(coor[0]+alphabet[i]).firstChild.id[2] != "N"){
                            mov.push(coor[0]+alphabet[i]);
                        }
                        break; 
                    }else{
                        mov.push(coor[0]+alphabet[i]);
                    }
                }
            }

            if(document.getElementById((parseInt(coor[0])- 1).toString() + coor[1])!= null){
                for(var i = (parseInt(coor[0])- 1) ; i > 0  ; i--){
                    if(document.getElementById(i.toString() + coor[1])!= null){
                        if(document.getElementById(i.toString() + coor[1]).firstChild != null){
                            if(document.getElementById(i.toString() + coor[1]).firstChild.id[2] != "N"){
                                mov.push(i.toString() + coor[1]);
                            }
                            break;
                        }else{
                            mov.push(i.toString() + coor[1]);
                        }
                    }
                }
                
            }

            if(document.getElementById((parseInt(coor[0])+ 1).toString() + coor[1])!= null){
                for(var i = (parseInt(coor[0])+ 1) ; i < 9  ; i++){
                    if(document.getElementById(i.toString() + coor[1])!= null){
                        if(document.getElementById(i.toString() + coor[1]).firstChild != null){
                            if(document.getElementById(i.toString() + coor[1]).firstChild.id[2] != "N"){
                                mov.push(i.toString() + coor[1]);
                            }
                            break;
                        }else{
                            mov.push(i.toString() + coor[1]);
                        }
                    }
                }
            }
         
        }
        
        return mov;
    }


    return null;

}