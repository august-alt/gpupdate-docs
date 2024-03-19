"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[9356],{3941:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=i(4848),s=i(8453);const o={},a=void 0,r={id:"gpoa/frontend/chromium_applier",title:"chromium_applier",description:"ClassDef chromium_applier",source:"@site/docs/gpoa/frontend/chromium_applier.md",sourceDirName:"gpoa/frontend",slug:"/gpoa/frontend/chromium_applier",permalink:"/docs/gpoa/frontend/chromium_applier",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"util",permalink:"/docs/gpoa/frontend/appliers/util"},next:{title:"cifs_applier",permalink:"/docs/gpoa/frontend/cifs_applier"}},c={},l=[{value:"ClassDef chromium_applier",id:"classdef-chromium_applier",level:2},{value:"FunctionDef get_boolean(self, data)",id:"functiondef-get_booleanself-data",level:3},{value:"FunctionDef get_parts(self, hivekeyname)",id:"functiondef-get_partsself-hivekeyname",level:3},{value:"FunctionDef create_dict(self, chromium_keys)",id:"functiondef-create_dictself-chromium_keys",level:3}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"classdef-chromium_applier",children:"ClassDef chromium_applier"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"chromium_applier"}),": The chromium_applier class is responsible for applying Chromium-related policies in the gpoa project. It is a subclass of applier_frontend and inherits its attributes and methods."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"attributes"}),":\n\xb7 storage: An instance of the storage class, which is used to interact with the Windows Registry and other storage mechanisms.\n\xb7 sid: The security identifier (SID) of the user or machine for which policies are being applied.\n\xb7 username: The username for which policies are being applied, if applicable.\n\xb7 ",(0,n.jsx)(t.code,{children:"__module_name"}),': The name of the module, which is "ChromiumApplier".\n\xb7 ',(0,n.jsx)(t.code,{children:"__module_enabled"}),": A boolean value indicating whether the module is enabled or not.\n\xb7 ",(0,n.jsx)(t.code,{children:"__module_experimental"}),": A boolean value indicating whether the module is experimental or not.\n\xb7 ",(0,n.jsx)(t.code,{children:"__registry_branch"}),": The registry branch where Chromium policies are stored.\n\xb7 ",(0,n.jsx)(t.code,{children:"__managed_policies_path"}),": The path to the managed policies file.\n\xb7 ",(0,n.jsx)(t.code,{children:"__recommended_policies_path"}),": The path to the recommended policies file."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Code Description"}),":\nThe chromium_applier class overrides the ",(0,n.jsx)(t.code,{children:"__init__()"})," method of applier_frontend to initialize the ",(0,n.jsx)(t.code,{children:"__module_enabled"})," attribute based on the result of a call to check_enabled(). The class also defines a ",(0,n.jsx)(t.code,{children:"machine_apply()"})," method, which is responsible for applying machine settings."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"__init__()"})," method initializes the storage, sid, and username attributes, and sets the ",(0,n.jsx)(t.code,{children:"__module_enabled"})," attribute based on the result of a call to check_enabled(). The check_enabled() method checks whether the current module is enabled in the gpoa configuration, and returns True if it is, and False otherwise."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"machine_apply()"})," method is responsible for applying machine settings. It creates the managed and recommended policies files and writes the policies to them. The policies are collected from the registry keys into a general dictionary using the ",(0,n.jsx)(t.code,{children:"create_dict()"})," method."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"create_dict()"})," method collects dictionaries from registry keys into a general dictionary. It iterates over the chromium_keys and creates a nested dictionary from the parts of the registry key. It initializes the dictionary key value based on the type of the registry key."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"get_boolean()"})," method is a helper method that converts a boolean value from a string or integer to a boolean."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"get_parts()"})," method is a helper method that parses the registry path string and leaves only the key parameters."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"apply()"})," method is inherited from applier_frontend and calls the ",(0,n.jsx)(t.code,{children:"run()"})," method if the module is enabled."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":\nThe chromium_applier class is intended to be used as a part of the gpoa project for applying Chromium-related policies. Subclasses should not override the ",(0,n.jsx)(t.code,{children:"machine_apply()"})," method, but can override the ",(0,n.jsx)(t.code,{children:"create_dict()"})," method to provide custom logic for collecting policies from the registry keys."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Output Example"}),":\nThe chromium_applier class does not have a direct output, but it modifies the managed and recommended policies files based on the Chromium-related policies in the registry. Here is an example of the policies.json file that could be generated:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:"{\n    \"DefaultClipboardSetting\": 1,\n    \"DefaultCookiesSetting\": 1,\n    \"DefaultFileSystemReadGuardSetting\": 1,\n    \"DefaultFileSystemWriteGuardSetting\": 1,\n    \"DefaultGeolocationSetting\": 1,\n    \"DefaultImagesSetting\": 1,\n    \"DefaultInsecureContentSetting\": 1,\n    \"DefaultJavaScriptJitSetting\": 1,\n    \"DefaultJavaScriptSetting\": 1,\n    \"DefaultLocalFontsSetting\": 1,\n    \"DefaultNotificationsSetting\": 1,\n    \"DefaultPopupsSetting\": 1,\n    \"DefaultSensorsSetting\": 1,\n    \"DefaultSerialGuardSetting\": 1,\n    \"DefaultThirdPartyStoragePartitioningSetting\": 1,\n    \"DefaultWebBluetoothGuardSetting\": 1,\n    \"DefaultWebHidGuardSetting\": 1,\n    \"DefaultWebUsbGuardSetting\": 1,\n    \"DefaultWindowManagementSetting\": 1,\n    \"DefaultMediaStreamSetting\": 1,\n    \"DefaultWindowPlacementSetting\": 1,\n    \"ProxyServerMode\": 1,\n    \"ExtensionManifestV2Availability\": 1,\n    \"ExtensionUnpublishedAvailability\": 1,\n### FunctionDef __init__(self, storage, sid, username)\n **__init__**: The function of **__init__** is to initialize the chromium applier object with the required parameters and set up necessary attributes.\n\n**parameters**: The parameters of this Function.\n\xb7 storage: An object that contains the necessary information for applying policies.\n\xb7 sid: A security identifier (SID) that represents the user or group for which policies are being applied.\n\xb7 username: A string that contains the username for which policies are being applied.\n\n**Code Description**:\n\nThe **__init__** function initializes the chromium applier object with the required parameters and sets up necessary attributes. It takes three parameters: storage, sid, and username.\n\nFirst, it sets the storage, sid, and username attributes of the object to the provided parameters. Then, it checks if the username is the machine name by calling the `is_machine_name` function from the `util` module and sets the `_is_machine_name` attribute accordingly.\n\nNext, it creates a filter for Chromium keys based on the registry branch name and sets the `chromium_keys` attribute to the filtered keys from the storage. It initializes an empty dictionary for `policies_json` attribute, which will be used to store the policies in JSON format.\n\nFinally, it checks if the module is enabled or not by calling the `check_enabled` function from the `applier_frontend` module and sets the `__module_enabled` attribute accordingly.\n\nThe `__init__` function is called when a new chromium applier object is created. It sets up necessary attributes for the object, which are used in subsequent method calls to apply policies.\n\n**Note**:\n\nThe `is_machine_name` function should only be used to check if the supplied username is the machine name. It is not recommended to modify the function to return a different value.\n\nThe `check_enabled` function is used to check if a module is enabled or not based on the storage and the name of the module. It returns a boolean value indicating whether the module is enabled or not.\n\nThe `_is_machine_name` attribute is used to determine if the policies should be applied to the machine or the user. If the `_is_machine_name` attribute is True, the policies will be applied to the machine, otherwise, they will be applied to the user.\n\nThe `chromium_keys` attribute is used to store the filtered Chromium keys from the storage. It is used in subsequent method calls to apply policies to the filtered keys.\n\nThe `policies_json` attribute is used to store the policies in JSON format. It is used in subsequent method calls to apply policies to the stored policies.\n\nThe `__module_enabled` attribute is used to determine whether the module should be applied or not based on its status in the storage. It is set by calling the `check_enabled` function and is used in subsequent method calls to apply policies.\n***\n### FunctionDef machine_apply(self)\n **machine\\_apply**: The function of machine\\_apply is to apply machine settings by creating policies.json files in the managed and recommended policies paths.\n\n**parameters**: This function does not take any parameters.\n\n**Code Description**:\n\nThe function first checks if the 'Recommended' key exists in the `policies_json` dictionary. If it exists, its value is assigned to the `recommended__json` variable. If it does not exist, an empty dictionary is assigned to the `recommended__json` variable.\n\nThen, the function defines a lambda function `dict_item_to_list` that converts all nested dictionaries in the input dictionary to a list. This lambda function is used to convert the `policies_json` dictionary and the `recommended__json` dictionary to the required format.\n\nNext, the function creates the managed policies path if it does not exist using `os.makedirs(self.__managed_policies_path, exist_ok=True)`. It then opens the `policies.json` file in the managed policies path in write mode and writes the converted `policies_json` dictionary to the file using `json.dump()`. The function also logs the destination file path using the `log()` function.\n\nSimilarly, the function creates the recommended policies path if it does not exist using `os.makedirs(self.__recommended_policies_path, exist_ok=True)`. It then opens the `policies.json` file in the recommended policies path in write mode and writes the converted `recommended__json` dictionary to the file using `json.dump()`. The function also logs the destination file path using the `log()` function.\n\nThe `machine_apply` function is called by the `apply` function of the `chromium_applier` class. The `apply` function checks if the module is enabled before calling the `machine_apply` function. If the module is enabled, it creates the `policies_json` dictionary using the `create_dict()` function and then calls the `machine_apply()` function to apply the machine settings.\n\nThe `machine_apply` function uses the `string_to_literal_eval()` function from the `util.py` module to safely convert strings that represent Python objects (such as dictionaries or lists) into actual Python objects. This function is used in particular in the `machine_apply()` method of the `chromium_applier` class, where it is used to convert string values in the `policies_json` dictionary into Python objects.\n\n**Note**:\n\n* The `machine_apply()` function does not take any parameters.\n* The function creates the managed and recommended policies paths if they do not exist.\n* The function uses the `string_to_literal_eval()` function to safely convert strings that represent Python objects into actual Python objects.\n* The function is called by the `apply()` function of the `chromium_applier` class.\n* The function logs the destination file path using the `log()` function.\n***\n### FunctionDef apply(self)\n **apply**: The function of apply is to perform the actual job of the chromium applier by calling the `create_dict` and `machine_apply` functions if the module is enabled.\n\n**parameters**: This function does not take any parameters.\n\n**Code Description**:\n\nThe `apply` function first checks if the module is enabled using the `__module_enabled` attribute. If the module is enabled, it logs message 'D95' and then proceeds to call the `create_dict` function with `chromium_keys` as the parameter. The `create_dict` function collects dictionaries from registry keys into a general dictionary.\n\nAfter creating the dictionary, the `apply` function calls the `machine_apply` function to apply machine settings by creating policies.json files in the managed and recommended policies paths.\n\nIf the module is not enabled, the `apply` function logs message 'D96'.\n\n**Relationship with its callers in the project**:\n\nThe `apply` function is called by the `ChromiumApplier` class in the `chromium_applier.py` file. It is typically called after the `ChromiumApplier` object has been initialized with the necessary parameters.\n\nThe `apply` function calls the `create_dict` and `machine_apply` functions, which are also defined in the `chromium_applier.py` file. The `create_dict` function collects dictionaries from registry keys into a general dictionary, while the `machine_apply` function applies machine settings by creating policies.json files in the managed and recommended policies paths.\n\n**Note**:\n\n* The `apply` function checks if the module is enabled before calling the `create_dict` and `machine_apply` functions.\n* The `apply` function logs messages 'D95' and 'D96' to indicate whether the module is enabled or not.\n* The `apply` function calls the `create_dict` and `machine_apply` functions to perform the actual job of the chromium applier.\n***\n### FunctionDef get_valuename_typeint(self)\n **get\\_valuename\\_typeint**: This function returns a list of keys resulting from parsing chrome.admx with parsing\\_chrom\\_admx\\_intvalues.py.\n\n**Parameters**: This function does not take any parameters.\n\n**Code Description**:\nThe function initializes a list named `valuename_typeint` and assigns it a list of strings. These strings are the keys resulting from parsing chrome.admx with parsing\\_chrom\\_admx\\_intvalues.py. The list contains keys such as 'DefaultClipboardSetting', 'DefaultCookiesSetting', 'DefaultFileSystemReadGuardSetting', etc.\n\nThe function returns the `valuename_typeint` list, which can be used in other parts of the code to check if a key exists in this list or not.\n\n**Relationship with its callers in the project**:\nThis function is called in the `create_dict` function of the `chromium_applier` object in the `chromium_applier.py` file. The `create_dict` function uses the `valuename_typeint` list to check if the value of a key is in this list or not. If the value is in the list, it is converted to an integer, otherwise, it is converted to a boolean value.\n\n**Note**:\nThis function always returns the same list of keys, so it can be used to check if a key exists in this list or not.\n\n**Output Example**:\n```python\n['DefaultClipboardSetting', 'DefaultCookiesSetting', 'DefaultFileSystemReadGuardSetting', 'DefaultFileSystemWriteGuardSetting', 'DefaultGeolocationSetting', 'DefaultImagesSetting', 'DefaultInsecureContentSetting', 'DefaultJavaScriptJitSetting', 'DefaultJavaScriptSetting', 'DefaultLocalFontsSetting', 'DefaultNotificationsSetting', 'DefaultPopupsSetting', 'DefaultSensorsSetting', 'DefaultSerialGuardSetting', 'DefaultThirdPartyStoragePartitioningSetting', 'DefaultWebBluetoothGuardSetting', 'DefaultWebHidGuardSetting', 'DefaultWebUsbGuardSetting', 'DefaultWindowManagementSetting', 'DefaultMediaStreamSetting', 'DefaultWindowPlacementSetting', 'ProxyServerMode', 'ExtensionManifestV2Availability', 'ExtensionUnpublishedAvailability', 'BrowserSwitcherParsingMode', 'CloudAPAuthEnabled', 'AdsSettingForIntrusiveAdsSites', 'AmbientAuthenticationInPrivateModesEnabled', 'BatterySaverModeAvailability', 'BrowserSignin', 'ChromeVariations', 'DeveloperToolsAvailability', 'DownloadRestrictions', 'ForceYouTubeRestrict', 'HeadlessMode', 'IncognitoModeAvailability', 'IntranetRedirectBehavior', 'NetworkPredictionOptions', 'ProfilePickerOnStartupAvailability', 'RelaunchNotification', 'SafeSitesFilterBehavior', 'UserAgentReduction', 'BatterySaverModeAvailability_recommended', 'DownloadRestrictions_recommended', 'NetworkPredictionOptions_recommended', 'PrintPostScriptMode', 'PrintRasterizationMode', 'ChromeFrameRendererSettings', 'DefaultFileHandlingGuardSetting', 'DefaultKeygenSetting', 'DefaultPluginsSetting', 'LegacySameSiteCookieBehaviorEnabled', 'ForceMajorVersionToMinorPositionInUserAgent', 'PasswordProtectionWarningTrigger', 'SafeBrowsingProtectionLevel', 'SafeBrowsingProtectionLevel_recommended', 'RestoreOnStartup', 'RestoreOnStartup_recommended']\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"functiondef-get_booleanself-data",children:"FunctionDef get_boolean(self, data)"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"get_boolean"})}),"\n",(0,n.jsx)(t.p,{children:"The function of get_boolean is to determine if the input data represents a boolean value and returns the corresponding boolean value."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"parameters"})}),"\n",(0,n.jsxs)(t.p,{children:["\xb7 ",(0,n.jsx)(t.strong,{children:"data"}),": The input data to be checked for a boolean value."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Code Description"})}),"\n",(0,n.jsx)(t.p,{children:"The function starts by checking if the input data is one of the following: '0', 'false', None, 'none', 0. If so, it returns False. This covers cases where the input data is explicitly set to a false boolean value or is empty or null."}),"\n",(0,n.jsx)(t.p,{children:"Next, the function checks if the input data is one of the following: '1', 'true', 1. If so, it returns True. This covers cases where the input data is explicitly set to a true boolean value."}),"\n",(0,n.jsx)(t.p,{children:"If the input data does not match any of the above cases, the function will return None, indicating that the input data does not represent a boolean value."}),"\n",(0,n.jsxs)(t.p,{children:["The function is called in the ",(0,n.jsx)(t.code,{children:"create_dict"})," method of the ",(0,n.jsx)(t.code,{children:"chromium_applier"})," object in the ",(0,n.jsx)(t.code,{children:"chromium_applier.py"})," module. In this method, the function is used to convert registry key data into a boolean value, which is then added to a nested dictionary. This allows for the creation of a general dictionary that contains data from multiple registry keys."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Note"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The function is case-sensitive when checking for the string values 'true' and 'false'."}),"\n",(0,n.jsx)(t.li,{children:"The function only checks for the specific string and numeric values '0', 'false', None, 'none', '1', 'true', and 1. Any other input data will not be considered a boolean value."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Output Example"})}),"\n",(0,n.jsx)(t.p,{children:"Input: 'true'\nOutput: True"}),"\n",(0,n.jsx)(t.p,{children:"Input: 'False'\nOutput: False"}),"\n",(0,n.jsx)(t.p,{children:"Input: 0\nOutput: False"}),"\n",(0,n.jsx)(t.p,{children:"Input: '5'\nOutput: None"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"functiondef-get_partsself-hivekeyname",children:"FunctionDef get_parts(self, hivekeyname)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"get_parts"}),": The function of get_parts is to parse a registry path string and return the key parameters, with the registry branch removed."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"parameters"}),":\n\xb7 hivekeyname: A string representing the registry key path."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"functiondef-create_dictself-chromium_keys",children:"FunctionDef create_dict(self, chromium_keys)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"create_dict"}),": The function of create_dict is to collect dictionaries from registry keys into a general dictionary."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"parameters"}),":\n\xb7 chromium_keys: A list of registry keys to be processed."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Code Description"}),":\nThe function initializes an empty dictionary named ",(0,n.jsx)(t.code,{children:"counts"})," to store the collected dictionaries. It then gets the list of keys to read by calling the ",(0,n.jsx)(t.code,{children:"get_valuename_typeint"})," method."]}),"\n",(0,n.jsxs)(t.p,{children:["The function then iterates over each item in ",(0,n.jsx)(t.code,{children:"chromium_keys"}),". For each item, it checks if its ",(0,n.jsx)(t.code,{children:"data"})," attribute is of type ",(0,n.jsx)(t.code,{children:"bytes"}),". If it is, it decodes it to a string using the 'utf-16' encoding and removes any null characters."]}),"\n",(0,n.jsxs)(t.p,{children:["Next, the function gets the parts of the registry key by calling the ",(0,n.jsx)(t.code,{children:"get_parts"})," method. It then creates a nested dictionary from the parts using a loop."]}),"\n",(0,n.jsxs)(t.p,{children:["The function then checks the type of the item's ",(0,n.jsx)(t.code,{children:"data"})," attribute. If it is 4, it checks if the item's ",(0,n.jsx)(t.code,{children:"valuename"})," is in the ",(0,n.jsx)(t.code,{children:"valuename_typeint"})," list. If it is, it converts the ",(0,n.jsx)(t.code,{children:"data"})," attribute to an integer. Otherwise, it converts it to a boolean value by calling the ",(0,n.jsx)(t.code,{children:"get_boolean"})," method."]}),"\n",(0,n.jsxs)(t.p,{children:["If the ",(0,n.jsx)(t.code,{children:"data"})," attribute is not of type 4, the function checks if it is a list or not. If it is, it tries to parse it as JSON. If it fails, it replaces any backslashes with forward slashes and stores it as a string. If it is not a list, it replaces any backslashes with forward slashes and stores it as a string."]}),"\n",(0,n.jsxs)(t.p,{children:["If an exception occurs during the processing of an item, the function logs the exception and the item's ",(0,n.jsx)(t.code,{children:"keyname"})," attribute."]}),"\n",(0,n.jsxs)(t.p,{children:["Finally, the function tries to set the ",(0,n.jsx)(t.code,{children:"policies_json"})," attribute to the value of the ",(0,n.jsx)(t.code,{children:"counts"})," dictionary with an empty key. If this fails, it sets ",(0,n.jsx)(t.code,{children:"policies_json"})," to an empty dictionary."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Relationship with its callers in the project"}),":\nThis function is called in the ",(0,n.jsx)(t.code,{children:"apply"})," method of the ",(0,n.jsx)(t.code,{children:"chromium_applier"})," object in the ",(0,n.jsx)(t.code,{children:"chromium_applier.py"})," file. The ",(0,n.jsx)(t.code,{children:"apply"})," method calls ",(0,n.jsx)(t.code,{children:"create_dict"})," with a list of registry keys to process, and then calls the ",(0,n.jsx)(t.code,{children:"machine_apply"})," method."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"create_dict"})," function uses the ",(0,n.jsx)(t.code,{children:"get_valuename_typeint"}),", ",(0,n.jsx)(t.code,{children:"get_parts"}),", and ",(0,n.jsx)(t.code,{children:"get_boolean"})," methods to process the registry keys. It uses the ",(0,n.jsx)(t.code,{children:"valuename_typeint"})," list to check if a key exists in this list or not. If the value is in the list, it is converted to an integer, otherwise, it is converted to a boolean value."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":\nThis function always returns the same list of keys, so it can be used to check if a key exists in this list or not."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Output Example"}),":\nThe output of this function is a dictionary with nested dictionaries that contain data from multiple registry keys. The exact output depends on the input ",(0,n.jsx)(t.code,{children:"chromium_keys"})," list."]}),"\n",(0,n.jsx)(t.hr,{})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var n=i(6540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);