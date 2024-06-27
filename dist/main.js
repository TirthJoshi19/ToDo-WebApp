(()=>{var e={472:()=>{}},t={};function n(o){var c=t[o];if(void 0!==c)return c.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e={};n.r(e);function t(){document.querySelectorAll(".card").forEach((e=>{let t=e.querySelector(".task-status-btn");t||(t=document.createElement("button"),t.textContent="Incomplete",t.classList.add("task-status-btn"),t.classList.add("incomplete"),e.appendChild(t))}))}class o{constructor(e){this.title=e}}class c{constructor(){this.projects=JSON.parse(localStorage.getItem("projects"))||[],this.renderProjects()}addProjects(e){const t=new o(e);this.projects.push(t),this.saveToLocalStorage(),this.renderProjects(),this.createOption(e)}renderProjects(){const e=document.querySelector("#projectList");e.innerHTML="",this.projects.forEach(((t,n)=>{const o=document.createElement("div");o.textContent=t.title,e.appendChild(o),o.classList.add("project-item");const c=document.createElement("div");c.textContent="x",e.appendChild(c),c.classList.add("delete-icon"),c.addEventListener("click",(()=>{this.deleteProject(n),this.deleteAssociatedCards(o),this.removeAssociatedCardsFromLocalStr(o),this.saveToLocalStorage(),location.reload()})),o.addEventListener("click",(()=>{document.querySelector(".projectDisplay").textContent=o.textContent;const e=document.querySelector("#reloadBtn");e.style.display="inline",e.addEventListener("click",(()=>{location.reload()})),document.querySelectorAll(".card").forEach((e=>{e.querySelector(".project-para").textContent.includes(o.textContent)?e.style.display="block":e.style.display="none"}))})),o.setAttribute("id",`project-${n+1}`)}))}createOption(){document.querySelectorAll(".select-project").forEach((e=>{e.innerHTML="",this.projects.forEach(((t,n)=>{const o=document.createElement("option");o.textContent=t.title,o.setAttribute("id",`project-${n+1}`),e.appendChild(o)}))}))}saveToLocalStorage(){localStorage.setItem("projects",JSON.stringify(this.projects))}deleteProject(e){this.projects.splice(e,1),this.saveToLocalStorage(),this.renderProjects(),this.createOption()}deleteAssociatedCards(e){document.querySelectorAll(".card").forEach((t=>{t.classList.contains(e.id)&&t.remove()}))}removeAssociatedCardsFromLocalStr(e){const t=JSON.parse(localStorage.getItem("taskCards"))||[],n=t.findIndex((t=>t.projectID===e.id));-1!==n&&(t.splice(n,1),localStorage.setItem("taskCards",JSON.stringify(t)))}}new c;const a=[],s=function(e){document.querySelectorAll(".card").forEach((e=>{if(!e.querySelector(".delete-btn")){const t=document.createElement("button");t.textContent="Delete Task",t.className="delete-btn",e.appendChild(t),t.addEventListener("click",(()=>{e.remove(),function(e){const t=JSON.parse(localStorage.getItem("taskCards"))||[],n=JSON.parse(localStorage.getItem("taskIDArray"))||[],o=(e.querySelector("h2").textContent,e.id),c=t.findIndex((e=>e.taskID=o));n.findIndex((e=>e===o)),-1!==c&&(t.splice(c,1),localStorage.setItem("taskCards",JSON.stringify(t)))}(e)}))}}))},r=function(){let e;const t=JSON.parse(localStorage.getItem("taskCards"))||[],n=document.querySelector(".taskDiv"),o=document.querySelector(".task-editor");document.querySelectorAll(".card").forEach((t=>{const o=t.querySelector(".edit-card");o.addEventListener("click",(()=>{"none"==n.style.display&&(n.style.display="flex"),e=o.parentElement.id;const c=document.querySelector(".editTask"),a=document.querySelector(".editDesc"),s=document.querySelector(".editPriority"),r=(document.querySelector("editDate"),document.querySelector(".editNote"));c.value=t.querySelector("h2").textContent,a.value=t.querySelector(".description").textContent.split(":")[1].trim(),r.value=t.querySelector(".notes").textContent.split(":")[1].trim();const d=t.querySelector(".priority-parent-before").textContent.split(":")[1].trim().toLowerCase();s.querySelectorAll("option").forEach((e=>{e.textContent===d&&(e.selected=!0)}));const l=t.querySelector(".due-date").textContent.split(":")[1].trim();l&&(document.querySelector(".editDate").value=l)}))})),o.addEventListener("submit",(n=>{n.preventDefault();const c=new FormData(o),a=c.get("task"),s=c.get("description"),r=(c.get("priority"),c.get("date")),d=c.get("notes"),l=c.get("priority"),i=document.getElementById(e);console.log(e),i.querySelector("h2"),i.querySelector(".description").textContent="Description: foo",i.querySelector(".notes").textContent="Notes: "+d,i.querySelector(".project-para").textContent.split(":")[1].trim();const p=t.find((e=>e.uniqueID===i.id));p&&(console.log("yes there is a card to update in localstorage"),console.log(p.taskID)),p?(p.taskName=a,p.description=s,p.duedate=r,p.notes=d,p.priority=l):console.error("Card not found in local storage"),localStorage.setItem("taskCards",JSON.stringify(t)),location.reload()}))},d=function(){(function(){if(!document.querySelector(".task-editor")){const e=document.querySelector(".taskDiv");e.style.display="none";const t=document.createElement("form");e.appendChild(t);const n=document.createElement("h3");n.textContent="Edit Task",t.appendChild(n);const o=document.createElement("input");t.appendChild(o),o.type="text",o.placeholder="Task Name",t.classList.add("task-editor");const c=document.createElement("input");c.type="text",c.placeholder="Description",t.appendChild(c);const a=document.createElement("select"),s=document.createElement("option");a.appendChild(s),t.appendChild(a),s.textContent="Not Set";const r=document.createElement("option");r.textContent="low",a.appendChild(r);const d=document.createElement("option");d.textContent="medium",a.appendChild(d);const l=document.createElement("option");l.textContent="high",a.appendChild(l);const i=document.createElement("input");i.type="date",i.value=t.appendChild(i);const p=document.createElement("input");p.type="text",p.placeholder="Notes...",t.appendChild(p);const u=document.createElement("input");u.value="Save Changes",t.appendChild(u),u.type="submit",o.name="task",c.name="description",a.name="priority",i.name="date",p.name="notes",o.classList.add("editTask"),c.classList.add("editDesc"),i.classList.add("editDate"),a.classList.add("editPriority"),p.classList.add("editNote");const m=document.createElement("button");m.textContent="x",m.classList.add("clearBtn-for-edit-task"),e.appendChild(m),m.addEventListener("click",(()=>{e.style.display="none"}))}})(),document.querySelectorAll(".card").forEach((e=>{if(!e.querySelector(".edit-card")){const t=document.createElement("button");t.textContent="Edit",t.classList.add("edit-card"),e.appendChild(t)}}))};function l(){document.querySelectorAll(".card").forEach(((e,t)=>{const n=e.querySelector(".task-status-btn");n.addEventListener("click",(()=>{n.classList.contains("incomplete")?(n.classList.remove("incomplete"),n.classList.add("complete"),n.textContent="Completed"):(n.classList.remove("complete"),n.classList.add("incomplete"),n.textContent="Incomplete"),n.setAttribute("id",`statusBtn-${t+1}`);const e=JSON.parse(localStorage.getItem("btns"))||[];e[t]=n.textContent,localStorage.setItem("btns",JSON.stringify(e))}));const o=JSON.parse(localStorage.getItem("btns"))||[];o[t]&&(n.textContent=o[t],"Completed"===o[t]?(n.classList.remove("incomplete"),n.classList.add("complete")):(n.classList.remove("complete"),n.classList.add("incomplete")))}))}const i=function(){const e=document.querySelector(".ParentOfTask");d(),console.log(""),console.log(a);const n=document.createElement("form");e.appendChild(n);const o=document.createElement("input");o.placeholder="Task Name",n.appendChild(o),o.name="task",o.type="text";const i=document.createElement("input");i.placeholder="Description",n.appendChild(i),i.name="description",i.type="text";const p=document.createElement("fieldset"),u=document.createElement("legend");u.textContent="Priority*",p.appendChild(u),n.appendChild(p);const m=document.createElement("label");m.textContent="Low",p.appendChild(m);const y=document.createElement("input");y.type="radio",y.name="priority",y.id="low";const h=document.createElement("label");h.textContent="Medium",p.appendChild(h),m.appendChild(y);const C=document.createElement("input");C.type="radio",C.name="priority",C.id="medium",h.appendChild(C);const S=document.createElement("label");S.textContent="High",p.appendChild(S);const E=document.createElement("input");E.type="radio",E.name="priority",E.id="high",S.appendChild(E);const g=document.createElement("input");g.type="date",n.appendChild(g),g.name="duedate";const f=document.createElement("input");f.name="notes",f.type="text",n.appendChild(f),f.placeholder="Notes...";const x=document.createElement("select");x.classList.add("select-project");const L=document.createElement("option");x.appendChild(L),L.textContent="Project Name",n.appendChild(x),x.name="select";const q=document.createElement("div");n.appendChild(q);const k=document.createElement("input");k.type="submit",q.appendChild(k),k.value="Add Task +",n.classList.add("task-form"),q.classList.add("formSubDiv"),(new c).createOption();const v=document.querySelector(".ParentOfTask");v.style.display="none",window.addEventListener("load",(()=>{(function(){const e=document.querySelector(".task-p");e.innerHTML="",(JSON.parse(localStorage.getItem("taskCards"))||[]).forEach((n=>{const o=document.createElement("div"),c=`\n                <h2>${n.taskName}</h2>\n                <p class="description">Description: ${n.description}</p>\n                <p class="due-date">Due Date: ${n.duedate}</p>\n                <p class="notes">Notes: ${n.notes}</p>\n                <p class = 'project-para'>Project: ${n.projectName}</p>\n                `;o.innerHTML=c,o.classList.add("card"),o.classList.add(n.projectID),o.id=n.uniqueID,e.appendChild(o),s(),t(),d(),r(),function(){const e=document.querySelectorAll(".card"),t=JSON.parse(localStorage.getItem("taskCards"))||[];e.forEach((e=>{const n=e.querySelector("h2").textContent,o=t.find((e=>e.taskName===n));if(!e.querySelector(".priority-parent-before")){const t=document.createElement("div");t.textContent="Priority: "+o.priority,e.appendChild(t),t.classList.add("priority-parent-before")}const c=e.querySelector(".priority-parent-before");e.querySelector("h2").addEventListener("mouseover",(()=>{c.style.display="block"})),e.querySelector("h2").addEventListener("mouseout",(()=>{setTimeout((()=>{c.style.display="none"}),1e3)}))}))}()})),l()})(),function(){const e=document.querySelector("#today"),t=document.querySelector("#upcoming"),n=(new Date).toJSON().slice(0,10),o=document.querySelector(".projectDisplay"),c=document.querySelector("#reloadBtn");e.addEventListener("click",(()=>{o.innerHTML="Today",c.style.display="inline",console.log(n);const e=document.querySelectorAll(".card");console.log("today clicked"),e.forEach((e=>{e.textContent.includes(n)?e.style.display="block":e.style.display="none"}))})),t.addEventListener("click",(()=>{o.textContent="Upcoming",c.style.display="inline",document.querySelectorAll(".card").forEach((e=>{const t=e.textContent.match(/\d{4}-\d{2}-\d{2}/);console.log(t),t&&t[0]>n?e.style.display="block":e.style.display="none",c.style.display="inline"}))})),c.addEventListener("click",(()=>{console.log("btn clicked"),location.reload()}))}()}));class j{constructor(e,t,n,o,c,a,s,r){this.taskName=e,this.description=t,this.duedate=n,this.notes=o,this.projectID=s,this.priority=a,this.projectName=c,this.priority=document.querySelector('input[name="priority"]:checked').id,this.uniqueID=r}}n.addEventListener("submit",(e=>{e.preventDefault();const o=new FormData(n),c=o.get("task"),a=o.get("description")||"",i=o.get("duedate")||"",p=o.get("notes")||"",u=document.querySelector('input[name="priority"]:checked').id||"",m=x.options[x.selectedIndex];console.log(m),console.log(m.id);const y="card-"+Math.random().toString(36).substr(2,9),h=new j(c,a,i,p,x.value,u,m.id,y);let C=[];try{C=JSON.parse(localStorage.getItem("taskCards"))||[]}catch(e){console.log("Card doesn't exist")}C.some((e=>e.taskName===h.taskName&&e.description===h.description&&e.duedate===h.duedate&&e.notes===h.notes&&e.projectName===h.projectName&&e.priority===h.priority&&e.uniqueID===h.uniqueID))||(C.push(h),localStorage.setItem("taskCards",JSON.stringify(C)));const S=document.createElement("div"),E=document.querySelector(".task-p"),g=`\n        <h2>${h.taskName}</h2>\n        <p>Description: ${h.description}</p>\n        <p>Due Date: ${h.duedate}</p>\n        <p>Notes: ${h.notes}</p>\n        <p class = 'project-para'>Project: ${h.projectName}</p>\n        `;S.innerHTML=g,document.querySelectorAll(".project-item").forEach((e=>{e.addEventListener("click",(()=>{S.classList.contains(e.textContent)?S.style.display="block":S.style.display="none"}))})),E.appendChild(S),S.classList.add("card"),S.classList.add(m.id),console.log(x.value),s(),t(),d(),d(),r(),n.reset(),console.log(m.id),l(),location.reload()})),o.required=!0,g.required=!0;const b=document.createElement("button");b.textContent="x",n.appendChild(b),b.classList.add("delete-form"),b.addEventListener("click",(()=>{v.style.display="none"}))},p=new c;document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("projectForm").addEventListener("submit",(e=>{e.preventDefault();const t=document.getElementById("projectTitle"),n=t.value.trim();""!==n&&(p.addProjects(n),p.renderProjects(),t.value="")})),function(){const e=document.querySelector(".cont3"),t=document.createElement("button");t.textContent="Add Task +",t.classList.add("add"),e.appendChild(t);const n=document.createElement("button");n.textContent="Edit Project Name",e.appendChild(n),n.classList.add("edit")}(),i(),t(),function(){const e=document.querySelector(".edit"),t=JSON.parse(localStorage.getItem("taskCards"))||[];let n=document.querySelectorAll(".project-item");const o=document.querySelector(".edit-container");o.style.display="none";const c=document.createElement("form"),a=document.createElement("div");o.appendChild(a),a.appendChild(c),a.classList.add("child-of-edit-container");const s=document.createElement("h3");s.textContent="Rename Project",c.appendChild(s);const r=document.createElement("p");c.appendChild(r),r.textContent="Select Project";const d=document.createElement("select");c.appendChild(d),n.forEach((e=>{const t=document.createElement("option");t.textContent=e.textContent,d.appendChild(t),t.setAttribute("id",e.id)})),d.name="select";const l=document.createElement("p");c.appendChild(l),l.textContent="New Name";const i=document.createElement("input");i.name="rename",i.placeholder="Enter New Name",c.appendChild(i),i.type="text",i.id="rename",i.required=!0;const p=document.createElement("div");a.appendChild(p);const u=document.createElement("input");u.name="submit",u.type="submit",u.textContent="Rename Project",c.appendChild(u),p.appendChild(u),u.classList.add("editSubmit"),c.appendChild(p),p.classList.add("rename-submit-div"),d.classList.add("rename-select"),d.classList.add("select-project");const m=document.createElement("button");m.textContent="x",m.classList.add("edit-delete"),p.appendChild(m),m.addEventListener("click",(()=>{"flex"==o.style.display?o.style.display="none":o.style.display="flex"})),e.addEventListener("click",(()=>{"flex"==o.style.display?o.style.display="none":o.style.display="flex",m.setAttribute("id","renameDelete")})),c.addEventListener("submit",(e=>{e.preventDefault(),console.log("Shree Ganeshay Namah");const n=new FormData(c),o=n.get("select"),s=n.get("rename"),r=JSON.parse(localStorage.getItem("projects"))||[],d=r.find((e=>e.title===o));d&&(d.title=s,localStorage.setItem("projects",JSON.stringify(r)),document.querySelectorAll(".project-item").forEach((e=>{const n=e.textContent;e.textContent===o&&(e.textContent=s,document.querySelectorAll(".card").forEach((t=>{t.textContent.includes(n)&&t.classList.contains(e.id)&&(t.querySelector(".project-para").textContent="Project: "+s)})),t.forEach((e=>{e.projectName===o&&(e.projectName=s,console.log("Task Card projectname updated"),localStorage.setItem("taskCards",JSON.stringify(t)))}))),a.parentElement.style.display="none"}))),c.reset()}))}(),r();const e=document.querySelector(".add"),n=document.querySelector(".ParentOfTask"),o=document.querySelector(".edit-container");e.addEventListener("click",(()=>{"none"==n.style.display?(n.style.display="flex",o.style.display="none"):n.style.display="none"})),document.querySelectorAll(".project-item")}));var u=n(472),m=n.n(u);(0,e.default)(),m()()})()})();