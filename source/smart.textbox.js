
/* Smart UI v8.1.0 (2020-Nov) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=105)}({105:function(e,t){Smart("smart-text-box",class extends Smart.ComboBox{static get properties(){return{autoFocus:{value:!1,type:"boolean"},autoComplete:{allowedValues:["none","manual","auto","inline"],type:"string",value:"manual"},displayMode:{value:"default",allowedValues:["default","escaped"],type:"string"},dropDownOpenMode:{allowedValues:["none","default","auto"],value:"default",type:"string"},enterKeyBehavior:{value:"submit",allowedValues:["submit","clearOnSubmit"],type:"string"},form:{value:"",type:"string"},hint:{value:null,type:"any"},maxLength:{value:null,type:"number?"},minLength:{value:2,type:"number"},messages:{extend:!0,value:{en:{missingReference:"{{elementType}}: Missing reference to {{files}}."}},type:"object"},required:{value:!1,type:"boolean"},requiredMessage:{value:"",type:"string"},selectAllOnFocus:{value:!1,type:"boolean"},selectionMode:{value:"zeroOrOne",allowedValues:["none","oneOrManyExtended","zeroOrMany","oneOrMany","zeroOrOne","one","checkBox","radioButton"],type:"string"},type:{value:"input",type:"string",defaultReflectToAttribute:!0,readonly:!0},value:{value:"",type:"string"}}}static get listeners(){return{"document.up":"_documentUpHandler",focus:"_focusHandler",keydown:"_keyDownHandler",mouseenter:"_mouseEventsHandler",mouseleave:"_mouseEventsHandler","input.blur":"_focusHandler","input.change":"_textBoxChangeHandler","input.focus":"_focusHandler","input.keyup":"_textBoxKeyUpHandler","input.paste":"_textBoxChangeHandler","input.select":"_textBoxSelectHandler","listBox.bindingComplete":"_bindingCompleteHandler"}}template(){return'<div id="container" role="presentation">\n                    <span id="label" inner-h-t-m-l="[[label]]" class="smart-label"></span>\n                    <div id="content" class="smart-content" role="presentation">\n                        <input class="smart-input" type="text" id="input"\n                            disabled="[[disabled]]"\n                            maxlength="[[maxLength]]"\n                            name="[[name]]"\n                            placeholder="[[placeholder]]"\n                            readonly="[[readonly]]"\n                            role="textbox"\n                            aria-label="[[placeholder]]"\n                            autocomplete="[[inputPurpose]]">\n                        <div id="autoCompleteString"></div>\n                        <div id="dropDownContainer" class="smart-drop-down smart-drop-down-container smart-visibility-hidden" role="presentation">\n                            <smart-list-box id="listBox"\n                                data-source="[[dataSource]]"\n                                unfocusable="true"\n                                disabled="[[disabled]]"\n                                display-loading-indicator="[[displayLoadingIndicator]]"\n                                display-member="[[displayMember]]"\n                                item-height="[[itemHeight]]"\n                                item-template="[[itemTemplate]]"\n                                item-measure-mode="[[itemMeasureMode]]"\n                                filter-callback="[[filterCallback]]"\n                                filter-mode="[[filterMode]]"\n                                loading-indicator-placeholder="[[loadingIndicatorPlaceholder]]"\n                                loading-indicator-position="[[loadingIndicatorPosition]]"\n                                placeholder="[[dropDownPlaceholder]]"\n                                readonly="[[readonly]]"\n                                right-to-left="[[rightToLeft]]"\n                                selection-mode="[[selectionMode]]"\n                                value-member="[[valueMember]]">\n                                <content></content>\n                            </smart-list-box>\n                        </div>\n                    </div>\n                    <span id="hint" class ="smart-hidden smart-hint"></span>\n                </div>'}propertyChangedHandler(e,t,n){const l=this;switch(e){case"autoComplete":l.$.listBox._filteredItems&&l.$.listBox._filteredItems.length!==l.$.listBox._items.length&&super._autoComplete(!0),l._setAriaAutocomplete();break;case"dataSource":case"valueMember":l._clearSelection(),l._setDropDownSize(),l._positionDetection.checkBrowserBounds("vertically"),l._positionDetection.positionDropDown(),l._positionDetection.checkBrowserBounds("horizontally");break;case"displayMember":case"inputMember":{const e=l.$.listBox;if(e.selectedIndexes.length){const t=e._items[e.selectedIndexes[0]][l.inputMember];l.$.listBox.$.filterInput.value=t,l.$.input.value="escaped"===l.displayMode?l._toEscapedDisplayMode(t):l._toDefaultDisplayMode(t),l.set("value",l._toDefaultDisplayMode(l.$.input.value))}break}case"displayMode":l.$.input.value="escaped"===n?l._toEscapedDisplayMode(l.value):l.value=l._toDefaultDisplayMode(l.$.input.value);break;case"dropDownOpenMode":l._setFocusable(),l.$dropDownContainer.addClass("smart-visibility-hidden"),l.opened=!1;break;case"value":(l.$.input!==document.activeElement||l.$.input===document.activeElement&&l.$.input.value===l._oldValue)&&(l.$.input.value="escaped"===l.displayMode?l._toEscapedDisplayMode(l.value):l.value,l._oldValue=t),l.value||l.clearSelection(),n.length>0?l.$.addClass("has-value"):l.$.removeClass("has-value");break;case"hint":if(null===n)return l.$.hint.innerHTML="",void l.$.removeClass("invalid");l._handleHintContainer();break;default:super.propertyChangedHandler(e,t,n)}}static get requires(){return{"Smart.ComboBox":"smart.combobox.js"}}static get styleUrls(){return["smart.textbox.css"]}open(){0===this.$.listBox.items.length&&"function"!=typeof this.dataSource||"none"===this.autoComplete||(0===this.$.input.value.length&&this.$.listBox._filteredItems&&this.$.listBox._filteredItems.length!==this.$.listBox._items.length?super._autoComplete(!0):super.open())}close(){const e=this;super.close(),e.$.autoCompleteString.textContent="",e.$.listBox._focusedItem&&(e.$.listBox._focusedItem._focused=!1),"none"!==e.autoComplete&&e.$.input._filteredItems&&e.$.input._filteredItems[0]&&e.$.input._filteredItems[0]!==e.$.input.value&&super._autoComplete(!0)}cloneNode(){const e=this;let t=HTMLElement.prototype.cloneNode.apply(e,Array.prototype.slice.call(arguments,0,1));return e.$.listBox&&(t.dataSource=e.dataSource),t}focus(){this.$.input.focus()}_setFocusable(){const e=this;e.disabled||e.unfocusable?e.$.input.tabIndex=-1:e.$.input.removeAttribute("tabindex")}reset(){const e=this;"escaped"===e.displayMode?(e.value=e._initializationValue,e.$.input.value=e._toEscapedDisplayMode(e._initializationValue)):e.$.input.value=e.value=e._initializationValue,!e.value&&e.$.listBox&&e.clearSelection()}_bindingCompleteHandler(){const e=this;e.$.listBox&&e.isRendered&&(e._setDropDownSize(),e._positionDetection.checkBrowserBounds())}_createElement(){const e=this;e._browserIsIEorEdge=Smart.Utilities.Core.Browser.IE||Smart.Utilities.Core.Browser.Edge,e.autoFocus&&e.$.input.focus(),e.value&&(e.$.input.value="escaped"===e.displayMode?e._toEscapedDisplayMode(e.value):e.value),e._setDropDownSize(),e._handleSelectedText(),e._setFocusable(),e._initializationValue=e._oldValue=e.value,e.value.length>0?e.$.addClass("has-value"):e.$.removeClass("has-value"),e._handleHintContainer(),e._setAriaRelations()}_focusHandler(e){const t=this;if(e.target===t&&t.hasAttribute("tabindex")&&(t.$.input.tabIndex=t.disabled||t.unfocusable?-1:t.tabIndex,t.removeAttribute("tabindex")),"blur"===e.type){if(t._isDropDownClicked||e.target===t)return;if(t.removeAttribute("focus"),t.$.autoCompleteString.textContent="",t.value.length>0?t.$.addClass("has-value"):t.$.removeClass("has-value"),("auto"===t.autoComplete||"inline"===t.autoComplete)&&t.$.input.value.length>0&&t.$.listBox._focusedItem&&t.$.listBox._focusedItem._focused){const e=t.$.listBox._focusedItem[t.inputMember];t.$.input.value="escaped"===t.displayMode?t._toEscapedDisplayMode(e):t._toDefaultDisplayMode(e),t.set("value",t._toDefaultDisplayMode(e))}return t._preventDropDownClose||t.close(),t._oldValue!==t.value&&t.$.fireEvent("change",{oldValue:t._oldValue,value:t.value}),void t.$.fireEvent("blur")}t.disabled||(t.setAttribute("focus",""),t._oldValue=t.value,t.selectAllOnFocus&&t.$.input.select(),e.target===t&&t.$.input.focus(),!1!==t._canFireFocus&&(t._canFireFocus=!1,t.$.fireEvent("focus"),t._canFireFocus=!0))}_handlePointerInEscapedSymbol(e){const t=this;if("escaped"!==t.displayMode)return;let n=t.$.input.selectionStart,l=t.$.input.selectionEnd,o=t.$.input.value;if("\\"===o[n-1]&&o[n].match(/n|r|s|t|f/g)){if(n===l){let l="next"===e?1:-1;return t.$.input.selectionStart=n+l,void(t.$.input.selectionEnd=n+l)}t.$.input.selectionStart=n-1,"\\"===o[l-1]&&o[l].match(/n|r|s|t|f/g)&&(t.$.input.selectionEnd=l+1)}}_handleSelectedText(){null===this.selectionStart||null===this.selectionEnd||this.selectionStart===this.selectionEnd||this.selectAllOnFocus||(this.selectionStart=this.selectionStart<0?0:this.selectionStart,this.selectionEnd=this.selectionEnd>this.value.length?this.value.length:this.selectionEnd,this.$.input.setSelectionRange(this.selectionStart,this.selectionEnd))}_handleHintContainer(){const e=this;if(!e.hint)return;const t=e.$.hint;if("function"==typeof e.hint){const n=e.value;e.hint(n,t)?e.$.addClass("invalid"):e.$.removeClass("invalid")}else"string"==typeof e.hint&&(t.innerHTML=e.hint,e.$.removeClass("invalid"))}_keyDownHandler(e){const t=this;switch(t._showAutoCompleteHighlighter=!1,e.key){case"ArrowUp":case"ArrowDown":if(e.altKey)return e.preventDefault(),void("ArrowDown"===e.key?t.open():t.close());if(t.opened){if(e.preventDefault(),t.$.listBox._handleKeyStrokes(e.key),"inline"!==t.autoComplete)break;t._showAutoCompleteHighlighter=!0,super._updateAutoCompleteHelper()}break;case"PageUp":case"PageDown":e.preventDefault(),t.$.input.selectionStart=t.$.input.selectionEnd="PageUp"===e.key?0:t.$.input.value.length;break;case"Enter":{const e="function"==typeof t.$.listBox._focusedItem?t.$.listBox._focusedItem():t.$.listBox._focusedItem;if(t.opened&&e&&e._focused&&(t.$.listBox.$.filterInput.value=e[t.inputMember],t.$.input.value="escaped"===t.displayMode?t._toEscapedDisplayMode(e[t.inputMember]):t._toDefaultDisplayMode(e[t.inputMember]),t.select(e),t.close()),"default"!==t.enterKeyBehavior){const e=t.$.input.value;t._oldValue!==e&&(t.close(),t.$.fireEvent("change",{oldValue:t._oldValue,value:e,type:"submit"}),"clearOnSubmit"===t.enterKeyBehavior&&(Smart.MaskedTextBox&&t instanceof Smart.MaskedTextBox?(t._cleanMask(),t._setMaskToInput(),t.$.input.selectionStart=t.$.input.selectionEnd=0):t.$.input.value=""),t._oldValue=t.value=t._toDefaultDisplayMode(t.$.input.value)),t._submitted=!0}break}case"Escape":if(t.$.dropDownContainer&&t.close(),t._closedFromKeyCombination=!0,"none"===t.escKeyMode)return;switch(t.escKeyMode){case"none":break;case"clearValue":t.value=t.$.input.value="";break;case"previousValue":t.$.input.value="escaped"===t.displayMode?t._toEscapedDisplayMode(t._oldValue):t._oldValue}break;case" ":"escaped"===t.displayMode&&function(n){let l=t.$.input.selectionStart,o=t.$.input.selectionEnd,a=t.$.input.value;e.preventDefault(),a=a.substring(0,l)+n+a.substring(o,a.length),t.value=t._toDefaultDisplayMode(a),t.$.input.value=a,t.$.input.selectionStart=t.$.input.selectionEnd=l+2}("\\s");break;case"Backspace":if("escaped"===t.displayMode&&t.$.input.selectionStart===t.$.input.selectionEnd){let e=t.$.input.selectionStart;"\\"!==t.$.input.value[e-2]||"s"!==t.$.input.value[e-1]&&"n"!==t.$.input.value[e-1]||(t.$.input.value=t.$.input.value.substring(0,e-2)+t.$.input.value.substring(e-2,t.$.input.value.length),t.$.input.selectionStart=e-2)}}}_keyUpHandler(e){const t=this;t.disabled||"Escape"===e.key||e.target===t.$.listBox.$.filterInput||e.target===t.$.input&&"oneOrManyExtended"===t.selectionMode&&(t.$.listBox._keysPressed[e.key]=!1)}_listBoxItemClickHandler(e){const t=this,n=e.detail;if(super._listBoxItemClickHandler(e),n.selected){if("escaped"===t.displayMode){const e=t.$.input.value;t.value=t._toDefaultDisplayMode(e),t.$.input.value=e}else t.value=t.$.input.value;t._oldValue!==t.value&&(t.$.fireEvent("change",{oldValue:t._oldValue,value:t.value}),t.$.input.focus())}}_submitKeyUpHandler(){const e=this;e._submitted&&("clearOnSubmit"===e.enterKeyBehavior&&(e.$.input.selectionStart=e.$.input.selectionEnd=0),e._submitted=!1)}_textBoxKeyUpHandler(e){const t=this;if(t.disabled||e.altKey||e.ctrlKey)return;if("escaped"===t.displayMode){const e=t.$.input.value;t.value=t._toDefaultDisplayMode(t.$.input.value),t.$.input.value=e}else t.value=t.$.input.value;let n;if(1===t.$.listBox.selectedIndexes.length&&(n=t.$.listBox.getItem(t.$.listBox.selectedValues[0]),t.value!==n[t.inputMember]&&t.unselect(n)),t._showAutoCompleteHighlighter||(t.$.autoCompleteString.textContent=""),"Alt"===e.key||"Control"===e.key||!t.opened&&"Escape"===e.key||"Enter"===e.key)t._closedFromKeyCombination=!1;else if(e.key&&e.key.indexOf("Arrow")>-1)t._handlePointerInEscapedSymbol("ArrowRight"===e.key?"next":void 0);else{if("none"!==t.autoComplete&&(t.$.input.value.length>0||"auto"===t.dropDownOpenMode)){const e=super._autoComplete.bind(t);if(t._autoCompleteTimer&&clearTimeout(t._autoCompleteTimer),0===t.$.listBox._items.length&&"function"!=typeof t.dataSource)return void t.close();t._autoCompleteTimer=setTimeout((function(){e(!0)}),t.autoCompleteDelay)}else t.close();"Enter"===e.key&&t.value!=t.value&&t._browserIsIEorEdge&&(t.value=t.$.input.value,t.$.fireEvent("change",{oldValue:t._oldValue,value:t.value}))}}_listBoxChangeHandler(e){const t=this;if(e.stopPropagation(),e.detail.selected){const n=t.$.listBox._items[e.detail.index];let l="";n&&(l=n[t.inputMember]),t.$.listBox.$.filterInput.value=l,t.$.input.value="escaped"===t.displayMode?t._toEscapedDisplayMode(l):t._toDefaultDisplayMode(l),t.set("value",t._toDefaultDisplayMode(t.$.input.value))}"none"!==t.autoComplete&&"function"!=typeof t.dataSource&&t._autoComplete(!0)}_mouseEventsHandler(e){"mouseenter"===e.type?this.setAttribute("hover",""):this.removeAttribute("hover")}_textBoxChangeHandler(e){const t=this;if(e.stopPropagation(),"escaped"===t.displayMode){const n=t.$.input.value,l=t.$.input.selectionStart,o=t.$.input.selectionEnd,a=e.clipboardData||e.originalEvent&&e.originalEvent.clipboardData||window.clipboardData;if(a){let n=a.getData("text"),i=t.$.input.value;e.preventDefault(),n=t._toEscapedDisplayMode(n),t.$.input.value=i.substring(0,l)+n+i.substring(o,i.length)}t.value=t._toDefaultDisplayMode(t.$.input.value),t.$.input.value=n}else t.value=t.$.input.value;t._handleHintContainer()}_textBoxSelectHandler(){this.disabled||(this.selectionStart=this.$.input.selectionStart,this.selectionEnd=this.$.input.selectionEnd)}_toEscapedDisplayMode(e){const t=[{key:/\r\n|\n\r|\n|\r/g,value:"\\n"},{key:/\s/g,value:"\\s"},{key:/\n/g,value:"\\n"},{key:/\t/g,value:"\\t"},{key:/\f/g,value:"\\f"},{key:/\r/g,value:"\\r"}];for(let n=0;n<t.length;n++)e=e.replace(t[n].key,t[n].value);return e}_toDefaultDisplayMode(e){e||(e="");const t=[{key:/\\s/g,value:" "},{key:/\\n/g,value:"\n"},{key:/\\t/g,value:"\t"},{key:/\\f/g,value:"\f"},{key:/\\r/g,value:"\r"}];for(let n=0;n<t.length;n++)e=e.replace(t[n].key,t[n].value);return e}_documentDownHandler(e){const t=this;if(t.disabled||t.readonly)return;let n=e.originalEvent.target;if(t.enableShadowDOM)if(n=e.originalEvent.composedPath()[0],null===t._dropDownParent)t._isDropDownClicked=n.closest(".smart-drop-down-container")===t.$.dropDownContainer;else{let e=n.getRootNode().host;e&&e.closest(".smart-drop-down-container")===t.$.dropDownContainer&&(t._isDropDownClicked=!0)}else t._isDropDownClicked=n.closest(".smart-drop-down-container")===t.$.dropDownContainer;(e.originalEvent.target.closest("smart-list-item")||t._isDropDownClicked)&&(t._preventDropDownClose=!0)}_documentMoveHandler(){}_documentUpHandler(e){const t=this;if(t.disabled)return;let n=t.enableShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target;if(n)if("escaped"===t.displayMode&&n===t.$.input&&t._handlePointerInEscapedSymbol(),t._isDropDownClicked||t.readonly)delete t._isDropDownClicked;else if(n!==t.$.input||"auto"!==t.dropDownOpenMode){for(;n;){if(n instanceof Smart.ListItem&&n.ownerListBox===t.$.listBox){if(n.unselectable||n.disabled)return;return"escaped"===t.displayMode?t.$.input.value=t._toEscapedDisplayMode(n[t.inputMember]):t.$.input.value=t._toDefaultDisplayMode(n[t.inputMember]),t.value=t.$.input.value,t.$.fireEvent("change",{oldValue:t._oldValue,value:t.value,type:"submit"}),t._oldValue=t.value,"clearOnSubmit"===t.enterKeyBehavior&&(t.$.input.value=t.value=""),super._autoComplete(!0),t.close(),n="item",void t.$.input.focus()}if(n===t.$.listBox)return void(n="listBox");n=n.parentElement}"listBox"===n||"item"===n||t.close()}else super._autoComplete(!0)}})}});