(() => {
  const e = document.getElementById("addBTN"),
    t = document.getElementById("new-task-form"),
    n =
      (document.getElementById("task-form"),
      document.getElementById("submitBTN")),
    d = document.getElementById("task-name"),
    l = document.getElementById("task-info"),
    s =
      (document.getElementById("current-task"),
      document.getElementById("deleteBTN"),
      document.getElementById("doneBTN"),
      document.getElementById("task-link")),
    a = document.getElementById("finished-link");
  t.addEventListener("submit", function (e) {
    e.preventDefault();
  }),
    e.addEventListener("click", () => {
      "flex" === t.style.display
        ? (t.style.display = "none")
        : (t.style.display = "flex");
    }),
    n.addEventListener("click", () => {
      let e = [];
      if (
        (("" !== d.value && null != d.value) || e.push("name is required"),
        ("" !== l.value && null != l.value) || e.push("info is required"),
        e.length > 0)
      )
        alert("Field Required");
      else {
        const e = document.getElementById("current-task"),
          n = document.createElement("h3");
        (n.innerText += d.value), n.classList.add("newTaskTitle");
        const i = document.createElement("p");
        i.innerText += l.value;
        const c = document.createElement("button");
        c.classList.add("doneBTN"), (c.innerText += "Done");
        const o = document.createElement("button");
        o.classList.add("deleteBTN"), (o.innerText += "Delete");
        const u = document.createElement("div");
        u.classList.add("newCurrentDiv"),
          (d.value = ""),
          (l.value = ""),
          u.appendChild(n),
          u.appendChild(i),
          u.appendChild(c),
          u.appendChild(o),
          e.appendChild(u),
          c.addEventListener("click", () => {
            u.style.borderColor = "green";
          }),
          o.addEventListener("click", () => {
            u.remove();
          }),
          s.addEventListener("click", () => {
            (t.style.display = "none"), (u.style.display = "flex");
          }),
          a.addEventListener("click", () => {
            "green" !== u.style.borderColor && (u.style.display = "none");
          });
      }
    });
})();
