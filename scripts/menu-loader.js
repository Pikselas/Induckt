function loadMenuDesktop(MenuName)
{
  let mode = "desktop";
    let jso = {"Home":null , "Portfolio":null , "Team":null, "About":null , "Contact":null , "Register Startup":null};
    jso[MenuName] = `<div class="frame-48096752-UkZDs1" data-id="326:5136">
    <h1 class="title-cBrQyF" data-id="326:5137">${MenuName}</h1>
    <div class="rectangle-31-cBrQyF" data-id="326:5138"></div>
    </div>`;
  let Middelamn = "";
  Object.keys(jso).forEach(function(key) {
    if(jso[key] == null)
    {
        Middelamn += `<div id ="Goto${key + mode}" class="NormalBox spacegrotesk-bold-white-32px" data-id="326:5139">${key}</div>`;
        setTimeout(()=>{document.getElementById("Goto"+key + mode).onclick = ()=>{window.location = key + "-" + mode + ".html"}},2);
    }
    else
    {
        Middelamn += jso[key];
    }
    });
  let Menu = `<div class="container-center-horizontal">
  <div class="visuals-page-15 screen " data-id="326:5128">
    <div class="rectangle-6316-TPEnWx" data-id="326:5129"></div>
    <div class="rectangle-70-TPEnWx" data-id="326:5130"></div>
    <div class="rectangle-74-TPEnWx" data-id="326:5131"></div>
    <div id="CloseMenu" class="group-48096641-TPEnWx" data-id="326:5132">
      <div class="ellipse-1-1EUvmH" data-id="326:5133"></div><img class="x-1EUvmH" data-id="326:5134"
        src="./media/x@2x.svg"
        alt="x">
    </div>
    <div class="frame-48096753-TPEnWx" data-id="326:5135">
      ${Middelamn}
    </div>
  </div>
</div>`
let mn = document.createElement("div");
mn.style.position = "fixed";
mn.style.top = "0px";
mn.style.left = "calc(100vw - 98.5%)";
 mn.innerHTML = Menu;
 setTimeout(()=>{
    document.getElementById("CloseMenu").onclick = () => {
        mn.remove();
     }
 },10);
document.body.appendChild(mn);
}

function loadMenuMobile(MenuName)
{
  let mode = "mobile";
    let jso = {"Home":null , "Portfolio":null ,"Team":null, "About":null , "Contact":null , "Register Startup":null};
    jso[MenuName] = `<div class="frame-48096754-ihwxig" data-id="326:5146">
    <h1 class="title-x8ejf9" data-id="326:5111">${MenuName}</h1>
    <div class="rectangle-31-x8ejf9" data-id="326:5107"></div>
  </div>`;
  let Middelamn = "";
  Object.keys(jso).forEach(function(key) {
    if(jso[key] == null)
    {
        Middelamn += `<div id ="Goto${key + mode}" class="NormalBox spacegrotesk-bold-white-32px" data-id="326:5139">${key}</div>`;
        setTimeout(()=>{document.getElementById("Goto"+key + mode).onclick = ()=>{window.location = key + "-" + mode + ".html"}},2);
    }
    else
    {
        Middelamn += jso[key];
    }
    });
  let Menu = ` <div class="container-center-horizontal">
  <div class="visuals-page-08 screen " data-id="326:5105">
    <div class="rectangle-6316-aB774y" data-id="326:5106"></div>
    <div id= "CloseMenu" class="group-48096641-aB774y" data-id="326:5108">
      <div class="ellipse-1-rbcnP1" data-id="326:5109"></div><img class="x-rbcnP1" data-id="326:5110"
        src="./media/x@2x.svg"
        alt="x">
    </div>
    <div class="frame-48096755-aB774y" data-id="326:5147">
    ${Middelamn}
    </div>
    <div class="rectangle-74-aB774y" data-id="326:5116"></div>
    <div class="rectangle-70-aB774y" data-id="326:5117"></div>
  </div>
</div>`
let mn = document.createElement("div");
mn.style.position = "fixed";
mn.style.top = "0px";
mn.style.left = "calc(100vw - 98.5%)";
 mn.innerHTML = Menu;
 setTimeout(()=>{
    document.getElementById("CloseMenu").onclick = () => {
        mn.remove();
     }
 },10);
document.body.appendChild(mn);
}