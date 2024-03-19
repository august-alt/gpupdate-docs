"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[3499],{3777:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var i=s(4848),t=s(8453);const c={},o=void 0,d={id:"gpoa/plugin/adp",title:"adp",description:"ClassDef adp",source:"@site/docs/gpoa/plugin/adp.md",sourceDirName:"gpoa/plugin",slug:"/gpoa/plugin/adp",permalink:"/docs/gpoa/plugin/adp",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"plugin",permalink:"/docs/gpoa/plugin/"},next:{title:"exceptions",permalink:"/docs/gpoa/plugin/exceptions"}},r={},a=[{value:"ClassDef adp",id:"classdef-adp",level:2},{value:"FunctionDef <strong>init</strong>(self)",id:"functiondef-initself",level:3},{value:"FunctionDef run(self)",id:"functiondef-runself",level:3}];function l(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"classdef-adp",children:"ClassDef adp"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"adp"}),": The function of adp is to manage and run the 'adp' plugin."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"attributes"}),": This Class does not have any attributes."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Code Description"}),":"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"adp"})," class has two methods: ",(0,i.jsx)(n.code,{children:"__init__"})," and ",(0,i.jsx)(n.code,{children:"run"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"__init__"})," method initializes the class and checks if the 'adp' package is installed using the ",(0,i.jsx)(n.code,{children:"is_rpm_installed"})," function. If the package is not installed, it raises a ",(0,i.jsx)(n.code,{children:"PluginInitError"})," with a specific error message. If the package is installed, it logs an informational message."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"run"})," method performs two tasks: fetching and applying the 'adp' plugin. It first logs an informational message, then uses the ",(0,i.jsx)(n.code,{children:"subprocess.call"})," function to execute the '/usr/bin/adp fetch' and '/usr/bin/adp apply' commands. If any exception occurs during the execution of these commands, it logs an error message and re-raises the exception."]}),"\n",(0,i.jsxs)(n.p,{children:["From a functional perspective, the ",(0,i.jsx)(n.code,{children:"adp"})," class is called by the ",(0,i.jsx)(n.code,{children:"plugin_manager"})," class in the ",(0,i.jsx)(n.code,{children:"__init__"})," method. The ",(0,i.jsx)(n.code,{children:"plugin_manager"})," class creates an instance of the ",(0,i.jsx)(n.code,{children:"adp"})," class and adds it to a dictionary of plugins. If the 'adp' package is not installed, the ",(0,i.jsx)(n.code,{children:"plugin_manager"})," logs a warning message."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"adp"})," class assumes that the 'adp' package is installed as an RPM package. If the package is installed in a different way, the ",(0,i.jsx)(n.code,{children:"is_rpm_installed"})," function may need to be modified."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"run"})," method uses the ",(0,i.jsx)(n.code,{children:"subprocess.call"})," function to execute shell commands. If the commands are not guaranteed to be safe, the ",(0,i.jsx)(n.code,{children:"subprocess.run"})," function with the ",(0,i.jsx)(n.code,{children:"check=True"})," argument should be used instead to raise a ",(0,i.jsx)(n.code,{children:"CalledProcessError"})," if the command returns a non-zero exit status."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"run"})," method does not handle any specific exceptions. If certain exceptions are expected, they should be caught and handled appropriately."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"functiondef-initself",children:["FunctionDef ",(0,i.jsx)(n.strong,{children:"init"}),"(self)"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.strong,{children:"init"})}),": The function of ",(0,i.jsx)(n.strong,{children:"__init__"})," is to initialize the adp object and ensure that the required RPM package is installed."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"parameters"}),":"]}),"\n",(0,i.jsxs)(n.p,{children:["\xb7 None: The ",(0,i.jsx)(n.strong,{children:"__init__"})," function does not take any parameters."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Code Description"}),":"]}),"\n",(0,i.jsxs)(n.p,{children:["When an adp object is initialized, the ",(0,i.jsx)(n.strong,{children:"__init__"})," function first checks if the 'adp' RPM package is installed in the system using the ",(0,i.jsx)(n.code,{children:"is_rpm_installed"})," function. If the package is not installed, the function raises a ",(0,i.jsx)(n.code,{children:"PluginInitError"})," exception with a message indicating that the package is not installed."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"functiondef-runself",children:"FunctionDef run(self)"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"run"}),": The ",(0,i.jsx)(n.code,{children:"run"})," function is responsible for executing a series of operations in the adp plugin."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Code Description"}),":\nThe ",(0,i.jsx)(n.code,{children:"run"})," function first imports the ",(0,i.jsx)(n.code,{children:"slogm"})," class from the ",(0,i.jsx)(n.code,{children:"logging"})," module and the ",(0,i.jsx)(n.code,{children:"message_with_code"})," function from the ",(0,i.jsx)(n.code,{children:"messages"})," module. It then proceeds to execute the following operations:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["It logs an informational message with a code 'D5' using the ",(0,i.jsx)(n.code,{children:"slogm"})," class and the ",(0,i.jsx)(n.code,{children:"message_with_code"})," function."]}),"\n",(0,i.jsxs)(n.li,{children:["It executes a subprocess call to the ",(0,i.jsx)(n.code,{children:"/usr/bin/adp"})," binary with the argument ",(0,i.jsx)(n.code,{children:"fetch"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["It executes another subprocess call to the ",(0,i.jsx)(n.code,{children:"/usr/bin/adp"})," binary with the argument ",(0,i.jsx)(n.code,{children:"apply"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If any exception occurs during the execution of the above operations, it logs an error message with a code 'E9' using the ",(0,i.jsx)(n.code,{children:"slogm"})," class and the ",(0,i.jsx)(n.code,{children:"message_with_code"})," function and raises the exception."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"run"})," function is responsible for executing the core functionality of the adp plugin. It uses the ",(0,i.jsx)(n.code,{children:"slogm"})," class to log informational and error messages, and the ",(0,i.jsx)(n.code,{children:"message_with_code"})," function to format the log messages with a given code. The function uses the ",(0,i.jsx)(n.code,{children:"subprocess"})," module to execute external commands, which in this case are the ",(0,i.jsx)(n.code,{children:"fetch"})," and ",(0,i.jsx)(n.code,{children:"apply"})," subcommands of the ",(0,i.jsx)(n.code,{children:"adp"})," binary."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"run"})," function is typically called from the ",(0,i.jsx)(n.code,{children:"ADP"})," class in the ",(0,i.jsx)(n.code,{children:"adp"})," module, which is the main entry point for the adp plugin. The ",(0,i.jsx)(n.code,{children:"ADP"})," class initializes the plugin and provides an interface for executing its functionality."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),":\nIt is important to ensure that the ",(0,i.jsx)(n.code,{children:"adp"})," binary is installed and accessible from the system path before running this function. Additionally, any errors or exceptions that occur during the execution of the function are logged and raised, so it is important to handle them appropriately in the calling code."]}),"\n",(0,i.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var i=s(6540);const t={},c=i.createContext(t);function o(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);