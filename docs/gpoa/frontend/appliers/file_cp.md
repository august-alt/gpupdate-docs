## ClassDef Files_cp
 **Files\_cp**: The function of Files\_cp is to copy, update, delete, or replace files based on the provided parameters.

**attributes**:
· file\_obj: An object containing file-related information such as target path, source path, and action to be performed.
· file\_cache: An object used for caching files.
· exe\_check: An object used for checking executable files.
· username (optional): The username to be used for file ownership change.

**Code Description**:
The `__init__` method initializes the class with the given parameters and sets the target path, source path, and other attributes based on the file object. It also checks if the target path exists and is a directory. If it is, the `get_list_files` method is called to get a list of files from the source path. The `act` method is then called to perform the required action (create, update, delete, or replace) on the files.

The `get_target_file` method returns the target file path based on the source file name and the target path. It also creates the necessary directories if they do not exist.

The `copy_target_file` method copies the source file to the target file path. If the source file is a UNC path, it is stored in the cache. Otherwise, it is copied directly.

The `set_exe_file` method checks if the source file is an executable file and if the target path allows executable files. If both conditions are true, the file permissions are set accordingly.

The `set_mod_file` method sets the file permissions based on the read-only attribute and the executable attribute.

The `_create_action` method creates new files in the target path based on the source files. If the source file is a pattern, all matching files are created.

The `_delete_action` method deletes files from the target path based on the provided pattern.

The `_update_action` method updates existing files in the target path based on the source files.

The `act` method calls the appropriate action method based on the action attribute of the file object.

The `is_pattern` method checks if the provided name is a pattern (contains '*' or '?').

The `get_list_files` method gets a list of files from the source path based on the provided pattern.

**Note**:
· The `Files_cp` class should be used in conjunction with the `file_applier` class, which provides the necessary file objects for the `Files_cp` class to perform actions on.
· The `username` parameter is optional and should only be used if file ownership change is required.

**Output Example**:
For a file object with the following attributes:
```python
file_obj = {
    'targetPath': 'C:/Users/User/Documents/target',
    'fromPath': 'C:/Users/User/Documents/source',
    'action': 'CREATE',
    'readOnly': False,
    'archive': False,
    'hidden': False,
    'suppress': False,
    'executable': True
}
```
The `Files_cp` class will create new files in the target path based on the source files, setting the necessary permissions and ownership.
### FunctionDef __init__(self, file_obj, file_cache, exe_check, username)
 **__init__**: The function of **__init__** is to initialize the `Files_cp` class and set the attributes required for file operations.

**parameters**:
· `file_obj`: An instance of the `File` class containing information about the file to be copied or updated.
· `file_cache`: An instance of the `FileCache` class used for caching file metadata.
· `exe_check`: A boolean value indicating whether to check for executable files.
· `username`: A string representing the username for which to retrieve the home directory. Defaults to None.

**Code Description**:
The `__init__` function initializes the `Files_cp` class and sets the attributes required for file operations. It first sets the `file_cache` and `exe_check` attributes using the input parameters. Then, it expands the `targetPath` and `fromPath` parameters of the `file_obj` object using the `expand_windows_var` function from the `util` module. It checks the target path using the `check_target_path` function from the same module and sets the `targetPath` attribute accordingly. If the target path is not set, it returns without performing any further operations.

Next, it sets the `fromPath` attribute based on the value of the `fromPath` parameter of the `file_obj` object. If the `fromPath` parameter is not set, it sets the `fromPath` attribute to None. It also sets the `isTargetPathDirectory` attribute based on whether the target path ends with a directory separator or the name of the `fromPath` parameter is a pattern.

It then sets the `action`, `readOnly`, `archive`, `hidden`, `suppress`, and `executable` attributes based on the corresponding properties of the `file_obj` object using the `action_letter2enum` and `str2bool` functions from the `folders` and `folder` modules, respectively.

If the `fromPath` attribute is set, it checks whether the target path is a directory or a pattern. If the target path is a directory, it calls the `get_list_files` function to generate a list of files from the source path that match the criteria specified in the `fromPath` attribute. If the target path is a pattern, it sets the `isTargetPathDirectory` attribute to True.

Finally, it calls the `act` function to perform the corresponding action on the files based on the value of the `action` attribute.

**Note**:
- The `__init__` function relies on the `expand_windows_var`, `check_target_path`, `action_letter2enum`, and `str2bool` functions to perform the required operations.
- The `__init__` function initializes the `Files_cp` class and sets the attributes required for file operations. It does not perform any actual file operations.
- The `__init__` function logs the relevant information when encountering exceptions. It relies on the `log` method to log the information.

**Output Example**:
```python
Files_cp(file_obj, file_cache, exe_check, username='user')
# creates an instance of the Files_cp class with the required attributes
```
This is an example of the output that this function may return, given the required input parameters. The actual output will vary depending on the specific input parameters.
***
### FunctionDef get_target_file(self, targetPath, fromFile)
 **get\_target\_file**: The function of get\_target\_file is to determine and return the target file path for copying or updating a file based on the provided target path and the name of the file to be copied or updated.

**parameters**:
· targetPath: The target directory path where the file will be copied or updated.
· fromFile: The name of the file to be copied or updated.

**Code Description**:
The function first checks if the `fromFile` parameter is provided. If it is, the function creates a `Path` object for the `fromFile` and gets its name. Then, it checks if the target path is a directory or a file. If it is a directory, the function creates the target directory (if it does not already exist) using `targetPath.mkdir()`. If the target path is a file, the function creates the parent directory of the target path (if it does not already exist) using `targetPath.parent.mkdir()`. In this case, the function also sets the `fromFileName` to the name of the target path, as the file name will be used from the target path instead of the `fromFile` parameter.

Next, the function checks if the object's `hidden` attribute is set to `True`. If it is, the function returns the target path with a prepended dot (`.`), effectively hiding the file in Unix-like systems. If the `hidden` attribute is `False`, the function returns the target path with the `fromFileName` appended.

If the `fromFile` parameter is not provided, the function checks the `hidden` attribute. If the `hidden` attribute is `False`, the function returns the `targetPath`. If the `hidden` attribute is `True`, the function returns the parent directory of the `targetPath` with a prepended dot and the name of the `targetPath`.

The function is called in `_create_action` and `_update_action` methods of the `Files_cp` class. In `_create_action`, the function is called for each file in the `fromPathFiles` list. If the target file does not exist, the file is copied to the target path, and metadata is updated. In `_update_action`, the function is called for each file in the `fromPathFiles` list, and the file is updated in the target path, and metadata is updated.

**Note**:
Be cautious when using the `hidden` attribute. Hiding files may not be desirable in all situations, and it can make it difficult to find and manage files.

**Output Example**:
For `get_target_file(Path('/path/to/target'), 'file.txt')`, if the `hidden` attribute is `False`, the output will be `PosixPath('/path/to/target/file.txt')`. If the `hidden` attribute is `True`, the output will be `PosixPath('/path/to/target/./file.txt')`. If `fromFile` is not provided and the `hidden` attribute is `False`, the output will be `PosixPath('/path/to/target')`. If `fromFile` is not provided and the `hidden` attribute is `True`, the output will be `PosixPath('/path/to/./target')`.
***
### FunctionDef copy_target_file(self, targetFile, fromFile)
 **copy\_target\_file**: The function of copy\_target\_file is to copy a file from a source path to a target path.

**parameters**:
· targetFile: A Path object representing the target file.
· fromFile: A string representing the source file.

**Code Description**:
The copy\_target\_file function first tries to create a UNCPath object with the fromFile parameter. If the fromFile is not a UNC path, it raises a NotUNCPathError. If the fromFile is a UNC path, it stores the file in the file\_cache using the store method. If the fromFile is not a UNC path, it reads the contents of the file using the read\_bytes method and writes the contents to the targetFile using the write\_bytes method.

If any other exception occurs during the execution of the function, it logs the exception using the log method and sets the logdata dictionary with the targetFile, fromFile, and exc parameters.

The copy\_target\_file function is called by the _create\_action and _update\_action methods of the Files\_cp class. The _create\_action method uses the copy\_target\_file function to copy a file from the source path to the target path if the target file does not exist. The _update\_action method uses the copy\_target\_file function to copy a file from the source path to the target path regardless of whether the target file exists or not.

In both cases, the copy\_target\_file function is used to ensure that the contents of the source file are copied to the target file. The function handles the case where the source file is a UNC path and stores it in the file\_cache, and it also handles the case where the source file is not a UNC path and reads its contents and writes it to the target file.

It is important to note that the copy\_target\_file function assumes that the targetFile parameter is a valid Path object and that the fromFile parameter is either a UNC path or a local file path. If the targetFile or fromFile parameters are not valid, the function may raise an exception.

**Note**:

* Ensure that the targetFile parameter is a valid Path object and that the fromFile parameter is either a UNC path or a local file path.
* The copy\_target\_file function is called by the _create\_action and _update\_action methods of the Files\_cp class. Make sure to handle any exceptions that may be raised by the function.
* If the fromFile parameter is a UNC path, it is stored in the file\_cache using the store method. Make sure that the file\_cache is properly configured and initialized before calling the copy\_target\_file function.
***
### FunctionDef set_exe_file(self, targetFile, fromFile)
 **set\_exe\_file**: The function of set\_exe\_file is to check if the file being copied has an executable file extension and if the target file's parent directory is in the list of file paths.

**parameters**:
· targetFile: The target file object that the file is being copied to.
· fromFile: The file object that is being copied.

**Code Description**:
The function `set_exe_file` first checks if the `executable` attribute of the object is `True`. If it is, then the function returns `True`.

Next, the function checks if the file extension of `fromFile` is present in the list of markers returned by the `get_list_markers` function. If it is, then the function sets `targetPath` to the parent of `targetFile`. It then iterates over the list of file paths returned by the `get_list_paths` function. If `targetPath` is found in this list, then the function returns `True`.

If none of the above conditions are met, then the function returns `False`.

From a functional perspective, this method plays a crucial role in the project's file management system. It provides a way to check if the file being copied has an executable file extension and if the target file's parent directory is in the list of file paths. This information is used in other parts of the project, such as in the `set_mod_file` method of the `Files_cp` object.

The `set_exe_file` method calls the `get_list_markers` and `get_list_paths` functions to retrieve the list of markers and file paths, respectively. It assumes that these functions have been properly implemented and return the expected values.

**Note**:
It is important to ensure that the `list_markers` and `list_paths` attributes are properly initialized and maintained. If the `list_markers` attribute does not contain the correct file extensions or the `list_paths` attribute is empty, then the `set_exe_file` method may not function correctly.

**Output Example**:
The output of the `set_exe_file` method is a boolean value. It will return `True` if the file being copied has an executable file extension and if the target file's parent directory is in the list of file paths. Otherwise, it will return `False`.

Example:
```python
set_exe_file(targetFile="/path/to/target", fromFile="/path/to/source")
# Returns True if the conditions are met, otherwise False
```
***
### FunctionDef set_mod_file(self, targetFile, fromFile)
 **set\_mod\_file**: The function of `set_mod_file` is to modify the file permissions of the target file based on the `readOnly` attribute of the object and whether the `set_exe_file` method returns `True`.

**parameters**:
· targetFile: The target file object that the file is being copied to.
· fromFile: The file object that is being copied.

**Code Description**:
The function `set_mod_file` first calls the `set_exe_file` method with the `targetFile` and `fromFile` as parameters. If `set_exe_file` returns `True`, then the function checks the `readOnly` attribute of the object. If `readOnly` is `True`, then the function sets the permissions of `targetFile` to `0o555` using `shutil.os.chmod`. If `readOnly` is `False`, then the function sets the permissions of `targetFile` to `0o755` using `shutil.os.chmod`.

If `set_exe_file` returns `False`, then the function checks the `readOnly` attribute of the object again. If `readOnly` is `True`, then the function sets the permissions of `targetFile` to `0o444` using `shutil.os.chmod`. If `readOnly` is `False`, then the function sets the permissions of `targetFile` to `0o644` using `shutil.os.chmod`.

From a functional perspective, this method plays a crucial role in the project's file management system. It provides a way to modify the file permissions of the target file based on the `readOnly` attribute of the object and whether the `set_exe_file` method returns `True`. This information is used in other parts of the project, such as in the `_create_action` and `_update_action` methods of the `Files_cp` object.

The `set_mod_file` method calls the `set_exe_file` method to retrieve whether the file being copied has an executable file extension and if the target file's parent directory is in the list of file paths. It assumes that the `set_exe_file` method has been properly implemented and returns the expected value.

**Note**:
It is important to ensure that the `set_exe_file` method is implemented and functioning correctly, as the `set_mod_file` method relies on its output. If the `set_exe_file` method does not function correctly, then the `set_mod_file` method may not modify the file permissions as expected.

**Output Example**:
The output of the `set_mod_file` method is `None`. However, it modifies the file permissions of the `targetFile` based on the `readOnly` attribute of the object and whether the `set_exe_file` method returns `True`.

Example:
```python
set_mod_file(targetFile="/path/to/target", fromFile="/path/to/source")
# Modifies the file permissions of the targetFile based on the readOnly attribute of the object and whether the set_exe_file method returns True
```
***
### FunctionDef _create_action(self)
 **`_create_action`**: The function of `_create_action` is to create a copy of a file from a source path to a target path, modify the file permissions of the target file based on the object's `readOnly` attribute, and log the action.

**parameters**:
· `self`: The instance of the `Files_cp` class.

***
### FunctionDef _delete_action(self)
 **`_delete_action`**: The function of `_delete_action` is to delete files based on a given target path.

**parameters**:
- None: This function does not take any parameters.

**Code Description**:
The function first initializes a list `list_target` with the name of the target path. If the target path matches a certain pattern and the parent directory exists, the function searches for all files in the parent directory that match the pattern and adds them to the `list_target`. Then, the function iterates through the `list_target` and deletes each file, logging the deleted file's information. If there is an exception while deleting the file, the function logs the exception and the relevant file and target path information.

The function uses the `is_pattern` method to check if the target path matches a certain pattern. If the target path contains either '*' or '?' characters, the function returns `True`, indicating that the target path matches a pattern.

The function also uses the `log` method to log the relevant information when deleting a file or encountering an exception.

**Note**:
- The function does not check if the files in the `list_target` actually exist before attempting to delete them.
- The function does not check if the user has the necessary permissions to delete the files.
- The function does not provide any feedback to the user if a file is successfully deleted or if an exception occurs.
- The function relies on the `is_pattern` method to determine if the target path matches a certain pattern.
- The function relies on the `log` method to log the relevant information.

The `_delete_action` function is called by the `act` method in the same class. The `act` method determines which action to take based on the value of the `action` attribute of the class. If the `action` attribute is set to `FileAction.DELETE`, the `_delete_action` method is called. The `act` method also calls the `_create_action` method if the `action` attribute is set to `FileAction.CREATE` or `FileAction.REPLACE`.
***
### FunctionDef _update_action(self)
 **`_update_action`**: The function of `_update_action` is to update files in the target path with the files in the from path based on the `fromPathFiles` list.

**parameters**:
· `self`: The instance of the `Files_cp` class.

***
### FunctionDef act(self)
 **act**: The function of act is to perform different actions on files based on the value of the `action` attribute of the `Files_cp` class.

**parameters**:
- `self`: The instance of the `Files_cp` class.

**Code Description**:
The `act` function performs different actions on files based on the value of the `action` attribute of the `Files_cp` class. It checks the value of the `action` attribute and calls the corresponding function to perform the action.

If the `action` attribute is set to `FileAction.CREATE`, the `_create_action` function is called to create a copy of a file from a source path to a target path, modify the file permissions of the target file based on the object's `readOnly` attribute, and log the action.

If the `action` attribute is set to `FileAction.UPDATE`, the `_update_action` function is called to update files in the target path with the files in the from path based on the `fromPathFiles` list.

If the `action` attribute is set to `FileAction.DELETE`, the `_delete_action` function is called to delete files based on a given target path.

If the `action` attribute is set to `FileAction.REPLACE`, the `_delete_action` function is called to delete the target file, and then the `_create_action` function is called to create a copy of the source file to the target path.

The `act` function is called by the `__init__` method in the same class. The `__init__` method initializes the `Files_cp` class and sets the value of the `action` attribute based on the input parameters. Then, it calls the `act` method to perform the corresponding action.

**Note**:
- The `act` function relies on the `_create_action`, `_delete_action`, and `_update_action` functions to perform the actual actions on the files.
- The `act` function is called by the `__init__` method in the same class, and it is responsible for performing the actions on the files based on the value of the `action` attribute.
- The `act` function does not check the validity of the input parameters or the state of the files before performing the actions. It is assumed that the input parameters are valid and the files are in a consistent state.
- The `act` function logs the relevant information when performing the actions or encountering exceptions. It relies on the `log` method to log the information.
- The `act` function is called by the `__init__` method in the same class, and it is responsible for performing the actions on the files based on the value of the `action` attribute.
- The `act` function does not provide any feedback to the user if the actions are successful or if exceptions occur. It relies on the `log` method to log the relevant information.
***
### FunctionDef is_pattern(self, name)
 **is_pattern**: This function is used to check if a given file name matches a certain pattern.

**parameters**:
· name: A string representing the file name.

***
### FunctionDef get_list_files(self)
 **get\_list\_files**: The function of get\_list\_files is to generate a list of files from the source path that match the criteria specified in the fromPath attribute of the Files\_cp object. This function is used when the source path is a directory or contains a pattern in its name.

**parameters**:
· self: The instance of the Files\_cp class.

***
## FunctionDef check_target_path(path_to_check, username)
 **check\_target\_path**: The function of check\_target\_path is to check and modify the target path based on the root path.

**parameters**:
· path\_to\_check (str): The target path to be checked.
· username (str, optional): The username for which to retrieve the home directory. Defaults to None.

**Code Description**:
The function `check_target_path` is used to check the correctness of the target path and return the correct path if it is within the user's home directory. It first checks if the `path_to_check` parameter is empty, and returns None if it is. Then, it creates a `Path` object for the `path_to_check` and sets the root path to the root directory `/`. If the `username` parameter is provided, the root path is set to the home directory of the user retrieved by the `get_homedir` function. Finally, it returns the root path joined with the `path_to_check` using the `joinpath` method.

This function is used in the `__init__` method of the `Files_cp` class in `gpoa/frontend/appliers/file_cp.py` to check and modify the target path of a file object. It is used to ensure that the target path is within the user's home directory and to modify it if necessary.

**Note**:
It is important to note that this function relies on the password database being properly configured and up-to-date. If the password database is not properly configured, this function may return incorrect or incomplete information.

**Output Example**:
```python
check_target_path('/home/user/file.txt', 'user')
# returns:
# PosixPath('/home/user/file.txt')

check_target_path('/file.txt', 'user')
# returns:
# PosixPath('/file.txt')

check_target_path('', 'user')
# returns:
# None
```
This is an example of the output that this function may return, given a `path_to_check` and an optional `username`. The actual output will vary depending on the specific path and user.
## ClassDef Execution_check
 **Execution\_check**: The function of Execution\_check is to check the execution status of files in a given storage based on marker keys in the Windows registry.

**attributes**:

· \_\_etension\_marker\_key\_name: A string representing the key name for extension marker in the Windows registry.

· \_\_marker\_usage\_path\_key\_name: A string representing the key name for marker usage path in the Windows registry.

· \_\_hklm\_branch: A string representing the branch of the Windows registry where the marker keys are located.

· storage: An object that provides access to the storage where the files are located.

· etension\_marker: A list of marker keys that indicate whether a file should be executed or not.

· marker\_usage\_path: A list of marker usage paths that indicate where the marker keys are located in the Windows registry.

· list\_paths: A list of marker usage paths.

· list\_markers: A list of marker keys.

**Code Description**:

The Execution\_check class initializes by filtering the extension marker keys and marker usage paths from the Windows registry using the provided storage object. It then extracts the data from these keys and paths and stores them in the list\_paths and list\_markers attributes, respectively.

The get\_list\_paths() and get\_list\_markers() methods return the list\_paths and list\_markers attributes, respectively.

The Execution\_check class is used in the gpoa/frontend/file\_applier.py/file\_applier/\_\_init\_\_ and gpoa/frontend/file\_applier.py/file\_applier\_user/\_\_init\_\_ objects to check the execution status of files in the storage.

**Note**:

- The Execution\_check class assumes that the marker keys and usage paths are located in the Windows registry under the specified branch.
- The Execution\_check class does not handle any errors that may occur when accessing the Windows registry.

**Output Example**:

Suppose the Windows registry contains the following marker keys and usage paths:

etension\_marker\_key\_name: 'File1'
marker\_usage\_path\_key\_name: 'C:\Users\User\Documents'

The Execution\_check class would initialize as follows:

etension\_marker = ['File1']
marker\_usage\_path = ['C:\Users\User\Documents']
list\_paths = ['C:\Users\User\Documents']
list\_markers = ['File1']

The get\_list\_paths() method would return ['C:\Users\User\Documents'], and the get\_list\_markers() method would return ['File1'].
### FunctionDef __init__(self, storage)
 **__init__**: The function of __init__ is to initialize the Execution\_check class with a storage object.

**parameters**:
· storage: An object that has a filter\_hklm\_entries method for filtering entries in the registry.

**Code Description**:
The \_\_init\_\_ function of the Execution\_check class takes in a storage object as its parameter. It then defines two string variables, etension\_marker\_branch and marker\_usage\_path\_branch, which are used to filter entries in the registry using the storage object's filter\_hklm\_entries method.

The filtered entries are stored in the etension\_marker and marker\_usage\_path variables, respectively. Two empty lists, list\_paths and list\_markers, are created to store the data from the filtered entries.

The for loops at the end of the function iterate over the etension\_marker and marker\_usage\_path variables, appending the data from each entry to the list\_markers and list\_paths lists, respectively.

**Note**:
It is important to note that the storage object passed into the \_\_init\_\_ function must have a filter\_hklm\_entries method that takes in a string and returns a list of entries in the registry that match that string.

Additionally, the etension\_marker\_branch and marker\_usage\_path\_branch strings must be formatted correctly to match the desired entries in the registry.

It is also important to note that the \_\_init\_\_ function does not return any value, but initializes the Execution\_check class with the necessary variables and lists for further use in the code.
***
### FunctionDef get_list_paths(self)
 **get\_list\_paths**: The function of get\_list\_paths is to return the list\_paths attribute of the object it is called upon.

**parameters**: This function does not take any parameters.

**Code Description**: This function is a simple method that returns the list\_paths attribute of the object it is called upon. The list\_paths attribute is expected to be a list of file paths that have been previously defined in the object's initialization or through some other method.

From a functional perspective, this method plays a crucial role in the project's file management system. It provides a way to access the list of file paths that have been marked for some specific operation. The list\_paths attribute is used in other parts of the project, such as in the set\_exe\_file method of the set\_exe\_file object.

In the set\_exe\_file method, the get\_list\_paths method is called to check if the target file's parent directory is in the list of file paths. If it is, then the method returns True, indicating that the file can be executed.

**Note**: It is important to note that the get\_list\_paths method assumes that the list\_paths attribute has already been defined and populated with file paths. If the attribute is not defined or is empty, then the method will return an empty list.

**Output Example**:

The output of the get\_list\_paths method will depend on the contents of the list\_paths attribute. Here is an example of what the output might look like:

[
"/path/to/file1",
"/path/to/file2",
"/path/to/file3"
]

This output indicates that the list\_paths attribute contains three file paths. Other parts of the project can use this information to perform various file management tasks.
***
### FunctionDef get_list_markers(self)
 **get\_list\_markers**: This function is used to retrieve the list of markers that are used to check for executable files.

**Parameters**: This function does not take any parameters.

**Code Description**: The function `get_list_markers` is a simple method that returns the `list_markers` attribute of the object. This attribute is expected to contain a list of file extensions that are considered as executable files. The function does not perform any complex operations and simply returns the attribute as is.

From a functional perspective, this function plays a crucial role in the `set_exe_file` method of the `Files_cp` object. The `set_exe_file` method checks if the file being copied has an executable file extension by calling the `get_list_markers` function. If the file extension is present in the list returned by `get_list_markers`, the method sets the `executable` attribute of the object to `True`.

**Note**: It is important to ensure that the `list_markers` attribute is properly initialized and maintained. If the list does not contain the correct file extensions, the `set_exe_file` method may not function correctly.

**Output Example**: A possible output of this function could be:
```python
['.exe', '.com', '.bat']
```
This indicates that the object considers files with the extensions '.exe', '.com', and '.bat' as executable files.
***
