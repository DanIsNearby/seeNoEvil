// Fallback for when the artwork paths change: tag any modal whose text announces the
// shutdown, and content.css hides it. Hidden rather than removed, because the modal is a
// React portal and pulling its node out from under React crashes the app when it unmounts.
const MARK = 'data-see-no-evil';

function hideShutdownModal() {
  for (const modal of document.querySelectorAll(`aside[data-modal-id]:not([${MARK}])`)) {
    if (/abstract is shutting down/i.test(modal.textContent)) modal.setAttribute(MARK, '');
  }
}

new MutationObserver(hideShutdownModal).observe(document.documentElement, {
  childList: true,
  subtree: true,
});
hideShutdownModal();
