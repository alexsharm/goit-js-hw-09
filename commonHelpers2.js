import"./assets/modulepreload-polyfill-ec808ebb.js";const a=document.querySelector(".feedback-form"),t="feedback-form-state",m=a.elements.email,r=a.elements.message;localStorage.getItem(t)!=null&&(m.value=JSON.parse(localStorage.getItem(t)).email??"",r.value=JSON.parse(localStorage.getItem(t)).message??"");a.addEventListener("input",n);a.addEventListener("submit",s);function s(e){e.preventDefault(),e.target.elements.email.value.trim()!=""&&e.target.elements.message.value.trim()!=""?(console.log(e.target.elements.email.value),console.log(e.target.elements.message.value),localStorage.removeItem(t),a.reset()):alert("Заповніть усі поля форми :3")}function n(e){const l={email:e.currentTarget.elements.email.value.trim(),message:e.currentTarget.elements.message.value.trim()};localStorage.setItem(t,JSON.stringify(l))}
//# sourceMappingURL=commonHelpers2.js.map
