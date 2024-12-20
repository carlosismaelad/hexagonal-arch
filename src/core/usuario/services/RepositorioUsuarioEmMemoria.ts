import Usuario from "../models/Usuario";

export default class RepositorioUsuarioEmMemoria {
  private static readonly itens: Usuario[] = [];

  async inserir(usuario: Usuario) {
    const itens = RepositorioUsuarioEmMemoria.itens;
    const usuarioJaExiste = await this.buscarPorEmail(usuario.email);
    if (usuarioJaExiste) return;
    itens.push(usuario);
  }

  async buscarPorEmail(email: string): Promise<Usuario | null> {
    const itens = RepositorioUsuarioEmMemoria.itens;
    return itens.find((u) => u.email === email) ?? null;
  }
}
