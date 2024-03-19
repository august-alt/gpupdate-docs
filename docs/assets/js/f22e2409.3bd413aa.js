"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[4183],{1484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(4848),i=t(8453);const r={},o=void 0,a={id:"gpoa/frontend/networkshare_applier",title:"networkshare_applier",description:"ClassDef networkshare_applier",source:"@site/docs/gpoa/frontend/networkshare_applier.md",sourceDirName:"gpoa/frontend",slug:"/gpoa/frontend/networkshare_applier",permalink:"/gpupdate-docs/docs/gpoa/frontend/networkshare_applier",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"kde_applier",permalink:"/gpupdate-docs/docs/gpoa/frontend/kde_applier"},next:{title:"ntp_applier",permalink:"/gpupdate-docs/docs/gpoa/frontend/ntp_applier"}},h={},l=[{value:"ClassDef networkshare_applier",id:"classdef-networkshare_applier",level:2},{value:"FunctionDef <strong>init</strong>(self, storage, sid, username)",id:"functiondef-initself-storage-sid-username",level:3},{value:"FunctionDef run(self)",id:"functiondef-runself",level:3},{value:"FunctionDef apply(self)",id:"functiondef-applyself",level:3},{value:"FunctionDef admin_context_apply(self)",id:"functiondef-admin_context_applyself",level:3},{value:"FunctionDef user_context_apply(self)",id:"functiondef-user_context_applyself",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"classdef-networkshare_applier",children:"ClassDef networkshare_applier"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"networkshare_applier"}),": The function of the networkshare_applier class is to handle the application of network share policies in the gpoa project. It is a subclass of applier_frontend and provides specific functionality for managing network shares."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"attributes"}),":\n\xb7 storage: An instance of the storage class, which is used to interact with the Windows Registry and other storage mechanisms.\n\xb7 sid: The security identifier (SID) of the user or machine for which policies are being applied.\n\xb7 username: The username for which policies are being applied, if applicable.\n\xb7 networkshare_info: A list of network share information for the specified SID.\n\xb7 __module_name: A string representing the name of the module.\n\xb7 __module_name_user: A string representing the name of the user-facing module.\n\xb7 __module_experimental: A boolean indicating whether the module is experimental.\n\xb7 __module_enabled: A boolean indicating whether the module is enabled in the gpoa configuration.\n\xb7 __module_enabled_user: A boolean indicating whether the user-facing module is enabled in the gpoa configuration."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),":\nThe networkshare_applier class is a subclass of applier_frontend and provides specific functionality for managing network shares. It initializes the storage, sid, and username attributes in the __init__() method, and sets the __module_enabled__ and __module_enabled_user__ attributes based on the result of a call to check_enabled()."]}),"\n",(0,s.jsx)(n.p,{children:"The run() method applies the network share policies for each network share in the networkshare_info list. It creates a Networkshare object for each network share and applies the policies."}),"\n",(0,s.jsx)(n.p,{children:"The apply() method checks whether the module is enabled before calling run(). If the module is enabled, it logs event D187 and calls run(). If the module is not enabled, it logs event D181."}),"\n",(0,s.jsx)(n.p,{children:"The user_context_apply() method checks whether the user-facing module is enabled before calling run(). If the module is enabled, it logs event D188 and calls run(). If the module is not enabled, it logs event D189."}),"\n",(0,s.jsx)(n.p,{children:"The __module_name__, __module_experimental__, and __module_enabled__ attributes are used by the gpoa application to determine whether the current module should be loaded and applied."}),"\n",(0,s.jsx)(n.p,{children:"The networkshare_applier class is intended to be used as a part of the gpoa frontend modules that apply policies. It is called by the frontend_manager in the _init_machine_appliers() and _init_user_appliers() methods to initialize the machine and user appliers, respectively."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":\nThe networkshare_applier class is intended to be used as a part of the gpoa frontend modules that apply policies. Subclasses should not override the __init__() method, as it contains important initialization logic. Subclasses should override the run() method to provide the actual network share application logic. Subclasses should also set the __module_name__, __module_experimental__, and __module_enabled__ attributes appropriately."]}),"\n",(0,s.jsxs)(n.h3,{id:"functiondef-initself-storage-sid-username",children:["FunctionDef ",(0,s.jsx)(n.strong,{children:"init"}),"(self, storage, sid, username)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.strong,{children:"init"})}),": The function of ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.strong,{children:"init"})})," is to initialize the networkshare_applier object with the required parameters and set the initial attributes."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parameters"}),":\n\xb7 storage: The storage object that contains the information about the network shares and their status.\n\xb7 sid: The security identifier (SID) of the user or computer to get the network share information for.\n\xb7 username (optional): The username for which the network share information is required. If not provided, the network share information for all users will be retrieved."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),":\nThe ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.strong,{children:"init"})})," function initializes the object by setting the ",(0,s.jsx)(n.code,{children:"storage"}),", ",(0,s.jsx)(n.code,{children:"sid"}),", and ",(0,s.jsx)(n.code,{children:"username"})," attributes with the provided parameters. It then calls the ",(0,s.jsx)(n.code,{children:"get_networkshare"})," function from the ",(0,s.jsx)(n.code,{children:"sqlite_registry"})," module to retrieve the network share information for the specified SID. The retrieved network share information is stored in the ",(0,s.jsx)(n.code,{children:"networkshare_info"})," attribute."]}),"\n",(0,s.jsxs)(n.p,{children:["Next, the function calls the ",(0,s.jsx)(n.code,{children:"check_enabled"})," function from the ",(0,s.jsx)(n.code,{children:"applier_frontend"})," module twice, once for the module name and once for the user-specific module name. The ",(0,s.jsx)(n.code,{children:"check_enabled"})," function checks whether the module is enabled or not based on the storage and the name of the module. The function sets the ",(0,s.jsx)(n.code,{children:"__module_enabled"})," and ",(0,s.jsx)(n.code,{children:"__module_enabled_user"})," attributes with the returned values from the ",(0,s.jsx)(n.code,{children:"check_enabled"})," function."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"__init__"})," function is the constructor for the ",(0,s.jsx)(n.code,{children:"networkshare_applier"})," class, and it is called every time a new object of this class is created. It sets the initial attributes for the object and retrieves the required information from the storage."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"__init__"})," function is called by the ",(0,s.jsx)(n.code,{children:"networkshare_applier"})," module to create an object of the ",(0,s.jsx)(n.code,{children:"networkshare_applier"})," class. It is used to initialize the object with the required parameters and set the initial attributes."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"sid"})," parameter should be a valid SID in the format of S-1-5-21-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxx."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"username"})," parameter is optional and can be omitted if the network share information for all users is required."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"check_enabled"})," function is called twice with different module names to check whether the module is enabled or not for the specified SID and username."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"get_networkshare"})," function is called to retrieve the network share information for the specified SID."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"networkshare_info"})," attribute contains the retrieved network share information."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"__module_enabled"})," and ",(0,s.jsx)(n.code,{children:"__module_enabled_user"})," attributes contain the status of the module for the specified SID and username."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"functiondef-runself",children:"FunctionDef run(self)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"run"}),": The function of run is to iterate through a list of network share information and apply each one using the Networkshare class."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),":\nThe run function is a method of the networkshare_applier class, which is used to apply network share settings. It iterates through a list of network share information contained in the ",(0,s.jsx)(n.code,{children:"self.networkshare_info"})," attribute, which is populated elsewhere in the class. For each item in the list, it creates an instance of the Networkshare class, passing in the network share information and the username to be used for managing the network share."]}),"\n",(0,s.jsxs)(n.p,{children:["The Networkshare class is defined in the ",(0,s.jsx)(n.code,{children:"gpoa/frontend/appliers/netshare.py"})," module and provides functionality for managing network shares using the 'net' command in a Linux system. It has methods for checking the current list of network shares, creating, updating, deleting, and replacing network shares."]}),"\n",(0,s.jsxs)(n.p,{children:["The run function does not return any value, but it logs the result of each Networkshare instance creation using the ",(0,s.jsx)(n.code,{children:"log"})," function."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"Networkshare"})," class is designed to work with network shares in a Linux system and requires the 'net' command to be installed."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"username"})," attribute of the ",(0,s.jsx)(n.code,{children:"Networkshare"})," class defaults to None, which means that the current user will be used to manage the network shares."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"networkshare_info"})," attribute of the ",(0,s.jsx)(n.code,{children:"networkshare_applier"})," class should be populated with a list of network share information before calling the ",(0,s.jsx)(n.code,{children:"run"})," function."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"run"})," function is called by the ",(0,s.jsx)(n.code,{children:"apply"})," and ",(0,s.jsx)(n.code,{children:"user_context_apply"})," methods of the ",(0,s.jsx)(n.code,{children:"networkshare_applier"})," class, which are responsible for applying network share settings in different contexts. The ",(0,s.jsx)(n.code,{children:"apply"})," method applies the settings in the context of the entire system, while the ",(0,s.jsx)(n.code,{children:"user_context_apply"})," method applies the settings in the context of a specific user."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"functiondef-applyself",children:"FunctionDef apply(self)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"apply"}),": The function of apply is to execute the run method if the module is enabled, or to log a message indicating that the module is not enabled."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),":\nThe apply function is a method of the networkshare_applier class, which is used to enable or disable the application of network share settings based on the value of the ",(0,s.jsx)(n.code,{children:"__module_enabled"})," attribute. If ",(0,s.jsx)(n.code,{children:"__module_enabled"})," is True, the function calls the ",(0,s.jsx)(n.code,{children:"run"})," method, which applies the network share settings. If ",(0,s.jsx)(n.code,{children:"__module_enabled"})," is False, the function logs a message indicating that the module is not enabled."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"run"})," method is defined in the same class and is responsible for iterating through a list of network share information and applying each one using the Networkshare class. The Networkshare class is defined in the ",(0,s.jsx)(n.code,{children:"gpoa/frontend/appliers/netshare.py"})," module and provides functionality for managing network shares using the 'net' command in a Linux system."]}),"\n",(0,s.jsxs)(n.p,{children:["The apply function does not return any value, but it logs the result of the ",(0,s.jsx)(n.code,{children:"run"})," method execution or the message indicating that the module is not enabled using the ",(0,s.jsx)(n.code,{children:"log"})," function."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"Networkshare"})," class is designed to work with network shares in a Linux system and requires the 'net' command to be installed."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"run"})," method should be populated with a list of network share information before calling the ",(0,s.jsx)(n.code,{children:"apply"})," function."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"apply"})," function is called by the ",(0,s.jsx)(n.code,{children:"apply"})," and ",(0,s.jsx)(n.code,{children:"user_context_apply"})," methods of the ",(0,s.jsx)(n.code,{children:"networkshare_applier"})," class, which are responsible for applying network share settings in different contexts."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"apply"})," function is only executed if the ",(0,s.jsx)(n.code,{children:"__module_enabled"})," attribute is True."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"functiondef-admin_context_applyself",children:"FunctionDef admin_context_apply(self)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"admin_context_apply"}),": The function of admin_context_apply is to apply the administrative context."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),":"]}),"\n",(0,s.jsx)(n.p,{children:'The admin_context_apply function is a method of the networkshare_applier class, which is defined in the networkshare_applier.py module. This function does not contain any code implementation, as indicated by the "pass" statement. It is likely that this function is intended to serve as a placeholder for future implementation.'}),"\n",(0,s.jsx)(n.p,{children:"When called, the function does not perform any action, and it does not return any value. It is unclear what the intended behavior of this function is, as the code implementation is missing."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This function currently does not perform any action, and it should not be used in its current state."}),"\n",(0,s.jsx)(n.li,{children:"Developers should add the necessary code implementation to this function to achieve the desired behavior."}),"\n",(0,s.jsx)(n.li,{children:"It is recommended to provide a clear documentation of the function's purpose and behavior in the code comments, to make it easier for other developers to understand and maintain the code."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"functiondef-user_context_applyself",children:"FunctionDef user_context_apply(self)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"user_context_apply"}),": The function of user_context_apply is to apply network share settings in the context of a specific user."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),":\nThe user_context_apply function is a method of the networkshare_applier class, which is used to apply network share settings in the context of a specific user. It first checks if the 'module_enabled_user' attribute of the class is set to True. If it is, the function logs 'D188' and calls the 'run' method of the class, which iterates through a list of network share information and applies each one using the Networkshare class."]}),"\n",(0,s.jsxs)(n.p,{children:["The Networkshare class is defined in the ",(0,s.jsx)(n.code,{children:"gpoa/frontend/appliers/netshare.py"})," module and provides functionality for managing network shares using the 'net' command in a Linux system. It has methods for checking the current list of network shares, creating, updating, deleting, and replacing network shares."]}),"\n",(0,s.jsx)(n.p,{children:"If the 'module_enabled_user' attribute is not set to True, the function logs 'D189'."}),"\n",(0,s.jsxs)(n.p,{children:["The user_context_apply function does not return any value, but it logs the result of each Networkshare instance creation using the ",(0,s.jsx)(n.code,{children:"log"})," function."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"Networkshare"})," class is designed to work with network shares in a Linux system and requires the 'net' command to be installed."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"username"})," attribute of the ",(0,s.jsx)(n.code,{children:"Networkshare"})," class defaults to None, which means that the current user will be used to manage the network shares."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"networkshare_info"})," attribute of the ",(0,s.jsx)(n.code,{children:"networkshare_applier"})," class should be populated with a list of network share information before calling the ",(0,s.jsx)(n.code,{children:"user_context_apply"})," function."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"user_context_apply"})," function applies network share settings in the context of a specific user, while the ",(0,s.jsx)(n.code,{children:"apply"})," method applies the settings in the context of the entire system."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"user_context_apply"})," function is called by the ",(0,s.jsx)(n.code,{children:"apply"})," method of the ",(0,s.jsx)(n.code,{children:"networkshare_applier"})," class, which is responsible for applying network share settings in different contexts. The ",(0,s.jsx)(n.code,{children:"apply"})," method applies the settings in the context of the entire system, while the ",(0,s.jsx)(n.code,{children:"user_context_apply"})," method applies the settings in the context of a specific user."]}),"\n",(0,s.jsxs)(n.p,{children:["Additionally, the ",(0,s.jsx)(n.code,{children:"user_context_apply"})," function calls the ",(0,s.jsx)(n.code,{children:"run"})," method of the ",(0,s.jsx)(n.code,{children:"networkshare_applier"})," class, which is responsible for iterating through a list of network share information and applying each one using the Networkshare class."]}),"\n",(0,s.jsx)(n.hr,{})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);