(function(t){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],d=0,h=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/remixide/plugin/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0f9a":function(t,e,n){"use strict";var a=n("774c"),r=n.n(a);r.a},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},6:function(t,e){},7:function(t,e){},"774c":function(t,e,n){},8:function(t,e){},"874b":function(t,e,n){},9:function(t,e){},c07e:function(t,e,n){"use strict";var a=n("874b"),r=n.n(a);r.a},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var a=n("2b0e"),r=n("5f5b"),o=(n("ab8b"),n("2dd8"),n("b1e0")),i={size:"sm"},s={formControls:i,BForm:i,BFormText:i,BFormGroup:i,BFormSelect:i,BButton:i,BDropdown:i,BInputGroup:i,BInput:i,BModal:i,BPagination:i,BPaginationNav:i};a["default"].use(r["a"],s),a["default"].use(o["a"]);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Deployment"),n("input",{staticStyle:{display:"none"},attrs:{id:"ShadowCopy"}})],1)},u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-list-group",[n("b-list-group-item",[n("b-form",[n("Networks",{on:{networkChange:function(e){return t.hmy=e}}}),n("b-form-group",{attrs:{"label-size":"sm",label:"Wallet:"}},[n("b-form-select",{attrs:{options:t.wallets},model:{value:t.selectWallet,callback:function(e){t.selectWallet=e},expression:"selectWallet"}})],1),n("b-form-group",{attrs:{"label-size":"sm"},scopedSlots:t._u([{key:"label",fn:function(){return[n("span",{attrs:{stype:"padding-right:'0.2em'"}},[t._v("Account:")]),n("b-icon",{attrs:{icon:"plus-circle-fill"},on:{click:t.addAccount}})]},proxy:!0}])},[n("b-form-select",{attrs:{options:t.accounts},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),n("b-form-group",{attrs:{"label-size":"sm",label:"GasLimit:"}},[n("b-form-input",{model:{value:t.gasLimit,callback:function(e){t.gasLimit=e},expression:"gasLimit"}})],1),n("b-form-group",{attrs:{"label-size":"sm",label:"GasPrice:"}},[n("b-input-group",{attrs:{append:"wei"}},[n("b-form-input",{model:{value:t.gasPrice,callback:function(e){t.gasPrice=e},expression:"gasPrice"}})],1)],1),n("b-form-group",{attrs:{"label-size":"sm",label:"Value:"}},[n("b-input-group",[n("b-form-input",{on:{change:t.valueChange},model:{value:t.callValue,callback:function(e){t.callValue=e},expression:"callValue"}}),n("b-input-group-append",[n("b-form-select",{attrs:{options:t.uints},on:{change:t.valueChange},model:{value:t.uint,callback:function(e){t.uint=e},expression:"uint"}})],1)],1)],1)],1)],1),n("b-list-group-item",[n("b-form",[n("b-form-group",{attrs:{"label-size":"sm",disabled:!t.compiledData,label:"Contract:",description:t.compiledData?"":"NO COMPILED CONTRACT"}},[n("b-form-select",{attrs:{options:t.contracts},model:{value:t.contract,callback:function(e){t.contract=e},expression:"contract"}}),t.abiConstractor?n("ItemCard",{attrs:{item:t.abiConstractor,triger:t.deploy}}):t._e()],1),n("b-form-group",{attrs:{"label-size":"sm",disabled:!t.compiledData,label:"Or"}},[n("b-input-group",[n("b-input-group-prepend",[n("b-button",{attrs:{variant:"info"},on:{click:t.contractAt}},[t._v("AT")])],1),n("b-form-input",{attrs:{placeholder:"Load contract from Address"},model:{value:t.contractAddress,callback:function(e){t.contractAddress=e},expression:"contractAddress"}})],1)],1)],1)],1),n("b-list-group-item",[n("b-form",[n("b-form-group",{attrs:{"label-size":"sm",label:"Deployed Contracts:"}},t._l(t.contractInstances,(function(e,a){return n("ContractInstance",{key:e.contract.address,attrs:{abi:e.abi,hmy:t.hmy,contract:e.contract},on:{close:function(n){return t.removeInstance(e,a)}}})})),1)],1)],1)],1)},d=[],h=(n("99af"),n("a434"),n("b680"),n("d3b7"),n("25f0"),n("5530")),m=(n("96cf"),n("1da1")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lineInstance"},[n("b-button-group",[n("b-button",{attrs:{disabled:t.disbaled},on:{click:function(e){t.visible=!t.visible}}},[n("b-icon",{attrs:{icon:t.visible?"chevron-down":"chevron-right"}})],1),n("b-button",{staticClass:"wfont",on:{click:function(e){t.$copyText(t.toOneAddress(t.contract.address))}}},[t._v(t._s(t._f("short")(t.toOneAddress(t.contract.address))))]),n("b-link",{attrs:{href:t.ContractLink,target:"_blank"}},[n("b-button",[n("b-icon",{attrs:{icon:"box-arrow-up-right"}})],1)],1),n("b-button",{on:{click:function(e){return t.$emit("close")}}},[n("b-icon",{attrs:{icon:"x"}})],1)],1),n("b-collapse",{model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("div",t._l(t.abiClassify.abiReadonly,(function(e,a){return n("ItemCard",{key:a,attrs:{item:e,triger:t.contractCall}})})),1),n("div",t._l(t.abiClassify.abiWrite,(function(e,a){return n("ItemCard",{key:a,attrs:{item:e,triger:t.contractSend}})})),1),n("div",t._l(t.abiClassify.abiPayable,(function(e,a){return n("ItemCard",{key:a,attrs:{item:e,triger:t.contractSend}})})),1)])],1)},f=[],g=(n("4160"),n("d81d"),n("b0c0"),n("b64b"),n("2ca0"),n("159b"),n("2909")),b=n("db5e"),y=["https://peekpi.github.io","https://www.harmony.one"],v={origins:y},w=Object(b["createIframeClient"])({devMode:v}),x=null;function k(t){x=t}function _(t){console.log("remix-log:",t),w.emit("log",{data:t})}function C(t){console.log("remix-error:",t),w.emit("error",{data:t})}w.onload().then((function(){w.solidity.on("compilationFinished",(function(){return x&&x.apply(void 0,arguments)}))})),window.pc=w;var S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lineItem"},[n("b-input-group",{scopedSlots:t._u([t.item.inputs.length?{key:"append",fn:function(){return[n("b-button",{on:{click:function(e){t.visible=!t.visible}}},[n("b-icon",{attrs:{icon:t.visible?"chevron-down":"chevron-right"}})],1)]},proxy:!0}:null],null,!0)},[n("b-input-group-prepend",[n("b-button",{staticClass:"button",attrs:{variant:t.color},on:{click:t.methodTriger}},[t._v(t._s(t.item.name?t.item.name:"DEPLOY"))])],1),t.item.inputs.length?n("b-form-input",{attrs:{lazy:"",placeholder:t.singlePlaceholder},model:{value:t.singleValue,callback:function(e){t.singleValue=e},expression:"singleValue"}}):t._e()],1),t.item.inputs.length?n("b-collapse",{model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},t._l(t.item.inputs,(function(e,a){return n("b-input-group",{key:a,attrs:{prepend:e.name?e.name:String(a)}},[n("b-form-input",{attrs:{placeholder:e.type},model:{value:t.argv[a],callback:function(e){t.$set(t.argv,a,e)},expression:"argv[index]"}})],1)})),1):t._e(),t.result?n("div",[n("ul",{attrs:{start:"0"}},t._l(t.result,(function(e,a){return n("li",{key:a},[e.name?n("b",[t._v(t._s(e.name)+":")]):t._e(),n("span",[t._v(t._s(e.value))])])})),0)]):t._e()],1)},I=[],O=(n("a15b"),n("ac1f"),n("5319"),{name:"ItemCard",data:function(){return{visible:!1,argv:[],result:void 0}},props:["item","hmy","triger"],methods:{methodTriger:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.result=void 0,n=JSON.parse("[".concat(t.getMultiValsString,"]")),e.next=4,t.triger(t.item,n);case 4:t.result=e.sent;case 5:case"end":return e.stop()}}),e)})))()},makeMultiVal:function(t){var e=this.argv,n=t;if(n){n=n.replace(/(^|,\s+|,)(\d+)(\s+,|,|$)/g,'$1"$2"$3'),n=n.replace(/(^|,\s+|,)(0[xX][0-9a-fA-F]+|one[0-9a-z]+)(\s+,|,|$)/g,'$1"$2"$3');for(var a=JSON.parse("["+n+"]"),r=0;r<this.item.inputs.length;r++)a[r]&&this.$set(e,r,JSON.stringify(a[r]))}return e}},computed:{color:function(){return this.item.constant?"info":"payable"==this.item.stateMutability?"danger":"warning"},singlePlaceholder:function(){for(var t="",e=this.item,n=0;n<e.inputs.length;n++){var a=e.inputs[n];n>0&&(t+=", "),t+="".concat(a.type," ").concat(a.name)}return t},getMultiValsString:function(){for(var t=this.argv,e="",n=[],a=0;a<t.length;a++){""!==e&&(e+=",");var r=t[a];n.push(r),r=r.replace(/(^|,\s+|,)(\d+)(\s+,|,|$)/g,'$1"$2"$3'),r=r.replace(/(^|,\s+|,)(0[xX][0-9a-fA-F]+|one[0-9a-z]+)(\s+,|,|$)/g,'$1"$2"$3');try{JSON.parse(r)}catch(i){r='"'+r+'"'}e+=r}var o=n.join("");return o?e:""},singleValue:{set:function(t){this.makeMultiVal(t)},get:function(){return this.getMultiValsString}}}}),A=O,T=(n("0f9a"),n("2877")),B=Object(T["a"])(A,S,I,!1,null,"9c177496",null),P=B.exports,j={name:"ContractInstance",components:{ItemCard:P},data:function(){return{visible:!1,disbaled:"rejected"==this.contract.status}},props:["contract","abi","hmy"],computed:{abiClassify:function(){var t=[],e=[],n=[],a=[],r=null;return this.abi.forEach((function(o){console.log("item:",o),"constructor"==o.type?r=o:"event"==o.type?a.push(o):o.constant?t.push(o):o.payable?n.push(o):e.push(o)})),{abiConstractor:r,abiReadonly:t,abiWrite:e,abiPayable:n}},ContractLink:function(){return"".concat(this.hmy.config.explorer,"/#/address/").concat(this.contract.address)}},methods:{toOneAddress:function(t){return t.startsWith("one")?t:this.hmy.crypto.toBech32(t)},contractCall:function(t,e){try{return this._contractCall(t,e)}catch(a){var n="[object Object]"==a.toString()||""==a.toString();C(n?a:a.toString())}},_contractCall:function(t,e){var n,a=this,r=function(t,e){return"address"==t?a.toOneAddress(e):e.toString()};return(n=this.contract.methods)[t.name].apply(n,Object(g["a"])(e)).call().then((function(n){if(1==t.outputs.length){var a=t.outputs[0];return _({type:"method call",method:t.funcName,outputs:[r(a.type,n)]}),[{name:a.name,value:r(a.type,n)}]}for(var o=[],i=0;i<t.outputs.length;i++){var s=t.outputs[i];o.push({name:s.name,value:r(s.type,n[i])})}return _({type:"method call",method:t.funcName,inputs:e,outputs:o.map((function(t){return t.value}))}),o})).catch((function(t){return C(t),Object.keys(t).map((function(e){return{name:e,value:t[e]}}))}))},contractSend:function(t,e){try{return this._contractSend(t,e)}catch(a){var n="[object Object]"==a.toString()||""==a.toString();C(n?a:a.toString())}},_contractSend:function(t,e){var n,a=this;return(n=this.contract.methods)[t.name].apply(n,Object(g["a"])(e)).send(this.$store.txConfig()).then((function(n){_({type:"method send",method:t.funcName,inputs:e,sender:a.hmy.crypto.toBech32(n.transaction.from),tx:n.transaction.id,status:n.transaction.txStatus});var r=[{name:"txStatus",value:n.transaction.txStatus}];return"CONFIRMED"!=n.transaction.txStatus?a.contractCall(t,e):r})).catch((function(t){return C(t),[{name:"error",value:t}]}))}}},R=j,$=(n("c07e"),Object(T["a"])(R,p,f,!1,null,"7cf07783",null)),M=$.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-form-group",{attrs:{"label-size":"sm",label:"Networks:"}},[n("b-form-select",{attrs:{options:t.networks},on:{change:t.change},model:{value:t.network,callback:function(e){t.network=e},expression:"network"}})],1)},N=[],E=n("c21e"),V={url:"https://api1.s0.t.hmny.io",chainType:E["ChainType"].Harmony,chainId:E["ChainID"].HmyMainnet,shardID:0,explorer:"https://explorer.harmony.one"},L={url:"https://api.s0.b.hmny.io",chainType:E["ChainType"].Harmony,chainId:E["ChainID"].HmyTestnet,shardID:0,explorer:"https://explorer.testnet.harmony.one"},H=(n("a630"),n("fb6a"),n("3ca3"),n("1276"),n("d4ec")),F=n("bee2"),W=n("257e"),z=n("262e"),G=n("2caf"),U=n("ade3"),J=n("66fd"),X=n("f162"),K=function(t){Object(z["a"])(n,t);var e=Object(G["a"])(n);function n(t,a){var r;return Object(H["a"])(this,n),r=e.call(this,t.url,{chainType:t.chainType,chainId:t.chainId,shardID:t.shardID}),Object(U["a"])(Object(W["a"])(r),"GAS_PRICE",new r.utils.Unit(1).asGwei().toHex()),r.ExtendRPC(),r.address=null,r.config=t,r.name=a,r}return Object(F["a"])(n,[{key:"ExtendRPC",value:function(){var t=this;X.map((function(e){var n=e.name.split(" ")[0],a={};e.methods.map((function(e){var n=e.startsWith("hmy_")?e.slice(4):e;a[n]=function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return t.messenger.send(e,[].concat(a)).then((function(t){return t.getRaw}))}})),t.blockchain[n]=a}))}},{key:"sleep",value:function(t){return new Promise((function(e){return setTimeout(e,t)}))}},{key:"walletInit",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=0;case 1:if(window.harmony||!(e++<2)){t.next=6;break}return t.next=4,this.sleep(1e3);case 4:t.next=1;break;case 6:if(window.harmony){t.next=8;break}throw{message:"请安装麦子钱包"};case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"login",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.walletInit();case 2:return t.next=4,window.harmony.getAccount();case 4:return e=t.sent,this.address=e.address,t.abrupt("return",e);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"logout",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.walletInit();case 2:return this.address=null,t.abrupt("return",window.harmony.forgetIdentity());case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"delegate",value:function(t,e,n){var a=this.stakings.delegate({delegatorAddress:t,validatorAddress:e,amount:new this.utils.Unit(n).asWei().toHex()}).setTxParams({gasPrice:this.GAS_PRICE,gasLimit:"0x0927c0",chainId:this.chainId}).build();return a.setFromAddress(t),window.dtx=a,a}},{key:"withdrawReward",value:function(t){var e=this.stakings.collectRewards({delegatorAddress:t}).setTxParams({gasPrice:this.GAS_PRICE,gasLimit:"0x0927c0",chainId:this.chainId}).build();return e.setFromAddress(t),window.rtx=e,e}},{key:"undelegate",value:function(t,e,n){var a=this.stakings.undelegate({delegatorAddress:t,validatorAddress:e,amount:new this.utils.Unit(n).asWei().toHex()}).setTxParams({gasPrice:this.GAS_PRICE,gasLimit:"0x0927c0",chainId:this.chainId}).build();return a.setFromAddress(t),window.udtx=a,a}},{key:"transfer",value:function(t,e,n){var a=this.transactions.newTx({from:t,to:e,value:new this.utils.Unit(n).asWei().toHex(),gasLimit:"210000",shardID:0,toShardID:0,gasPrice:this.GAS_PRICE});return window.tx=a,a}},{key:"ContractAt",value:function(t,e){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{from:this.address?this.crypto.fromBech32(this.address):"",gas:"210000",gasPrice:this.GAS_PRICE},r=this.contracts.createContract(t,e,a);window.harmony&&(r.wallet.signTransaction=window.harmony.signTransaction);var o=function(t,e){if(0==t.length)return[];var n=r.abiCoder.decodeParameters(t,e);return n.length=t.length,Array.from(n)},i=function(t){var e=r.abiModel.getMethod(t);e.decodeInputs=function(t){return o(e.inputs,t)},e.decodeOutputs=function(t){return o(e.outputs,t)}};for(var s in r.abiModel.getMethods())i(s);return r.decodeInput=function(t){var e,a=t.startsWith("0x")?t.slice(2):t,o=a.slice(0,8).toLowerCase(),i=r.abiModel.getMethod("0x"+o);if(!i)return!1;for(var s=i.decodeInputs("0x"+a.slice(8)),c=(e=r.methods)["0x"+o].apply(e,Object(g["a"])(s)),u=0;u<c.params.length;u++)"address"==c.abiItem.inputs[u].type&&(c.params[u]=n.crypto.toBech32(c.params[u]));return c.toString=function(){for(var t=c.abiItem.name+"(",e=0;e<c.params.length;e++)e>0&&(t+=", "),t+=c.params[e];return t+=")",t},c},r}},{key:"ContractDeploy",value:function(t,e,n){var a=this.ContractAt(t,"0x");return a.deploy({data:e,arguments:n})}},{key:"txSignSend",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.harmony.signTransaction(e);case 2:return t.next=4,e.sendTransaction();case 4:if(n=t.sent,n[1]==e.id){t.next=7;break}throw{message:n[1]};case 7:return t.abrupt("return",e);case 8:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),n}(J["Harmony"]),Y={name:"Envroment",data:function(){return{networks:[{value:0,config:V,sdk:new K(V,"MAINNET"),text:"MAINNET"},{value:1,config:L,sdk:new K(L,"TESTNET"),text:"TESTNET"},{value:2,config:{},sdk:null,text:"CUSTOM...",disabled:!0}],network:1}},mounted:function(){this.change()},methods:{change:function(){this.$emit("networkChange",this.networks[this.network].sdk),window.hmy=this.networks[this.network].sdk}}},q=Y,Q=Object(T["a"])(q,D,N,!1,null,null,null),Z=Q.exports;n("4de4");function tt(t){var e=16;if(t.length<=e)return t;var n=e-3,a=Math.ceil(n/2);return"".concat(t.slice(0,a),"...").concat(t.slice(a-n))}function et(t){var e=10;if(t.length<=e)return t;var n=e-3;return"".concat(t.slice(0,n),"...")}a["default"].filter("short",tt),a["default"].filter("head",et);var nt={name:"Deployment",components:{ContractInstance:M,ItemCard:P,Networks:Z},data:function(){var t=this;return k((function(e,n,a,r){t.compiledData=r.contracts,t.entryFile=e})),{ind:0,hmy:null,entryFile:null,compiledData:null,wallets:[{value:0,text:"Harmony Wallet",disabled:!0},{value:1,text:"Math Wallet"},{value:2,text:"Import Private Key",disabled:!0}],selectWallet:1,selected:0,accounts:[],uints:[{text:"one",value:"one"},{text:"wei",value:"wei"}],uint:"wei",gasLimit:parseInt(this.$store.data.gasLimit),gasPrice:parseInt(this.$store.data.gasPrice),callValue:parseInt(this.$store.data.callValue),contract:null,contractAddress:null,contractInstances:[]}},computed:{contracts:function(){if(null==this.compiledData)return[];var t=[];for(var e in this.compiledData){var n=this.compiledData[e];for(var a in n)t.push({text:"".concat(a," - ").concat(e),value:{filename:e,contractName:a}})}return t},abi:function(){return null==this.compiledData||null==this.contract?[]:this.compiledData[this.contract.filename][this.contract.contractName].abi},evmCode:function(){return this.compiledData[this.contract.filename][this.contract.contractName].evm.bytecode.object},abiConstractor:function(){if(0==this.abi.length)return null;for(var t in this.abi){var e=this.abi[t];if("constructor"==e.type)return e}return{type:"constructor",inputs:[]}}},watch:{contracts:function(){this.contract=this.contracts[0].value},gasLimit:function(){var t=this.hmy,e=new t.utils.Unit(this.gasLimit);this.$store.data.gasLimit=e.asWei().toHex()},gasPrice:function(){var t=this.hmy,e=new t.utils.Unit(this.gasPrice);this.$store.data.gasPrice=e.asWei().toHex()}},methods:{contractAt:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.hmy,e.next=3,n.login();case 3:a=n.ContractAt(t.abi,t.contractAddress),window.c=a,t.contractInstances.push({abi:t.abi,contract:a,hmy:n});case 6:case"end":return e.stop()}}),e)})))()},deploy:function(t,e){var n=this;return Object(m["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,n._deploy(t,e);case 3:return a.abrupt("return",a.sent);case 6:a.prev=6,a.t0=a["catch"](0),r="[object Object]"==a.t0.toString()||""==a.t0.toString(),C(r?a.t0:a.t0.toString());case 10:case"end":return a.stop()}}),a,null,[[0,6]])})))()},_deploy:function(t,e){var n=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var a,r,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=n.hmy,t.next=3,a.login();case 3:return r=a.ContractDeploy(n.abi,"0x"+n.evmCode,e),o=r.contract,window.c=o,i=o.options.from,t.next=9,r.send(Object(h["a"])({from:i},n.$store.txConfig()));case 9:_({type:"contract deploy",tx:r.transaction.id,sender:a.crypto.toBech32(i),contract:Object(h["a"])(Object(h["a"])({status:o.status},n.contract),{},{address:a.crypto.toBech32(o.address)})}),n.contractInstances.push({abi:n.abi,contract:o,hmy:a}),"deployed"!=o.status&&r.call(Object(h["a"])({from:i},n.$store.txConfig())).then((function(t){return _(t)})).catch((function(t){return C(t)}));case 12:case"end":return t.stop()}}),t)})))()},addAccount:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n,a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.hmy,null!=n){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,n.logout();case 5:return e.next=7,n.login();case 7:return a=e.sent,e.next=10,n.blockchain.Account.getBalance(a.address,"latest");case 10:r=e.sent,a.balance=r.result,o=(parseInt(a.balance)/1e18).toFixed(2),t.$set(t.accounts,0,{value:0,account:a,text:"".concat(tt(a.address),"(").concat(o," one)")});case 14:case"end":return e.stop()}}),e)})))()},valueChange:function(){var t=this.hmy,e=new t.utils.Unit(this.callValue);"one"==this.uint?this.$store.data.callValue=e.asOne().toHex():this.$store.data.callValue=e.asWei().toHex()},removeInstance:function(t,e){this.contractInstances.splice(e,1)}}},at=nt,rt=Object(T["a"])(at,l,d,!1,null,null,null),ot=rt.exports,it=a["default"].extend({name:"App",components:{Deployment:ot},mounted:function(){var t=document.getElementById("ShadowCopy");a["default"].prototype.$copyText=function(e){return t.style.display="block",t.value=e,t.select(),document.execCommand("copy"),t.style.display="none",e}}}),st=it,ct=Object(T["a"])(st,c,u,!1,null,null,null),ut=ct.exports,lt={data:{gasLimit:"0x7a1200",gasPrice:"0x3b9aca00",callValue:"0x0",waitConfirm:!0},txConfig:function(){return{gas:this.data.gasLimit,gasPrice:this.data.gasPrice,value:this.data.callValue,waitConfirm:this.data.waitConfirm}}};a["default"].prototype.$store=lt;a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(ut)}}).$mount("#app")},f162:function(t){t.exports=JSON.parse('[{"name":"Account Methods","methods":["hmy_getBalanceByBlockNumber","hmy_getTransactionCount","hmy_getBalance","hmy_getAccountNonce","hmy_setLogVerbosity","address"]},{"name":"Filter Methods","methods":["hmy_getFilterLogs","hmy_newFilter","hmy_newPendingTransactionFilter","hmy_newBlockFilter","hmy_getFilterChanges","hmy_getLogs"]},{"name":"Transaction Related Methods","methods":["hmy_getStakingTransactionByBlockHashAndIndex","hmy_getStakingTransactionByBlockNumberAndIndex","hmy_getStakingTransactionByHash","hmy_getCurrentTransactionErrorSink","hmy_getPendingCrossLinks","hmy_getPendingCXReceipts","hmy_getCXReceiptByHash","hmy_pendingTransactions","hmy_sendRawStakingTransaction","hmy_getTransactionsHistory","hmy_sendRawTransaction","hmy_getTransactionReceipt","hmy_getBlockTransactionCountByHash","hmy_getBlockTransactionCountByNumber","hmy_getTransactionByHash","hmy_getTransactionByBlockNumberAndIndex","hmy_getTransactionByBlockHashAndIndex","hmy_getBlockByNumber","hmy_getBlockByHash","hmy_getBlocks","hmy_getCurrentStakingErrorSink","tx"]},{"name":"Contract Related Methods","methods":["hmy_estimateGas","hmy_getStorageAt","hmy_call","hmy_getCode"]},{"name":"Protocol Related Methods","methods":["hmy_isLastBlock","hmy_epochLastBlock","hmy_latestHeader","hmy_getShardingStructure","hmy_blockNumber","hmy_syncing","hmy_gasPrice","net_peerCount","hmy_getEpoch","hmy_getLeader"]},{"name":"Staking Related Methods","methods":["hmy_getCirculatingSupply","hmy_getTotalSupply","hmy_getStakingNetworkInfo","hmy_getAllValidatorInformation","hmy_getCurrentUtilityMetrics","hmy_getDelegationsByValidator","hmy_getDelegationsByDelegatorAndValidator","hmy_getDelegationsByDelegator","hmy_getValidatorMetrics","hmy_getMedianRawStakeSnapshot","hmy_getActiveValidatorAddresses","hmy_getAllValidatorAddresses","hmy_getCurrentStakingErrorSink","hmy_getValidatorInformation","hmy_getValidators","hmy_getSignedBlocks","hmy_isBlockSigner","hmy_getBlockSigners"]}]')}});