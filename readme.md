Fluxo ruidoso

O projeto representa visualmente a forma como os pensamentos se multiplicam e se desenvolvem, algo que acontece frequentemente em momentos de ansiedade. Um pensamento inicial pode dar origem a vários outros, criando uma rede de ramificações aparentemente interminável criando assim o que chamamos "overthinking".
O crescimento dos ramos representa essa acumulação de pensamentos, cada clique é o nascer de uma nova ramificação, enquanto a influência do rato representa a nossa tentativa de orientar e controlar esse fluxo caótico.
E por fim a possibilidade de limpar o ecrã representa uma pausa nesse momento de stress acumulado.
__________________________________________________________________________________________________________________

Comecei por criar uma lista chamada branches, onde guardei todos os ramos que vão sendo criados. 
No setup(), defini o ecrã para ocupar a janela toda e coloquei um fundo escuro porque achei mais coerente com o conceito. 
No draw(), programei o crescimento contínuo dos ramos, utilizando o random() para criar pequenas variações na direção e o movimento do rato para influenciar levemente o seu percurso. Quando um ramo atinge determinado comprimento, pode dividir-se, criando o efeito de ramificação. 
No mousePressed(), fiz com que cada clique desse origem a novos ramos e por fim, adicionei o keyPressed() para limpar o desenho com a tecla C e o windowResized() para adaptar o projeto ao tamanho da janela. 

Foi usada IA para ajuda no codigo, como a função keypressed() para limpar outras ações e para melhor compreenssão do uso random().