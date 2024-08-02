# Respostas das Perguntas Técnicas

### 1. Quais passos você seguiria para solucionar problemas de um site lento?

R: Eu diria que p primeiro passo seria Identificar os principais elementos que afetam o desempenho, como grandes imagens, arquivos JavaScript e CSS, e fontes externas. A partir dessa primeira análise eu faria o seguinte:

Primeiro analisaria o código HTML, CSS e JavaScript em busca de scripts ineficientes, excesso de requisições, imagens não otimizadas, etc.

Também verificaria a configuração do servidor, como capacidade de processamento, memória RAM, armazenamento, e se a hospedagem é adequada para o tráfego do site.

E por fim verificaria se o problema ocorre em todos os navegadores ou é específico de algum deles.

### 2. Quais passos você seguiria para solucionar problemas de um usuário que enfrentasse um erro no envio de um formulário no site?

Primeiro eu tentaria reproduzir o erro usando os mesmos passos que o usuário relatou. Isso envolve testar o formulário em diferentes navegadores, dispositivos e condições de rede. Verificaria os logs do no servidor e do navegador para identificar mensagens de erro específicas.

Logo após eu iria me certificar de que todos os campos do formulário estão sendo validados corretamente tanto no front quanto no back e revisaria as regras de validação para garantir que estejam corretas e completas.

E por fim implementaria mensagens de erro claras para ajudar o usuário a corrigir qualquer entrada inválida.

### 3. Como desenvolvedor frontend, fale sobre sua experiência no que fazer e o que não fazer ao construir o codigo do site (seja para scripts frontend ou APIs) relacionada ao desempenho.

R: Como todo o desenvolvimento de qualquer aplicação deve ser direcionado por convenções e boas práticas. Na minha experiência eu aprendi que:

É importante seguir boas práticas de programação, como modularização e reutilização de código. Utilizar linters e formatadores para manter a consistência do código e evitar bugs.

Dividir o código em partes menores que podem ser carregadas sob demanda. Utilizar ferramentas como Webpack para otimizar o bundling de arquivos e carregar apenas o necessário em cada página.

Minimizar a profundidade e a complexidade do DOM para melhorar o desempenho do navegador.

Implementar o carregamento apenas do que é necessário para o usuário naquela ação específica. Por exemplo, implementar paginação em tabelas e buscar os dados por página.

#### E também temos práticas a serem evitadas como:

Evitar incluir bibliotecas ou frameworks que não são estritamente necessários, pois eles podem aumentar o tamanho da página e diminuir o desempenho.

Em APIs, consultas SQL ineficientes podem causar atrasos significativos. Otimizar consultas e usar indexação apropriada no banco de dados.
