> git

- git init (inicia um repositório git)
- git status (identifica quais arquivos estão em stage ou não)
- git add <file> (adiciona arquivo ao stage)
- git add . (adiciona arquivo ao stage)
- git rm --cached <file> (remover arquivo do stage)
- git commit -m "mensagem" (commita o arquivo junto com sua mensagem)
- git log (histórico dos commits)
- git log --oneline (histórico condensado de commits)
- git checkout <id_commit> (volta no tempo sem modificar o status atual (seguro))
- git revert <id_commit> (volta no tempo alterando o histórico e cria um novo commit sem as alterções(pouco seguro))
- git reset <id_commit> (volta no tempo apagando todo o histórico de commits)
- git reset <id_commit> --hard (apaga tudo porra)
- git checkout <nome_do_branch> (altera o branch)
- git branch (pucha a listra de todos os branchs existentes)
- git branch <nome> (cria um novo branch)
- git branch -d <nome_do_branch> (deleta uma branch se ela ja tiver sido fundida com a main/master)
- git branch -D <nome_do_branch> (deleta idependete se ja foi fundida ou não)
- git merged <nome> (branch master e quero fundir com o branch teste1, navego até o branch master git checkout master && git merged teste1, fazendo isso eu fiz com que master receba o teste1)

- usar um && entre um git (comando) && git (comando) faz com que o bash execulte os dois comandos

> criar um arquivo chamado .gitignore faz com que o git ignore os arquivos listados dentro dele

> Branch são ramos do projeto para que o desenvolvedor possa trabalhar maneira simultanea

`(main/master)_____________________________
      (nome1) \_________/       /
     (nome2)       \___________/
`
