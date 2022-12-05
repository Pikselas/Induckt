function createTileDesktop(name , sec1Box , sec2Box , sec3 , img , desc )
{
    let Item =`<div class="component-2-0GV7X8" data-id="326:3049">
    <div class="rectangle-6331-zckzHH" data-id="I326:3049;253:1016"></div>
    <div class="frame-48096683-zckzHH" data-id="I326:3049;253:1017">
        <div class="frame-48096680-VAKr8p" data-id="I326:3049;253:1018">
            <div class="frame-60-xVFDil" data-id="I326:3049;253:1019">
                <div class="founded-2018-ZrbzYg heading-mediumh6-12" data-id="I326:3049;253:1020">${sec1Box}</div>
            </div>
            <div class="frame-59-xVFDil" data-id="I326:3049;253:1021">
                <div class="food-industry-xZmJkx heading-mediumh6-12" data-id="I326:3049;253:1022">${sec2Box}
                </div>
            </div>
        </div>
        <div class="frame-48096681-VAKr8p" data-id="I326:3049;253:1023">
            <div class="triumph-gWWRWv heading-boldh3-21" data-id="I326:3049;253:1024">${name}</div>
            <div class="rectangle-6340-gWWRWv" data-id="I326:3049;253:1025"></div>
        </div>
        <div class="frame-48096682-VAKr8p" data-id="I326:3049;253:1026">
            <div class="founder-samir-khanna-ITdpY8 heading-mediumh5-14" data-id="I326:3049;253:1027">${sec3}</div>
            <p class="lorem-ipsum-is-simpl-ITdpY8 heading-regularh5-14" data-id="I326:3049;253:1028">${desc}</p>
            <div class="group-48096670-ITdpY8" data-id="I326:3049;253:1029"><img class="icon-facebook-0kELgo"
                    data-id="I326:3049;253:1030"
                    src="https://cdn.animaapp.com/projects/63739e4595a22314a0fc2590/releases/6385b0022dee2844b74fbfeb/img/facebook@2x.svg"
                    anima-src="https://cdn.animaapp.com/projects/63739e4595a22314a0fc2590/releases/6385b0022dee2844b74fbfeb/img/facebook@2x.svg"
                    alt="icon-facebook"><img class="icon-linkedin-0kELgo" data-id="I326:3049;253:1031"
                    src="https://cdn.animaapp.com/projects/63739e4595a22314a0fc2590/releases/6385b0022dee2844b74fbfeb/img/linkedin-1@2x.svg"
                    anima-src="https://cdn.animaapp.com/projects/63739e4595a22314a0fc2590/releases/6385b0022dee2844b74fbfeb/img/linkedin-1@2x.svg"
                    alt="icon-linkedin"></div>
        </div>
    </div><img class="rectangle-6352-zckzHH" data-id="I326:3049;253:1032"
        src="https://cdn.animaapp.com/projects/63739e4595a22314a0fc2590/releases/6385b0022dee2844b74fbfeb/img/rectangle-6352@2x.svg"
        anima-src="https://cdn.animaapp.com/projects/63739e4595a22314a0fc2590/releases/6385b0022dee2844b74fbfeb/img/rectangle-6352@2x.svg"
        alt="Rectangle 6352"><img class="rectangle-6333-zckzHH" data-id="I326:3049;253:1033"
        src="${img}"
        alt="Rectangle 6333">
</div>`
  let dv = document.createElement("div");
  dv.className = "ExpandedPanel";
  dv.innerHTML += Item;
//   dv.hidden = true;
  let item = document.createElement("div");
  let pic = document.createElement("img");
  pic.src = img;
  pic.className = "IMG";
  item.appendChild(pic);
  item.appendChild(dv);
  item.className = "portMain";
  return item;
}