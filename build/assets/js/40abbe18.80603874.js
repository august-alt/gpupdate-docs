"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[1790],{1449:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=t(4848),i=t(8453);const a={},o=void 0,c={id:"gpoa/frontend/package_applier",title:"package_applier",description:"ClassDef package_applier",source:"@site/docs/gpoa/frontend/package_applier.md",sourceDirName:"gpoa/frontend",slug:"/gpoa/frontend/package_applier",permalink:"/docs/gpoa/frontend/package_applier",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ntp_applier",permalink:"/docs/gpoa/frontend/ntp_applier"},next:{title:"polkit_applier",permalink:"/docs/gpoa/frontend/polkit_applier"}},r={},l=[{value:"ClassDef package_applier",id:"classdef-package_applier",level:2},{value:"FunctionDef <strong>init</strong>(self, storage)",id:"functiondef-initself-storage",level:3},{value:"FunctionDef run(self)",id:"functiondef-runself",level:3},{value:"FunctionDef apply(self)",id:"functiondef-applyself",level:3},{value:"ClassDef package_applier_user",id:"classdef-package_applier_user",level:2},{value:"FunctionDef <strong>init</strong>(self, storage, sid, username)",id:"functiondef-initself-storage-sid-username",level:3},{value:"FunctionDef user_context_apply(self)",id:"functiondef-user_context_applyself",level:3},{value:"FunctionDef run(self)",id:"functiondef-runself-1",level:3},{value:"FunctionDef admin_context_apply(self)",id:"functiondef-admin_context_applyself",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"classdef-package_applier",children:"ClassDef package_applier"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"package_applier"}),": The ",(0,s.jsx)(n.code,{children:"package_applier"})," class is responsible for applying package-related policies in the gpoa project. It serves as a subclass of ",(0,s.jsx)(n.code,{children:"applier_frontend"})," and provides specific implementation for package-related operations."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Attributes"}),":\n\xb7 ",(0,s.jsx)(n.code,{children:"storage"}),": An instance of the storage class, which is used to interact with the Windows Registry and other storage mechanisms."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),":\nThe ",(0,s.jsx)(n.code,{children:"package_applier"})," class overrides the ",(0,s.jsx)(n.code,{children:"__init__()"})," method from the ",(0,s.jsx)(n.code,{children:"applier_frontend"})," class and initializes several variables related to package management. It creates a list ",(0,s.jsx)(n.code,{children:"fulcmd"})," containing the command to execute package operations, and initializes ",(0,s.jsx)(n.code,{children:"install_packages_setting"}),", ",(0,s.jsx)(n.code,{children:"remove_packages_setting"}),", and ",(0,s.jsx)(n.code,{children:"sync_packages_setting"})," as filtered settings from the Windows Registry based on the install, remove, and sync keys, respectively. The ",(0,s.jsx)(n.code,{children:"flagSync"})," variable is used to track whether sync operation should be performed."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"__init__()"})," method also checks whether the current module is enabled based on the result of a call to ",(0,s.jsx)(n.code,{children:"check_enabled()"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"run()"})," method checks the ",(0,s.jsx)(n.code,{children:"sync_packages_setting"})," for any data and sets the ",(0,s.jsx)(n.code,{children:"flagSync"})," accordingly. It then checks whether there are any install or remove package settings and performs the corresponding package operation based on the value of ",(0,s.jsx)(n.code,{children:"flagSync"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"apply()"})," method checks whether the current module is enabled and calls the ",(0,s.jsx)(n.code,{children:"run()"})," method if it is."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"__module_name__"}),", ",(0,s.jsx)(n.code,{children:"__module_experimental__"}),", and ",(0,s.jsx)(n.code,{children:"__module_enabled__"})," attributes are used by the gpoa application to determine whether the current module should be loaded and applied."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"package_applier"})," class is called by the ",(0,s.jsx)(n.code,{children:"_init_machine_appliers()"})," method in the ",(0,s.jsx)(n.code,{children:"frontend_manager"})," class, which initializes an instance of ",(0,s.jsx)(n.code,{children:"package_applier"})," and adds it to the ",(0,s.jsx)(n.code,{children:"machine_appliers"})," dictionary."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":\nThe ",(0,s.jsx)(n.code,{children:"package_applier"})," class is intended to be used as a subclass of ",(0,s.jsx)(n.code,{children:"applier_frontend"})," and provides specific implementation for package-related operations. Subclasses should not modify the ",(0,s.jsx)(n.code,{children:"__init__()"})," method, but can override the ",(0,s.jsx)(n.code,{children:"run()"})," method to provide additional package-related logic. Subclasses should also set the ",(0,s.jsx)(n.code,{children:"__module_name__"}),", ",(0,s.jsx)(n.code,{children:"__module_experimental__"}),", and ",(0,s.jsx)(n.code,{children:"__module_enabled__"})," attributes appropriately."]}),"\n",(0,s.jsxs)(n.h3,{id:"functiondef-initself-storage",children:["FunctionDef ",(0,s.jsx)(n.strong,{children:"init"}),"(self, storage)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.strong,{children:"init"})}),": The function of ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.strong,{children:"init"})})," is to initialize the package applier object with a storage object."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parameters"}),":\n\xb7 storage: The storage object that contains the information about the packages and policies."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),":\nThe ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.strong,{children:"init"})})," function is the constructor of the package applier class. It takes a single parameter ",(0,s.jsx)(n.code,{children:"storage"}),", which is the storage object that contains the information about the packages and policies."]}),"\n",(0,s.jsxs)(n.p,{children:["The function first assigns the ",(0,s.jsx)(n.code,{children:"storage"})," parameter to the ",(0,s.jsx)(n.code,{children:"self.storage"})," attribute of the class, which allows the class to access the storage object throughout its lifetime."]}),"\n",(0,s.jsx)(n.p,{children:"Next, the function creates three branches for install, remove, and sync operations based on the HKLM (HKEY_LOCAL_MACHINE) entries in the Windows registry. These branches are used to determine the packages and policies that need to be installed, removed, or synced based on the settings in the storage object."}),"\n",(0,s.jsxs)(n.p,{children:["The function then creates a list ",(0,s.jsx)(n.code,{children:"self.fulcmd"})," that contains the command to run the ",(0,s.jsx)(n.code,{children:"gpupdate"})," tool with the specified log level. The log level is obtained from the logger object of the current module."]}),"\n",(0,s.jsxs)(n.p,{children:["Finally, the function calls the ",(0,s.jsx)(n.code,{children:"filter_hklm_entries"})," method of the ",(0,s.jsx)(n.code,{children:"sqlite_registry"})," class to filter the HKLM entries based on the install, remove, and sync branches. These filtered entries are stored in the ",(0,s.jsx)(n.code,{children:"self.install_packages_setting"}),", ",(0,s.jsx)(n.code,{children:"self.remove_packages_setting"}),", and ",(0,s.jsx)(n.code,{children:"self.sync_packages_setting"})," attributes, respectively."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"__init__"})," function is called when a new package applier object is created. It initializes the object with the necessary attributes and settings that are required to perform the package and policy operations."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":\nThe ",(0,s.jsx)(n.code,{children:"__init__"})," function is an internal method of the package applier class and should not be used outside of it. The ",(0,s.jsx)(n.code,{children:"filter_hklm_entries"})," method is an internal method of the ",(0,s.jsx)(n.code,{children:"sqlite_registry"})," class and should not be used outside of it. The ",(0,s.jsx)(n.code,{children:"gpupdate"})," tool is a command-line utility that is used to update group policy settings in Windows. The log level determines the amount of detail that is logged during the execution of the tool. The ",(0,s.jsx)(n.code,{children:"sqlite_registry"})," class is defined in the ",(0,s.jsx)(n.code,{children:"sqlite_registry.py"})," module and provides an interface to query and filter the Windows registry entries from an SQLite database."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"functiondef-runself",children:"FunctionDef run(self)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"run"}),": The function of run is to apply package changes based on the settings and synchronization flag."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parameters"}),": The run function does not take any parameters."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"The run function first iterates over the sync_packages_setting list, which contains flags for synchronizing package changes. If any flag has data, the flagSync attribute is set to the integer equivalent of the data, converted to a boolean."}),"\n",(0,s.jsx)(n.p,{children:"Next, the function checks if there are any packages to install or remove by counting the elements in the install_packages_setting and remove_packages_setting lists. If there are package changes to apply and the flagSync is set to True, the function attempts to execute the full command list using subprocess.check_call(). If an exception occurs during execution, it is caught, and the error message is logged using the log function with the message code 'E55'."}),"\n",(0,s.jsx)(n.p,{children:"If the flagSync is set to False, the function attempts to execute the full command list using subprocess.Popen() with close_fds set to False. If an exception occurs during execution, it is caught, and the error message is logged using the log function with the message code 'E61'."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The run function should only be called after the package settings have been configured."}),"\n",(0,s.jsx)(n.li,{children:"The function relies on the subprocess module to execute command line instructions, which can have platform-specific behavior."}),"\n",(0,s.jsx)(n.li,{children:"Proper error handling should be implemented when calling the run function to ensure that exceptions are handled gracefully."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The run function is called by the apply function in the package_applier module. The apply function checks if the module is enabled and, if so, calls the run function to apply package changes. The run function is also responsible for handling package synchronization based on the flags provided in the sync_packages_setting list."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"functiondef-applyself",children:"FunctionDef apply(self)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"apply"}),": The function of apply is to execute the run method if the module is enabled, or log a message if it is not."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),":"]}),"\n",(0,s.jsxs)(n.p,{children:["The apply function first checks if the module is enabled by accessing the ",(0,s.jsx)(n.code,{children:"__module_enabled"})," attribute. If the module is enabled, it calls the ",(0,s.jsx)(n.code,{children:"run"})," method. If the module is not enabled, it logs a message with the code 'D139' using the ",(0,s.jsx)(n.code,{children:"log"})," function."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"run"})," method is defined in the same class as the ",(0,s.jsx)(n.code,{children:"apply"})," method, and its purpose is to apply package changes based on the settings and synchronization flag. It does not take any parameters."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"run"})," method first iterates over the ",(0,s.jsx)(n.code,{children:"sync_packages_setting"})," list and sets the ",(0,s.jsx)(n.code,{children:"flagSync"})," attribute to a boolean value based on the data in the list. It then checks if there are any packages to install or remove by counting the elements in the ",(0,s.jsx)(n.code,{children:"install_packages_setting"})," and ",(0,s.jsx)(n.code,{children:"remove_packages_setting"})," lists. If there are package changes to apply and the ",(0,s.jsx)(n.code,{children:"flagSync"})," is set to True, the ",(0,s.jsx)(n.code,{children:"run"})," method attempts to execute the full command list using ",(0,s.jsx)(n.code,{children:"subprocess.check_call()"}),". If an exception occurs during execution, it is caught and the error message is logged using the ",(0,s.jsx)(n.code,{children:"log"})," function with the message code 'E55'. If the ",(0,s.jsx)(n.code,{children:"flagSync"})," is set to False, the ",(0,s.jsx)(n.code,{children:"run"})," method attempts to execute the full command list using ",(0,s.jsx)(n.code,{children:"subprocess.Popen()"})," with ",(0,s.jsx)(n.code,{children:"close_fds"})," set to False. If an exception occurs during execution, it is caught and the error message is logged using the ",(0,s.jsx)(n.code,{children:"log"})," function with the message code 'E61'."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"log"})," function is defined in the ",(0,s.jsx)(n.code,{children:"gpoa/util/logging.py"})," module and is used to log messages with a specified message code and optional data. It first determines the type of message based on the first character of the message code (information, warning, error, or fatal) and then logs the message using the corresponding method in the ",(0,s.jsx)(n.code,{children:"logging"})," module. If the message code starts with 'D', the ",(0,s.jsx)(n.code,{children:"log"})," function calls the ",(0,s.jsx)(n.code,{children:"debug"})," method in the ",(0,s.jsx)(n.code,{children:"logging"})," module."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"apply"})," function should only be called after the package settings have been configured."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"run"})," function relies on the ",(0,s.jsx)(n.code,{children:"subprocess"})," module to execute command line instructions, which can have platform-specific behavior."]}),"\n",(0,s.jsxs)(n.li,{children:["Proper error handling should be implemented when calling the ",(0,s.jsx)(n.code,{children:"run"})," function to ensure that exceptions are handled gracefully."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"apply"})," function calls the ",(0,s.jsx)(n.code,{children:"run"})," function if the module is enabled, and logs a message if it is not."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"log"})," function is used to log messages with a specified message code and optional data."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"classdef-package_applier_user",children:"ClassDef package_applier_user"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"package_applier_user"}),": The function of package_applier_user is to handle the installation, removal, and synchronization of packages for a specific user in the gpoa project."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Attributes"}),":\n\xb7 storage: An instance of the storage class, which is used to interact with the Windows Registry and other storage mechanisms.\n\xb7 sid: The security identifier (SID) of the user or machine for which policies are being applied.\n\xb7 username: The username for which policies are being applied, if applicable.\n\xb7 fulcmd: A list containing the command to be executed for package management.\n\xb7 install_packages_setting: A dictionary containing the package installation settings for the user.\n\xb7 remove_packages_setting: A dictionary containing the package removal settings for the user.\n\xb7 sync_packages_setting: A dictionary containing the package synchronization settings for the user.\n\xb7 flagSync: A boolean variable to track the synchronization flag."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),":\nThe package_applier_user class is a subclass of applier_frontend and is responsible for handling package-related policies in the gpoa project. It initializes the storage, sid, and username attributes in the constructor. The fulcmd attribute is a list containing the command to be executed for package management, and the install_packages_setting, remove_packages_setting, and sync_packages_setting attributes are dictionaries containing the package management settings for the user."]}),"\n",(0,s.jsx)(n.p,{children:"The constructor also initializes the flagSync attribute to False and sets the __module_enabled__ attribute based on the result of a call to check_enabled(). The check_enabled() method checks whether the current module is enabled in the gpoa configuration, and returns True if it is, and False otherwise."}),"\n",(0,s.jsx)(n.p,{children:"The user_context_apply() method is a placeholder method with no implementation, and the run() method is responsible for executing the package management command based on the settings in the install_packages_setting, remove_packages_setting, and sync_packages_setting dictionaries."}),"\n",(0,s.jsx)(n.p,{children:"The admin_context_apply() method is called by the gpoa application to apply the package management policies in the admin context. It checks whether the current module is enabled before calling run()."}),"\n",(0,s.jsx)(n.p,{children:"The __module_name__, __module_experimental__, and __module_enabled__ attributes are used by the gpoa application to determine whether the current module should be loaded and applied."}),"\n",(0,s.jsx)(n.p,{children:"The package_applier_user class is instantiated and added to the user_appliers dictionary in the _init_user_appliers() method of the frontend_manager class."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":\nThe package_applier_user class is intended to handle package management policies in the gpoa project. Subclasses should not override the user_context_apply() and admin_context_apply() methods, but should override the run() method to provide the actual package management logic. Subclasses should also set the __module_name__, __module_experimental__, and __module_enabled__ attributes appropriately."]}),"\n",(0,s.jsxs)(n.h3,{id:"functiondef-initself-storage-sid-username",children:["FunctionDef ",(0,s.jsx)(n.strong,{children:"init"}),"(self, storage, sid, username)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.strong,{children:"init"})}),": The function of ",(0,s.jsx)(n.strong,{children:"init"})," is to initialize the package_applier_user object with the required parameters and set up the command list for executing the group policy update."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parameters"}),":\n\xb7 storage: An instance of the sqlite_registry class that provides access to the SQLite registry storage.\n\xb7 sid: A string representing the Security Identifier (SID) of the user for whom the group policy update is being applied.\n\xb7 username: A string containing the username of the user for whom the group policy update is being applied."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),":\nThe ",(0,s.jsx)(n.strong,{children:"init"})," function initializes the package_applier_user object by storing the provided storage, sid, and username parameters as instance variables. It also creates an instance variable fulcmd, which is a list containing the command to be executed for the group policy update."]}),"\n",(0,s.jsx)(n.p,{children:"The command list includes the path of the pkcon_runner script, the SID of the user, and the log level of the script. The log level is obtained from the logger object's level attribute, which is converted to a string."}),"\n",(0,s.jsx)(n.p,{children:"Furthermore, the function filters the HKCU (HKEY_CURRENT_USER) entries in the Windows registry based on the SID and specific branches related to installing, removing, and syncing packages. These filtered entries are stored in instance variables install_packages_setting, remove_packages_setting, and sync_packages_setting, respectively."}),"\n",(0,s.jsx)(n.p,{children:"The function also initializes a flag variable flagSync to False, which is used to track whether any packages need to be synced."}),"\n",(0,s.jsx)(n.p,{children:"Lastly, the function calls the check_enabled function with the storage and module_name parameters to determine whether the module is enabled or not. The result is stored in the __module_enabled instance variable."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Relationship with its callees in the project"}),":\nThe ",(0,s.jsx)(n.strong,{children:"init"})," function calls the check_enabled function, which is defined in the applier_frontend.py module. This function checks whether the module is enabled or not based on the storage and module_name parameters."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"init"})," function also calls the filter_hkcu_entries function, which is defined in the sqlite_registry.py module. This function filters the HKCU entries in the Windows registry based on the SID and specific branches related to installing, removing, and syncing packages."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":\nEnsure that the provided storage, sid, and username parameters are valid and correctly formatted. Also, note that the filter_hkcu_entries function filters the HKCU entries based on the SID and specific branches related to installing, removing, and syncing packages. Therefore, any changes to these branches in the Windows registry may affect the behavior of the package_applier_user object."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"functiondef-user_context_applyself",children:"FunctionDef user_context_apply(self)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"user_context_apply"}),": The function of user_context_apply is to apply user context."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),":\nThe user_context_apply function is a method that is a part of the user_context_apply class. This function does not contain any implementation as it is a pass function. The purpose of this function is not clear from the code snippet provided, but it seems that it is intended to be overridden in a subclass. The pass statement is a placeholder and does nothing when the function is called. It is used when the programmer wants to define an empty function as a placeholder for future implementation or when the function is not supposed to execute any code."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This function does not contain any implementation, so it will not perform any action when called."}),"\n",(0,s.jsx)(n.li,{children:"It is recommended to implement the intended functionality of this function in a subclass."}),"\n",(0,s.jsx)(n.li,{children:"The name of the function is user_context_apply, which suggests that it is intended to apply user context. However, without any implementation, it is not possible to determine what the user context is or how it is applied."}),"\n",(0,s.jsx)(n.li,{children:"It is important to provide a proper implementation for this function to ensure that the intended functionality is achieved."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"functiondef-runself-1",children:"FunctionDef run(self)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"run"}),": The function of run is to apply package settings based on the current user context."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"The run function first iterates over the sync_packages_setting attribute, which is a list of PackageSetting objects. If any of these objects have data, the flagSync attribute is set to the boolean value of the data."}),"\n",(0,s.jsx)(n.p,{children:"Next, the function checks if there are any packages to install or remove by checking the count of the install_packages_setting and remove_packages_setting attributes. If there are any packages to install or remove, the function proceeds to execute the command to apply the package settings."}),"\n",(0,s.jsx)(n.p,{children:"If the flagSync attribute is True, the function uses subprocess.check_call() to execute the command. If the command execution is successful, no exception is raised and the function continues. If an exception is raised, the function logs the error message using the log() function with the message code 'E60'."}),"\n",(0,s.jsx)(n.p,{children:"If the flagSync attribute is False, the function uses subprocess.Popen() to execute the command. If an exception is raised, the function logs the error message using the log() function with the message code 'E62'."}),"\n",(0,s.jsx)(n.p,{children:"The function uses the fulcmd attribute, which is a string containing the command to apply the package settings."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The run function should only be called in the context of a user."}),"\n",(0,s.jsx)(n.li,{children:"The function assumes that the fulcmd attribute has been set prior to calling the function."}),"\n",(0,s.jsx)(n.li,{children:"The function does not return any value."}),"\n",(0,s.jsx)(n.li,{children:"The function logs any errors that occur during the execution of the command."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Relation with other functions"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The run function is called by the admin_context_apply function in the same module. The admin_context_apply function checks if the module is enabled and if so, calls the run function to apply the package settings."}),"\n",(0,s.jsx)(n.li,{children:"The run function uses the log function defined in the logging module to log any errors that occur during the execution of the command."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Relation with other objects"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The run function uses the sync_packages_setting, install_packages_setting, and remove_packages_setting attributes, which are objects of the PackageSetting class."}),"\n",(0,s.jsx)(n.li,{children:"The run function uses the fulcmd attribute, which is a string containing the command to apply the package settings. This command is constructed by other objects in the system."}),"\n",(0,s.jsx)(n.li,{children:"The run function logs errors using the log function, which is defined in the logging module."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"functiondef-admin_context_applyself",children:"FunctionDef admin_context_apply(self)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"admin_context_apply"}),": The function of admin_context_apply is to install software assigned to a specified username regardless of which computer the user uses to log into the system, if the module is enabled."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code Description"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"The admin_context_apply function first checks if the module is enabled using the __module_enabled attribute. If the module is enabled, it logs 'D140' using the log() function and then calls the run() function to apply package settings based on the current user context."}),"\n",(0,s.jsx)(n.p,{children:"If the module is not enabled, it logs 'D141' using the log() function."}),"\n",(0,s.jsx)(n.p,{children:"The log() function is defined in the logging module and is used to log messages with a specific message code. The message code is used to determine the severity of the message and to format the message."}),"\n",(0,s.jsx)(n.p,{children:"The run() function is defined in the same module and is responsible for applying package settings based on the current user context. It does not take any parameters and assumes that the fulcmd attribute has been set prior to calling the function."}),"\n",(0,s.jsx)(n.p,{children:"The run() function uses the sync_packages_setting, install_packages_setting, and remove_packages_setting attributes, which are objects of the PackageSetting class. It also uses the log() function to log any errors that occur during the execution of the command."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The admin_context_apply function should only be called in the context of a user."}),"\n",(0,s.jsx)(n.li,{children:"The function assumes that the __module_enabled attribute has been set prior to calling the function."}),"\n",(0,s.jsx)(n.li,{children:"The function does not return any value."}),"\n",(0,s.jsx)(n.li,{children:"The function logs any errors that occur during the execution of the command using the log() function."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Relation with other functions"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The admin_context_apply function is called by other functions or methods in the same module to apply package settings based on the current user context, if the module is enabled."}),"\n",(0,s.jsx)(n.li,{children:"The admin_context_apply function calls the run() function defined in the same module to apply the package settings."}),"\n",(0,s.jsx)(n.li,{children:"The admin_context_apply function uses the log() function defined in the logging module to log any errors that occur during the execution of the command."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Relation with other objects"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The admin_context_apply function uses the __module_enabled attribute to check if the module is enabled."}),"\n",(0,s.jsx)(n.li,{children:"The admin_context_apply function uses the run() function, which is defined in the same module."}),"\n",(0,s.jsx)(n.li,{children:"The admin_context_apply function logs errors using the log() function, which is defined in the logging module."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(6540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);