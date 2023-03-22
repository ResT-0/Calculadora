export default {
    data() {
      return {
        valorCorrente: '',
        numeroAnterior: null,
        operador: null,
        operadorClicado: false,
      };
    },
    methods: {
      limpar() {
        this.valorCorrente = '';
      },
      sinal() {
        this.valorCorrente = this.valorCorrente.charAt(0) === '-'
          ? this.valorCorrente.slice(1)
          : `-${this.valorCorrente}`;
      },
      porcentagem() {
        this.valorCorrente = `${parseFloat(this.valorCorrente) / 100}`;
      },
      juntarNumeros(numero) {
        if (this.operadorClicado) {
          this.valorCorrente = '';
          this.operadorClicado = false;
        }
        this.valorCorrente = `${this.valorCorrente}${numero}`;
      },
      ponto() {
          if (this.valorCorrente.indexOf('.') === -1) {
            this.juntarNumeros('.');
          }
        },
      setarValor() {
        this.numeroAnterior = this.valorCorrente;
        this.operadorClicado = true;
      },
      resultado() {
        this.valorCorrente = `${this.operador(
          parseFloat(this.numeroAnterior),
          parseFloat(this.valorCorrente),
        )}`;
        this.numeroAnterior = null;
      },
      resultado() {
        this.valorCorrente = `${this.operador(
          parseFloat(this.numeroAnterior),
          parseFloat(this.valorCorrente),
        )}`;
        this.numeroAnterior = null;
      },
      dividir() {
        this.operador = (num1, num2) => num1 / num2;
        this.setarValor();
      },
      multiplicar() {
        this.operador = (num1, num2) => num1 * num2;
        this.setarValor();
      },
      somar() {
        this.operador = (num1, num2) => num1 + num2;
        this.setarValor();
      },
      diminuir() {
        this.operador = (num1, num2) => num1 - num2;
        this.setarValor();
      },
      logbase10() {
        this.operador = (num1) => Math.log10(num1);
        this.setarValor();
      },
      logbasey() {
            this.operador = (num1, num2) =>{
                if(num1 === 0 || num2 === 0){
                    return 'Erro';
                }
                return Math.log10(num1) / Math.log10(num2);
            } 
            this.setarValor();
      },
      raizquadrada() {
        this.operador = (num1) => Math.sqrt(num1);
        this.setarValor();
      },
      raizxy() {
        this.operador = (num1, num2) =>{
            if(num1 === 0 || num2 === 0){
                return 'Erro';
            }
            return Math.pow(num1, 1/num2);
        } 
        this.setarValor();
        },
        potenciade2() {
            this.operador = (num1) => Math.pow(num1, 2);
            this.setarValor();
        },
        potenciadey() {
            this.operador = (num1, num2) => Math.pow(num1, num2);
            this.setarValor();
        }
    }
}