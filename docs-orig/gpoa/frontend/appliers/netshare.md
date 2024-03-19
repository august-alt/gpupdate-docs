## ClassDef Networkshare
 **Networkshare**: The function of Networkshare is to manage network shares using the 'net' command in a Linux system.

**attributes**:
· `networkshare_obj`: An object containing information about the network share, such as name, path, action, etc.
· `username`: The username to be used for managing the network share. Defaults to None.

**Code Description**:
The `Networkshare` class is initialized with a `networkshare_obj` and an optional `username`. It sets up the necessary command lists for checking and managing network shares. The `net_full_cmd` attribute is used to create, update, delete, or replace network shares, while the `net_cmd_check` attribute is used to check the current list of network shares.

The `check_list_net` method checks the current list of network shares and returns the result as a string. It uses the `subprocess.check_output` method to execute the `net_cmd_check` command.

The `_run_net_full_cmd` method is used to execute the `net_full_cmd` command and log the result. It uses the `subprocess.check_output` method to execute the command and logs the result using the `log` function.

The `_create_action`, `_delete_action`, and `_replace_action` methods are used to perform specific actions on the network share. The `_create_action` method is used to create a new network share, the `_delete_action` method is used to delete an existing network share, and the `_replace_action` method is used to replace an existing network share.

The `act` method is used to perform the specified action on the network share. It checks the value of the `action` attribute and calls the appropriate method.

**Note**:
- The `Networkshare` class is designed to work with network shares in a Linux system and requires the 'net' command to be installed.
- The `username` attribute defaults to None, which means that the current user will be used to manage the network shares.

**Output Example**:
The `check_list_net` method may return a string similar to the following:
```
Network User Shares:

Usershares:

Name       Type   Comment    Owner      Group      Access     Max Access   Timeout   
### FunctionDef __init__(self, networkshare_obj, username)
 **__init__**: The function of **__init__** is to initialize the Networkshare object with the necessary attributes for creating or deleting a network share.

**parameters**:
· networkshare\_obj: An object containing the necessary attributes for creating or deleting a network share.
· username (optional): The username for which to retrieve the desktop directory. If not provided, the function will use the current user's username. Defaults to None.

**Code Description**:
The **__init__** function initializes the Networkshare object with the following attributes:

- **net\_full\_cmd**: A list containing the full command for executing the network share command.
- **net\_cmd\_check**: A list containing the command for checking if a network share already exists.
- **cmd**: An empty list for storing command arguments.
- **name**: The name of the network share, obtained from the `networkshare_obj.name` attribute.
- **path**: The path of the network share, obtained from the `networkshare_obj.path` attribute and expanded using the `expand_windows_var` function.
- **action**: The action to be taken on the network share, obtained from the `networkshare_obj.action` attribute and converted to the corresponding enumeration value using the `action_letter2enum` function.
- **allRegular**: The value of the `allRegular` attribute from the `networkshare_obj` object.
- **comment**: The value of the `comment` attribute from the `networkshare_obj` object.
- **limitUsers**: The value of the `limitUsers` attribute from the `networkshare_obj` object.
- **abe**: The value of the `abe` attribute from the `networkshare_obj` object.
- **_guest**: A string containing the `guest_ok` parameter for the network share command.
- **acl**: A string containing the `acl` parameter for the network share command.

After initializing these attributes, the **act** method is called to perform the appropriate network share action based on the value of the `self.action` attribute.

**Relation with other parts of the project**:
The **__init__** function initializes the Networkshare object with attributes obtained from the `networkshare_obj` object, which is likely created elsewhere in the project. The `expand_windows_var` function is called to expand the `path` attribute, which is defined in the `util/windows.py` module. The `action_letter2enum` function is called to convert the `action` attribute to the corresponding enumeration value, which is defined in the `gpt/folders.py` module.

**Note**:
- The `networkshare_obj` object should contain the necessary attributes for creating or deleting a network share.
- The `username` parameter is optional and will default to the current user's username if not provided.
- The `act` method is called at the end of the **__init__** function to perform the appropriate network share action based on the value of the `self.action` attribute.
- The `expand_windows_var` and `action_letter2enum` functions are called to expand the `path` attribute and convert the `action` attribute to the corresponding enumeration value, respectively.
- The `net_full_cmd` and `net_cmd_check` attributes are initialized with the full command and check command for executing the network share command, respectively.
- The `cmd`, `allRegular`, `comment`, `limitUsers`, and `abe` attributes are initialized with the values obtained from the `networkshare_obj` object.
- The `_guest` attribute is initialized with the `guest_ok` parameter for the network share command.
- The `acl` attribute is initialized with the `acl` parameter for the network share command.
***
### FunctionDef check_list_net(self)
 **check\_list\_net**: The function of check\_list\_net is to execute a specified command related to network share and return the output.

**parameters**: This function does not take any parameters.

**Code Description**:

The function check\_list\_net is a method of the Networkshare class, which is defined in the netshare.py module. It does not take any parameters.

The function uses the subprocess module to execute a command stored in the net\_cmd\_check attribute of the Networkshare class. The subprocess.check\_output() function is used to execute the command and capture its output as a string. The encoding parameter is set to 'utf-8' to ensure that the output is returned as a Unicode string.

If the command execution is successful, the function returns the output as a string. If the command execution fails, the function catches the exception and returns the exception object as a string.

**Note**:

* The function relies on the net\_cmd\_check attribute of the Networkshare class to be set to a valid command.
* The function does not handle any specific exceptions, so any exception raised during command execution will be caught and returned as a string.
* The function returns the output of the command as a string, so the caller should handle any necessary parsing or processing of the output.

**Output Example**:

A possible output of the function could be:

```
Sharename Type Comment ------------------ --------- ------- The Servers Share \\Server1\Users Disk (Special share) The Servers Share \\Server1\IPC$ IPC (Special share)
```

This output would indicate that the function executed the command successfully and returned the list of network shares on the server.
***
### FunctionDef _run_net_full_cmd(self)
 **_run_net_full_cmd**: This function is responsible for executing the network share command with the specified parameters and handling the response.

**parameters**:
- None, this function does not take any parameters.

**Code Description**:
The function begins by initializing an empty dictionary `logdata` which will be used to store the command and its response or exception for logging purposes.

Next, it attempts to execute the network share command stored in the `self.net_full_cmd` list using the `subprocess.check_output()` method. The `stderr` argument is set to `subprocess.DEVNULL` to redirect the standard error stream to null, and the `encoding` argument is set to `'utf-8'` to ensure that the output is decoded as a string in UTF-8 encoding.

If the command execution is successful and there is any output, the command and its output are stored in the `logdata` dictionary and logged using the `log()` function with the log code 'D190'.

If the command execution fails and raises an exception, the command and the exception are stored in the `logdata` dictionary and logged using the `log()` function with the log code 'D182'.

**Note**:
- The `self.net_full_cmd` list should be populated with the appropriate network share command and its parameters before calling this function.
- This function does not return any value, instead it logs the command response or exception for further analysis.
- The `log()` function should be implemented elsewhere in the code to actually write the log messages to a file or console.

This function is called by the `_create_action()` and `_delete_action()` methods of the `Networkshare` class to execute the network share command with the appropriate parameters and log the response or exception. By separating the command execution and response handling into a separate function, the `_create_action()` and `_delete_action()` methods can focus on constructing the command and interpreting the response, while the `_run_net_full_cmd()` function handles the low-level details of command execution and error handling.
***
### FunctionDef _create_action(self)
 **`_create_action`**: The function of `_create_action` is to populate the `self.net_full_cmd` list with the appropriate network share command and its parameters for creating a new network share.

**parameters**: This function does not take any parameters.

**Code Description**:
The function `_create_action` is a method of the `Networkshare` class, and it is responsible for adding the necessary command arguments to the `self.net_full_cmd` list to create a new network share.

The function starts by appending the following command arguments to the `self.net_full_cmd` list:
- 'add'
- `self.name`: the name of the network share
- `self.path`: the path of the network share
- `self.comment`: a comment for the network share
- `self.acl + 'F'`: the Access Control List (ACL) for the network share with the 'F' flag indicating full control
- `self._guest`: the guest account settings for the network share

After populating the `self.net_full_cmd` list, the function calls the `_run_net_full_cmd` method to execute the network share command with the specified parameters and handle the response.

The `_create_action` method is called by the `act` method of the `Networkshare` class, which determines the action to be taken based on the value of the `self.action` attribute. If the action is `FileAction.CREATE`, `FileAction.UPDATE`, `FileAction.REPLACE`, or `FileAction.DELETE`, the `_create_action` method is called to create or delete the network share.

**Note**:
- The `self.name`, `self.path`, `self.comment`, `self.acl`, and `self._guest` attributes should be properly initialized before calling this function.
- This function does not return any value, instead it calls the `_run_net_full_cmd` method to execute the network share command and handle the response.
- The `_run_net_full_cmd` method should be implemented elsewhere in the code to actually execute the network share command and handle the response.
- The `act` method is responsible for determining the action to be taken based on the value of the `self.action` attribute, and it calls the appropriate method (`_create_action`, `_delete_action`) to create or delete the network share.
***
### FunctionDef _delete_action(self)
 **`_delete_action`**: The function of `_delete_action` is to delete a network share by appending the appropriate command to the `net_full_cmd` list and then executing it using the `_run_net_full_cmd()` function.

**parameters**: This function does not take any parameters.

**Code Description**:
The function begins by appending the 'delete' command followed by the name of the network share to the `net_full_cmd` list. This list is an instance variable that should have been populated with the appropriate network share command and its parameters before calling this function.

Next, the function calls the `_run_net_full_cmd()` function to execute the network share command stored in the `net_full_cmd` list and handle the response.

The `_run_net_full_cmd()` function logs the command response or exception for further analysis. It initializes an empty dictionary `logdata` which will be used to store the command and its response or exception for logging purposes. It then attempts to execute the network share command stored in the `self.net_full_cmd` list using the `subprocess.check_output()` method. If the command execution is successful and there is any output, the command and its output are stored in the `logdata` dictionary and logged using the `log()` function with the log code 'D190'. If the command execution fails and raises an exception, the command and the exception are stored in the `logdata` dictionary and logged using the `log()` function with the log code 'D182'.

The `log()` function should be implemented elsewhere in the code to actually write the log messages to a file or console.

This function is called by the `act()` method of the `Networkshare` class to execute the network share command with the appropriate parameters and log the response or exception.

**Note**:
- The `self.net_full_cmd` list should be populated with the appropriate network share command and its parameters before calling this function.
- This function does not return any value, instead it logs the command response or exception for further analysis.
- The `log()` function should be implemented elsewhere in the code to actually write the log messages to a file or console.
- The `_run_net_full_cmd()` function is responsible for executing the network share command with the specified parameters and handling the response.
- The `act()` method of the `Networkshare` class is responsible for calling the appropriate action method based on the value of the `action` attribute.
***
### FunctionDef act(self)
 **act**: The function of act is to perform the appropriate network share action based on the value of the `self.action` attribute.

**parameters**: This function does not take any parameters.

**Code Description**:
The act function is a method of the Networkshare class, and it is responsible for determining the action to be taken based on the value of the `self.action` attribute. It checks the value of `self.action` and calls the corresponding method to create (`_create_action`), delete (`_delete_action`), or do nothing (if `self.action` is not one of the supported values).

The function starts by checking if `self.action` is equal to one of the supported values (CREATE, UPDATE, DELETE, or REPLACE). If `self.action` is CREATE, UPDATE, or REPLACE, the function calls the `_create_action` method to create or update the network share. If `self.action` is DELETE, the function calls the `_delete_action` method to delete the network share. If `self.action` is not one of the supported values, the function does nothing.

The `_create_action` and `_delete_action` methods are responsible for adding the necessary command arguments to the `self.net_full_cmd` list to create or delete a network share, and for calling the `_run_net_full_cmd` method to execute the network share command with the specified parameters and handle the response.

The `act` function is called by the `__init__` method of the `Networkshare` class, which initializes the `self.action` attribute based on the value of the `networkshare_obj.action` attribute.

**Note**:
- The `self.action`, `self.name`, `self.path`, `self.comment`, `self.acl`, and `self._guest` attributes should be properly initialized before calling this function.
- This function does not return any value, instead it calls the appropriate method (`_create_action`, `_delete_action`) to create or delete the network share.
- The `_create_action` and `_delete_action` methods are responsible for adding the necessary command arguments to the `self.net_full_cmd` list and for calling the `_run_net_full_cmd` method to execute the network share command and handle the response.
- The `__init__` method of the `Networkshare` class is responsible for initializing the `self.action` attribute based on the value of the `networkshare_obj.action` attribute, and for calling the `act` method to perform the appropriate network share action.
***
