
/* Smart UI v8.1.0 (2020-Nov) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function l(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=e,l.c=t,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(i,s,function(t){return e[t]}.bind(null,s));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=41)}({41:function(e,t){Smart("smart-file-upload",class extends Smart.BaseElement{static get properties(){return{accept:{value:null,type:"string?"},appendTo:{value:null,type:"any"},autoUpload:{value:!1,type:"boolean"},directory:{value:!1,type:"boolean"},dropZone:{value:null,type:"any"},hideFooter:{value:!1,type:"boolean"},itemTemplate:{value:null,type:"any"},messages:{value:{en:{browse:"Browse",uploadFile:"Upload File",cancelFile:"Cancel File",pauseFile:"Pause File",uploadAll:"Upload All",cancelAll:"Cancel All",pauseAll:"Pause All",totalFiles:"Total files: ",connectionError:"{{elementType}}: File Upload requires connection to the server.",wrongItemIndex:"{{elementType}}: There is no file with such an index in the list of uploaded files.",tooLongFileName:"{{elementType}}: File name is too long."}},type:"object",extend:!0},multiple:{value:!1,type:"boolean"},name:{value:"",type:"string"},responseHandler:{value:null,type:"function?",reflectToAttribute:!1},setHeaders:{value:null,type:"function?",reflectToAttribute:!1},showProgress:{value:!1,type:"boolean"},validateFile:{value:null,type:"function?",reflectToAttribute:!1},uploadUrl:{value:"",type:"string",reflectToAttribute:!1}}}static get listeners(){return{"browseButton.click":"browse","browseButton.focus":"_focusHandler","browseButton.blur":"_blurHandler","browseInput.change":"_browseInputChangeHandler","selectedFiles.click":"_selectedFilesClickHandler","uploadAllButton.click":"uploadAll","cancelAllButton.click":"cancelAll","pauseAllButton.click":"pauseAll","dropZone.dragenter":"_dropZoneHandler","dropZone.dragleave":"_dropZoneHandler","dropZone.dragover":"_dropZoneHandler","dropZone.drop":"_dropZoneHandler",resize:"_handleComponentsByAvailableHeight"}}_blurHandler(){this.$.fireEvent("blur")}_focusHandler(){this.$.fireEvent("focus")}static get requires(){return{"Smart.Button":"smart.button.js","Smart.ProgressBar":"smart.progressbar.js"}}static get styleUrls(){return["smart.fileupload.css"]}template(){return'<div id="container" role="presentation">\n                    <div id="fileUploadHeader" class="smart-file-upload-header" role="presentation">\n                        <smart-button class="smart-browse-button" id="browseButton" disabled="[[disabled]]" theme="[[theme]]" right-to-left="[[rightToLeft]]"></smart-button>\n                        <input type="file" class="smart-browse-input" id="browseInput" name="[[name]]" animation="[[animation]]" disabled="[[disabled]]" unfocusable="[[unfocusable]]" multiple="[[multiple]]" webkitdirectory="[[directory]]" mozdirectory="[[directory]]" />\n                    </div>\n                    <div id="fileUploadContainer" class="smart-file-upload-container">\n                        <div id="dropZone" class="smart-drop-zone" aria-label="Drag files here"></div>\n                        <div id="selectedFiles" class="smart-selected-files" role="list" aria-label="Selected files"></div>\n                    </div>\n                    <div id="totalFiles" class="smart-total-files smart-hidden" role="presentation">Total flies: 0</div>\n                    <div id="fileUploadFooter" class="smart-file-upload-footer smart-hidden"><smart-button class="smart-upload-all-button success" id="uploadAllButton" animation="[[animation]]" disabled="[[disabled]]" unfocusable="[[unfocusable]]"" theme="[[theme]]" right-to-left="[[rightToLeft]]"></smart-button><smart-button class="smart-cancel-all-button error" id="cancelAllButton" animation="[[animation]]" disabled="[[disabled]]" unfocusable="[[unfocusable]]" theme="[[theme]]" right-to-left="[[rightToLeft]]"></smart-button><smart-button class="smart-pause-all-button primary" id="pauseAllButton" animation="[[animation]]" disabled="[[disabled]]" unfocusable="[[unfocusable]]" theme="[[theme]]" right-to-left="[[rightToLeft]]"></smart-button></div>\n                </div>'}propertyChangedHandler(e,t,l){const i=this;switch(super.propertyChangedHandler(e,t,l),e){case"accept":i.$.browseInput.accept=l;break;case"dropZone":case"appendTo":i._handleContainers();break;case"messages":case"locale":i._updateTextValues();break;case"multiple":i.$.browseButton.disabled=!!(!i.multiple&&i._selectedFiles.length>0||i.disabled),!l&&i._selectedFiles.length>1&&(i._selectedFiles.splice(1),i._renderSelectedFiles());break;case"itemTemplate":i._items.length>0&&(i._renderSelectedFiles(),i._handleComponentsByAvailableHeight());break;case"rightToLeft":i._items&&i._items.forEach(e=>{const t=e.querySelector("smart-progress-bar");t&&(t.rightToLeft=l),l?e.setAttribute("right-to-left",""):e.removeAttribute("right-to-left")}),l?i.$.dropZone.setAttribute("right-to-left",""):i.$.dropZone.removeAttribute("right-to-left")}}attached(){super.attached();this._handleContainers()}detached(){super.detached();const e=this;e.$.fileUploadContainer.contains(e.$.dropZone)||e.$.fileUploadContainer.insertBefore(e.$.dropZone,e.$.fileUploadContainer.firstChild),e.$.fileUploadContainer.contains(e.$.selectedFiles)||e.$.fileUploadContainer.appendChild(e.$.selectedFiles)}ready(){super.ready();const e=this;e.$.dropZone.id||(e.$.dropZone.id=e.id+"DropZone"),e.$.selectedFiles.id||(e.$.selectedFiles.id=e.id+"SelectedFiles"),e.$.fileUploadContainer.setAttribute("aria-owns",e.$.dropZone.id+" "+e.$.selectedFiles.id),e.setAttribute("role","dialog"),e.rightToLeft?e.$.dropZone.setAttribute("right-to-left",""):e.$.dropZone.removeAttribute("right-to-left"),e._setInitialValues(),e._updateTextValues(),e._handleContainers(),e._handleComponentsByAvailableHeight()}browse(){this.disabled||!this.multiple&&this._selectedFiles.length>0||this.$.browseInput.click()}cancelAll(){const e=this;if(!e.disabled&&0!==e._items.length){for(let t=e._items.length-1;t>=0;t--)e.cancelFile(e._items[t].index);e.$.browseButton.disabled=!!(!e.multiple&&e._selectedFiles.length>0||e.disabled)}}cancelFile(e){const t=this;if("number"!=typeof e||t.disabled||0===t._selectedFiles.length)return;const l=t._getFileItem(e,!0);if(!l)return void t.error(t.localize("wrongItemIndex",{elementType:t.nodeName.toLowerCase()}));const i=t._items.indexOf(l);t.$.selectedFiles.removeChild(l),l&&l.xhr&&l.xhr.abort(),t._selectedFiles.splice(i,1),t._items.splice(i,1),t.$.fireEvent("uploadCanceled",{filename:l.file.name,type:l.file.type,size:l.file.size,index:l.index}),t.$.browseButton.disabled=!!(!t.multiple&&t._selectedFiles.length>0||t.disabled),0===t._selectedFiles.length&&t.$.fileUploadFooter.classList.add("smart-hidden"),t._handleComponentsByAvailableHeight()}get value(){return this._selectedFiles}pauseAll(){const e=this;if(!e.disabled&&0!==e._items.length)for(let t=e._items.length-1;t>=0;t--){let l=e._items[t];l.xhr&&l.xhr.abort()}}pauseFile(e){const t=this;if("number"!=typeof e&&"string"!=typeof e||t.disabled||0===t._items.length)return;const l=t._getFileItem(e,!0);l?(l.classList.remove("smart-uploading-start"),l&&l.xhr&&l.xhr.abort(),t.$.fireEvent("uploadPaused",{filename:l.file.name,type:l.file.type,size:l.file.size,index:l.index})):t.error(t.localize("wrongItemIndex",{elementType:t.nodeName.toLowerCase()}))}uploadAll(){const e=this;if(!e.disabled&&0!==e._items.length)for(let t=e._items.length-1;t>=0;t--)e._items[t].uploading||e.uploadFile(e._items[t].index)}uploadFile(e){const t=this;let l=!1;if("number"!=typeof e||t.disabled||0===t._selectedFiles.length)return;const i=t._getFileItem(e,!0);if(!i)return;let s=new FormData,a=t.showProgress?i.getElementsByTagName("smart-progress-bar")[0]:null,n=i.file;i.classList.remove("smart-pause","smart-error"),i.classList.add("smart-uploading-start"),s.append("userfile[]",n);let r=new XMLHttpRequest;r.open("POST",t.uploadUrl),t.setHeaders&&"function"==typeof t.setHeaders&&t.setHeaders(r,n),t.$.fireEvent("uploadStarted",{filename:i.file.name,type:i.file.type,size:i.file.size,index:i.index}),r.upload.onprogress=function(e){l||(l=!0,i.classList.remove("smart-uploading-start"),i.classList.add("smart-uploading"),i.uploading=!0,i.xhr=r),a&&(a.value=Math.round(e.loaded/e.total*100)),i.classList.remove("smart-pause","smart-error")},r.onabort=function(){i.classList.remove("smart-uploading-start","smart-uploading"),i.classList.add("smart-pause"),i.addEventListener("animationend",(function(){i.classList.remove("smart-pause","smart-error")}))},r.onerror=function(){i.classList.remove("smart-uploading-start","smart-uploading"),i.classList.add("smart-error"),i.addEventListener("animationend",(function(){i.classList.remove("smart-pause","smart-error")}))},r.onload=function(){if(l=!1,i.classList.remove("smart-uploading-start","smart-uploading"),r.status>=200&&r.status<=299){let e=t._items.indexOf(i);t.$.selectedFiles.removeChild(i),t._selectedFiles.splice(t._selectedFiles.indexOf(n),1),t._items.splice(e,1),t.$.browseButton.disabled=!!(!t.multiple&&t._selectedFiles.length>0||t.disabled),t.$.fireEvent("uploadCompleted",{filename:i.file.name,type:i.file.type,size:i.file.size,status:r.status,index:i.index}),0===t._selectedFiles.length&&t.$.fileUploadFooter.classList.add("smart-hidden")}else i.classList.add("smart-error"),i.classList.remove("smart-uploading"),t.$.fireEvent("uploadError",{filename:i.file.name,type:i.file.type,size:i.file.size,status:r.status,index:i.index})},r.onreadystatechange=function(){t.responseHandler&&"function"==typeof t.responseHandler&&t.responseHandler(r)},r.send(s)}_selectedFilesClickHandler(e){const t=this;if(t.disabled)return;const l=e.target,i=l.closest(".smart-item-upload-button"),s=l.closest(".smart-item-cancel-button"),a=l.closest(".smart-item-pause-button"),n=l.closest(".smart-file");i?t.uploadFile(n.index):s?t.cancelFile(n.index):a&&t.pauseFile(n.index)}_browseInputChangeHandler(){const e=this,t=e._filterNewFiles(Array.from(e.$.browseInput.files));let l=[];e.disabled||0===t.length||(l=e.validateFile&&"function"==typeof e.validateFile?t.filter(t=>!!e.validateFile(t)||(e.$.fireEvent("validationError",{filename:t.name,type:t.type,size:t.size}),!1)):t,e._selectedFiles=e._selectedFiles.concat(l),0!==e._selectedFiles.length&&(e._renderSelectedFiles(l),e.$.browseButton.disabled=!!(!e.multiple&&e._selectedFiles.length>0||e.disabled),e.$.browseInput.value="",e.autoUpload&&e.uploadAll()))}_defaultItemTemplate(e,t){const l=this.localize("uploadFile"),i=this.localize("cancelFile"),s=this.localize("pauseFile"),a=this.rightToLeft?"right-to-left ":"";return`<span id="${this.id+"File"+t+"Name"}" class="smart-item-name">${e}</span>`+`<span class="smart-item-upload-button" title="${l}" role="button" aria-label="${l}"></span>`+`<span class="smart-item-cancel-button" title="${i}" role="button" aria-label="${i}"></span>`+`<span class="smart-item-pause-button" title="${s}" role="button" aria-label="${s}"></span>`+`<smart-progress-bar ${a}aria-label="Upload progress"></smart-progress-bar>`}_dropZoneHandler(e){const t=this;if(e.preventDefault(),e.stopPropagation(),!t.disabled)if("dragenter"!==e.type&&"dragleave"!==e.type){if("drop"===e.type){if(t.$.dropZone.classList.remove("smart-drag-over"),!t.multiple&&t._selectedFiles.length>0)return;if(e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files.length){const l=t._filterNewFiles(Array.from(e.dataTransfer.files));if(0===l.length)return;t.multiple||l.splice(1),t._selectedFiles=t._selectedFiles.concat(l),t._renderSelectedFiles(l)}t.$.browseButton.disabled=!!(!t.multiple&&t._selectedFiles.length>0||t.disabled)}}else"dragenter"===e.type?t.$.dropZone.classList.add("smart-drag-over"):t.$.dropZone.classList.remove("smart-drag-over")}_filterNewFiles(e){const t=this;let l=[];for(let i=0;i<e.length;i++){let s=!0;for(let l=0;l<t._selectedFiles.length;l++){const a=t._selectedFiles[l],n=e[i];if(n.name===a.name&&n.size===a.size&&n.type===a.type&&n.lastModified===a.lastModified){s=!1;break}}s&&l.push(e[i])}return l}_getFileItem(e,t){const l=this;let i=null;if(e&&("string"==typeof e||"number"==typeof e)){if(!l._items||0===l._items.length)return null;for(let s=0;s<l._items.length;s++){const a=l._items[s];(t&&a.index===parseInt(e)||a.file.name===e)&&(i=a)}return i}}_handleContainers(){const e=this,t=e._validateDOMElement(e.dropZone),l=e._validateDOMElement(e.appendTo);t?t.appendChild(e.$.dropZone):e.$.fileUploadContainer.insertBefore(e.$.dropZone,e.$.fileUploadContainer.firstChild),l?l.appendChild(e.$.selectedFiles):e.$.fileUploadContainer.appendChild(e.$.selectedFiles)}_handleItemTemplate(e,t){const l=this;let i=l.itemTemplate;if(!("content"in document.createElement("template")))return void l.error(l.localize("htmlTemplateNotSuported",{elementType:l.nodeName.toLowerCase()}));if(!i)return l._defaultItemTemplate(e,t);if("string"==typeof i&&(i=document.getElementById(i)),null===i||!("content"in i))return void l.error(l.localize("invalidTemplate",{elementType:l.nodeName.toLowerCase(),property:"template"}));return i.innerHTML.replace(/{{\w+}}/g,e)}_renderSelectedFiles(e){const t=this,l=document.createDocumentFragment(),i=e||t._selectedFiles;e||(t._items=[],t.$.selectedFiles.innerHTML="");for(let e=0;e<i.length;e++){const s=t.directory?i[e].webkitRelativePath:i[e].name,a=document.createElement("div");t._incrementIndex++,a.className="smart-file",a.index=t._incrementIndex,a.setAttribute("item-id",t._incrementIndex),a.innerHTML=t.itemTemplate?t._handleItemTemplate(s,t._incrementIndex):t._defaultItemTemplate(s,t._incrementIndex),a.file=i[e],a.uploading=!1,a.xhr=null,a.setAttribute("role","listitem"),a.setAttribute("aria-labelledby",t.id+"File"+t._incrementIndex+"Name"),t.rightToLeft&&a.setAttribute("right-to-left",""),l.appendChild(a),t._items.push(a),t.$.fireEvent("fileSelected",{filename:i[e].name,type:i[e].type,size:i[e].size,index:a.index})}t.$.selectedFiles.appendChild(l),t.$.fileUploadFooter.classList.remove("smart-hidden"),t._handleComponentsByAvailableHeight()}_setInitialValues(){this.$.browseInput.accept=this.accept,this._selectedFiles=[],this._items=[],this._incrementIndex=0}_updateTextValues(){const e=this,t=["browse","uploadAll","cancelAll","pauseAll"];for(let l=0;l<t.length;l++){const i=t[l],s=i+"Button";e.$[s].innerHTML=e.localize(i)}for(let t=0;t<e._selectedFiles.length;t++){const l=e._items[t];l.querySelector(".smart-item-upload-button").title=e.localize("uploadFile"),l.querySelector(".smart-item-cancel-button").title=e.localize("cancelFile"),l.querySelector(".smart-item-pause-button").title=e.localize("pauseFile")}}_validateDOMElement(e){if(e)return"string"==typeof e?document.getElementById(e):e instanceof HTMLElement?e:void 0}_handleComponentsByAvailableHeight(){const e=this;if(e._calculateAvailableContainerHeight(),e._elementsAutoHeight>e.offsetHeight){if(e.$.container.classList.add("smart-overflow"),e._containerOverflows=!0,e._rowHeight){const t=parseInt(e._availableHeight/e._rowHeight);for(let l=0;l<e._items.length;l++){const i=e._items[l];l<t?i.classList.remove("smart-hidden"):i.classList.add("smart-hidden")}e._items.length>t?(e.$.totalFiles.innerHTML=e.localize("totalFiles")+e._items.length,e.$.totalFiles.classList.remove("smart-hidden")):e.$.totalFiles.classList.add("smart-hidden")}}else""===e.dropZone&&e._elementsAutoHeight<e.offsetHeight&&(e.$.container.classList.remove("smart-overflow"),e._containerOverflows=!1)}_calculateAvailableContainerHeight(){const e=this,t=window.getComputedStyle(e.$.fileUploadContainer,null),l=parseInt(t.getPropertyValue("margin-top"))+parseInt(t.getPropertyValue("margin-bottom"))+parseInt(t.getPropertyValue("padding-top"))+parseInt(t.getPropertyValue("padding-bottom")),i=e.$.container.querySelector(".smart-file"),s=e.$.fileUploadHeader.offsetHeight,a=e.$.fileUploadFooter.offsetHeight,n=e.style.height;let r=0;i&&(e._rowHeight=i.offsetHeight),e.style.height="auto",e._containerOverflows&&e.$.container.classList.remove("smart-overflow"),e._elementsAutoHeight=e.offsetHeight,e.style.height=n,e._containerOverflows&&e.$.container.classList.add("smart-overflow"),e.$.totalFiles.classList.contains("smart-hidden")&&(e.$.totalFiles.classList.remove("smart-hidden"),r=e.$.totalFiles.offsetHeight,e.$.totalFiles.classList.add("smart-hidden")),e._availableHeight=e.offsetHeight-(s+a)-l-r}})}});