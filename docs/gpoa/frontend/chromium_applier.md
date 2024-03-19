## ClassDef chromium_applier
 **chromium\_applier**: The chromium\_applier class is responsible for applying Chromium-related policies in the gpoa project. It is a subclass of applier\_frontend and inherits its attributes and methods.

**attributes**:
· storage: An instance of the storage class, which is used to interact with the Windows Registry and other storage mechanisms.
· sid: The security identifier (SID) of the user or machine for which policies are being applied.
· username: The username for which policies are being applied, if applicable.
· `__module_name`: The name of the module, which is "ChromiumApplier".
· `__module_enabled`: A boolean value indicating whether the module is enabled or not.
· `__module_experimental`: A boolean value indicating whether the module is experimental or not.
· `__registry_branch`: The registry branch where Chromium policies are stored.
· `__managed_policies_path`: The path to the managed policies file.
· `__recommended_policies_path`: The path to the recommended policies file.

**Code Description**:
The chromium\_applier class overrides the `__init__()` method of applier\_frontend to initialize the `__module_enabled` attribute based on the result of a call to check\_enabled(). The class also defines a `machine_apply()` method, which is responsible for applying machine settings.

The `__init__()` method initializes the storage, sid, and username attributes, and sets the `__module_enabled` attribute based on the result of a call to check\_enabled(). The check\_enabled() method checks whether the current module is enabled in the gpoa configuration, and returns True if it is, and False otherwise.

The `machine_apply()` method is responsible for applying machine settings. It creates the managed and recommended policies files and writes the policies to them. The policies are collected from the registry keys into a general dictionary using the `create_dict()` method.

The `create_dict()` method collects dictionaries from registry keys into a general dictionary. It iterates over the chromium\_keys and creates a nested dictionary from the parts of the registry key. It initializes the dictionary key value based on the type of the registry key.

The `get_boolean()` method is a helper method that converts a boolean value from a string or integer to a boolean.

The `get_parts()` method is a helper method that parses the registry path string and leaves only the key parameters.

The `apply()` method is inherited from applier\_frontend and calls the `run()` method if the module is enabled.

**Note**:
The chromium\_applier class is intended to be used as a part of the gpoa project for applying Chromium-related policies. Subclasses should not override the `machine_apply()` method, but can override the `create_dict()` method to provide custom logic for collecting policies from the registry keys.

**Output Example**:
The chromium\_applier class does not have a direct output, but it modifies the managed and recommended policies files based on the Chromium-related policies in the registry. Here is an example of the policies.json file that could be generated:
```json
{
    "DefaultClipboardSetting": 1,
    "DefaultCookiesSetting": 1,
    "DefaultFileSystemReadGuardSetting": 1,
    "DefaultFileSystemWriteGuardSetting": 1,
    "DefaultGeolocationSetting": 1,
    "DefaultImagesSetting": 1,
    "DefaultInsecureContentSetting": 1,
    "DefaultJavaScriptJitSetting": 1,
    "DefaultJavaScriptSetting": 1,
    "DefaultLocalFontsSetting": 1,
    "DefaultNotificationsSetting": 1,
    "DefaultPopupsSetting": 1,
    "DefaultSensorsSetting": 1,
    "DefaultSerialGuardSetting": 1,
    "DefaultThirdPartyStoragePartitioningSetting": 1,
    "DefaultWebBluetoothGuardSetting": 1,
    "DefaultWebHidGuardSetting": 1,
    "DefaultWebUsbGuardSetting": 1,
    "DefaultWindowManagementSetting": 1,
    "DefaultMediaStreamSetting": 1,
    "DefaultWindowPlacementSetting": 1,
    "ProxyServerMode": 1,
    "ExtensionManifestV2Availability": 1,
    "ExtensionUnpublishedAvailability": 1,
### FunctionDef __init__(self, storage, sid, username)
 **__init__**: The function of **__init__** is to initialize the chromium applier object with the required parameters and set up necessary attributes.

**parameters**: The parameters of this Function.
· storage: An object that contains the necessary information for applying policies.
· sid: A security identifier (SID) that represents the user or group for which policies are being applied.
· username: A string that contains the username for which policies are being applied.

**Code Description**:

The **__init__** function initializes the chromium applier object with the required parameters and sets up necessary attributes. It takes three parameters: storage, sid, and username.

First, it sets the storage, sid, and username attributes of the object to the provided parameters. Then, it checks if the username is the machine name by calling the `is_machine_name` function from the `util` module and sets the `_is_machine_name` attribute accordingly.

Next, it creates a filter for Chromium keys based on the registry branch name and sets the `chromium_keys` attribute to the filtered keys from the storage. It initializes an empty dictionary for `policies_json` attribute, which will be used to store the policies in JSON format.

Finally, it checks if the module is enabled or not by calling the `check_enabled` function from the `applier_frontend` module and sets the `__module_enabled` attribute accordingly.

The `__init__` function is called when a new chromium applier object is created. It sets up necessary attributes for the object, which are used in subsequent method calls to apply policies.

**Note**:

The `is_machine_name` function should only be used to check if the supplied username is the machine name. It is not recommended to modify the function to return a different value.

The `check_enabled` function is used to check if a module is enabled or not based on the storage and the name of the module. It returns a boolean value indicating whether the module is enabled or not.

The `_is_machine_name` attribute is used to determine if the policies should be applied to the machine or the user. If the `_is_machine_name` attribute is True, the policies will be applied to the machine, otherwise, they will be applied to the user.

The `chromium_keys` attribute is used to store the filtered Chromium keys from the storage. It is used in subsequent method calls to apply policies to the filtered keys.

The `policies_json` attribute is used to store the policies in JSON format. It is used in subsequent method calls to apply policies to the stored policies.

The `__module_enabled` attribute is used to determine whether the module should be applied or not based on its status in the storage. It is set by calling the `check_enabled` function and is used in subsequent method calls to apply policies.
***
### FunctionDef machine_apply(self)
 **machine\_apply**: The function of machine\_apply is to apply machine settings by creating policies.json files in the managed and recommended policies paths.

**parameters**: This function does not take any parameters.

**Code Description**:

The function first checks if the 'Recommended' key exists in the `policies_json` dictionary. If it exists, its value is assigned to the `recommended__json` variable. If it does not exist, an empty dictionary is assigned to the `recommended__json` variable.

Then, the function defines a lambda function `dict_item_to_list` that converts all nested dictionaries in the input dictionary to a list. This lambda function is used to convert the `policies_json` dictionary and the `recommended__json` dictionary to the required format.

Next, the function creates the managed policies path if it does not exist using `os.makedirs(self.__managed_policies_path, exist_ok=True)`. It then opens the `policies.json` file in the managed policies path in write mode and writes the converted `policies_json` dictionary to the file using `json.dump()`. The function also logs the destination file path using the `log()` function.

Similarly, the function creates the recommended policies path if it does not exist using `os.makedirs(self.__recommended_policies_path, exist_ok=True)`. It then opens the `policies.json` file in the recommended policies path in write mode and writes the converted `recommended__json` dictionary to the file using `json.dump()`. The function also logs the destination file path using the `log()` function.

The `machine_apply` function is called by the `apply` function of the `chromium_applier` class. The `apply` function checks if the module is enabled before calling the `machine_apply` function. If the module is enabled, it creates the `policies_json` dictionary using the `create_dict()` function and then calls the `machine_apply()` function to apply the machine settings.

The `machine_apply` function uses the `string_to_literal_eval()` function from the `util.py` module to safely convert strings that represent Python objects (such as dictionaries or lists) into actual Python objects. This function is used in particular in the `machine_apply()` method of the `chromium_applier` class, where it is used to convert string values in the `policies_json` dictionary into Python objects.

**Note**:

* The `machine_apply()` function does not take any parameters.
* The function creates the managed and recommended policies paths if they do not exist.
* The function uses the `string_to_literal_eval()` function to safely convert strings that represent Python objects into actual Python objects.
* The function is called by the `apply()` function of the `chromium_applier` class.
* The function logs the destination file path using the `log()` function.
***
### FunctionDef apply(self)
 **apply**: The function of apply is to perform the actual job of the chromium applier by calling the `create_dict` and `machine_apply` functions if the module is enabled.

**parameters**: This function does not take any parameters.

**Code Description**:

The `apply` function first checks if the module is enabled using the `__module_enabled` attribute. If the module is enabled, it logs message 'D95' and then proceeds to call the `create_dict` function with `chromium_keys` as the parameter. The `create_dict` function collects dictionaries from registry keys into a general dictionary.

After creating the dictionary, the `apply` function calls the `machine_apply` function to apply machine settings by creating policies.json files in the managed and recommended policies paths.

If the module is not enabled, the `apply` function logs message 'D96'.

**Relationship with its callers in the project**:

The `apply` function is called by the `ChromiumApplier` class in the `chromium_applier.py` file. It is typically called after the `ChromiumApplier` object has been initialized with the necessary parameters.

The `apply` function calls the `create_dict` and `machine_apply` functions, which are also defined in the `chromium_applier.py` file. The `create_dict` function collects dictionaries from registry keys into a general dictionary, while the `machine_apply` function applies machine settings by creating policies.json files in the managed and recommended policies paths.

**Note**:

* The `apply` function checks if the module is enabled before calling the `create_dict` and `machine_apply` functions.
* The `apply` function logs messages 'D95' and 'D96' to indicate whether the module is enabled or not.
* The `apply` function calls the `create_dict` and `machine_apply` functions to perform the actual job of the chromium applier.
***
### FunctionDef get_valuename_typeint(self)
 **get\_valuename\_typeint**: This function returns a list of keys resulting from parsing chrome.admx with parsing\_chrom\_admx\_intvalues.py.

**Parameters**: This function does not take any parameters.

**Code Description**:
The function initializes a list named `valuename_typeint` and assigns it a list of strings. These strings are the keys resulting from parsing chrome.admx with parsing\_chrom\_admx\_intvalues.py. The list contains keys such as 'DefaultClipboardSetting', 'DefaultCookiesSetting', 'DefaultFileSystemReadGuardSetting', etc.

The function returns the `valuename_typeint` list, which can be used in other parts of the code to check if a key exists in this list or not.

**Relationship with its callers in the project**:
This function is called in the `create_dict` function of the `chromium_applier` object in the `chromium_applier.py` file. The `create_dict` function uses the `valuename_typeint` list to check if the value of a key is in this list or not. If the value is in the list, it is converted to an integer, otherwise, it is converted to a boolean value.

**Note**:
This function always returns the same list of keys, so it can be used to check if a key exists in this list or not.

**Output Example**:
```python
['DefaultClipboardSetting', 'DefaultCookiesSetting', 'DefaultFileSystemReadGuardSetting', 'DefaultFileSystemWriteGuardSetting', 'DefaultGeolocationSetting', 'DefaultImagesSetting', 'DefaultInsecureContentSetting', 'DefaultJavaScriptJitSetting', 'DefaultJavaScriptSetting', 'DefaultLocalFontsSetting', 'DefaultNotificationsSetting', 'DefaultPopupsSetting', 'DefaultSensorsSetting', 'DefaultSerialGuardSetting', 'DefaultThirdPartyStoragePartitioningSetting', 'DefaultWebBluetoothGuardSetting', 'DefaultWebHidGuardSetting', 'DefaultWebUsbGuardSetting', 'DefaultWindowManagementSetting', 'DefaultMediaStreamSetting', 'DefaultWindowPlacementSetting', 'ProxyServerMode', 'ExtensionManifestV2Availability', 'ExtensionUnpublishedAvailability', 'BrowserSwitcherParsingMode', 'CloudAPAuthEnabled', 'AdsSettingForIntrusiveAdsSites', 'AmbientAuthenticationInPrivateModesEnabled', 'BatterySaverModeAvailability', 'BrowserSignin', 'ChromeVariations', 'DeveloperToolsAvailability', 'DownloadRestrictions', 'ForceYouTubeRestrict', 'HeadlessMode', 'IncognitoModeAvailability', 'IntranetRedirectBehavior', 'NetworkPredictionOptions', 'ProfilePickerOnStartupAvailability', 'RelaunchNotification', 'SafeSitesFilterBehavior', 'UserAgentReduction', 'BatterySaverModeAvailability_recommended', 'DownloadRestrictions_recommended', 'NetworkPredictionOptions_recommended', 'PrintPostScriptMode', 'PrintRasterizationMode', 'ChromeFrameRendererSettings', 'DefaultFileHandlingGuardSetting', 'DefaultKeygenSetting', 'DefaultPluginsSetting', 'LegacySameSiteCookieBehaviorEnabled', 'ForceMajorVersionToMinorPositionInUserAgent', 'PasswordProtectionWarningTrigger', 'SafeBrowsingProtectionLevel', 'SafeBrowsingProtectionLevel_recommended', 'RestoreOnStartup', 'RestoreOnStartup_recommended']
```
***
### FunctionDef get_boolean(self, data)
 **get_boolean**

The function of get\_boolean is to determine if the input data represents a boolean value and returns the corresponding boolean value.

**parameters**

· **data**: The input data to be checked for a boolean value.

**Code Description**

The function starts by checking if the input data is one of the following: '0', 'false', None, 'none', 0. If so, it returns False. This covers cases where the input data is explicitly set to a false boolean value or is empty or null.

Next, the function checks if the input data is one of the following: '1', 'true', 1. If so, it returns True. This covers cases where the input data is explicitly set to a true boolean value.

If the input data does not match any of the above cases, the function will return None, indicating that the input data does not represent a boolean value.

The function is called in the `create_dict` method of the `chromium_applier` object in the `chromium_applier.py` module. In this method, the function is used to convert registry key data into a boolean value, which is then added to a nested dictionary. This allows for the creation of a general dictionary that contains data from multiple registry keys.

**Note**

* The function is case-sensitive when checking for the string values 'true' and 'false'.
* The function only checks for the specific string and numeric values '0', 'false', None, 'none', '1', 'true', and 1. Any other input data will not be considered a boolean value.

**Output Example**

Input: 'true'
Output: True

Input: 'False'
Output: False

Input: 0
Output: False

Input: '5'
Output: None
***
### FunctionDef get_parts(self, hivekeyname)
 **get\_parts**: The function of get\_parts is to parse a registry path string and return the key parameters, with the registry branch removed.

**parameters**:
· hivekeyname: A string representing the registry key path.

***
### FunctionDef create_dict(self, chromium_keys)
 **create\_dict**: The function of create\_dict is to collect dictionaries from registry keys into a general dictionary.

**parameters**:
· chromium\_keys: A list of registry keys to be processed.

**Code Description**:
The function initializes an empty dictionary named `counts` to store the collected dictionaries. It then gets the list of keys to read by calling the `get_valuename_typeint` method.

The function then iterates over each item in `chromium_keys`. For each item, it checks if its `data` attribute is of type `bytes`. If it is, it decodes it to a string using the 'utf-16' encoding and removes any null characters.

Next, the function gets the parts of the registry key by calling the `get_parts` method. It then creates a nested dictionary from the parts using a loop.

The function then checks the type of the item's `data` attribute. If it is 4, it checks if the item's `valuename` is in the `valuename_typeint` list. If it is, it converts the `data` attribute to an integer. Otherwise, it converts it to a boolean value by calling the `get_boolean` method.

If the `data` attribute is not of type 4, the function checks if it is a list or not. If it is, it tries to parse it as JSON. If it fails, it replaces any backslashes with forward slashes and stores it as a string. If it is not a list, it replaces any backslashes with forward slashes and stores it as a string.

If an exception occurs during the processing of an item, the function logs the exception and the item's `keyname` attribute.

Finally, the function tries to set the `policies_json` attribute to the value of the `counts` dictionary with an empty key. If this fails, it sets `policies_json` to an empty dictionary.

**Relationship with its callers in the project**:
This function is called in the `apply` method of the `chromium_applier` object in the `chromium_applier.py` file. The `apply` method calls `create_dict` with a list of registry keys to process, and then calls the `machine_apply` method.

The `create_dict` function uses the `get_valuename_typeint`, `get_parts`, and `get_boolean` methods to process the registry keys. It uses the `valuename_typeint` list to check if a key exists in this list or not. If the value is in the list, it is converted to an integer, otherwise, it is converted to a boolean value.

**Note**:
This function always returns the same list of keys, so it can be used to check if a key exists in this list or not.

**Output Example**:
The output of this function is a dictionary with nested dictionaries that contain data from multiple registry keys. The exact output depends on the input `chromium_keys` list.
***
