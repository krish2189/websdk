!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MySDK=t():e.MySDK=t()}(self,(()=>(function(e){const t={config:{baseUrl:"",apiKey:""},initialize(e){t.config={...t.config,...e},console.log("SDK initialized with config:",t.config)},createUser:async e=>(await fetch(`${t.config.baseUrl}/user`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t.config.apiKey}`},body:JSON.stringify(e)})).json(),renderRegistrationForm(e){e.innerHTML='\n          <form id="registrationForm">\n            <input type="text" id="name" placeholder="Name" required/>\n            <input type="email" id="email" placeholder="Email" required/>\n            <button type="submit">Submit</button>\n          </form>\n        ',document.getElementById("registrationForm").addEventListener("submit",(e=>{e.preventDefault();const n=document.getElementById("name").value,i=document.getElementById("email").value;t.createUser({name:n,email:i}).then((e=>{console.log("User created:",e)}))}))}};e.MySDK=t}(window),{})));