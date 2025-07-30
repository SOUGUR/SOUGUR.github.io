const btn = document.getElementById("resume-btn");

    btn.addEventListener("mousedown", dragMouseDown);

    function dragMouseDown(e) {
      e.preventDefault();
      let pos3 = e.clientX;
      let pos4 = e.clientY;

      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;

      function elementDrag(e) {
        e.preventDefault();
        const dx = pos3 - e.clientX;
        const dy = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        const rect = btn.getBoundingClientRect();
        btn.style.top = (rect.top - dy) + "px";
        btn.style.left = (rect.left - dx) + "px";
        btn.style.right = "auto";
        btn.style.bottom = "auto";
        btn.style.position = "fixed";
      }

      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }