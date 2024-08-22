### teste de automação do meu push através do commit

- basicamente to tentando fazer com que o post seja feito toda vez que eu commitar algo

- no diretório .git/hooks eu criei um arquivo post-commit nele ta o seguinte script

>
```bash
#!/bin/bash
# Script para fazer push automático após commit

# Define o branch atual
BRANCH=$(git symbolic-ref --short HEAD)

# Faz o push para o repositório remoto
git push origin $BRANCH
<<<<<<< HEAD
```
=======
```
>>>>>>> dd730d9513ac824f81eb7596a901eaf30798b51d
