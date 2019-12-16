var boton_start = document.getElementById("start");
var cuenta = 0;
var ban = true; 

boton_start.addEventListener('click' , () => {
    Concurrent.Thread.create(reloj, document.getElementById("hrs"), document.getElementById("min") , document.getElementById("seg"), ban);
    boton_start.style.visibility = "hidden";

    let sudoku = [];
    let prueba = [];
    
    if(generaSudoku(sudoku)){
        console.log(sudoku);
    }
    prueba =  generaPuzzle(sudoku);
    console.log(prueba);
     for(var i = 0; i < 9 ; i ++){
        for(var j = 0; j < 9 ; j++){
            if(prueba[i][j] != 0){
                document.getElementById("row"+i.toString()+"-col"+j.toString()).value = prueba[i][j];
                document.getElementById("row"+i.toString()+"-col"+j.toString()).disabled = true;
            }else{
                document.getElementById("row"+i.toString()+"-col"+j.toString()).addEventListener("change", function(){validaResuesta(this,sudoku)} , false);
            }
        }
    }

    document.getElementById("contenedor").style.visibility = "visible";


});

function reloj(hrs, min , seg, termino){
    
    var actualizarHora = function(){
        if(termino){
            var fecha = new Date(),
            hora = fecha.getHours(),
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            ampm;
            if(parseInt(seg.innerHTML) > 59){
                seg.innerHTML = "00"
                if(parseInt(min.innerHTML) > 59){
                    min.innerHTML = "00"
                    if(parseInt(hrs.innerHTML) > 23){
                        return; 
                    }else{
                        if(parseInt(hrs.innerHTML) < 9){
                            hrs.innerHTML = "0" + (parseInt(hrs.innerHTML) + 1).toString();
                        }else{
                            hrs.innerHTML = (parseInt(hrs.innerHTML) + 1).toString();
                        }  
                    }
                }else{
                    if(parseInt(min.innerHTML) < 9){
                        min.innerHTML = "0" + (parseInt(min.innerHTML) + 1).toString();
                    }else{
                        min.innerHTML = (parseInt(min.innerHTML) + 1).toString();
                    }  
                }
            }else{
                if(parseInt(seg.innerHTML) < 9){
                    seg.innerHTML = "0" + (parseInt(seg.innerHTML) + 1).toString();
                }else{
                    seg.innerHTML = (parseInt(seg.innerHTML) + 1).toString();
                }
                
            }
        }
      };
      
      if(termino){
        actualizarHora();
      }
      
      var intervalo = setInterval(actualizarHora,1000);

}

function validaResuesta(e, sudoku){
    let temp = true; 
    i = parseInt(e.id[e.id.indexOf("w") + 1]);
    j = parseInt(e.id[e.id.indexOf("l") + 1]);
   
    if(e.value == sudoku[i][j]){
            console.log("Correcto");
            document.getElementById("row"+i.toString()+"-col"+j.toString()).style.background = "white";
            e.disabled = true;
            for(var i = 0; i < 9 ; i ++){
                for(var j = 0; j < 9 ; j++){
                    if(!document.getElementById("row"+i.toString()+"-col"+j.toString()).disabled){
                       temp = false;
                    }
                }
            }
            if(temp){
                fin("win");
            }
    }else{
            e.style.backgroundColor = "red";
            cuenta += 1; 
            if(cuenta == 3){
                fin("loss");
                cuenta = 0; 
            }
    }
}

function fin(state){
    ban = false; 
    document.getElementById("contenedor").style.visibility = "hidden";
    document.getElementById("lossMessage").style.visibility = "visible";
    if(state == "loss"){
        document.getElementById("message").innerHTML = "Perdiste";
    }else{
        document.getElementById("message").innerHTML = "Ganaste";
    }
    
}

function validaPuzzle(puzzle){
    let temp = [];

    for(var i = 0 ; i < puzzle.length ; i++){
        temp.push([]);
        for(var j = 0 ; j < puzzle[0].length; j++){
            temp[i].push(puzzle[i][j])
        }
    }

    if(genera(temp)){
        return true;
    }else{
        return false; 
    }

}


function generaPuzzle(sudoku){
    let prueba = [];

    for(var i = 0 ; i < sudoku.length ; i++){
        prueba.push([]);
        let rand = Math.floor((Math.random() * (9)));
        let num = [];
        for(var n = 0 ; n < rand ; n++){
            if(num.length == 0){
                num.push(Math.floor((Math.random() * (8))));
            }else{
                let random = Math.floor((Math.random() * (8)))
                if(num.indexOf(random) == -1 ){
                    num.push(random);
                }
            }
        }
        for(var j = 0 ; j < sudoku[i].length; j++){
            if(num.indexOf(j) != -1){
                prueba[i].push(0);
            }
            else{
                prueba[i].push(sudoku[i][j]);
            }
        } 
    }

    if(validaPuzzle(prueba)){
        return prueba; 
    }else{
        generaPuzzle(sudoku);
    }

    

}


function generaSudoku(sudoku){
   

    for(var i = 0 ; i < 9 ; i ++){
        sudoku.push([]);
        for(var j = 0 ; j < 9 ; j++){
            sudoku[i].push(0)
        }
    }

    genera(sudoku);
    return true;
}


function genera(sudoku){
    

    if(buscaVacio(sudoku)== true){
        return true;
    }else{
        if(sudoku[0][8] == 0){
            primeraFila(sudoku); 
        }
        let coor = buscaVacio(sudoku);
        for(var i = 1 ; i < 10 ; i ++){
            if(agrega(coor , i , sudoku)){
                sudoku[coor[0]][coor[1]] = i;
                if(genera(sudoku)){
                    return true;
                }
                sudoku[coor[0]][coor[1]] = 0;
            }
        }
    }

}

function agrega(coor ,val, sudoku){

    if(sudoku[coor[0]].indexOf(val) != -1){
            return false;
    }
    
    for(var i = 0 ; i < 9 ; i++){
        if(sudoku[i][coor[1]] == val && i != coor[0]){
            return false;  
        }
    }

    box_x = Math.floor(coor[1] / 3)
    box_y = Math.floor(coor[0] / 3)

    for(var i = box_y * 3 ; i < box_y * 3 + 3 ; i++){
        for(var j = box_x * 3 ; j < box_x * 3 + 3 ; j++){
            if(sudoku[i][j] == val && ( i  != coor[0] && j != coor[1])){
                return false; 
            }
        }
    }

    return true; 

}

function buscaVacio(sudoku){

    for(var i = 0 ; i < sudoku.length ; i++){
    
        for(var j = 0 ; j < sudoku[i].length ; j++){

            if(sudoku[i][j] == 0){
                return [i,j];
            }

        }
    }
    
    return true;
}

function primeraFila(sudoku){
    let num = [1,2,3,4,5,6,7,8,9];
    for(var n = 0 ; n < 9 ; n++){
        var ale = Math.floor((Math.random() * (num.length)));
        sudoku[0][n] = num.splice(ale , 1)[0];
    }
    
}