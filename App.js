var formBienvenida = document.getElementById('form-bienvenida');
var formLogica = document.getElementById('form-logica');

var datos = ['0', '0'];

var elNumeroAleatorio = -1;
console.log(elNumeroAleatorio);

function hidePrograma() {
    document.getElementById('programa').style.display = 'none';
    document.getElementById('btn-aceptar').disabled = false;
    document.getElementById('btn-aceptar').classList.remove('desactivado');

    // datos = datos.slice(0, 2);
    resetAll();
    // document.getElementById('limite').value = '0';
    // document.getElementById('intentos').value = '0';

    console.log('la longitud del array es ' + datos.length);
    console.log(datos[0] + ' y ' + datos[1]);
}

function resetAll() {
    document.getElementById('lbl-principal').innerHTML =
        'Intenta adivinar un número entre 0 y ';
    document.getElementById('ingresado').placeholder =
        'Ingresa un número entre 0 y ';
    document.getElementById('lbl-intento').innerHTML = 'Intento Número: ';
    document.getElementById('indicador').innerHTML = '-<br />-';
    document.getElementById('ingresado').value = '';
}

formBienvenida.onsubmit = function (e) {
    e.preventDefault();
    limite = document.getElementById('limite').value;
    intentos = document.getElementById('intentos').value;

    datos[0] = limite;
    datos[1] = intentos;
    logear();
    elegirAleatorio();
    document.getElementById('lbl-principal').innerHTML += limite;
    document.getElementById('ingresado').placeholder += limite;
    document.getElementById('lbl-intento').innerHTML += intentos;
    document.getElementById('programa').style.display = 'block';
    document.getElementById('btn-ok').disabled = false;
    document.getElementById('btn-ok').classList.remove('desactivado');
    document.getElementById('btn-aceptar').disabled = true;
    document.getElementById('btn-aceptar').classList.add('desactivado');
};

function elegirAleatorio() {
    limite = datos[0];
    elNumeroAleatorio = Math.floor(Math.random() * (limite - 0 + 1) + 0);
    console.log(elNumeroAleatorio);
}

formLogica.onsubmit = function (e) {
    e.preventDefault();
    logica();
    reducirIntentos();
};

function reducirIntentos() {
    datos[1] = datos[1] - 1;
    document.getElementById('lbl-intento').innerHTML =
        'Intento Número: ' + datos[1];
}

function envioNumero() {
    var n_ingresado = document.getElementById('ingresado').value;
    return n_ingresado;
}

function logica() {
    var limite = datos[0];
    var intentos = datos[1] - 1;
    var numeroElegido = -1;
    var ganador = 0;

    console.log('El numero de intentos es: ' + intentos);

    if (intentos == 0) {
        ganador = 1;
    } else {
        numeroElegido = envioNumero();

        if (numeroElegido > elNumeroAleatorio) {
            document.getElementById('indicador').innerHTML =
                'El número ingresado es mayor';
        } else if (numeroElegido < elNumeroAleatorio) {
            document.getElementById('indicador').innerHTML =
                'El número ingresado es menor';
        } else {
            ganador = 2;
        }
    }

    if (ganador == 2) {
        document.getElementById('indicador').innerHTML =
            'Felicidades, adivinaste el número!';
        document.getElementById('btn-ok').disabled = true;
        document.getElementById('btn-ok').classList.add('desactivado');
        document.getElementById('btn-aceptar').disabled = false;
        document.getElementById('btn-aceptar').classList.remove('desactivado');
    } else if (ganador == 1) {
        document.getElementById('indicador').innerHTML =
            'Mala suerte, el número era ' + elNumeroAleatorio;
        document.getElementById('btn-ok').disabled = true;
        document.getElementById('btn-ok').classList.add('desactivado');
        document.getElementById('btn-aceptar').disabled = false;
        document.getElementById('btn-aceptar').classList.remove('desactivado');
    }
}

function logear() {
    console.log(datos[0]);
    console.log(datos[1]);
}
