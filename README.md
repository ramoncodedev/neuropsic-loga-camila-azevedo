# Camila Azevedo — Neuropsicóloga

Projeto: reconstruir o site dela (hoje em Wix, com noindex e banner da Wix).

## Links
- Site atual: https://psicamilazevedo.wixsite.com/psicologia
- Instagram: https://www.instagram.com/psicamilazevedo/
- WhatsApp (link da bio): https://wa.me/message/GGARWEDQYDQOM1
- E-book (Hotmart, "A Construção Assertiva de..."): link na bio do Instagram

## Dados
- Nome: Camila Azevedo — Psicóloga e Neuropsicóloga
- CRP: 05/72492
- Título no site: Psicologia & Neuropsicologia Clínica
- Chamada: "Apoio e Cuidado em Saúde Mental"
- Bio Insta: "Te ajudo a entender seus sintomas, emoções e dificuldades. Psicoterapia (TCC) | Avaliação Neuropsicológica para Crianças e Adultos"
- Endereço: Rua Dr. Nilo Peçanha, nº 100, Centro, São Gonçalo – RJ
- WhatsApp: (21) 97583-0756
- E-mail: não consta
- Instagram: 68 posts, ~532 seguidores
- Destaques do Insta: Projeto, Avaliação, Rotina, Sobre mim, Congressos, Reflexões

## Sobre (do site atual)
- Psicóloga formada pela UFF
- Especialização em Neuropsicologia Clínica e Institucional
- Pós-graduanda em Psicopatologia e TCC
- Atende crianças, adolescentes e adultos
- Avaliação neuropsicológica: atenção, memória, funções executivas, linguagem e aspectos emocionais
- Psicoterapia com base em TCC
- Experiência no SUS; trabalho interdisciplinar; "escuta qualificada"

## Serviços (do site atual)
1. Ansiedade
2. Transtornos do Neurodesenvolvimento (Autismo nível 1 de suporte, TDAH)
3. Terapia Cognitivo-Comportamental
4. Depressão
5. Terapia de Jovens (com apoio à família)
6. Relacionamentos
7. Avaliação Neuropsicológica (crianças e adultos: testes, observações, informações externas)
8. Orientação Parental
(+ Grupo de Desenvolvimento Socioemocional para adolescentes, visto no Insta)

## Menu atual
Página Inicial · Quem Sou · Minha Abordagem · Artigos (PDF) · E-book para Profissionais (Hotmart) · Contato

## Problemas do site atual
- Sem depoimentos, sem e-mail, sem CRP visível
- Descrições de serviços deslocadas
- Rodapé "© 2035 Terapia Consciente" (resto de template)
- Ícones de Facebook/LinkedIn apontam para a Wix
- Meta noindex (não aparece no Google)

## Identidade visual / tom (Instagram)
- Paleta: bege, areia e dourado/mostarda, off-white, toques de marrom
- Tipografia: serifada elegante (itálico) em destaque + manuscrita/colagem
- Tom: acolhedor, didático, linguagem próxima ("Psi, por que a terapia é semanal?", "O progresso não é linear")
- Temas de conteúdo: ansiedade, avaliação neuropsicológica infantil, adolescência, rotina de terapia

## Estrutura do site
```
index.html        página única (hero, atendimentos, como funciona, para quem, sobre, abordagem, dúvidas, contato)
css/style.css     estilos organizados por seção (índice no topo do arquivo) + tokens de cor em :root
js/config.js      DADOS EDITÁVEIS: WhatsApp, Instagram, e-mail, links do e-book e artigos
js/main.js        menu mobile, links dinâmicos, animações, FAQ
img/              imagens otimizadas usadas no site
```

## Como editar
- Telefone/WhatsApp, Instagram, e-mail: `js/config.js`
- E-book e Artigos: preencha `ebookUrl` / `artigosUrl` em `js/config.js` e a seção aparece sozinha (vazio = escondido)
- Cores: variáveis no topo de `css/style.css` (`:root`)
- Depoimentos: há um comentário no `index.html` marcando onde incluir (só com autorização dos pacientes, conforme Código de Ética do CFP)

## Pendências
- [ ] E-mail profissional
- [ ] Link completo do e-book (Hotmart) e do PDF de artigos
- [ ] Depoimentos reais autorizados
- [ ] Domínio e publicação (o site antigo do Wix está com noindex)
- [ ] Revisar textos com a Camila (passos "Como funciona" e FAQ foram redigidos a partir do que ela publica)
