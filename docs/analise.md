# Documento de Análise — Prato Cheio

*Trabalho 1 · máximo 4 páginas · entrega na Aula 5*

## Problema central

## Incertezas

## Stakeholders
| Stakeholder | Interesse | Influência | O que espera | Prioridade |
|---|---|---|---|---|
|Marta|Alto|Alta|Entrega do Projeto funcional|Alta|
|Ong's|Alto|Alta|Ter fácil acesso aos anúncios de alimentos|Alta|
|Voluntários Entregadores|Alto|Baixa|Acessar os endereços das Ong's/Doadores|Baixa|
|Doadores|Alto|Alta|Receber os entregadores ao informar sobras|Alta|
|Vigilância Sanitária|Baixo|Alta|Atender às normas de cadastro dos itens|Alta|
|Donatário|Alto|Baixa|Receber os alimentos ou refeições das ONG's|Baixa|

## Objetivos de impacto
1. Reduzir o tempo dos avisos de alimentos.
Métrica: Tempo médio em que os avisos são encaminhados para ONGs mais próximas.
Linha base: Não há medida exata descrita, será monitorada posterior ao inicio dos envios.
Direção:Fazer com que os avisos cheguem o mais rápido possível às ONGs.  
 
2.Reduzir a quantidade de comida boa que é descartada;
Métrica: Média da quantidade em KG de comida boa que é descartada diáriamente
Linha base: Não há um número em registro atualmente, será monitorado e registrado esse número após o inicio das coletas.
Direção: Chegar a 0 o número de KG de comidas descartadas
 
3.Aumentar o número de refeições que chegam a quem precisa.
Métrica: Média da quantidade de pessoas que são alimentadas diariamente
Linha base: Não há um numero registrado, será monitorada e registrado após o inicio das coletas
Direção: Alcançar maior número de pessoas alimentadas pelo projeto Prato cheio

## Regras de negócio
1- Cancelamento ou Desistência da Coleta - Praticada
O sistema  deve devolver o item para lista de doações disponíeis quando a ONG cancelar a busca antes da data limite de coleta, para outra ONG consegui resgatar.
Verificado via fluxo de cancelar coleta

2- Alerta de expiração de coleta - Derivada
O sistema deve alertar e proibir reservas de coletas que tiveram o horário limite de coleta extrapolado, para evitar entregas de produtos estragados ou de estabelecimentos que não estão mais disponíveis para receber os entregadores.
Verificado via teste automatizado

3- Gestão de raio demográfico - Derivada
O sistema deve apresentar incialmente uma nova doação à ongs  que possui distância geográfica de até 5Km em relação ao doador, para garantir a vantagem logística informada pelo  stakeholder.  
Verificado via teste automatizado

## Conflitos de Prioridade
Doador:
“Eu quero publicar uma doação rapidamente, sem precisar preencher muitos campos ou perder tempo cadastrando cada alimento.”
 
Vigilância Sanitária:
“Eu preciso que toda doação tenha informações mínimas registradas para que seja possível identificar o alimento, sua quantidade e sua validade.”
 
O eixo do trade-off é a quantidade de informações exigidas no cadastro da doação.
 
Quanto mais campos e informações forem solicitados, maior será a rastreabilidade, porém também será maior o tempo e o esforço exigidos do doador. Por outro lado, quanto mais simples for o cadastro, menor será a burocracia, mas poderá haver perda de informações importantes para a segurança e o controle dos alimentos.
 
O doador perde:
A possibilidade de publicar uma doação sem fornecer nenhuma informação ou de realizar um cadastro completamente livre de etapas obrigatórias. Ele precisará informar, no mínimo, o tipo do alimento, a quantidade e a validade ou janela de retirada.
 
A Vigilância Sanitária perde:
Um registro mais completo e detalhado, com informações adicionais como lote, condições de armazenamento, temperatura, origem específica do produto e responsável pelo preparo. No piloto, serão mantidos somente os dados mínimos necessários.
 
O critério será escolher a solução que:
 
cumpra os requisitos mínimos de rastreabilidade;
permita que uma doação seja cadastrada rapidamente pelo celular;
reduza o risco de abandono durante o preenchimento.
 
Como indicador para o piloto, o cadastro deverá conter 100% dos campos mínimos obrigatórios e deverá poder ser concluído, em média, em até um minuto.
 
Os campos obrigatórios serão:
 
tipo do alimento;
quantidade;
validade ou janela limite para retirada.
 
Para reduzir o esforço, o sistema poderá utilizar opções previamente cadastradas, botões de seleção, preenchimento automático de data e poucos campos de texto livre.
 
A saída utilizada foi anular o eixo do conflito.
 
Em vez de escolher entre rastreabilidade e simplicidade, o projeto mantém as informações mínimas exigidas, mas reduz a dificuldade de registrá-las. Dessa forma, a rastreabilidade não precisa significar necessariamente um cadastro demorado ou burocrático.
 
A solução será um formulário curto e adaptado ao celular, com apenas três informações obrigatórias e preenchimento simplificado. Assim, o doador consegue publicar rapidamente e a plataforma mantém o registro mínimo necessário para identificar e acompanhar os alimentos doados.

## Histórias de usuário
| # | História (Como… quero… para…) | INVEST: o que falha |
|---|---|---|

## Critérios de aceite
**História X** — Dado … Quando … Então …

## Riscos
| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|

## Hipótese e experimento

## Decisão de análise
- **Problema:**
- **Alternativas:**
- **Decisão e justificativa:**
- **Riscos e limitações:**

## Uso de IA
O que geramos com IA, o que verificamos e o que alteramos.
