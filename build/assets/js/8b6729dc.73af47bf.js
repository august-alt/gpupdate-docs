"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[4252],{4621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(4848),s=n(8453);const a={},o=void 0,l={id:"gpoa/util/arguments",title:"arguments",description:"FunctionDef setloglevel(loglevelnum)",source:"@site/docs/gpoa/util/arguments.md",sourceDirName:"gpoa/util",slug:"/gpoa/util/arguments",permalink:"/docs/gpoa/util/arguments",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"util",permalink:"/docs/gpoa/util/"},next:{title:"config",permalink:"/docs/gpoa/util/config"}},r={},c=[{value:"FunctionDef set_loglevel(loglevel_num)",id:"functiondef-set_loglevelloglevel_num",level:2},{value:"FunctionDef process_target(target_name)",id:"functiondef-process_targettarget_name",level:2},{value:"ClassDef ExitCodeUpdater",id:"classdef-exitcodeupdater",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"functiondef-set_loglevelloglevel_num",children:"FunctionDef set_loglevel(loglevel_num)"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"set_loglevel"}),": The function of set_loglevel is to set the log level global value based on the input parameter."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"parameters"}),":\n\xb7 loglevel_num: This is an optional parameter with a default value of None. It represents the log level number that the user wants to set."]}),"\n",(0,i.jsx)(t.h2,{id:"functiondef-process_targettarget_name",children:"FunctionDef process_target(target_name)"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"process_target"}),": The function of process_target is to determine and return the specified target, which can be 'All', 'Computer' or 'User'."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"parameters"}),": The parameters of this Function."]}),"\n",(0,i.jsx)(t.p,{children:"\xb7 target_name: optional, a string representing the name of the target. If not provided, 'All' will be used as the default value."}),"\n",(0,i.jsx)(t.h2,{id:"classdef-exitcodeupdater",children:"ClassDef ExitCodeUpdater"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"ExitCodeUpdater"}),": The ExitCodeUpdater class defines the different exit codes that can be returned by the gpupdate application, providing a contract for the application's exit status."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Attributes"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"EXIT_SUCCESS: An exit code indicating that the gpupdate application has completed successfully."}),"\n",(0,i.jsx)(t.li,{children:"FAIL_NO_RUNNER: An exit code indicating that the gpupdate application failed to start because no runner was found."}),"\n",(0,i.jsx)(t.li,{children:"FAIL_GPUPDATE_COMPUTER_NOREPLY: An exit code indicating that the gpupdate application failed to update computer policy due to no reply."}),"\n",(0,i.jsx)(t.li,{children:"FAIL_GPUPDATE_USER_NOREPLY: An exit code indicating that the gpupdate application failed to update user policy due to no reply."}),"\n",(0,i.jsx)(t.li,{children:"EXIT_SIGINT: An exit code indicating that the gpupdate application received an interrupt signal (SIGINT)."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Code Description"}),":\nThe ExitCodeUpdater class is a subclass of the ",(0,i.jsx)(t.code,{children:"IntEnum"})," class, which is a specialized enumeration class for integer values. This class defines a set of named constants for the different exit codes that can be returned by the gpupdate application."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"EXIT_SUCCESS"})," constant is used to indicate that the gpupdate application has completed successfully. The ",(0,i.jsx)(t.code,{children:"FAIL_NO_RUNNER"})," constant is used when the gpupdate application fails to start because no runner was found. The ",(0,i.jsx)(t.code,{children:"FAIL_GPUPDATE_COMPUTER_NOREPLY"})," and ",(0,i.jsx)(t.code,{children:"FAIL_GPUPDATE_USER_NOREPLY"})," constants are used when the gpupdate application fails to update computer or user policy due to no reply. The ",(0,i.jsx)(t.code,{children:"EXIT_SIGINT"})," constant is used when the gpupdate application receives an interrupt signal (SIGINT), indicating that the user has requested to terminate the application."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"EXIT_SIGINT"})," constant is used in the ",(0,i.jsx)(t.code,{children:"signal_handler"})," function in the ",(0,i.jsx)(t.code,{children:"gpoa/util/signals.py"})," module. When the gpupdate application receives an interrupt signal, the ",(0,i.jsx)(t.code,{children:"signal_handler"})," function is called, which prints a message to the console, ignores further signals, cleans up the Kerberos cache, and then exits the application with the ",(0,i.jsx)(t.code,{children:"EXIT_SIGINT"})," exit code."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The ExitCodeUpdater class should be used to define the exit codes for the gpupdate application, providing a clear contract for the application's exit status."}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"EXIT_SIGINT"})," constant should be used in the ",(0,i.jsx)(t.code,{children:"signal_handler"})," function to indicate that the gpupdate application has received an interrupt signal and is exiting gracefully."]}),"\n",(0,i.jsx)(t.li,{children:"The exit codes defined in the ExitCodeUpdater class should be used consistently throughout the gpupdate application to indicate the different exit scenarios."}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(6540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);