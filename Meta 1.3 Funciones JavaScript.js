const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

arrancarPrograma();
//Arranque del programa.
function arrancarPrograma(){
    rl.question('Ingresa el número de procesos a simular: ', function (numeroProcesos) {
        rl.close();
        iniciarSimulacion(numeroProcesos);
    });
}

//Inicio de la simulación donde se genera el arreglo predefinido, se inicializan los objetos y se aplica el algoritmo de RoundRobin.
function iniciarSimulacion(numeroProcesos) {
    const procesos = [];
    const arregloPredefinido = [
        "a=1+2;",
        "console.log(1+2);",
        "console.log(a);",
        "b=3+4;",
        "console.log(3+4);",
        "c=5+6;",
        "console.log(5+6);",
        "console.log(c);"
    ];
    //Se inicializan los objetos.
    for (let i = 1; i <= numeroProcesos; i++) {
        const proceso = {
            numero: i,
            indice: 0,
            cadena: []
        };
        selectorAleatorio(proceso, arregloPredefinido);
        procesos.push(proceso);
    }
    console.log(procesos); //Muestra el contenido dentro de los objetos.
    console.log();
    //Se aplica el algoritmo RoundRobin.
    while (true) {
        let todosTerminados = true;

        for (const proceso of procesos) {
            const cadenaActual = proceso.cadena[proceso.indice];
            if (cadenaActual) {
                console.log(`Proceso ${proceso.numero}`);
                console.log(cadenaActual);
                console.log();

                proceso.indice++;
                todosTerminados = false;
            } else {
                console.log(`Proceso ${proceso.numero} - Terminado`);
                console.log();
            }
        }
        if (todosTerminados) {
            break;
        }
    }
}
//Se generan números aleatorios para seleccionar una cadena.
function selectorAleatorio(proceso, arregloPredefinido){
    const min = 1;
    const maxNumero = 5;
    const maxArreglo = 8;
    
    const x = Math.floor(Math.random() * (maxNumero - min + 1) + min);
    for (let j = 0; j < x; j++) {
        const y = Math.floor(Math.random() * (maxArreglo - 0) + 0);       
        proceso.cadena.push(arregloPredefinido[y]);
    }
}