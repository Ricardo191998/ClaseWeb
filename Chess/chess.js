var temp; 
var turn; 
var movValido = [];
var alphabet = ['a','b', 'c', 'd', 'e', 'f' , 'g', 'h']


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


function movimiento(elem){
    
    console.log(temp);
    let piece;
    let coor; 
    
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
            movValido = pintaCasillas(piece.id, coor.id); 
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
            }
        }
    }else{
        if(movValido.indexOf(coor.id) != -1 ){
            console.log("Valido");
            let newPiece = document.getElementById(temp).firstChild
            document.getElementById(temp).removeChild(newPiece);
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


function pintaCasillas(piece , coor){
    let mov = []; 

    if(piece[2] == "B" && turn == "p1"){
        if(/\d+PB/.test(piece)){
            if(coor[0] == "2"){
                console.log("Empezando");
                console.log(coor);
                if(document.getElementById((parseInt(coor[0])+ 2).toString() +coor[1]).firstChild == null){
                    document.getElementById((parseInt(coor[0])+ 2).toString() +coor[1]).style.backgroundColor = "#21C6E3";
                    mov.push((parseInt(coor[0])+ 2).toString() +coor[1]);
                }
                if(document.getElementById((parseInt(coor[0])+ 1).toString() +coor[1]).firstChild == null){
                    document.getElementById((parseInt(coor[0])+ 1).toString() +coor[1]).style.backgroundColor = "#21C6E3";
                    mov.push((parseInt(coor[0])+ 1).toString() +coor[1]);
                }
                
            }else{
                if(document.getElementById((parseInt(coor[0])+ 1).toString() +coor[1]).firstChild == null){
                    document.getElementById((parseInt(coor[0])+ 1).toString() +coor[1]).style.backgroundColor = "#21C6E3";
                    mov.push((parseInt(coor[0])+ 1).toString() +coor[1]);
                }
            }
        }

        if(/\d+KB/.test(piece)){
                
            if(coor[0] == "1"){
                    
                
            }else{
                
            }
        }

          
        if(/\d+QB/.test(piece)){
            
            if(coor[0] == "1"){
                    
            }else{
                
            }
        }

         
        if(/\d+CB/.test(piece)){

            if(coor[0] == "1"){
                
                
            }else{
                
            }
        }

        if(/\d+AB/.test(piece)){
        
            
            if(coor[0] == "1"){
                    
                
            }else{
                
            }
        }

            
        if(/\d+TB/.test(piece)){
            
            if(coor[0] == "1"){
                    
                
            }else{
                
            }
        }
        return mov 
    }else if( piece[2] == "N" && turn == "p2") {

        if(/\d+PN/.test(piece)){
            if(coor[0] == "7"){
                document.getElementById((parseInt(coor[0])-1).toString() +coor[1]).style.backgroundColor = "#21C6E3";
                document.getElementById((parseInt(coor[0])- 2).toString() +coor[1]).style.backgroundColor = "#21C6E3";
                mov.push((parseInt(coor[0])- 1).toString() +coor[1]);
                mov.push((parseInt(coor[0])- 2).toString() +coor[1]);
            }else{
                document.getElementById((parseInt(coor[0])- 1).toString() +coor[1]).style.backgroundColor = "#21C6E3";
                mov.push((parseInt(coor[0])- 1).toString() +coor[1]);
            }
        }

        if(/\d+KN/.test(piece)){
            
            if(coor[0] == "8"){
                    
            
            }else{
                
            }
        }
            
        if(/\d+QN/.test(piece)){
                
            if(coor[0] == "8"){
                    
            }else{
            
            }
        }
         
        if(/\d+CN/.test(piece)){

            if(coor[0] == "8"){
                
                
            }else{
                
            }
        }

        if(/\d+AN/.test(piece)){
        
            
            if(coor[0] == "8"){
                    
                
            }else{
                
            }
        }


        if(/\d+TN/.test(piece)){
            
            if(coor[0] == "8"){
                    
                
            }else{
                
            }
        }
        return mov;
    }


    return null;

}