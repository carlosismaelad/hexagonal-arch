import { terminal } from "terminal-kit";
import { MeasureMemoryMode } from "vm";

export default class TerminalUtil {
  static titulo(texto: string) {
    terminal.clear();
    terminal.magenta(`${texto}\n`);
    terminal.magenta(`-`.repeat(texto.length) + `\n`);
  }

  static limpar() {
    terminal.clear();
  }

  static exibirChaveEValor(chave: string, valor: any) {
    terminal.yellow(chave).green(valor).white("\n");
  }

  static async menu(opções: string[]): Promise<[number, string]> {
    const resposta = await terminal.singleColumnMenu(opções).promise;
    return [resposta.selectedIndex, resposta.selectedText];
  }

  static async selecao(
    texto: string,
    opcoes: string[]
  ): Promise<[number, string]> {
    terminal.yellow(`\n${texto}`);
    const resposta = await terminal.singleLineMenu(opcoes).promise;
    return [resposta.selectedIndex, resposta.selectedText];
  }

  static async confirmacao(texto: string): Promise<boolean> {
    terminal.yellow(`\n${texto}`);
    const resposta = await terminal.singleLineMenu(["Sim", "Não"]).promise;
    return resposta.selectedIndex === 0;
  }

  static async esperarEnter(): Promise<void> {
    terminal.white("\nPressione ENTER para continuar...");
    await terminal.inputField({ echo: false }).promise;
  }
}
