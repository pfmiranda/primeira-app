---
name: commit
description: Sugere uma mensagem de commit em português a partir das alterações em staging e, depois de aprovada pelo utilizador, faz o commit.
disable-model-invocation: true
---

# /commit

Cria um commit com uma mensagem escrita por ti, sempre com aprovação prévia do utilizador.

## Passos

1. Corre `git status --short` e `git diff --staged`.
   - Se não houver nada em staging, diz isso ao utilizador, mostra o que está por adicionar e pergunta se queres fazer `git add` de algo. Não adiciones nada por iniciativa própria.
2. Corre `git log --format=%s -8` para ver o estilo das mensagens anteriores.
3. Lê o diff com atenção. Descreve o que mudou e porquê, não ficheiro a ficheiro. Se houver alterações que não percebas, lê os ficheiros em causa antes de escrever.
4. Escreve a mensagem:
   - Em **português**, no estilo dos commits anteriores.
   - Primeira linha: resumo curto (até ~70 caracteres), no passado (`Adicionado…`, `Corrigido…`, `Removido…`).
   - Se houver várias alterações distintas, linha em branco e depois uma lista com `-`.
   - Se o staging misturar assuntos sem relação, sugere dividir em vários commits, com os ficheiros de cada um.
5. **Mostra a mensagem ao utilizador e espera confirmação.** Não faças o commit antes de ele aprovar ou pedir alterações.
6. Depois de aprovada, faz o commit com `git commit` (usa um heredoc para mensagens de várias linhas) e termina a mensagem com a linha de atribuição indicada pela sessão, quando existir.
7. Corre `git status --short` para confirmar que correu bem e indica o resultado.

## Regras

- Nunca uses `--no-verify`, `--amend` nem `git push`, a não ser que o utilizador peça.
- Se um hook falhar, mostra o erro e corrige a causa. Não contornes o hook.
- Não incluas ficheiros com segredos (`.env`, chaves). Se aparecerem em staging, avisa antes de commitar.
