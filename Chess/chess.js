function comienzaJuego(){
    
    //Tablero

    let board = document.getElementById("board");
    let mBoard = [];
    let alphabet = ['a','b', 'c', 'd', 'e', 'f' , 'g', 'h']

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
    document.getElementById("menu").style.visibility = "hidden";
    
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
    let e = elem.target
    if(elem.target.tagName== "BUTTON"){
        e = elem.target.firstChild;
    }
    console.log(e);
}