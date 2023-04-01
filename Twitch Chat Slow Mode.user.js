// ==UserScript==
// @name         Twitch chat slow-mode
// @match        https://www.twitch.tv/popout/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitch.tv
// @grant GM_setClipboard
// ==/UserScript==
var listening=false
var allow=true

function validate(node){return node.textContent.length<=100}

function filter(mutations,observer){
  for (let m of mutations) for(let a of m.addedNodes){
      if(!allow||!validate(a)){
          a.style['display']='none'
          continue
      }
      allow=false
      let n=a.querySelector('span[data-a-user]')
      let b=`/block @`+n.getAttribute('data-a-user')
      n.onmouseenter=()=>GM_setClipboard(b,'text')
  }
}

function listen(){
    if(listening) return
    let target = document.querySelector('div[role=log]')
    if(!target) return
    let observer = new MutationObserver(filter)
    observer.observe(target, {childList: true})
    listening=true
    setInterval(()=>allow=true,3000)
}

setInterval(listen,1000)
alert('Slow mode active.')
