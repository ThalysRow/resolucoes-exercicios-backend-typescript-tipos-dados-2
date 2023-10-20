const filtrarUsuarios = (profissao: string): Usuario[] => {
  const db = lerarquivo() as Usuario[];
  const usuarios = db.filter((usuario) => usuario.profissao === profissao);
  if (!usuarios) {
    throw new Error("Não foram encontrados resultados para esta busca");
  }
  return usuarios;
};
