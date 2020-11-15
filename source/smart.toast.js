
/* Smart UI v8.1.0 (2020-Nov) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=109)}({109:function(e,t){Smart("smart-toast-item",class extends Smart.ContentElement{static get properties(){return{showCloseButton:{value:!1,type:"boolean"},iconClass:{value:null,type:"string?"},itemClass:{value:null,type:"string?"},opened:{value:!1,type:"boolean"}}}static get styleUrls(){return["smart.toast.css"]}template(){return'<div id="container" role="presentation">\n                    <div class="smart-toast-item-header">\n                        <span class="smart-toast-item-close-button" role="button" aria-label="Close"></span>\n                    </div>\n                    <div class="smart-toast-item-container" id="itemContainer">\n                        <span class="smart-toast-item-icon" role="presentation"></span>\n                        <span class="smart-toast-item-content" id="itemContent" inner-h-t-m-l="[[innerHTML]]">\n                            <content></content>\n                        </span>\n                    </div>\n                </div>'}propertyChangedHandler(e,t,n){super.propertyChangedHandler(e,t,n)}render(){const e=this,t=e.iconClass;e.setAttribute("role","alert"),e.itemClass&&(e.className+=" "+e.itemClass),e.$.itemContainer.firstElementChild.className+=" "+(t||"default"),super.render()}appendChild(e){const t=this;if(e){if(!t.isCompleted||e instanceof HTMLElement&&e.classList.contains("smart-resize-trigger-container")){const e=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.appendChild.apply(t,e.concat(Array.prototype.slice.call(arguments)))}t.$.itemContent.appendChild(e)}else t.error(t.localize("invalidNode",{elementType:t.nodeName.toLowerCase(),method:"appendChild",node:"node"}))}insertBefore(e,t){const n=this;if(e){if(!n.isCompleted||e instanceof HTMLElement&&e.classList.contains("smart-resize-trigger-container")){const e=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.insertBefore.apply(n,e.concat(Array.prototype.slice.call(arguments)))}n.$.itemContent.insertBefore(e,t||null)}else n.error(n.localize("invalidNode",{elementType:n.nodeName.toLowerCase(),method:"insertBefore",node:"node"}))}removeChild(e){const t=this;if(e){if(!t.isCompleted||e instanceof HTMLElement&&e.classList.contains("smart-resize-trigger-container")){const e=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.appendChild.apply(t,e.concat(Array.prototype.slice.call(arguments)))}t.$.itemContent.removeChild(e)}else t.error(t.localize("invalidNode",{elementType:t.nodeName.toLowerCase(),method:"removeChild",node:"node"}))}}),Smart("smart-toast",class extends Smart.ContentElement{static get properties(){return{appendTo:{value:null,type:"any"},autoClose:{value:!1,type:"boolean"},autoCloseDelay:{value:3e3,type:"number"},autoOpen:{value:!1,type:"boolean"},iconClass:{value:null,type:"string?"},itemClass:{value:null,type:"string?"},itemTemplate:{value:null,type:"string?"},modal:{value:!1,type:"boolean"},position:{allowedValues:["top-left","top-right","bottom-left","bottom-right"],value:"top-right",type:"string"},showCloseButton:{value:!1,type:"boolean"},type:{allowedValues:["info","warning","success","error","mail","time",null],value:"info",type:"string?"},value:{value:"",type:"any"}}}get enableShadowDOM(){return!1}template(){return""}propertyChangedHandler(e,t,n){const o=this;switch(e){case"value":{const e=o._instances[o._instances.length-1];e&&(n instanceof HTMLElement?e.appendChild(n):(e.shadowRoot?e.shadowRoot:e).querySelector(".smart-toast-item-content").innerHTML=n);break}case"appendTo":case"modal":case"position":o._handleContainers();break;case"rightToLeft":o._instances&&o._instances.forEach(t=>t[e]=n);break;default:super.propertyChangedHandler(e,t,n)}}attached(){super.attached();const e=this,t=["TopLeft","TopRight","BottomLeft","BottomRight","Custom","Modal"];for(let n=0;n<t.length;n++){const o=e.$["toastContainer"+t[n]];o&&o.children.length&&("Custom"===t[n]?e._appendTo.appendChild(e._container):e.getShadowRootOrBody().appendChild(o))}}detached(){super.detached();const e=this,t=["TopLeft","TopRight","BottomLeft","BottomRight","Custom","Modal"];for(let n=0;n<t.length;n++){const o=e.$["toastContainer"+t[n]];o&&(e._removeContainerListeners(o),o.remove()),e.closeAll()}}ready(){super.ready()}render(){const e=this;!e.value||e.value instanceof HTMLElement?e.value=e.innerHTML:e.innerHTML=e.value,e._instances=[],e.autoOpen&&e.open(),super.render()}closeAll(){const e=this;for(var t=e._instances.length-1;t>-1;t--)e._close(e._instances[t])}closeItem(e){e&&0!==this._instances.length&&("string"==typeof e?e=document.getElementById(e):e instanceof HTMLElement&&(e=e.closest("smart-toast-item")),e&&-1!==this._instances.indexOf(e)&&this._close(e))}closeLast(){const e=this;e._instances.length>0&&e._close(e._instances[e._instances.length-1])}open(){const e=this;if(e.disabled)return;e._handleContainers();let t=document.createElement("smart-toast-item");t.iconClass=e.iconClass,t.itemClass=e.itemClass,e.value instanceof HTMLElement?t.appendChild(e.value):t.innerHTML=e._handleItemTemplate()||e.value,t.rightToLeft=e.rightToLeft,t.theme=e.theme,t.animation=e.animation,t.showCloseButton=e.showCloseButton;for(let n=0;n<e.classList.length;n++)e.classList[n].indexOf("smart-")<0&&t.classList.add(e.classList[n]);if(e._container.appendChild(t),e.type){const n=t.querySelector(".smart-toast-item-icon");t.classList.add(e.type),n&&n.setAttribute("aria-label",e.type+" icon")}return t._parent=e._container,e._instances.push(t),e.$.fireEvent("open",{instance:t}),setTimeout((function(){t.opened=!0}),10),e.autoClose&&(t._autoCloseTimeout=setTimeout((function(){e._close(t)}),e.autoCloseDelay)),t}_containerClickHandler(e){const t=this,n=e.target.shadowRoot?e.composedPath()[0]:e.target,o=n.closest(".smart-toast-item-close-button"),a=(n.getRootNode().host||n).closest("smart-toast-item");o||a?(t.$.fireEvent("click",{instance:a,target:n}),o&&t._close(a)):t.modal&&t.closeAll()}_close(e){const t=this;if(t._instances.indexOf(e)>-1){const n=window.getComputedStyle(e,null).getPropertyValue("transition-duration");let o=n.indexOf("ms")>-1?parseInt(n):1e3*parseFloat(n);isNaN(o)&&(o=0),e.opened=!1,t._instances.splice(t._instances.indexOf(e),1),setTimeout((function(){clearTimeout(e._autoCloseTimeout),t.$.fireEvent("close",{instance:e}),e.parentNode&&e.parentNode.removeChild(e);const n=e._parent;n&&!n.children.length&&n.parentElement&&(t._removeContainerListeners(n),n.parentElement.removeChild(n))}),o)}}_handleContainers(){const e=this;let t;if("string"==typeof e.appendTo?t=document.getElementById(e.appendTo):e.appendTo instanceof HTMLElement&&(t=e.appendTo),e._container=e._getToastContainer(t),t)return e._appendTo=t,void(e._container.parentElement||(e._addContainerListeners(e._container),e._appendTo.appendChild(e._container)));t||!e.$.toastContainerCustom||e.$.toastContainerCustom.children.length||(e._removeContainerListeners(e.$.toastContainerCustom),e.$.toastContainerCustom.parentElement&&e.$.toastContainerCustom.parentElement.removeChild(e.$.toastContainerCustom)),e._container.parentElement||(e._addContainerListeners(e._container),e.getShadowRootOrBody().appendChild(e._container))}_addContainerListeners(e){const t=this;if(!e)return;const n=t["$"+e.getAttribute("smart-id")];n&&(n.listen("click",t._containerClickHandler.bind(t)),n.listen("swipeleft",t._swipeHandler.bind(t)),n.listen("swiperight",t._swipeHandler.bind(t)),n.listen("swipetop",t._swipeHandler.bind(t)),n.listen("swipebottom",t._swipeHandler.bind(t)))}_removeContainerListeners(e){if(!e)return;const t=this["$"+e.getAttribute("smart-id")];t&&(t.unlisten("click"),t.unlisten("swipeleft"),t.unlisten("swiperight"),t.unlisten("swipetop"),t.unlisten("swipebottom"))}_getToastContainer(e){const t=this;let n;e?n="Custom":t.modal?n="Modal":(n=Smart.Utilities.Core.toCamelCase(t.position),n=n.charAt(0).toUpperCase()+n.slice(1));const o="toastContainer"+n;if(!t.$[o]){let e=document.createElement("div");e.setAttribute("smart-id",o),e.classList.add("smart-toast-container"),e.classList.add("smart-toast-container-"+Smart.Utilities.Core.toDash(n)),t.$["toastContainer"+n]=e,t["$toastContainer"+n]=Smart.Utilities.Extend(e)}return t.$[o]}_handleItemTemplate(){const e=this;let t=e.itemTemplate;if(!("content"in document.createElement("template")))return void e.error(e.localize("htmlTemplateNotSuported",{elementType:e.nodeName.toLowerCase()}));if(!t)return e.value;if(t=document.getElementById(t),null===t||!("content"in t))return void e.error(e.localize("invalidTemplate",{elementType:e.nodeName.toLowerCase(),property:"template"}));return t.innerHTML.replace(/{{\w+}}/g,e.value)}_swipeHandler(e){const t=e.originalEvent.target.closest("smart-toast-item");e.stopPropagation(),t&&this.$.fireEvent(e.type,{instance:t})}})}});