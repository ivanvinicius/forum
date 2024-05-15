## Exemplo do App de receitas rodando em produção: https://www.cookinplus.com/

Meu sistema é composto por um backend, um dashboard (feito para os admin cadastrar as receitas)
e um client, para os clientes da plataforma verem as receitas.

Vou disponibilizar para você o backend e o client da plataforma. Também vou disponibilizar para você
um backup do DB tendo os registros já cadastrados em suas respectivas tabelas.

OBS: Todas as váriaveis ambiente do .env já estão preenchidas


Instruções

# Banco
<ul>
  <li>Subir backup no banco postgres</li>
  <li>Nome do banco deve ser - cookinplus</li>
</ul>

# API
<ul>
  <li>yarn para baixar a node_modules</li>
  <li>Ver .env para conectar o banco</li>
  <li>Você pode ver a UML dentro da api/database/uml/PICTURE</li>
  <li>As imagens ficam salvas dentro tmp/uplodas</li>
</ul>

# Client
<ul>
  <li>yarn para baixar a node_modules</li>
  <li>Ver .env para conectar a api</li>
</ul>