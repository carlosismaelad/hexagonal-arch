export default interface CasoDeUso<IN, OUT> {
  executar(input: any): Promise<any>;
}
