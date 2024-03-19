"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[8655],{4395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(4848),s=n(8453);const a={},o=void 0,r={id:"gpoa/frontend/yandex_browser_applier",title:"yandex_browser_applier",description:"ClassDef yandexbrowserapplier",source:"@site/docs/gpoa/frontend/yandex_browser_applier.md",sourceDirName:"gpoa/frontend",slug:"/gpoa/frontend/yandex_browser_applier",permalink:"/docs/gpoa/frontend/yandex_browser_applier",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"systemd_applier",permalink:"/docs/gpoa/frontend/systemd_applier"},next:{title:"gpt",permalink:"/docs/gpoa/gpt/"}},d={},c=[{value:"ClassDef yandex_browser_applier",id:"classdef-yandex_browser_applier",level:2},{value:"FunctionDef get_boolean(self, data)",id:"functiondef-get_booleanself-data",level:3},{value:"FunctionDef get_parts(self, hivekeyname)",id:"functiondef-get_partsself-hivekeyname",level:3},{value:"FunctionDef create_dict(self, yandex_keys)",id:"functiondef-create_dictself-yandex_keys",level:3}];function l(e){const t={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"classdef-yandex_browser_applier",children:"ClassDef yandex_browser_applier"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"yandex_browser_applier"}),": The ",(0,i.jsx)(t.code,{children:"yandex_browser_applier"})," class is a subclass of ",(0,i.jsx)(t.code,{children:"applier_frontend"})," and is responsible for applying policies to Yandex Browser on a machine."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"attributes"}),":\n\xb7 ",(0,i.jsx)(t.code,{children:"storage"}),": An instance of the storage class, which is used to interact with the Windows Registry and other storage mechanisms.\n\xb7 ",(0,i.jsx)(t.code,{children:"sid"}),": The security identifier (SID) of the user or machine for which policies are being applied.\n\xb7 ",(0,i.jsx)(t.code,{children:"username"}),": The username for which policies are being applied, if applicable.\n\xb7 ",(0,i.jsx)(t.code,{children:"_is_machine_name"}),": A boolean indicating whether the ",(0,i.jsx)(t.code,{children:"username"})," is a machine name.\n\xb7 ",(0,i.jsx)(t.code,{children:"yandex_keys"}),": A list of registry keys related to Yandex Browser.\n\xb7 ",(0,i.jsx)(t.code,{children:"policies_json"}),": A dictionary containing the policies to be applied to Yandex Browser."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Code Description"}),":\nThe ",(0,i.jsx)(t.code,{children:"yandex_browser_applier"})," class inherits from ",(0,i.jsx)(t.code,{children:"applier_frontend"})," and is responsible for applying policies to Yandex Browser on a machine. In the ",(0,i.jsx)(t.code,{children:"__init__()"})," method, the ",(0,i.jsx)(t.code,{children:"storage"}),", ",(0,i.jsx)(t.code,{children:"sid"}),", and ",(0,i.jsx)(t.code,{children:"username"})," attributes are initialized, and the ",(0,i.jsx)(t.code,{children:"_is_machine_name"})," attribute is set based on the ",(0,i.jsx)(t.code,{children:"username"}),". The ",(0,i.jsx)(t.code,{children:"yandex_keys"})," attribute is also initialized by filtering the registry keys related to Yandex Browser."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"get_boolean()"})," method is a helper method that converts a string or integer input to a boolean value. The ",(0,i.jsx)(t.code,{children:"get_parts()"})," method is another helper method that parses a registry path string and leaves only the key parameters."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"create_dict()"})," method is responsible for collecting dictionaries from registry keys into a general dictionary. It iterates over the ",(0,i.jsx)(t.code,{children:"yandex_keys"})," and populates the ",(0,i.jsx)(t.code,{children:"policies_json"})," dictionary with the values from the registry."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"machine_apply()"})," method applies the policies to the Yandex Browser by writing the ",(0,i.jsx)(t.code,{children:"policies_json"})," dictionary to a JSON file in the managed and recommended policies paths."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"apply()"})," method checks whether the module is enabled and calls the ",(0,i.jsx)(t.code,{children:"create_dict()"})," and ",(0,i.jsx)(t.code,{children:"machine_apply()"})," methods if it is."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"get_valuename_typeint()"})," method returns a list of keys resulting from parsing chrome.admx with parsing_chrom_admx_intvalues.py."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),":\nThe ",(0,i.jsx)(t.code,{children:"yandex_browser_applier"})," class is intended to be used as a part of the ",(0,i.jsx)(t.code,{children:"gpoa"})," project and should not be used independently. The ",(0,i.jsx)(t.code,{children:"yandex_keys"})," attribute is expected to be a list of ",(0,i.jsx)(t.code,{children:"RegistryKey"})," objects, as defined in the ",(0,i.jsx)(t.code,{children:"storage"})," class."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Output Example"}),":\nThe ",(0,i.jsx)(t.code,{children:"policies_json"})," dictionary may look like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:"{\n    \"DefaultPageSaveSettings\": 0,\n    \"DefaultUploadSetting\": 1,\n    \"YandexAutoLaunchMode\": {\"AutoLaunchMode\": 1},\n    \"DefaultClipboardSetting\": {\"DefaultClipboardSetting\": 1},\n    \"DefaultFileSystemReadGuardSetting\": {\"DefaultFileSystemReadGuardSetting\": 1},\n    \"DefaultFileSystemWriteGuardSetting\": {\"DefaultFileSystemWriteGuardSetting\": 1},\n    \"DefaultImagesSetting\": {\"DefaultImagesSetting\": 1},\n    \"DefaultJavaScriptJitSetting\": {\"DefaultJavaScriptJitSetting\": 1},\n    \"DefaultJavaScriptSetting\": {\"DefaultJavaScriptSetting\": 1},\n    \"DefaultLocalFontsSetting\": {\"DefaultLocalFontsSetting\": 1},\n    \"DefaultPopupsSetting\": {\"DefaultPopupsSetting\": 1},\n    \"DefaultSensorsSetting\": {\"DefaultSensorsSetting\": 1},\n    \"DefaultSerialGuardSetting\": {\"DefaultSerialGuardSetting\": 1},\n    \"DefaultWebBluetoothGuardSetting\": {\"DefaultWebBluetoothGuardSetting\": 1},\n    \"DefaultWebHidGuardSetting\": {\"DefaultWebHidGuardSetting\": 1},\n    \"DefaultWebUsbGuardSetting\": {\"DefaultWebUsbGuardSetting\": 1},\n    \"DefaultWindowManagementSetting\": {\"DefaultWindowManagementSetting\": 1},\n    \"SafeSitesFilterBehavior\": {\"SafeSitesFilterBehavior\": 1},\n    \"YandexUserFeedbackMode\": {\"YandexUserFeedbackMode\": 1},\n    \"TurboSettings\": {\"TurboSettings\": 1},\n    \"SidePanelMode\": {\"SidePanelMode\": 1},\n    \"RestoreOnStartup\": {\"Restore\n### FunctionDef __init__(self, storage, sid, username)\n **__init__**: The function of **__init__** is to initialize the yandex\\_browser\\_applier object with the required parameters and set up necessary attributes.\n\n**parameters**: The parameters of this Function.\n\xb7 storage: The storage object that contains the information about the modules.\n\xb7 sid: The sid of the user.\n\xb7 username: The username to be checked.\n\n**Code Description**:\nThe **__init__** function initializes the yandex\\_browser\\_applier object with the required parameters and sets up necessary attributes. It takes three parameters: storage, sid, and username.\n\nFirst, it sets the storage, sid, and username attributes of the object to the input parameters. Then, it checks if the username is the machine name by calling the `is_machine_name` function and sets the `_is_machine_name` attribute accordingly.\n\nNext, it filters the HKLM (HKEY\\_LOCAL\\_MACHINE) entries in the Windows registry based on a given prefix string by calling the `filter_hklm_entries` function and sets the `yandex_keys` attribute to the filtered entries.\n\nIt initializes the `policies_json` attribute as an empty dictionary.\n\nFinally, it checks if the module is enabled or not by calling the `check_enabled` function and sets the `__module_enabled` attribute accordingly.\n\nThe `__init__` function is called when a new yandex\\_browser\\_applier object is created. It sets up the necessary attributes required for the object to function properly.\n\n**Note**:\nThe `is_machine_name` function should only be used to check if the supplied username is the machine name. It is not recommended to modify the function to return a different value.\n\nThe `filter_hklm_entries` function is an internal method of the `sqlite_registry` class and should not be used outside of it.\n\nThe `check_enabled` function is used to determine whether a module should be applied or not based on its status in the storage. It is called by various module applicators to check if the module they are applying is enabled or not.\n***\n### FunctionDef machine_apply(self)\n **machine\\_apply**: The function of machine\\_apply is to apply machine settings by creating a policies.json file in the managed\\_policies\\_path directory and another policies.json file in the recommended\\_policies\\_path directory.\n\n**parameters**: This function does not take any parameters.\n\n**Code Description**:\n\nThe function first creates a destination file path (destfile) for the policies.json file in the managed\\_policies\\_path directory. It then tries to pop the 'Recommended' key from the policies\\_json dictionary. If the 'Recommended' key does not exist, it creates an empty dictionary for recommended\\_json.\n\nThe function then defines a lambda function (dict\\_item\\_to\\_list) that converts all nested dictionaries in the target\\_dict to a list. This is done by iterating over each key-value pair in the target\\_dict. If the value is a dictionary, it is replaced with a list of its values. If the value is not a dictionary, it is converted to a literal using the string\\_to\\_literal\\_eval function.\n\nThe function then creates the managed\\_policies\\_path directory if it does not already exist. It then opens the destfile file in write mode and writes the result of applying the dict\\_item\\_to\\_list function to the policies\\_json dictionary.\n\nThe function then creates a destination file path (destfilerec) for the policies.json file in the recommended\\_policies\\_path directory. It then opens the destfilerec file in write mode and writes the result of applying the dict\\_item\\_to\\_list function to the recommended\\_json dictionary.\n\nFinally, the function logs the destfile and destfilerec file paths using the log function.\n\n**Note**:\n\n* The function assumes that the managed\\_policies\\_path and recommended\\_policies\\_path directories have already been created.\n* The function modifies the policies\\_json dictionary by removing the 'Recommended' key.\n* The function uses the string\\_to\\_literal\\_eval function to convert string values in the policies\\_json and recommended\\_json dictionaries to Python objects.\n* The function calls the log function to log the destfile and destfilerec file paths.\n\nThe function is called by the apply function in the yandex\\_browser\\_applier class. The apply function checks if the module is enabled before calling the machine\\_apply function. If the module is enabled, it creates a dictionary using the create\\_dict function and then calls the machine\\_apply function to apply the machine settings. If the module is not enabled, it logs a message indicating that the module is disabled.\n***\n### FunctionDef apply(self)\n **apply**: The function of apply is to apply the necessary configurations to the Yandex browser based on the state of the module enabled or disabled.\n\n**parameters**: This Function does not take any parameters.\n\n**Code Description**:\n\nThe `apply` function first checks if the module is enabled by checking the value of `self.__module_enabled`. If the module is enabled, it logs message code 'D183' using the `log` function. It then calls the `create_dict` function with the `yandex_keys` parameter to create a dictionary of policies. This dictionary is then passed to the `machine_apply` function to apply the machine settings.\n\nIf the module is not enabled, it logs message code 'D184' using the `log` function.\n\nThe `create_dict` function is responsible for collecting dictionaries from registry keys into a general dictionary. It creates a nested dictionary structure from the registry keys and their corresponding values. This function is tightly coupled with the `get_valuename_typeint` method and the `get_boolean` method of the same class. It assumes that these methods have already been executed and the `valuename_typeint` list and the `get_boolean` method are available.\n\nThe `machine_apply` function applies machine settings by creating a `policies.json` file in the `managed_policies_path` directory and another `policies.json` file in the `recommended_policies_path` directory. It assumes that the `managed_policies_path` and `recommended_policies_path` directories have already been created.\n\nThe `log` function is used to log messages and exceptions. It takes a message code and an optional data dictionary as parameters.\n\n**Note**:\n\n* The `apply` function does not take any parameters.\n* The `apply` function calls the `create_dict` function to create a dictionary of policies and the `machine_apply` function to apply the machine settings if the module is enabled.\n* The `apply` function logs messages and exceptions using the `log` function.\n* The `create_dict` function creates a nested dictionary structure from the registry keys and their corresponding values. It assumes that the `get_valuename_typeint` method and the `get_boolean` method of the same class have already been executed.\n* The `machine_apply` function applies machine settings by creating a `policies.json` file in the `managed_policies_path` directory and another `policies.json` file in the `recommended_policies_path` directory. It assumes that the `managed_policies_path` and `recommended_policies_path` directories have already been created.\n* The `log` function is used to log messages and exceptions. It takes a message code and an optional data dictionary as parameters.\n***\n### FunctionDef get_valuename_typeint(self)\n **get\\_valuename\\_typeint**: This function returns a list of value names that are obtained by parsing the `chrome.admx` file using the `parsing_chrom_admx_intvalues.py` script.\n\n**Parameters**: This function does not take any parameters.\n\n**Code Description**: The function initializes a list `valuename_typeint` with a set of predefined value names. These value names are related to various settings and configurations in the Yandex browser. The function then returns this list.\n\nThe function `get_valuename_typeint` is called in the `create_dict` method of the same class, which is used to collect dictionaries from registry keys into a general dictionary. In this method, the `valuename_typeint` list is used to determine whether a given value name corresponds to an integer value or not. If the value name is in the `valuename_typeint` list, the corresponding data value is converted to an integer. Otherwise, the data value is kept as it is.\n\n**Note**: The `get_valuename_typeint` function is tightly coupled with the `parsing_chrom_admx_intvalues.py` script and the `create_dict` method of the same class. It assumes that the `parsing_chrom_admx_intvalues.py` script has already been executed and the `valuename_typeint` list is used to determine the type of data values in the registry keys.\n\n**Output Example**:\n```python\n['DefaultPageSaveSettings', 'DefaultUploadSetting', 'YandexAutoLaunchMode', 'DefaultClipboardSetting', 'DefaultFileSystemReadGuardSetting', 'DefaultFileSystemWriteGuardSetting', 'DefaultImagesSetting', 'DefaultJavaScriptJitSetting', 'DefaultJavaScriptSetting', 'DefaultLocalFontsSetting', 'DefaultPopupsSetting', 'DefaultSensorsSetting', 'DefaultSerialGuardSetting', 'DefaultWebBluetoothGuardSetting', 'DefaultWebHidGuardSetting', 'DefaultWebUsbGuardSetting', 'DefaultWindowManagementSetting', 'SafeSitesFilterBehavior', 'YandexUserFeedbackMode', 'TurboSettings', 'SidePanelMode', 'RestoreOnStartup', 'RestoreOnStartup_recommended', 'BrowserSwitcherParsingMode', 'DefaultNotificationsSetting', 'YandexPowerSavingMode', 'ChromeVariations', 'DeveloperToolsAvailability', 'DownloadRestrictions', 'DownloadRestrictions_recommended', 'NetworkPredictionOptions', 'NetworkPredictionOptions_recommended', 'DefaultCookiesSetting', 'DefaultGeolocationSetting', 'IncognitoModeAvailability', 'DefaultPrintingSettings', 'DefaultPluginsSetting', 'DefaultInsecureContentSetting', 'PasswordProtectionWarningTrigger', 'SafeBrowsingProtectionLevel', 'SafeBrowsingProtectionLevel_recommended', 'DiskCacheSize']\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"functiondef-get_booleanself-data",children:"FunctionDef get_boolean(self, data)"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"get_boolean"})}),"\n",(0,i.jsx)(t.p,{children:"The function of get_boolean is to determine if the input data represents a boolean value and returns the corresponding boolean result."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,i.jsxs)(t.p,{children:["\xb7 ",(0,i.jsx)(t.strong,{children:"data"}),": The input data to be checked for a boolean value."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Code Description"})}),"\n",(0,i.jsx)(t.p,{children:"The function begins by checking if the input data is any of the following: '0', 'false', None, 'none', or 0. If the data matches any of these values, the function returns False. This is because these values are commonly used to represent a boolean false."}),"\n",(0,i.jsx)(t.p,{children:"Next, the function checks if the input data is any of the following: '1', 'true', or 1. If the data matches any of these values, the function returns True. This is because these values are commonly used to represent a boolean true."}),"\n",(0,i.jsx)(t.p,{children:"If the input data does not match any of the above values, the function will return None, indicating that the data is not a recognized boolean value."}),"\n",(0,i.jsxs)(t.p,{children:["The function is called in the ",(0,i.jsx)(t.code,{children:"create_dict"})," method of the ",(0,i.jsx)(t.code,{children:"yandex_browser_applier"})," object. In this method, the ",(0,i.jsx)(t.code,{children:"get_boolean"})," function is used to initialize the value of a key in a nested dictionary. If the key's value is of type 4 (a 32-bit number), and the key's name is in the ",(0,i.jsx)(t.code,{children:"valuename_typeint"})," dictionary, the ",(0,i.jsx)(t.code,{children:"get_boolean"})," function is called to convert the value to a boolean. This allows for more straightforward handling of boolean values in the rest of the program."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Note"})}),"\n",(0,i.jsx)(t.p,{children:"\xb7 The function only recognizes the specific string values '0', 'false', '1', and 'true' as boolean values. Other string representations of boolean values, such as 'True' or 'False', will not be recognized.\n\xb7 The function does not handle any error cases. If the input data is not a boolean value, the function will return None."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Output Example"})}),"\n",(0,i.jsx)(t.p,{children:"get_boolean('0')"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"False"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"get_boolean('true')"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"True"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"get_boolean('maybe')"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"None"}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"functiondef-get_partsself-hivekeyname",children:"FunctionDef get_parts(self, hivekeyname)"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"get_parts"}),": The function of get_parts is to parse a registry path string and return the key parameters, with the registry branch removed and the string split at each backslash ()."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"parameters"}),":\n\xb7 hivekeyname: A string representing the registry key path."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Code Description"}),":\nThe function ",(0,i.jsx)(t.code,{children:"get_parts"})," takes one parameter, ",(0,i.jsx)(t.code,{children:"hivekeyname"}),", which is a string representing the registry key path. It first removes the registry branch from the input string using the ",(0,i.jsx)(t.code,{children:"replace"})," method, and then splits the resulting string into a list of parts using the ",(0,i.jsx)(t.code,{children:"split"})," method with the backslash character as the separator. The list of parts is returned as the function's result."]}),"\n",(0,i.jsxs)(t.p,{children:["This function is used in the ",(0,i.jsx)(t.code,{children:"create_dict"})," method of the same class to parse the registry key path of each data item and create a nested dictionary from the parts of the key path. The ",(0,i.jsx)(t.code,{children:"get_parts"})," function is called in a loop, and for each iteration, it processes one data item and creates a nested dictionary entry for it."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"hivekeyname"})," parameter should be a string representing a valid registry key path."]}),"\n",(0,i.jsxs)(t.li,{children:["The function assumes that the ",(0,i.jsx)(t.code,{children:"__registry_branch"})," attribute of the class instance is set to a valid registry branch string."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Output Example"}),":\nGiven the following input:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"hivekeyname = 'HKEY_LOCAL_MACHINE\\Software\\Policies\\Yandex\\YandexBrowser'\n"})}),"\n",(0,i.jsx)(t.p,{children:"The function will return the following list of parts:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"['Software', 'Policies', 'Yandex', 'YandexBrowser']\n"})}),"\n",(0,i.jsx)(t.p,{children:"This list of parts can then be used to create a nested dictionary entry for the data item."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"functiondef-create_dictself-yandex_keys",children:"FunctionDef create_dict(self, yandex_keys)"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"create_dict"}),": The function of create_dict is to collect dictionaries from registry keys into a general dictionary. This function is responsible for creating a nested dictionary structure from the registry keys and their corresponding values. It is called in the ",(0,i.jsx)(t.code,{children:"apply"})," method of the ",(0,i.jsx)(t.code,{children:"yandex_browser_applier"})," object to process the registry keys and create a dictionary that can be used to configure the Yandex browser."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Parameters"}),":\n\xb7 ",(0,i.jsx)(t.code,{children:"yandex_keys"}),": A list of registry keys to be processed."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Code Description"}),":\nThe function ",(0,i.jsx)(t.code,{children:"create_dict"})," begins by initializing an empty dictionary ",(0,i.jsx)(t.code,{children:"counts"})," to store the processed registry keys. It then calls the ",(0,i.jsx)(t.code,{children:"get_valuename_typeint"})," method to get a list of value names that are obtained by parsing the ",(0,i.jsx)(t.code,{children:"chrome.admx"})," file. This list is used to determine whether a given value name corresponds to an integer value or not."]}),"\n",(0,i.jsxs)(t.p,{children:["The function then loops through the ",(0,i.jsx)(t.code,{children:"yandex_keys"})," list and processes each registry key. For each key, it initializes a ",(0,i.jsx)(t.code,{children:"branch"})," variable to the ",(0,i.jsx)(t.code,{children:"counts"})," dictionary. It then checks if the data of the key is of type ",(0,i.jsx)(t.code,{children:"bytes"}),". If it is, it decodes the data to a string using the ",(0,i.jsx)(t.code,{children:"decode"})," method with the ",(0,i.jsx)(t.code,{children:"utf-16"})," encoding and removes any null characters using the ",(0,i.jsx)(t.code,{children:"replace"})," method."]}),"\n",(0,i.jsxs)(t.p,{children:["Next, the function calls the ",(0,i.jsx)(t.code,{children:"get_parts"})," method to parse the registry key path string and return the key parameters, with the registry branch removed and the string split at each backslash (",(0,i.jsx)(t.code,{children:"\\"}),"). It then loops through the parts of the key path and creates a nested dictionary structure using the ",(0,i.jsx)(t.code,{children:"setdefault"})," method."]}),"\n",(0,i.jsxs)(t.p,{children:["After creating the nested dictionary structure, the function initializes the dictionary key value based on the type of the key's data. If the key's type is 4 (a 32-bit number), and the key's name is in the ",(0,i.jsx)(t.code,{children:"valuename_typeint"})," dictionary, the function calls the ",(0,i.jsx)(t.code,{children:"get_boolean"})," method to convert the value to a boolean. If the key's data is a JSON string, the function parses the JSON string using the ",(0,i.jsx)(t.code,{children:"json.loads"})," method. Otherwise, the function converts the key's data to a string and replaces any backslashes with forward slashes."]}),"\n",(0,i.jsxs)(t.p,{children:["If any exception occurs during the processing of a registry key, the function logs the exception using the ",(0,i.jsx)(t.code,{children:"log"})," method and continues processing the next key."]}),"\n",(0,i.jsxs)(t.p,{children:["At the end of the function, the ",(0,i.jsx)(t.code,{children:"policies_json"})," attribute of the ",(0,i.jsx)(t.code,{children:"yandex_browser_applier"})," object is set to the ",(0,i.jsx)(t.code,{children:"counts"})," dictionary with an empty key."]}),"\n",(0,i.jsxs)(t.p,{children:["This function is tightly coupled with the ",(0,i.jsx)(t.code,{children:"get_valuename_typeint"})," method and the ",(0,i.jsx)(t.code,{children:"get_boolean"})," method of the same class. It assumes that the ",(0,i.jsx)(t.code,{children:"get_valuename_typeint"})," method has already been executed and the ",(0,i.jsx)(t.code,{children:"valuename_typeint"})," list is used to determine the type of data values in the registry keys."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"yandex_keys"})," parameter should be a list of valid registry keys."]}),"\n",(0,i.jsxs)(t.li,{children:["The function assumes that the ",(0,i.jsx)(t.code,{children:"get_valuename_typeint"})," method of the same class has already been executed and the ",(0,i.jsx)(t.code,{children:"valuename_typeint"})," list is available."]}),"\n",(0,i.jsxs)(t.li,{children:["The function assumes that the ",(0,i.jsx)(t.code,{children:"get_boolean"})," method of the same class is available to convert boolean values."]}),"\n",(0,i.jsx)(t.li,{children:"The function handles any exceptions that may occur during the processing of registry keys by logging the exception and continuing with the next key."}),"\n",(0,i.jsxs)(t.li,{children:["The function does not return any value, but sets the ",(0,i.jsx)(t.code,{children:"policies_json"})," attribute of the ",(0,i.jsx)(t.code,{children:"yandex_browser_applier"})," object to the processed registry keys."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Relation with other parts of the project"}),":\nThe ",(0,i.jsx)(t.code,{children:"create_dict"})," method is called in the ",(0,i.jsx)(t.code,{children:"apply"})," method of the ",(0,i.jsx)(t.code,{children:"yandex_browser_applier"})," object to process the registry keys and create a dictionary that can be used to configure the Yandex browser. The ",(0,i.jsx)(t.code,{children:"get_valuename_typeint"})," method and the ",(0,i.jsx)(t.code,{children:"get_boolean"})," method of the same class are used to determine the type of data values in the registry keys. The ",(0,i.jsx)(t.code,{children:"log"})," method of the ",(0,i.jsx)(t.code,{children:"logging"})," module is used to log any exceptions that may occur during the processing of registry keys."]}),"\n",(0,i.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);