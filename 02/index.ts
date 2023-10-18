type Endereco = {
  cep: string;
  rua: string;
  complemento?: string;
  bairro: string;
  cidade: string;
};

type Usuario = {
  nome: string;
  email: string;
  cpf: string;
  profissao?: string;
  endereco: Endereco | null;
};

const cadastrarUsuario = (usuario: Usuario): Usuario => {
  const bd = lerarquivo() as Usuario[];
  bd.push(usuario);
  escreverArquivo(bd);
  return usuario;
};

const listarUsuarios = () => {
  return lerarquivo() as Usuario[];
};
