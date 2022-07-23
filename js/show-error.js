const showError = (status) => {
  const bodyElement = document.querySelector('body');
  const note = document.createElement('div');

  note.classList.add('note', 'note-error');
  note.textContent = `${status}. Всё пропало (`;
  bodyElement.append(note);
};

export { showError };
