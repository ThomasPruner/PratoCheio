// Regras de negócio das doações.
// TODO (grupo): implementar conforme as histórias e os critérios de aceite da Unidade 1.
import * as repo from './repositorio.js';

// História zero — "um doador publica uma doação".
// Critério: tipo, quantidade e validade são obrigatórios.
export async function criarDoacao({ tipo, quantidade, validade } = {}) {
  if (!tipo || !quantidade || !validade) {
    throw new Error('tipo, quantidade e validade são obrigatórios');
  }
  return repo.inserir({ tipo, quantidade, validade });
}

// História zero — "uma ONG vê as doações disponíveis".
export async function listarDisponiveis() {
  return repo.listarDisponiveis();
}

// História zero — "uma ONG aceita uma doação".
// Regra do caso: uma doação aceita não fica disponível para outra ONG.
export async function aceitar(id, ong) {
  const doacao = await repo.buscarPorId(id);
  if (!doacao) {
    throw new Error('doação não encontrada');
  }
  if (doacao.status !== 'disponivel') {
    throw new Error('doação já foi aceita');
  }
 
  const atualizada = await repo.aceitar(id, ong);
  if (!atualizada) {
    // Entre a checagem acima e o UPDATE, outra ONG venceu a corrida.
    throw new Error('doação já foi aceita');
  }
  return atualizada;
}
