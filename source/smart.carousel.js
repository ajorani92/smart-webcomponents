
/* Smart UI v8.1.0 (2020-Nov) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=10)}({10:function(e,t){Smart("smart-carousel",class extends Smart.ContentElement{static get properties(){return{autoPlay:{value:!1,type:"any"},dataSource:{value:[],type:"array",reflectToAttribute:!1},delay:{value:200,type:"number"},displayMode:{allowedValues:["default","multiple","3d"],value:"default",type:"string"},disableItemClick:{value:!1,type:"boolean"},hideArrows:{value:!1,type:"boolean"},hideIndicators:{value:!1,type:"boolean"},indicatorTemplate:{value:null,type:"any"},interval:{value:5e3,type:"number"},itemTemplate:{value:null,type:"any"},keyboard:{value:!1,type:"boolean"},loop:{value:!1,type:"boolean"},messages:{value:{en:{htmlTemplateNotSuported:"{{elementType}}:  Browser doesn't support HTMLTemplate elements."}},type:"object",extend:!0},slideShow:{value:!1,type:"boolean"},swipe:{value:!1,type:"boolean"},wheel:{value:!1,type:"boolean"}}}static get listeners(){return{"arrowLeft.click":"_handleArrowClick","arrowRight.click":"_handleArrowClick","indicatorsContainer.click":"_handleIndicatorsContainerClick",keydown:"_handleKeyDown",swipeleft:"_handleSwipe",swiperight:"_handleSwipe",wheel:"_handleMouseWheel","itemsContainer.click":"_handleItemClick","itemsContainer.transitionend":"_handleTransitionEnd"}}static get requires(){return{"Smart.RepeatButton":"smart.button.js"}}static get styleUrls(){return["smart.button.css","smart.carousel.css"]}get enableShadowDOM(){const e=this,t=Smart.EnableShadowDOM;return e._isInShadowDOM?!e._isInShadowDOM:e.isCompleted?null!==e.shadowRoot:t}template(){return'<div id="container" role="presentation">\n                    <div id="itemsContainer" inner-h-t-m-l="[[innerHTML]]" class="smart-items-container" role="presentation"><content></content></div>\n                    <smart-repeat-button initial-delay="0" right-to-left="[[rightToLeft]]" delay="[[delay]]" id="arrowLeft" animation="[[animation]]" unfocusable class="smart-arrow smart-arrow-left" aria-label="Previous slide"></smart-repeat-button>\n                    <smart-repeat-button initial-delay="0" right-to-left="[[rightToLeft]]" delay="[[delay]]" id="arrowRight" animation="[[animation]]" unfocusable class="smart-arrow smart-arrow-right" aria-label="Next slide"></smart-repeat-button>\n                    <div id="indicatorsContainer" class="smart-indicators-container" role="tablist"></div>\n                </div>'}propertyChangedHandler(e,t,a){const n=this;switch(super.propertyChangedHandler(e,t,a),e){case"disabled":n._setFocusable();break;case"dataSource":if(n._currentIndex=0,n._generateIndicators(),n._generateItems(),n._handleIndicatorsState(0,0),n._handleItemsState(0,0),n._handle3dMode(0),!1!==n.autoPlay){const e=parseInt(n.autoPlay);e?setTimeout((function(){n.play()}),e):n.play()}n._animationTrigger(n._currentIndex);break;case"itemTemplate":n._generateItems(),n._handleItemsState(n._currentIndex,n._currentIndex+1);break;case"indicatorTemplate":n._generateIndicators(),n._handleIndicatorsState(n._currentIndex,n._currentIndex+1);break;case"interval":n.pause(),n.play();break;case"loop":n._handleArrowsActiveState(n._currentIndex,n._currentIndex);break;case"hideArrows":a||n._handleArrowsActiveState(n._currentIndex,n._currentIndex);break;case"displayMode":"multiple"===t&&n.$.itemsContainer.removeAttribute("style")}}render(){const e=this;if(e.setAttribute("role","region"),e.setAttribute("aria-roledescription","carousel"),e._setInitialState(),e._generateIndicators(),e._generateItems(),e._handleIndicatorsState(0,0),e._handleItemsState(0,0),e._handle3dMode(0),!1!==e.autoPlay){const t=parseInt(e.autoPlay);t?setTimeout((function(){e.play()}),t):e.play()}e._setFocusable(),e._animationTrigger(e._currentIndex),e._handleArrowsActiveState(0,e._currentIndex),super.render()}next(){const e=this.dataSource.length;if(this.disabled||0===e)return;let t=this._currentIndex;t=this.loop?t>=e-1?0:t+1:t>=e-1?t:t+1,this._goToItem(t)}pause(){this._handleRotation(),this._rotate=!1}slideTo(e){e=e?parseInt(e):0,this.disabled||e<0||e>this._items.length||this._goToItem(e)}prev(){const e=this.dataSource.length;if(this.disabled||0===e)return;let t=this._currentIndex;t=this.loop?t<=0?e-1:t-1:t<=0?0:t-1,this._goToItem(t)}play(){const e=this;!e.disabled&&e.slideShow&&(e._rotationInterval&&clearInterval(e._rotationInterval),e._handleRotation(!0),e._rotate=!0)}_animationTrigger(e){const t=this;for(let a=0;a<t._items.length;a++)a!==e&&t._items[a].classList.add("smart-animate-trigger")}_handle3dMode(e){const t=this,a=t.dataSource.length;if(!t.disabled&&a&&"3d"===t.displayMode){e=e||0;for(let n=0;n<a;n++){const a=(n-e)*(t.rightToLeft?-1:1);a?t._items[n].setAttribute("position",a):t._items[n].removeAttribute("position")}}}_handleArrowsActiveState(e){const t=this,a=t.dataSource.length;t.loop?t.$.arrowLeft.disabled=t.$.arrowRight.disabled=!1:t.rightToLeft?(t.$.arrowRight.disabled=0===e,t.$.arrowLeft.disabled=e===a-1):(t.$.arrowLeft.disabled=0===e,t.$.arrowRight.disabled=e===a-1)}_handleArrowClick(e){const t=this,a=t._currentIndex;t.disabled||(t.rightToLeft?t.$.arrowLeft.contains(e.target)?t.next():t.prev():t.$.arrowLeft.contains(e.target)?t.prev():t.next(),t._changeEvent(a,t._currentIndex))}_handleDefaultInnerHTML(){const e=this;if(!(e.dataSource&&e.dataSource.length>0)&&e.$.itemsContainer.innerHTML.indexOf("<ul")>=0){const t=e.$.itemsContainer.getElementsByTagName("ul")[0].getElementsByTagName("li");for(let a=0;a<t.length;a++){const n={HTMLcontent:t[a].innerHTML};e.dataSource.push(n)}}}_handleIndicatorsState(e,t){const a=this;a.disabled||0===a._indicators.length||!e&&0!==e||!t&&0!==t||(e!==t&&(a._indicators[e].classList.remove("smart-active"),a._indicators[e].setAttribute("aria-selected",!1)),a._indicators[t].classList.add("smart-active"),a._indicators[t].setAttribute("aria-selected",!0))}_handleItemClick(e){const t=e.target.closest(".smart-carousel-item");if(this.disabled||!t||"3d"!==this.displayMode||this.disableItemClick)return;const a=parseInt(t.getAttribute("item-id")),n=parseInt(t.getAttribute("position"));Math.abs(n)>3||this._goToItem(a)}_handleItemsState(e,t){const a=this;a.disabled||0===a._items.length||!e&&0!==e||!t&&0!==t||(e!==t&&(a._items[e].classList.remove("smart-active"),a._items[e].classList.add("smart-out")),a._items[t].classList.add("smart-active"))}_handleIndicatorsContainerClick(e){const t=e.target.closest(".smart-indicator"),a=this._currentIndex;if(this.disabled||!t)return;const n=parseInt(t.getAttribute("indicator-id"));a!==n&&(this._goToItem(n),this._changeEvent(a,this._currentIndex))}_handleMultipleMode(e){const t=this;if("multiple"!==t.displayMode)return;const a=t._items[e].offsetWidth,n=t.$.container.offsetWidth,r=t.$.itemsContainer.offsetWidth;let i=0;if(0!==e)if(e!==t._items.length-1){for(let a=0;a<e;a++)i+=t._items[e].offsetWidth;i+a/2>=n/2&&i+a<r&&(t.$.itemsContainer.style.marginLeft="-"+(i+a/2-n/2)+"px")}else t.$.itemsContainer.style.marginLeft="-"+(r-n)+"px";else t.$.itemsContainer.style.marginLeft="0px"}_changeEvent(e,t){if(e===t)return;const a=this;a.onIndexChange?a.onIndexChange(t):(a.$.fireEvent("changing",{index:t,previousIndex:e}),a.hasAnimation&&"default"!==a.displayMode||a.$.fireEvent("change",{index:t,previousIndex:e}))}_handleKeyDown(e){const t=this,a=e.key,n=t._currentIndex;if(!t.disabled&&t.keyboard&&-1!==["ArrowLeft","ArrowDown","ArrowRight","ArrowUp","Home","End"," ","Enter"].indexOf(a)){switch(a){case"ArrowLeft":case"ArrowDown":t.rightToLeft?t.next():t.prev();break;case"ArrowUp":case"ArrowRight":t.rightToLeft?t.prev():t.next();break;case"Home":t._goToItem(0);break;case"End":t._goToItem(t.dataSource.length-1);break;case" ":t._rotate?t.pause():t.play();break;case"Enter":t.play()}t._changeEvent(n,t._currentIndex)}}_handleMouseWheel(e){const t=this._currentIndex;!this.disabled&&this.wheel&&document.activeElement===this&&(e.stopPropagation(),e.preventDefault(),e.deltaY>0?this.next():this.prev(),this._changeEvent(t,this._currentIndex))}_handleRotation(e){const t=this;e?t._rotationInterval=setInterval((function(){t.slideShow&&t.next()}),t.interval):clearInterval(t._rotationInterval)}_handleSwipe(e){!this.disabled&&this.swipe&&(e.stopPropagation(),e.preventDefault(),"swipeleft"===e.type?this.prev():this.next())}_generateIndicator(e){const t=this,a=document.createElement("span"),n=e||0;if(t.indicatorTemplate){const e=t._validateTemplate(t.indicatorTemplate);a.innerHTML=t._processItemTemplate(e.content,t.dataSource[n])}return a.setAttribute("role","tab"),a.setAttribute("aria-selected",!1),a.classList.add("smart-indicator"),a.setAttribute("indicator-id",n),a}_generateIndicators(){const e=this,t=e.dataSource.length;let a=[],n=document.createDocumentFragment();for(let r=0;r<t;r++){const t=e._generateIndicator(r);a.push(t),n.appendChild(t)}e._indicators=a;const r=e.$.indicatorsContainer;for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(n)}_generateItem(e){const t=this,a=e||0,n=t.dataSource[a],r=document.createElement("div");if(r.id=t.id+"Slide"+e,t.itemTemplate){const e=t._validateTemplate(t.itemTemplate);r.innerHTML=t._processItemTemplate(e.content,t.dataSource[a])}else"string"==typeof n?r.style.backgroundImage='url("'+n+'")':r.innerHTML=`<div class="smart-carousel-item-container" style="background-image:url('${n.image||""}')" role="presentation">\n                        <h2 id="${r.id+"Label"}" class="smart-carousel-item-label">${n.label||""}</h2 >\n                        <p class="smart-carousel-item-content">${n.content||""}</p>\n                    </div>\n                    <div class="smart-carousel-html-content">${n.HTMLcontent||""}</div>\n                </div>`;return n.label?(r.setAttribute("aria-labelledby",r.id+"Label"),t._indicators[e].setAttribute("aria-labelledby",r.id+"Label")):(r.setAttribute("aria-label","Slide "+e),t._indicators[e].setAttribute("aria-label","Slide "+e)),t._indicators[e].setAttribute("aria-controls",r.id),r.setAttribute("role","tabpanel"),r.classList.add("smart-carousel-item"),r.setAttribute("item-id",a),r}_processItemTemplate(e,t){const a=e.match(/{{\w+}}/g);let n=e;return a&&0!==a.length?(a.forEach((function(e){const a=e.replace("{{","").replace("}}","");n=n.replace(e,t[a]||"")})),n):n}_generateItems(){const e=this,t=e.dataSource.length;let a=[],n=document.createDocumentFragment();for(let r=0;r<t;r++){const t=e._generateItem(r);a.push(t),n.appendChild(t)}e._items=a;const r=e.$.itemsContainer;for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(n)}_goToItem(e,t){const a=this.dataSource.length,n=this._currentIndex;let r=e;e<0?r=0:e>a-1&&(r=a-1),this._removeFadeOut(),this._animationTrigger(),this._handleIndicatorsState(n,r),this._handleItemsState(n,r),this._currentIndex=r,t&&this._changeEvent(n,r),this._handle3dMode(r),this._handleMultipleMode(r),this._handleArrowsActiveState(r,n)}_setFocusable(){const e=this;if(e.disabled||e.unfocusable)return e.removeAttribute("tabindex"),void(e.tabIndex=-1);let t=e.tabIndex>0?e.tabIndex:0;e.setAttribute("tabindex",t),e.tabIndex=t}_setInitialState(){this._currentIndex=0,this._indicators=[],this._items=[],this._rotate=!1,this._handleDefaultInnerHTML()}_validateTemplate(e){const t=this;let a="",n=!1;return"function"==typeof e&&(a=e()),"content"in document.createElement("template")?(a=e instanceof HTMLElement||(e=document.getElementById(e))?e.innerHTML:"",/{{\w+}}/g.exec(a)&&(n=!0),{content:a,hasBindings:n}):(t.error(t.localize("htmlTemplateNotSuported",{elementType:t.nodeName.toLowerCase()})),void(t.itemTemplate=null))}_handleTransitionEnd(e){if(!e.target.classList.contains("smart-carousel-item")||e.target.getAttribute("position"))return;const t=e.target.getAttribute("item-id");this._lastTransitionEndId!==t&&(this._removeFadeOut(),this.$.fireEvent("change",{index:t,previousIndex:this._lastTransitionEndId}),this._lastTransitionEndId=t)}_removeFadeOut(){const e=this.$.itemsContainer.getElementsByClassName("smart-out");if(e.length)for(let t=0;t<e.length;t++)e[t].classList.remove("smart-out")}})}});