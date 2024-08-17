const chatWindowContents = document.getElementById('chat-window-contents');
const scrollToTopButton = document.getElementsByClassName(
  'scroll-to-top-button',
)[0];
const scrollToTopButtonIcon = document.getElementsByClassName(
  'scroll-to-top-button-icon',
)[0];

// Adiciona um ouvinte de evento para a rolagem do chat
chatWindowContents.addEventListener('scroll', () => {
  const scrollPositionFromTop = chatWindowContents.scrollTop;
  const scrollFromBottom =
    chatWindowContents.scrollHeight -
    scrollPositionFromTop -
    chatWindowContents.clientHeight;

  if (scrollFromBottom === 0) {
    scrollToTopButton.classList.add('shrink');
    scrollToTopButtonIcon.classList.add('shrink');
  } else {
    scrollToTopButton.classList.remove('shrink');
    scrollToTopButtonIcon.classList.remove('shrink');
  }
});

// Adiciona um ouvinte de evento para o clique no botão "Voltar ao Topo"
scrollToTopButton.addEventListener('click', (event) => {
  event.preventDefault();
  chatWindowContents.scrollTop =
    chatWindowContents.scrollHeight - chatWindowContents.clientHeight;
});
