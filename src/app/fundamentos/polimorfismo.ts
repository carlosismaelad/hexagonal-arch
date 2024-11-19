import Carro from "@/core/fundamentos/Carro";
import TerminalUtil from "../util/TerminalUtil";
import Ferrari from "@/core/fundamentos/Ferrari";
import Fusca from "@/core/fundamentos/Fusca";

export default async function polimorfismo() {
  TerminalUtil.titulo("Polimorfismo");

  const [tipoCarro] = await TerminalUtil.selecao("Tipo de carro?", [
    "Ferrari",
    "Fusca",
  ]);

  const carro: Carro = tipoCarro === 0 ? new Ferrari() : new Fusca();

  while (true) {
    TerminalUtil.limpar();
    TerminalUtil.exibirChaveEValor(
      "velocidade máxima: ",
      `${carro.velocidadeMaxima} km/h`
    );

    TerminalUtil.exibirChaveEValor(
      "velocidade atual: ",
      `${carro.velocidadeAtual} km/h`
    );

    const [opcao] = await TerminalUtil.selecao("Qual opção?", [
      "ACELERAR",
      "FREAR",
    ]);

    opcao === 0 ? carro.acelerar() : carro.frear();

    const continuar = await TerminalUtil.confirmacao("Deseja continuar?");

    if (!continuar) return;
  }
}
