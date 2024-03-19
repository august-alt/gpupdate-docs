"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[3609],{3851:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=s(4848),t=s(8453);const l={},c=void 0,o={id:"gpoa/frontend/file_applier",title:"file_applier",description:"ClassDef file_applier",source:"@site/docs/gpoa/frontend/file_applier.md",sourceDirName:"gpoa/frontend",slug:"/gpoa/frontend/file_applier",permalink:"/docs/gpoa/frontend/file_applier",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"envvar_applier",permalink:"/docs/gpoa/frontend/envvar_applier"},next:{title:"firefox_applier",permalink:"/docs/gpoa/frontend/firefox_applier"}},r={},d=[{value:"ClassDef file_applier",id:"classdef-file_applier",level:2},{value:"FunctionDef <strong>init</strong>(self, storage, file_cache, sid)",id:"functiondef-initself-storage-file_cache-sid",level:3},{value:"FunctionDef run(self)",id:"functiondef-runself",level:3},{value:"FunctionDef apply(self)",id:"functiondef-applyself",level:3},{value:"ClassDef file_applier_user",id:"classdef-file_applier_user",level:2},{value:"FunctionDef <strong>init</strong>(self, storage, file_cache, sid, username)",id:"functiondef-initself-storage-file_cache-sid-username",level:3},{value:"FunctionDef run(self)",id:"functiondef-runself-1",level:3},{value:"FunctionDef admin_context_apply(self)",id:"functiondef-admin_context_applyself",level:3},{value:"FunctionDef user_context_apply(self)",id:"functiondef-user_context_applyself",level:3}];function a(e){const i={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"classdef-file_applier",children:"ClassDef file_applier"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"file_applier"}),": The function of the ",(0,n.jsx)(i.code,{children:"file_applier"})," class is to handle file-related operations in the gpoa project. It is a subclass of ",(0,n.jsx)(i.code,{children:"applier_frontend"})," and provides specific implementation for file-related policy application."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Attributes"}),":"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"storage"}),": An instance of the storage class, which is used to interact with the Windows Registry and other storage mechanisms."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"file_cache"}),": A file cache object used for storing files temporarily."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"sid"}),": The security identifier (SID) of the user or machine for which policies are being applied."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"files"}),": A list of files to be applied, initialized in the constructor by calling ",(0,n.jsx)(i.code,{children:"self.storage.get_files(self.sid)"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"__module_name"}),": The name of the module, set to 'FilesApplier'."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"__module_experimental"}),": A flag indicating if the module is experimental, set to True."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"__module_enabled"}),": A flag indicating if the module is enabled, initialized in the constructor by calling ",(0,n.jsx)(i.code,{children:"check_enabled(self.storage, self.__module_name, self.__module_experimental)"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Code Description"}),":\nThe ",(0,n.jsx)(i.code,{children:"file_applier"})," class is a subclass of ",(0,n.jsx)(i.code,{children:"applier_frontend"})," and provides specific implementation for file-related policy application. The constructor initializes the ",(0,n.jsx)(i.code,{children:"storage"}),", ",(0,n.jsx)(i.code,{children:"exe_check"}),", ",(0,n.jsx)(i.code,{children:"sid"}),", ",(0,n.jsx)(i.code,{children:"file_cache"}),", and ",(0,n.jsx)(i.code,{children:"files"})," attributes. It also sets the ",(0,n.jsx)(i.code,{children:"__module_enabled"})," attribute based on the result of a call to ",(0,n.jsx)(i.code,{children:"check_enabled()"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"run()"})," method iterates through the ",(0,n.jsx)(i.code,{children:"files"})," list and calls ",(0,n.jsx)(i.code,{children:"Files_cp(file, self.file_cache, self.exe_check)"})," for each file, which is responsible for copying the file to the file cache and performing execution checks."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"apply()"})," method checks if the module is enabled by evaluating ",(0,n.jsx)(i.code,{children:"self.__module_enabled"}),". If it is enabled, the ",(0,n.jsx)(i.code,{children:"run()"})," method is called to apply the policies. Otherwise, a log message 'D168' is generated."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Note"}),":\nThe ",(0,n.jsx)(i.code,{children:"file_applier"})," class is intended to be used as a part of the gpoa project for handling file-related policy application. It is a subclass of ",(0,n.jsx)(i.code,{children:"applier_frontend"})," and provides specific implementation for file-related policy application. When using this class, ensure that the required attributes are properly initialized and that the class is used within the context of the gpoa project."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"file_applier"})," class is instantiated and added to the ",(0,n.jsx)(i.code,{children:"machine_appliers"})," dictionary in the ",(0,n.jsx)(i.code,{children:"_init_machine_appliers"})," method of the ",(0,n.jsx)(i.code,{children:"frontend_manager"})," class. This allows the gpoa application to manage and apply policies for files using the ",(0,n.jsx)(i.code,{children:"file_applier"})," class."]}),"\n",(0,n.jsxs)(i.h3,{id:"functiondef-initself-storage-file_cache-sid",children:["FunctionDef ",(0,n.jsx)(i.strong,{children:"init"}),"(self, storage, file_cache, sid)"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.strong,{children:"init"})}),": The function of ",(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.strong,{children:"init"})})," is to initialize the file applier object with the necessary parameters and attributes."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"parameters"}),":\n\xb7 ",(0,n.jsx)(i.code,{children:"storage"}),": An object that provides access to the storage where the files are located.\n\xb7 ",(0,n.jsx)(i.code,{children:"file_cache"}),": An object that provides access to the file cache.\n\xb7 ",(0,n.jsx)(i.code,{children:"sid"}),": A security identifier (SID) that is used to filter the files based on their SID."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Code Description"}),":\nThe ",(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.strong,{children:"init"})})," function initializes the file applier object by setting the ",(0,n.jsx)(i.code,{children:"storage"}),", ",(0,n.jsx)(i.code,{children:"file_cache"}),", and ",(0,n.jsx)(i.code,{children:"sid"})," attributes. It then retrieves the list of files associated with the given SID using the ",(0,n.jsx)(i.code,{children:"get_files"})," method of the ",(0,n.jsx)(i.code,{children:"storage"})," object. The function also initializes an ",(0,n.jsx)(i.code,{children:"Execution_check"})," object using the ",(0,n.jsx)(i.code,{children:"storage"})," object to check the execution status of files in the storage."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"__module_enabled"})," attribute is set to the result of the ",(0,n.jsx)(i.code,{children:"check_enabled"})," function, which checks if the module is enabled or not based on the storage and the name of the module. The ",(0,n.jsx)(i.code,{children:"check_enabled"})," function is defined in the ",(0,n.jsx)(i.code,{children:"applier_frontend.py"})," module and takes three parameters: ",(0,n.jsx)(i.code,{children:"storage"}),", ",(0,n.jsx)(i.code,{children:"module_name"}),", and ",(0,n.jsx)(i.code,{children:"module_experimental"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"__module_name"})," and ",(0,n.jsx)(i.code,{children:"__module_experimental"})," attributes are not defined in the ",(0,n.jsx)(i.code,{children:"__init__"})," function, but they are used in the ",(0,n.jsx)(i.code,{children:"check_enabled"})," function. Therefore, it is assumed that they are defined elsewhere in the ",(0,n.jsx)(i.code,{children:"file_applier"})," class."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"__init__"})," function is called when a new ",(0,n.jsx)(i.code,{children:"file_applier"})," object is created. It is used to set up the necessary attributes and objects required for the file applier to function properly."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Note"}),":"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.code,{children:"storage"})," parameter should be a valid storage object that provides access to the storage where the files are located."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.code,{children:"file_cache"})," parameter should be a valid file cache object that provides access to the file cache."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.code,{children:"sid"})," parameter should be a valid SID in the format of S-1-5-21-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxx."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.code,{children:"Execution_check"})," object is initialized with the ",(0,n.jsx)(i.code,{children:"storage"})," object to check the execution status of files in the storage."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.code,{children:"check_enabled"})," function is used to check if the module is enabled or not based on the storage and the name of the module. The ",(0,n.jsx)(i.code,{children:"__module_name"})," and ",(0,n.jsx)(i.code,{children:"__module_experimental"})," attributes are used in this function."]}),"\n"]}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"functiondef-runself",children:"FunctionDef run(self)"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"run"}),": The function of run is to apply the file actions for each file in the files list."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"parameters"}),":\n\xb7 None, this function does not take any parameters."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Code Description"}),":\nThe ",(0,n.jsx)(i.code,{children:"run"})," function is a method of the ",(0,n.jsx)(i.code,{children:"file_applier"})," class, which is used to apply the file actions for each file in the ",(0,n.jsx)(i.code,{children:"files"})," list. It iterates through the ",(0,n.jsx)(i.code,{children:"files"})," list and for each file, it creates an instance of the ",(0,n.jsx)(i.code,{children:"Files_cp"})," class, passing the file object, file cache, and executable check objects as parameters. This will perform the necessary file actions (copy, update, delete, or replace) based on the provided parameters."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"Files_cp"})," class is defined in the ",(0,n.jsx)(i.code,{children:"file_cp.py"})," module and it is responsible for performing the file actions. It uses the ",(0,n.jsx)(i.code,{children:"file_obj"})," parameter to get the necessary information about the file, such as the target path, source path, and action to be performed. The ",(0,n.jsx)(i.code,{children:"file_cache"})," parameter is used for caching files, and the ",(0,n.jsx)(i.code,{children:"exe_check"})," parameter is used for checking executable files. The ",(0,n.jsx)(i.code,{children:"username"})," parameter is optional and should only be used if file ownership change is required."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"run"})," function should be used in conjunction with the ",(0,n.jsx)(i.code,{children:"file_applier"})," class, which provides the necessary file objects for the ",(0,n.jsx)(i.code,{children:"Files_cp"})," class to perform actions on."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Note"}),":\n\xb7 The ",(0,n.jsx)(i.code,{children:"Files_cp"})," class should be used in conjunction with the ",(0,n.jsx)(i.code,{children:"file_applier"})," class, which provides the necessary file objects for the ",(0,n.jsx)(i.code,{children:"Files_cp"})," class to perform actions on.\n\xb7 The ",(0,n.jsx)(i.code,{children:"run"})," function does not take any parameters, it uses the ",(0,n.jsx)(i.code,{children:"files"})," list that is defined in the ",(0,n.jsx)(i.code,{children:"file_applier"})," class.\n\xb7 The ",(0,n.jsx)(i.code,{children:"username"})," parameter in the ",(0,n.jsx)(i.code,{children:"Files_cp"})," class is optional and should only be used if file ownership change is required."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Relation with other parts of the project"}),":\nThe ",(0,n.jsx)(i.code,{children:"run"})," function is called in the ",(0,n.jsx)(i.code,{children:"apply"})," function of the ",(0,n.jsx)(i.code,{children:"file_applier"})," class, which is responsible for applying the file actions. The ",(0,n.jsx)(i.code,{children:"apply"})," function checks if the module is enabled, and if it is, it calls the ",(0,n.jsx)(i.code,{children:"run"})," function to apply the file actions."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"Files_cp"})," class is defined in the ",(0,n.jsx)(i.code,{children:"file_cp.py"})," module, which is imported in the ",(0,n.jsx)(i.code,{children:"file_applier.py"})," module. The ",(0,n.jsx)(i.code,{children:"Files_cp"})," class is used in the ",(0,n.jsx)(i.code,{children:"run"})," function to perform the necessary file actions."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"file_applier"})," class is defined in the ",(0,n.jsx)(i.code,{children:"file_applier.py"})," module, which contains the ",(0,n.jsx)(i.code,{children:"apply"})," function that calls the ",(0,n.jsx)(i.code,{children:"run"})," function. The ",(0,n.jsx)(i.code,{children:"file_applier"})," class provides the necessary file objects for the ",(0,n.jsx)(i.code,{children:"Files_cp"})," class to perform actions on."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"file_cache"})," and ",(0,n.jsx)(i.code,{children:"exe_check"})," objects are used in the ",(0,n.jsx)(i.code,{children:"Files_cp"})," class, they are provided by the ",(0,n.jsx)(i.code,{children:"file_applier"})," class."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"files"})," list is defined in the ",(0,n.jsx)(i.code,{children:"file_applier"})," class, it is used in the ",(0,n.jsx)(i.code,{children:"run"})," function to iterate through the files and perform the necessary file actions."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"run"})," function is called in the ",(0,n.jsx)(i.code,{children:"apply"})," function of the ",(0,n.jsx)(i.code,{children:"file_applier"})," class, it is responsible for applying the file actions. The ",(0,n.jsx)(i.code,{children:"Files_cp"})," class is used in the ",(0,n.jsx)(i.code,{children:"run"})," function to perform the necessary file actions. The ",(0,n.jsx)(i.code,{children:"file_cache"})," and ",(0,n.jsx)(i.code,{children:"exe_check"})," objects are used in the ",(0,n.jsx)(i.code,{children:"Files_cp"})," class, they are provided by the ",(0,n.jsx)(i.code,{children:"file_applier"})," class. The ",(0,n.jsx)(i.code,{children:"files"})," list is defined in the ",(0,n.jsx)(i.code,{children:"file_applier"})," class, it is used in the ",(0,n.jsx)(i.code,{children:"run"})," function to iterate through the files and perform the necessary file actions."]}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"functiondef-applyself",children:"FunctionDef apply(self)"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"apply"}),": The function of apply is to execute the file actions for each file in the ",(0,n.jsx)(i.code,{children:"files"})," list if the module is enabled."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"parameters"}),": The function does not take any parameters."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Code Description"}),":\nThe ",(0,n.jsx)(i.code,{children:"apply"})," function is a method of the ",(0,n.jsx)(i.code,{children:"file_applier"})," class, which is used to execute the file actions for each file in the ",(0,n.jsx)(i.code,{children:"files"})," list if the module is enabled. It first checks if the module is enabled using the ",(0,n.jsx)(i.code,{children:"__module_enabled"})," attribute. If the module is enabled, it logs a message with code 'D167' using the ",(0,n.jsx)(i.code,{children:"log"})," function and then calls the ",(0,n.jsx)(i.code,{children:"run"})," function to execute the file actions. If the module is not enabled, it logs a message with code 'D168' using the ",(0,n.jsx)(i.code,{children:"log"})," function."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"run"})," function is defined in the same class and is responsible for creating an instance of the ",(0,n.jsx)(i.code,{children:"Files_cp"})," class for each file in the ",(0,n.jsx)(i.code,{children:"files"})," list, passing the file object, file cache, and executable check objects as parameters. The ",(0,n.jsx)(i.code,{children:"Files_cp"})," class is defined in the ",(0,n.jsx)(i.code,{children:"file_cp.py"})," module and is responsible for performing the necessary file actions (copy, update, delete, or replace) based on the provided parameters."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"log"})," function is defined in the ",(0,n.jsx)(i.code,{children:"logging.py"})," module and is used to log messages with a specific message code. It determines the log level based on the first character of the message code and logs the message accordingly."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"__module_enabled"})," attribute is a boolean value that indicates whether the module is enabled or not. It is set in the constructor of the ",(0,n.jsx)(i.code,{children:"file_applier"})," class."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"files"})," list is a list of file objects that need to have file actions executed on them. It is defined in the constructor of the ",(0,n.jsx)(i.code,{children:"file_applier"})," class."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Note"}),":"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.code,{children:"apply"})," function should only be used to execute file actions if the module is enabled."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.code,{children:"run"})," function is responsible for creating an instance of the ",(0,n.jsx)(i.code,{children:"Files_cp"})," class for each file in the ",(0,n.jsx)(i.code,{children:"files"})," list and executing the necessary file actions."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.code,{children:"log"})," function is used to log messages with a specific message code."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.code,{children:"__module_enabled"})," attribute is a boolean value that indicates whether the module is enabled or not."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.code,{children:"files"})," list is a list of file objects that need to have file actions executed on them."]}),"\n"]}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h2,{id:"classdef-file_applier_user",children:"ClassDef file_applier_user"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"file_applier_user"}),": The function of file_applier_user is to apply policies related to files for a specific user in the gpoa project."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"attributes"}),":\n\xb7 storage: An instance of the storage class, which is used to interact with the Windows Registry and other storage mechanisms.\n\xb7 file_cache: An instance of the file_cache class, which is used to cache files that are being applied.\n\xb7 sid: The security identifier (SID) of the user or machine for which policies are being applied.\n\xb7 username: The username for which policies are being applied.\n\xb7 exe_check: An instance of the Execution_check class, which is used to check whether a file can be executed.\n\xb7 files: A list of files that need to be applied for the user.\n\xb7 __module_name: The name of the module, which is 'FilesApplierUser'.\n\xb7 __module_experimental: A boolean value indicating whether the module is experimental or not, which is True.\n\xb7 __module_enabled: A boolean value indicating whether the module is enabled or not, which is determined by the check_enabled() method."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Code Description"}),":\nThe file_applier_user class is a subclass of applier_frontend class and is used to apply policies related to files for a specific user. It inherits the attributes and methods from the applier_frontend class and adds some additional attributes and methods to provide the actual policy application logic for files."]}),"\n",(0,n.jsx)(i.p,{children:"The __init__() method initializes the storage, file_cache, sid, username, exe_check attributes, and sets the __module_enabled attribute based on the result of a call to check_enabled() method. The check_enabled() method checks whether the current module is enabled in the gpoa configuration, and returns True if it is, and False otherwise."}),"\n",(0,n.jsx)(i.p,{children:"The run() method applies the files for the user by calling the Files_cp() method for each file in the files list."}),"\n",(0,n.jsx)(i.p,{children:"The admin_context_apply() method is intended to be called in the admin context, it checks whether the module is enabled or not, if it is enabled, it calls the run() method to apply the files for the user, otherwise, it does nothing."}),"\n",(0,n.jsx)(i.p,{children:"The user_context_apply() method is intended to be called in the user context, but it doesn't have any implementation in this class, so it does nothing."}),"\n",(0,n.jsx)(i.p,{children:"The __module_name__, __module_experimental__, and __module_enabled__ attributes are used by the gpoa application to determine whether the current module should be loaded and applied."}),"\n",(0,n.jsx)(i.p,{children:"The file_applier_user class is used by the frontend_manager class to apply policies related to files for a specific user. It is instantiated with the storage, file_cache, sid, and username parameters and added to the user_appliers dictionary with the key 'files' in the _init_user_appliers() method of the frontend_manager class."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Note"}),":\nThe file_applier_user class is intended to be used in the gpoa project to apply policies related to files for a specific user. Subclasses should not override the user_context_apply() and admin_context_apply() methods, but they can override the run() method to provide the actual policy application logic for files. Subclasses should also set the __module_name__, __module_experimental__, and __module_enabled__ attributes appropriately."]}),"\n",(0,n.jsxs)(i.h3,{id:"functiondef-initself-storage-file_cache-sid-username",children:["FunctionDef ",(0,n.jsx)(i.strong,{children:"init"}),"(self, storage, file_cache, sid, username)"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.strong,{children:"init"})}),": The function of ",(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.strong,{children:"init"})})," is to initialize the file_applier_user object with the necessary parameters and attributes."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"parameters"}),":\n\xb7 storage: The storage object that contains the information about the files.\n\xb7 file_cache: The file cache object that contains the information about the cached files.\n\xb7 sid: The security identifier (SID) to be used for filtering the files in the storage.\n\xb7 username: The username to be used for filtering the files in the storage."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Code Description"}),":\nThe ",(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.strong,{children:"init"})})," function initializes the file_applier_user object by setting the values of the storage, file_cache, sid, and username parameters to the corresponding instance variables. It also initializes the exe_check instance variable by creating an Execution_check object with the storage parameter."]}),"\n",(0,n.jsx)(i.p,{children:"Furthermore, the function retrieves the list of files associated with the given SID by calling the get_files method of the storage object and assigns the result to the files instance variable."}),"\n",(0,n.jsxs)(i.p,{children:["Additionally, the function calls the check_enabled function with the storage, module_name, and module_experimental parameters to determine whether the module is enabled or not. The result is assigned to the ",(0,n.jsx)(i.strong,{children:"__module_enabled"})," instance variable."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.strong,{children:"init"})})," function is called when a new file_applier_user object is created. It initializes the object with the necessary parameters and attributes, and prepares it for further use in the application."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Note"}),":"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.strong,{children:"sid"})," parameter should be a valid SID in the format of S-1-5-21-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxx."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.strong,{children:"check_enabled"})," function is defined in the applier_frontend module and is used to determine whether the module is enabled or not based on the storage and the name of the module."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.strong,{children:"Execution_check"})," class is defined in the file_cp module and is used to check the execution status of files in the storage based on marker keys in the Windows registry."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.strong,{children:"get_files"})," function is defined in the sqlite_registry module and is used to retrieve a list of file_entry objects from the database based on a given SID."]}),"\n"]}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"functiondef-runself-1",children:"FunctionDef run(self)"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"run"}),": The function of run is to iterate through a list of files and apply the file operations (copy, update, delete, or replace) using the Files_cp class for each file."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"parameters"}),":\n\xb7 self: The instance of the file_applier_user class."]}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"functiondef-admin_context_applyself",children:"FunctionDef admin_context_apply(self)"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"admin_context_apply"}),": The function of admin_context_apply is to execute the run method if the module is enabled, or log a message indicating that the module is not enabled."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"parameters"}),":"]}),"\n",(0,n.jsx)(i.p,{children:"\xb7 self: The instance of the file_applier_user class."}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"functiondef-user_context_applyself",children:"FunctionDef user_context_apply(self)"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"user_context_apply"}),": The function of user_context_apply is to apply user context."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Code Description"}),":"]}),"\n",(0,n.jsx)(i.p,{children:'The user_context_apply function is a method of the file_applier_user class, defined in the file_applier.py module. This function does not contain any code implementation, as indicated by the "pass" statement. It is likely that this function is intended to serve as a placeholder for future implementation.'}),"\n",(0,n.jsx)(i.p,{children:"When called, the function will not perform any actions. However, since it is a part of the file_applier_user class, it is likely that it will be used to apply user context as a part of the file application process."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Note"}),":"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"This function does not contain any implementation, so it will not perform any actions when called."}),"\n",(0,n.jsx)(i.li,{children:"The function is a part of the file_applier_user class, which suggests that it will be used to apply user context as a part of the file application process."}),"\n",(0,n.jsx)(i.li,{children:"Developers should add the necessary code implementation to this function to enable it to perform the intended action of applying user context."}),"\n"]}),"\n",(0,n.jsx)(i.hr,{})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,i,s)=>{s.d(i,{R:()=>c,x:()=>o});var n=s(6540);const t={},l=n.createContext(t);function c(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);