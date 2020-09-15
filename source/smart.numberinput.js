
/* Smart UI v8.0.0 (2020-Aug) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=82)}({82:function(e,t){Smart("smart-number-input",class extends Smart.Input{template(){return'<div id="inputContainer" role="presentation"><input class="smart-input" id=\'input\' readonly=\'[[readonly]]\' placeholder=\'[[placeholder]]\' type=\'[[type]]\' name=\'[[name]]\' disabled=\'[[disabled]]\' aria-label="[[placeholder]]" /><span class="smart-hidden smart-hint" id="span">[[hint]]</span><div id="dropDownButton" tabindex=-1 class="nav smart-drop-down-button" role="button" aria-label="Toggle popup"></div></div>'}static get properties(){return{numberFormat:{value:{},type:"any"},min:{value:-9999999999,type:"number"},max:{value:9999999999,type:"number"},step:{value:1,type:"number"},value:{value:0,type:"any"}}}getFormattedValue(e,t){return null===t?parseFloat(e):new Intl.NumberFormat(this.locale,t).format(""+e)}setValue(e){this.value=e}getValue(){return this.value}render(){const e=this;super.render(),e.context=e,e.classList.add("smart-input");const t=e.$.input,n=document.createElement("div"),a=document.createElement("div");t.value=e.getFormattedValue(Math.min(Math.max(e.min,e.value),e.max),e.numberFormat),n.tabIndex=a.tabIndex=-1,t.classList.add("smart-input"),n.classList.add("up"),a.classList.add("down");const r=function(n){if("keydown"!==n.type);else{let a=t.value.toString(),r=1.1;r=r.toLocaleString(e.locale).substring(1,2);const l=a.indexOf(r);if(n.keyCode>=65&&n.keyCode<=90){if(n.ctrlKey)return;return n.stopPropagation(),void n.preventDefault()}if(" "===n.key)return n.stopPropagation(),void n.preventDefault();if("-"===n.key){const e=o();return i(-e),n.stopPropagation(),void n.preventDefault()}switch(n.key){case"'":case'"':case"/":case"\\":case"`":case"=":case"(":case")":return n.stopPropagation(),void n.preventDefault()}if(","===n.key&&","!==r||"."===n.key&&"."!==r)return n.stopPropagation(),void n.preventDefault();const s=[...a];let u=s[t.selectionStart];if((u===r||void 0===u||-1===l)&&n.keyCode>=48&&n.keyCode<=57&&"0"===s[t.selectionStart-1]){const n=e.getFormattedValue(o(),e.numberFormat),a=t.selectionStart-1;(l>=0||-1===l&&0===o())&&t.value.length===n.length&&(t.value=n.substring(0,t.selectionStart-1)+n.substring(t.selectionStart),t.selectionStart=t.selectionEnd=a)}if(n.key===r){if(-1===e.getFormattedValue(o(),e.numberFormat).indexOf(r))return n.stopPropagation(),void n.preventDefault();if(l>=0)return n.stopPropagation(),n.preventDefault(),void(t.selectionStart=t.selectionEnd=l+1)}else if(n.keyCode>=48&&n.keyCode<=57&&t.selectionStart<l&&t.selectionEnd-t.selectionStart<=1){if(isNaN(parseInt(u)))for(let e=t.selectionStart;e<s.length;e++){let n=parseInt(s[e]);if(!isNaN(n)){t.selectionStart=t.selectionEnd=e;break}}}else{if(l>=0&&t.selectionStart>l&&n.keyCode>=48&&n.keyCode<=57){const a=t.selectionStart,i=e.getFormattedValue(o(),e.numberFormat);let s=0;if(i&&-1!==i.indexOf(r))for(let e=i.indexOf(r);e<i.length;e++){!isNaN(parseInt(i.substring(e,e+1)))&&s++}let u=t.value.toString();return u=u.substring(0,t.selectionStart)+n.key.toString()+u.substring(t.selectionStart+1),u.substring(l+1,l+1+s).length<=s&&t.selectionStart<=l+s&&(t.value=u,t.selectionStart=t.selectionEnd=a+1),n.stopPropagation(),void n.preventDefault()}if("Backspace"===n.key||"Delete"===n.key){const a=t.selectionStart,i=l>=0&&t.selectionStart>l,s=e.getFormattedValue(o(),e.numberFormat);let u=0;if(s&&-1!==s.indexOf(r))for(let e=s.indexOf(r);e<s.length;e++){!isNaN(parseInt(s.substring(e,e+1)))&&u++}let c=t.value.toString(),d=!1;if("Delete"===n.key&&t.selectionStart<=l+u){c=c.substring(0,t.selectionStart)+"0"+c.substring(t.selectionStart+1);const e=c.substring(l+1,l+1+u);-1===c.indexOf(r)&&l>=0?(t.selectionStart=t.selectionEnd=a+1,d=!0):i&&e.length<=u&&(t.value=c,t.selectionStart=t.selectionEnd=a+1,d=!0)}else if("Backspace"===n.key){c=c.substring(0,t.selectionStart-1)+"0"+c.substring(t.selectionStart);const e=c.substring(l+1,l+1+u);-1===c.indexOf(r)&&l>=0?(t.selectionStart=t.selectionEnd=a-1,d=!0):i&&e.length<=u&&(t.value=c,t.selectionStart=t.selectionEnd=a-1,d=!0)}return void(d&&(n.stopPropagation(),n.preventDefault()))}}}};e.$.dropDownButton.appendChild(n),e.$.dropDownButton.appendChild(a),e.dropDownButtonPosition="right";const o=function(){let n=t.value,a=1.1;a=a.toLocaleString(e.locale).substring(1,2);let r=!1;n.indexOf("(")>=0&&(r=!0,n=n.replace("(","").replace(")",""));let o=[...n],i="";for(let e=0;e<o.length;e++){const t=o[e];switch(t===a&&(i+=t),t){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"-":i+=t}}i=i.replace(a,"."),n=i;let l=parseFloat(n);return e.numberFormat&&e.numberFormat.style&&"percent"===e.numberFormat.style&&(l/=100),r&&(l=-l),isNaN(l)||l===1/0||l===-1/0?0:(l=Math.min(Math.max(e.min,l),e.max),e._number=l,l)};e.getValue=o;const i=function(n){const a=parseFloat(n);if("-"===n){const e=o();return i(-e),t.selectionStart=t.selectionEnd=1,void(t.selectionEnd=t.value.length)}if(!isNaN(a)){if(e.numberFormat){let a=parseFloat(n);const r=e.getFormattedValue(a,e.numberFormat),o=isNaN(parseFloat(r.substring(0,1)))?1:0,i=n>0?0:1;t.value=r,t.selectionStart=t.selectionEnd=1+o+i,e._number=a}else t.value=a,e._number=a;"number"==typeof n&&(t.selectionStart=0,t.selectionEnd=t.value.length),e.set("value",""+e._number,!1)}};e.setValue=i;this._attach=function(){t.addEventListener("keydown",r),n.onkeydown=r,a.onkeydown=r;const i=t=>{if(e.numberFormat){return e.getFormattedValue(t,e.numberFormat)}return t},l=function(e){e.interval&&clearInterval(e.interval),e.timer&&clearTimeout(e.timer),e.interval=e.timer=null,e.removeAttribute("active")},s=t=>{t.onmouseleave=t.onmouseup=()=>{l(t)},t.onpointerdown=()=>{e._captured=!0,t.timer=setTimeout(()=>{t.interval=setInterval(()=>{t.click(),t.setAttribute("active","")},50)},100)}};n.onclick=function(){const a=o();e._captured||l(n),isNaN(a)||(a<e.max||""===e.max)&&(t.value=i(Math.min(e.max,a+e.step)))},a.onclick=function(){const n=o();e._captured||l(a),isNaN(n)||(n>e.min||""===e.min)&&(t.value=i(Math.max(e.min,n-e.step)))},s(n),s(a)},e._detach=function(){t.removeEventListener("keydown",r),n.onclick=a.onclick=null,n.onkeydown=a.onkeydown=null},e.setValue(e.getValue(),e.numberFormat),e.context=document}_blurHandler(){super._blurHandler(),this.setValue(this.getValue(),this.numberFormat)}attached(){this._attach()}detached(){this._detach()}_documentUpHandler(e){this._captured=!1,super._documentUpHandler(e)}propertyChangedHandler(e,t,n){const a=this;super.propertyChangedHandler(e,t,n),"locale"===e&&a.setValue(a._number||a.getValue(),a.numberFormat),"value"!==e&&"numberFormat"!==e&&"max"!==e&&"min"!==e||a.setValue(a.getValue(),a.numberFormat)}})}});