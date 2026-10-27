---
name: collaborate
description: Aplica alterações de código previamente discutidas com o utilizador, depois de resumir o que vai mudar e receber um ok explícito. Usar quando o utilizador invoca /collaborate ou pede para aplicar as alterações discutidas.
---

# Collaborate

Aplica as alterações que foram discutidas na conversa, só depois de confirmação.

## Passos

1. **Reunir o que foi discutido.** Identifica na conversa as alterações que o utilizador quer aplicar. Se houver ambiguidade (várias opções discutidas, itens que o utilizador rejeitou ou deixou em aberto), não assumes: pergunta.
2. **Resumir antes de mexer.** Apresenta um resumo curto e concreto:
   - ficheiros afetados;
   - o que muda em cada um (uma linha por alteração);
   - o que fica de fora, se algo discutido não vai ser aplicado.
3. **Pedir confirmação e parar.** Termina com uma pergunta direta (por exemplo, "Aplico?"). Não edites nenhum ficheiro, não corras comandos que alterem o projeto e não instales dependências antes da resposta.
4. **Se o utilizador der ok**, aplica exatamente o que foi resumido, sem acrescentar extras. Se descobrires algo que mereça mudar durante a aplicação, menciona no fim em vez de o fazeres.
5. **Se pedir ajustes**, atualiza o resumo e volta a pedir ok.
6. **Verificar.** Depois de aplicar, corre `npx tsc --noEmit` e `npx expo lint` e reporta o resultado fielmente, incluindo falhas.

## Regras

- Sem ok explícito, nada é alterado.
- O ok vale só para o resumo apresentado; alterações novas pedem novo resumo.
- Responde em português europeu.
