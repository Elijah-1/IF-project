(function () {
  document.addEventListener("DOMContentLoaded", function () {
    if (Jupyter.notebook) {
      // Set the notebook to light mode
      Jupyter.notebook.config.update({
        Notebook: {
          Theme: "default",
        },
      });
    }
  });
})();
