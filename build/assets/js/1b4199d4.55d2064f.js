"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[4329],{5246:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=i(4848),s=i(8453);const r={},o=void 0,l={id:"gpoa/plugin/exceptions",title:"exceptions",description:"ClassDef PluginInitError",source:"@site/docs/gpoa/plugin/exceptions.md",sourceDirName:"gpoa/plugin",slug:"/gpoa/plugin/exceptions",permalink:"/docs/gpoa/plugin/exceptions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"adp",permalink:"/docs/gpoa/plugin/adp"},next:{title:"plugin_manager",permalink:"/docs/gpoa/plugin/plugin_manager"}},c={},a=[{value:"ClassDef PluginInitError",id:"classdef-plugininiterror",level:2},{value:"FunctionDef <strong>init</strong>(self, message)",id:"functiondef-initself-message",level:3},{value:"FunctionDef <strong>str</strong>(self)",id:"functiondef-strself",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"classdef-plugininiterror",children:"ClassDef PluginInitError"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PluginInitError"}),": The function of PluginInitError is to raise an exception when a plugin fails to initialize."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"attributes"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"message: A string that contains a description of the error."}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"functiondef-initself-message",children:["FunctionDef ",(0,t.jsx)(n.strong,{children:"init"}),"(self, message)"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.strong,{children:"init"})}),": The function of ",(0,t.jsx)(n.strong,{children:"init"})," is to initialize the PluginInitError class with a given error message."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"parameters"}),":\n\xb7 message: A string that represents the error message to be initialized with the PluginInitError class."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Code Description"}),":\nThe ",(0,t.jsx)(n.strong,{children:"init"})," function is a special method in Python classes, called when an object is initialized. In this case, it is defined in the PluginInitError class, located in the exceptions.py module of the plugin package in the gpoa project."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"init"})," function takes one argument, self, which is a reference to the current instance of the class, and the message parameter, which is the error message to be associated with the PluginInitError instance."]}),"\n",(0,t.jsx)(n.p,{children:"In the function body, the message is assigned to the instance variable self.message, which can be later accessed to get the error message."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The message parameter should always be a string, otherwise, a TypeError will be raised when the PluginInitError class is instantiated."}),"\n",(0,t.jsx)(n.li,{children:"The PluginInitError class is intended to be used as an exception for plugin-related initialization errors in the gpoa project. Developers should raise this exception when they encounter issues during plugin initialization."}),"\n",(0,t.jsx)(n.li,{children:"Proper error handling should be implemented when using the PluginInitError class to ensure that the application can recover gracefully from these errors."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"functiondef-strself",children:["FunctionDef ",(0,t.jsx)(n.strong,{children:"str"}),"(self)"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"__str__"})}),": The function of ",(0,t.jsx)(n.code,{children:"__str__"})," is to return a human-readable string representation of the PluginInitError object."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Code Description"}),":\nThe ",(0,t.jsx)(n.code,{children:"__str__"})," function is a special method in Python that is called when the ",(0,t.jsx)(n.code,{children:"str()"})," function is called on an object or when the object is implicitly converted to a string, such as when it is printed. In this case, the ",(0,t.jsx)(n.code,{children:"__str__"})," function is defined within the PluginInitError class in the exceptions.py module."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"__str__"})," function simply returns the value of the ",(0,t.jsx)(n.code,{children:"message"})," attribute of the PluginInitError object. The ",(0,t.jsx)(n.code,{children:"message"})," attribute is expected to contain a string that describes the error that occurred during plugin initialization."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),":\nIt is important to provide a clear and informative error message when creating a PluginInitError object, as this message will be displayed to the user when the error occurs."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Output Example"}),":\nAssuming a PluginInitError object was created with the following code:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'error = PluginInitError("Failed to initialize plugin: invalid configuration")\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The output of the ",(0,t.jsx)(n.code,{children:"__str__"})," function would be:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"'Failed to initialize plugin: invalid configuration'\n"})}),"\n",(0,t.jsx)(n.p,{children:"This output can then be printed to the console or displayed to the user in some other way."}),"\n",(0,t.jsx)(n.hr,{})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);