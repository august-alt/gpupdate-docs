## ClassDef yandex_browser_applier
 **yandex\_browser\_applier**: The `yandex_browser_applier` class is a subclass of `applier_frontend` and is responsible for applying policies to Yandex Browser on a machine.

**attributes**:
· `storage`: An instance of the storage class, which is used to interact with the Windows Registry and other storage mechanisms.
· `sid`: The security identifier (SID) of the user or machine for which policies are being applied.
· `username`: The username for which policies are being applied, if applicable.
· `_is_machine_name`: A boolean indicating whether the `username` is a machine name.
· `yandex_keys`: A list of registry keys related to Yandex Browser.
· `policies_json`: A dictionary containing the policies to be applied to Yandex Browser.

**Code Description**:
The `yandex_browser_applier` class inherits from `applier_frontend` and is responsible for applying policies to Yandex Browser on a machine. In the `__init__()` method, the `storage`, `sid`, and `username` attributes are initialized, and the `_is_machine_name` attribute is set based on the `username`. The `yandex_keys` attribute is also initialized by filtering the registry keys related to Yandex Browser.

The `get_boolean()` method is a helper method that converts a string or integer input to a boolean value. The `get_parts()` method is another helper method that parses a registry path string and leaves only the key parameters.

The `create_dict()` method is responsible for collecting dictionaries from registry keys into a general dictionary. It iterates over the `yandex_keys` and populates the `policies_json` dictionary with the values from the registry.

The `machine_apply()` method applies the policies to the Yandex Browser by writing the `policies_json` dictionary to a JSON file in the managed and recommended policies paths.

The `apply()` method checks whether the module is enabled and calls the `create_dict()` and `machine_apply()` methods if it is.

The `get_valuename_typeint()` method returns a list of keys resulting from parsing chrome.admx with parsing\_chrom\_admx\_intvalues.py.

**Note**:
The `yandex_browser_applier` class is intended to be used as a part of the `gpoa` project and should not be used independently. The `yandex_keys` attribute is expected to be a list of `RegistryKey` objects, as defined in the `storage` class.

**Output Example**:
The `policies_json` dictionary may look like this:
```json
{
    "DefaultPageSaveSettings": 0,
    "DefaultUploadSetting": 1,
    "YandexAutoLaunchMode": {"AutoLaunchMode": 1},
    "DefaultClipboardSetting": {"DefaultClipboardSetting": 1},
    "DefaultFileSystemReadGuardSetting": {"DefaultFileSystemReadGuardSetting": 1},
    "DefaultFileSystemWriteGuardSetting": {"DefaultFileSystemWriteGuardSetting": 1},
    "DefaultImagesSetting": {"DefaultImagesSetting": 1},
    "DefaultJavaScriptJitSetting": {"DefaultJavaScriptJitSetting": 1},
    "DefaultJavaScriptSetting": {"DefaultJavaScriptSetting": 1},
    "DefaultLocalFontsSetting": {"DefaultLocalFontsSetting": 1},
    "DefaultPopupsSetting": {"DefaultPopupsSetting": 1},
    "DefaultSensorsSetting": {"DefaultSensorsSetting": 1},
    "DefaultSerialGuardSetting": {"DefaultSerialGuardSetting": 1},
    "DefaultWebBluetoothGuardSetting": {"DefaultWebBluetoothGuardSetting": 1},
    "DefaultWebHidGuardSetting": {"DefaultWebHidGuardSetting": 1},
    "DefaultWebUsbGuardSetting": {"DefaultWebUsbGuardSetting": 1},
    "DefaultWindowManagementSetting": {"DefaultWindowManagementSetting": 1},
    "SafeSitesFilterBehavior": {"SafeSitesFilterBehavior": 1},
    "YandexUserFeedbackMode": {"YandexUserFeedbackMode": 1},
    "TurboSettings": {"TurboSettings": 1},
    "SidePanelMode": {"SidePanelMode": 1},
    "RestoreOnStartup": {"Restore
### FunctionDef __init__(self, storage, sid, username)
 **__init__**: The function of **__init__** is to initialize the yandex\_browser\_applier object with the required parameters and set up necessary attributes.

**parameters**: The parameters of this Function.
· storage: The storage object that contains the information about the modules.
· sid: The sid of the user.
· username: The username to be checked.

**Code Description**:
The **__init__** function initializes the yandex\_browser\_applier object with the required parameters and sets up necessary attributes. It takes three parameters: storage, sid, and username.

First, it sets the storage, sid, and username attributes of the object to the input parameters. Then, it checks if the username is the machine name by calling the `is_machine_name` function and sets the `_is_machine_name` attribute accordingly.

Next, it filters the HKLM (HKEY\_LOCAL\_MACHINE) entries in the Windows registry based on a given prefix string by calling the `filter_hklm_entries` function and sets the `yandex_keys` attribute to the filtered entries.

It initializes the `policies_json` attribute as an empty dictionary.

Finally, it checks if the module is enabled or not by calling the `check_enabled` function and sets the `__module_enabled` attribute accordingly.

The `__init__` function is called when a new yandex\_browser\_applier object is created. It sets up the necessary attributes required for the object to function properly.

**Note**:
The `is_machine_name` function should only be used to check if the supplied username is the machine name. It is not recommended to modify the function to return a different value.

The `filter_hklm_entries` function is an internal method of the `sqlite_registry` class and should not be used outside of it.

The `check_enabled` function is used to determine whether a module should be applied or not based on its status in the storage. It is called by various module applicators to check if the module they are applying is enabled or not.
***
### FunctionDef machine_apply(self)
 **machine\_apply**: The function of machine\_apply is to apply machine settings by creating a policies.json file in the managed\_policies\_path directory and another policies.json file in the recommended\_policies\_path directory.

**parameters**: This function does not take any parameters.

**Code Description**:

The function first creates a destination file path (destfile) for the policies.json file in the managed\_policies\_path directory. It then tries to pop the 'Recommended' key from the policies\_json dictionary. If the 'Recommended' key does not exist, it creates an empty dictionary for recommended\_json.

The function then defines a lambda function (dict\_item\_to\_list) that converts all nested dictionaries in the target\_dict to a list. This is done by iterating over each key-value pair in the target\_dict. If the value is a dictionary, it is replaced with a list of its values. If the value is not a dictionary, it is converted to a literal using the string\_to\_literal\_eval function.

The function then creates the managed\_policies\_path directory if it does not already exist. It then opens the destfile file in write mode and writes the result of applying the dict\_item\_to\_list function to the policies\_json dictionary.

The function then creates a destination file path (destfilerec) for the policies.json file in the recommended\_policies\_path directory. It then opens the destfilerec file in write mode and writes the result of applying the dict\_item\_to\_list function to the recommended\_json dictionary.

Finally, the function logs the destfile and destfilerec file paths using the log function.

**Note**:

* The function assumes that the managed\_policies\_path and recommended\_policies\_path directories have already been created.
* The function modifies the policies\_json dictionary by removing the 'Recommended' key.
* The function uses the string\_to\_literal\_eval function to convert string values in the policies\_json and recommended\_json dictionaries to Python objects.
* The function calls the log function to log the destfile and destfilerec file paths.

The function is called by the apply function in the yandex\_browser\_applier class. The apply function checks if the module is enabled before calling the machine\_apply function. If the module is enabled, it creates a dictionary using the create\_dict function and then calls the machine\_apply function to apply the machine settings. If the module is not enabled, it logs a message indicating that the module is disabled.
***
### FunctionDef apply(self)
 **apply**: The function of apply is to apply the necessary configurations to the Yandex browser based on the state of the module enabled or disabled.

**parameters**: This Function does not take any parameters.

**Code Description**:

The `apply` function first checks if the module is enabled by checking the value of `self.__module_enabled`. If the module is enabled, it logs message code 'D183' using the `log` function. It then calls the `create_dict` function with the `yandex_keys` parameter to create a dictionary of policies. This dictionary is then passed to the `machine_apply` function to apply the machine settings.

If the module is not enabled, it logs message code 'D184' using the `log` function.

The `create_dict` function is responsible for collecting dictionaries from registry keys into a general dictionary. It creates a nested dictionary structure from the registry keys and their corresponding values. This function is tightly coupled with the `get_valuename_typeint` method and the `get_boolean` method of the same class. It assumes that these methods have already been executed and the `valuename_typeint` list and the `get_boolean` method are available.

The `machine_apply` function applies machine settings by creating a `policies.json` file in the `managed_policies_path` directory and another `policies.json` file in the `recommended_policies_path` directory. It assumes that the `managed_policies_path` and `recommended_policies_path` directories have already been created.

The `log` function is used to log messages and exceptions. It takes a message code and an optional data dictionary as parameters.

**Note**:

* The `apply` function does not take any parameters.
* The `apply` function calls the `create_dict` function to create a dictionary of policies and the `machine_apply` function to apply the machine settings if the module is enabled.
* The `apply` function logs messages and exceptions using the `log` function.
* The `create_dict` function creates a nested dictionary structure from the registry keys and their corresponding values. It assumes that the `get_valuename_typeint` method and the `get_boolean` method of the same class have already been executed.
* The `machine_apply` function applies machine settings by creating a `policies.json` file in the `managed_policies_path` directory and another `policies.json` file in the `recommended_policies_path` directory. It assumes that the `managed_policies_path` and `recommended_policies_path` directories have already been created.
* The `log` function is used to log messages and exceptions. It takes a message code and an optional data dictionary as parameters.
***
### FunctionDef get_valuename_typeint(self)
 **get\_valuename\_typeint**: This function returns a list of value names that are obtained by parsing the `chrome.admx` file using the `parsing_chrom_admx_intvalues.py` script.

**Parameters**: This function does not take any parameters.

**Code Description**: The function initializes a list `valuename_typeint` with a set of predefined value names. These value names are related to various settings and configurations in the Yandex browser. The function then returns this list.

The function `get_valuename_typeint` is called in the `create_dict` method of the same class, which is used to collect dictionaries from registry keys into a general dictionary. In this method, the `valuename_typeint` list is used to determine whether a given value name corresponds to an integer value or not. If the value name is in the `valuename_typeint` list, the corresponding data value is converted to an integer. Otherwise, the data value is kept as it is.

**Note**: The `get_valuename_typeint` function is tightly coupled with the `parsing_chrom_admx_intvalues.py` script and the `create_dict` method of the same class. It assumes that the `parsing_chrom_admx_intvalues.py` script has already been executed and the `valuename_typeint` list is used to determine the type of data values in the registry keys.

**Output Example**:
```python
['DefaultPageSaveSettings', 'DefaultUploadSetting', 'YandexAutoLaunchMode', 'DefaultClipboardSetting', 'DefaultFileSystemReadGuardSetting', 'DefaultFileSystemWriteGuardSetting', 'DefaultImagesSetting', 'DefaultJavaScriptJitSetting', 'DefaultJavaScriptSetting', 'DefaultLocalFontsSetting', 'DefaultPopupsSetting', 'DefaultSensorsSetting', 'DefaultSerialGuardSetting', 'DefaultWebBluetoothGuardSetting', 'DefaultWebHidGuardSetting', 'DefaultWebUsbGuardSetting', 'DefaultWindowManagementSetting', 'SafeSitesFilterBehavior', 'YandexUserFeedbackMode', 'TurboSettings', 'SidePanelMode', 'RestoreOnStartup', 'RestoreOnStartup_recommended', 'BrowserSwitcherParsingMode', 'DefaultNotificationsSetting', 'YandexPowerSavingMode', 'ChromeVariations', 'DeveloperToolsAvailability', 'DownloadRestrictions', 'DownloadRestrictions_recommended', 'NetworkPredictionOptions', 'NetworkPredictionOptions_recommended', 'DefaultCookiesSetting', 'DefaultGeolocationSetting', 'IncognitoModeAvailability', 'DefaultPrintingSettings', 'DefaultPluginsSetting', 'DefaultInsecureContentSetting', 'PasswordProtectionWarningTrigger', 'SafeBrowsingProtectionLevel', 'SafeBrowsingProtectionLevel_recommended', 'DiskCacheSize']
```
***
### FunctionDef get_boolean(self, data)
 **get_boolean**

The function of get\_boolean is to determine if the input data represents a boolean value and returns the corresponding boolean result.

**Parameters**

· **data**: The input data to be checked for a boolean value.

**Code Description**

The function begins by checking if the input data is any of the following: '0', 'false', None, 'none', or 0. If the data matches any of these values, the function returns False. This is because these values are commonly used to represent a boolean false.

Next, the function checks if the input data is any of the following: '1', 'true', or 1. If the data matches any of these values, the function returns True. This is because these values are commonly used to represent a boolean true.

If the input data does not match any of the above values, the function will return None, indicating that the data is not a recognized boolean value.

The function is called in the `create_dict` method of the `yandex_browser_applier` object. In this method, the `get_boolean` function is used to initialize the value of a key in a nested dictionary. If the key's value is of type 4 (a 32-bit number), and the key's name is in the `valuename_typeint` dictionary, the `get_boolean` function is called to convert the value to a boolean. This allows for more straightforward handling of boolean values in the rest of the program.

**Note**

· The function only recognizes the specific string values '0', 'false', '1', and 'true' as boolean values. Other string representations of boolean values, such as 'True' or 'False', will not be recognized.
· The function does not handle any error cases. If the input data is not a boolean value, the function will return None.

**Output Example**

get\_boolean('0')
> False

get\_boolean('true')
> True

get\_boolean('maybe')
> None
***
### FunctionDef get_parts(self, hivekeyname)
 **get\_parts**: The function of get\_parts is to parse a registry path string and return the key parameters, with the registry branch removed and the string split at each backslash (\).

**parameters**:
· hivekeyname: A string representing the registry key path.

**Code Description**:
The function `get_parts` takes one parameter, `hivekeyname`, which is a string representing the registry key path. It first removes the registry branch from the input string using the `replace` method, and then splits the resulting string into a list of parts using the `split` method with the backslash character as the separator. The list of parts is returned as the function's result.

This function is used in the `create_dict` method of the same class to parse the registry key path of each data item and create a nested dictionary from the parts of the key path. The `get_parts` function is called in a loop, and for each iteration, it processes one data item and creates a nested dictionary entry for it.

**Note**:

* The `hivekeyname` parameter should be a string representing a valid registry key path.
* The function assumes that the `__registry_branch` attribute of the class instance is set to a valid registry branch string.

**Output Example**:
Given the following input:
```python
hivekeyname = 'HKEY_LOCAL_MACHINE\Software\Policies\Yandex\YandexBrowser'
```
The function will return the following list of parts:
```python
['Software', 'Policies', 'Yandex', 'YandexBrowser']
```
This list of parts can then be used to create a nested dictionary entry for the data item.
***
### FunctionDef create_dict(self, yandex_keys)
 **create\_dict**: The function of create\_dict is to collect dictionaries from registry keys into a general dictionary. This function is responsible for creating a nested dictionary structure from the registry keys and their corresponding values. It is called in the `apply` method of the `yandex_browser_applier` object to process the registry keys and create a dictionary that can be used to configure the Yandex browser.

**Parameters**:
· `yandex_keys`: A list of registry keys to be processed.

**Code Description**:
The function `create_dict` begins by initializing an empty dictionary `counts` to store the processed registry keys. It then calls the `get_valuename_typeint` method to get a list of value names that are obtained by parsing the `chrome.admx` file. This list is used to determine whether a given value name corresponds to an integer value or not.

The function then loops through the `yandex_keys` list and processes each registry key. For each key, it initializes a `branch` variable to the `counts` dictionary. It then checks if the data of the key is of type `bytes`. If it is, it decodes the data to a string using the `decode` method with the `utf-16` encoding and removes any null characters using the `replace` method.

Next, the function calls the `get_parts` method to parse the registry key path string and return the key parameters, with the registry branch removed and the string split at each backslash (`\`). It then loops through the parts of the key path and creates a nested dictionary structure using the `setdefault` method.

After creating the nested dictionary structure, the function initializes the dictionary key value based on the type of the key's data. If the key's type is 4 (a 32-bit number), and the key's name is in the `valuename_typeint` dictionary, the function calls the `get_boolean` method to convert the value to a boolean. If the key's data is a JSON string, the function parses the JSON string using the `json.loads` method. Otherwise, the function converts the key's data to a string and replaces any backslashes with forward slashes.

If any exception occurs during the processing of a registry key, the function logs the exception using the `log` method and continues processing the next key.

At the end of the function, the `policies_json` attribute of the `yandex_browser_applier` object is set to the `counts` dictionary with an empty key.

This function is tightly coupled with the `get_valuename_typeint` method and the `get_boolean` method of the same class. It assumes that the `get_valuename_typeint` method has already been executed and the `valuename_typeint` list is used to determine the type of data values in the registry keys.

**Note**:

* The `yandex_keys` parameter should be a list of valid registry keys.
* The function assumes that the `get_valuename_typeint` method of the same class has already been executed and the `valuename_typeint` list is available.
* The function assumes that the `get_boolean` method of the same class is available to convert boolean values.
* The function handles any exceptions that may occur during the processing of registry keys by logging the exception and continuing with the next key.
* The function does not return any value, but sets the `policies_json` attribute of the `yandex_browser_applier` object to the processed registry keys.

**Relation with other parts of the project**:
The `create_dict` method is called in the `apply` method of the `yandex_browser_applier` object to process the registry keys and create a dictionary that can be used to configure the Yandex browser. The `get_valuename_typeint` method and the `get_boolean` method of the same class are used to determine the type of data values in the registry keys. The `log` method of the `logging` module is used to log any exceptions that may occur during the processing of registry keys.
***
