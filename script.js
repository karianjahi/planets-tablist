const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role=tabpanel]');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tb => {
            tb.setAttribute("aria-selected", "false");
        });
       panels.forEach(panel => panel.hidden=true);
    });
});