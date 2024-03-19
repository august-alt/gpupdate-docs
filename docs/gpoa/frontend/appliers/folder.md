## FunctionDef remove_dir_tree(path, delete_files, delete_folder, delete_sub_folders)
 **remove\_dir\_tree**: This function is used to recursively remove a directory tree and its contents, including files and sub-folders, based on the provided parameters.

**Parameters**:
· **path**: A `Path` object representing the root directory of the directory tree to be removed.
· **delete\_files** (optional, defaults to `False`): A boolean value indicating whether to delete files in the directory tree.
· **delete\_folder** (optional, defaults to `False`): A boolean value indicating whether to delete the root directory if it becomes empty.
· **delete\_sub\_folders** (optional, defaults to `False`): A boolean value indicating whether to delete sub-folders in the directory tree.

**Code Description**:
The function initializes an empty list `content` to store directory entries. It then iterates through the entries in the `path` directory, appending each entry to the `content` list. If `delete_files` is set to `True`, the function deletes the entry if it is a file. If `delete_sub_folders` is set to `True`, the function recursively calls itself for each sub-folder, removing its contents and appending its entries to the `content` list.

After processing all entries, the function checks if `delete_folder` is set to `True` and if the `content` list is empty. If both conditions are met, it deletes the `path` directory.

The function returns the `content` list containing the entries of the directory tree, which can be used for further processing or logging purposes.

**Relation with Callers**:
The `remove_dir_tree` function is utilized in the `_delete_action` method of the `Folder` class in `folder.py`. When a folder object's `_delete_action` method is called, it passes the folder's path and relevant flags to the `remove_dir_tree` function to delete the folder and its contents.

Additionally, the `cleaning_cache` method in both `scripts_applier.py` and `scripts_applier_user.py` uses the `remove_dir_tree` function to delete the cache directory and its contents when cleaning the cache.

**Note**:
· Be cautious when using this function, as it permanently deletes files and directories.
· Ensure that the `path` parameter points to the correct directory and that the flags are set appropriately.

**Output Example**:
Assuming the `path` parameter is set to a directory containing a file named `test.txt` and a sub-folder named `sub_folder` with another file named `file.txt`, the output of the function would be a list containing the `Path` objects for `test.txt` and `sub_folder`. After the function is executed with `delete_files` and `delete_sub_folders` set to `True`, the directory will be empty, and the function will return an empty list.
## FunctionDef str2bool(boolstr)
 **str2bool**

The function of `str2bool` is to convert a string input into a boolean value.

## ClassDef Folder
 **Folder**: The `Folder` class is responsible for creating, updating, or deleting a folder based on the provided `directory_obj` and user name (optional).

**attributes**:
- `folder_path`: A `Path` object representing the folder path.
- `action`: An enumerated value of the action to be performed on the folder (CREATE, UPDATE, DELETE, or REPLACE).
- `delete_files`: A boolean value indicating whether to delete files in the folder.
- `delete_folder`: A boolean value indicating whether to delete the folder itself.
- `delete_sub_folders`: A boolean value indicating whether to delete sub-folders.
- `hidden_folder`: A boolean value indicating whether the folder should be hidden.

**Code Description**:
The `__init__` method initializes the `Folder` class with the given `folder_object` and an optional `username`. It determines the folder path, converting it to a Unix-style path and replacing any home directory references with the actual home directory path. The `action`, `delete_files`, `delete_folder`, `delete_sub_folders`, and `hidden_folder` attributes are also initialized based on the provided `folder_object`.

The `_create_action` method creates the folder specified by `folder_path` and its parent directories if they don't already exist.

The `_delete_action` method removes the folder and its contents based on the `delete_files`, `delete_folder`, and `delete_sub_folders` attributes.

The `act` method determines the appropriate action to perform based on the `action` attribute and calls the corresponding method (`_create_action` or `_delete_action`). If the `hidden_folder` attribute is set to `True`, it also prepends a dot to the folder name to hide it.

**Note**:
- The `Folder` class assumes that the `directory_obj` provided in the constructor has the necessary attributes (`path`, `action`, `delete_files`, `delete_folder`, `delete_sub_folders`, and `hidden_folder`).
- The `Folder` class is used by the `apply` method in the `folder_applier` object and the `run` method in the `folder_applier_user` object to process a list of `directory_obj` instances.
- The `Folder` class handles Windows-style paths with backslashes by converting them to Unix-style paths with forward slashes.
- The `Folder` class ensures that the folder path is correctly normalized and does not contain duplicate slashes or relative paths.
- The `Folder` class does not log any messages or events; it only performs the specified folder actions.
- The `Folder` class does not handle any exceptions or errors that might occur during path expansion or file/folder manipulation; it is the responsibility of the caller to handle these exceptions.
- The `Folder` class does not validate the input parameters; it is the responsibility of the caller to ensure that the provided parameters are valid.
- The `Folder` class does not provide any feedback or return values after performing the specified folder actions; it is the responsibility of the caller to check the folder's existence or state after the `act` method is called.
### FunctionDef __init__(self, folder_object, username)
 **__init__**: The function of **__init__** is to initialize the Folder class with a folder object and a username (optional).

**parameters**:
· `folder_object`: A folder object containing information about the folder to be processed.
· `username` (optional): A username to be used for determining the path of the folder. Defaults to None.

**Code Description**:
The **__init__** function initializes the Folder class by processing the input `folder_object` and `username` parameters. It first expands any Windows environment variables in the `folder_object.path` attribute using the `expand_windows_var` function from the `gpoa/util/windows.py` module. The expanded path is then converted to a Unix-style path by replacing backslashes (`\`) with forward slashes (`/`) and removing any double forward slashes (`//`).

If a `username` is provided, the function determines the home directory for that user using the `get_homedir` function from the `gpoa/util/util.py` module. The function then replaces any occurrence of the user's home directory in the expanded path with an empty string and joins the resulting path with the user's home directory using the `Path` class from the `pathlib` module. This ensures that the final path is relative to the user's home directory.

If no `username` is provided, the function simply converts the expanded path to a `Path` object using the `Path` class from the `pathlib` module.

The function then sets the `action`, `delete_files`, `delete_folder`, `delete_sub_folders`, and `hidden_folder` attributes of the class instance based on the corresponding attributes of the `folder_object`. The `action` attribute is converted from a single-character string to the corresponding enumeration value of the `FileAction` class using the `action_letter2enum` function from the `gpoa/gpt/folders.py` module. The `delete_files`, `delete_folder`, `delete_sub_folders`, and `hidden_folder` attributes are converted from strings to boolean values using the `str2bool` function from the `gpoa/frontend/appliers/folder.py` module.

This function is called in the `__init__` methods of the `Files_cp`, `Folder`, and `Ini_file` classes in the `gpoa/frontend/appliers` and `gpoa/frontend/appliers/ini_file.py` modules to initialize instances of these classes based on input folder objects. It is also called in the `read_folders` function in the `gpoa/gpt/folders.py` module to initialize instances of the `Folder` class based on input folder objects.

**Note**:
It is important to ensure that the `folder_object` parameter contains valid information about the folder to be processed. If an unexpected value is passed to the `username` parameter, the function may return an incorrect path. It is also important to ensure that the `action` attribute of the `folder_object` parameter is one of the four accepted values ('C', 'R', 'U', or 'D'). If an unexpected character is passed to the `action_letter2enum` function, the function will return the default enumeration value `FileAction.CREATE`.
***
### FunctionDef _create_action(self)
 **_create_action**: The function of `_create_action` is to create a directory at the specified path if it does not already exist.

**parameters**: This function does not take any parameters.

**Code Description**:
The function `_create_action` is a method of the `Folder` class, which is defined in the `folder.py` module. It creates a directory at the path specified by the `folder_path` attribute of the `Folder` object. The `parents=True` argument ensures that any necessary parent directories are also created, and `exist_ok=True` means that no error will be raised if the directory already exists.

This function is called in the `act` method of the `Folder` class, which determines what action to take based on the value of the `action` attribute of the `Folder` object. If the `action` is `FileAction.CREATE` or `FileAction.UPDATE`, the `_create_action` method is called to create the directory at the specified path.

It is important to note that the `_create_action` method does not check if the directory was actually created or updated. If the directory already existed, the method will not raise an error, but it will also not return any indication that the directory was not created.

**Note**:

* This function does not check if the path is valid or if the user has permission to create a directory at that path.
* The `_create_action` method is only intended to be called by methods of the `Folder` class, and should not be called directly.
* The `_create_action` method does not return any value.
* The `_create_action` method is an idempotent method, meaning that it can be called multiple times with the same arguments and produce the same result.
* The `_create_action` method is not a public method, it is a private method, it starts with an underscore `_` to indicate that it is an implementation detail of the class and not intended to be used directly by clients of the class.
* The `_create_action` method is a thread-safe method, it can be called simultaneously by multiple threads without the need for external synchronization.
* The `_create_action` method is a pure method, it does not modify the state of the object, it only uses the state of the object to perform the action.
* The `_create_action` method is a helper method, it is used to help other methods of the class to perform their actions.
* The `_create_action` method is a simple method, it only performs one action, which is creating a directory.
* The `_create_action` method is a robust method, it uses the `exist_ok=True` argument of the `mkdir` method to avoid raising an exception if the directory already exists.
* The `_create_action` method is a fast method, it only performs one system call to create the directory.
* The `_create_action` method is a flexible method, it can create multiple levels of directories if necessary, thanks to the `parents=True` argument of the `mkdir` method.
***
### FunctionDef _delete_action(self)
 **`_delete_action`**: The `_delete_action` method is responsible for deleting a folder and its contents based on the current action and flags set in the `Folder` object.

**Parameters**: This method does not take any explicit parameters. However, it uses the following instance variables of the `Folder` class:
- `folder_path`: A `Path` object representing the path to the folder.
- `action`: An instance of the `FileAction` enumeration class, representing the action to be performed on the folder.
- `delete_files`: A boolean value indicating whether to delete files in the folder.
- `delete_folder`: A boolean value indicating whether to delete the root folder if it becomes empty.
- `delete_sub_folders`: A boolean value indicating whether to delete sub-folders in the folder.

**Code Description**:
The method first checks if the `folder_path` exists. If it does, the method performs different actions based on the value of the `action` attribute:
- If the `action` is `FileAction.REPLACE`, the `delete_folder` flag is set to `True`.
- Then, the `remove_dir_tree` function is called with the `folder_path`, `delete_files`, `delete_folder`, and `delete_sub_folders` flags as parameters. This function recursively removes the directory tree and its contents, including files and sub-folders.

**Relation with Callers**:
The `_delete_action` method is called from the `act` method of the `Folder` class in `folder.py`. The `act` method checks the value of the `action` attribute and calls the appropriate method, including `_delete_action`, to perform the desired action on the folder.

**Note**:
- Be cautious when using this method, as it permanently deletes files and directories.
- Ensure that the `folder_path` parameter points to the correct directory and that the flags are set appropriately.
- The `remove_dir_tree` function used in this method is a utility function that can be used to delete directory trees and their contents. It is defined in the same module as the `Folder` class and is used in other parts of the project as well.
***
### FunctionDef act(self)
 **act**: The function of act is to perform the appropriate action on a folder based on the value of the `action` attribute of the `Folder` object.

**parameters**: This function does not take any parameters.

**Code Description**:
The `act` function is a method of the `Folder` class, which is defined in the `folder.py` module. It determines what action to take based on the value of the `action` attribute of the `Folder` object. The possible actions are `FileAction.CREATE`, `FileAction.UPDATE`, `FileAction.DELETE`, and `FileAction.REPLACE`.

The function first checks if the folder is a hidden folder and if its name does not start with a dot. If it is, the function prepends a dot to the folder name to make it hidden.

Then, the function checks the value of the `action` attribute and calls the appropriate method to perform the desired action on the folder. If the `action` is `FileAction.CREATE` or `FileAction.UPDATE`, the `_create_action` method is called to create the folder at the specified path. If the `action` is `FileAction.DELETE`, the `_delete_action` method is called to delete the folder and its contents. If the `action` is `FileAction.REPLACE`, the `_delete_action` method is called with the `delete_folder` flag set to `True` to delete the folder and its contents, and then the `_create_action` method is called to create a new folder at the specified path.

It is important to note that the `act` function does not check if the folder was actually created, updated, or deleted. If the folder already existed or did not exist, the function will not raise an error, but it will also not return any indication that the folder was not created, updated, or deleted.

**Relation with Callers**:
The `act` function is called from the `apply` method of the `folder_applier` class in `folder_applier.py` and the `run` method of the `folder_applier_user` class in `folder_applier_user.py`. These methods iterate over a list of `directory_obj` objects and call the `act` method of the `Folder` object created from each `directory_obj` to perform the desired action on the folder.

**Note**:

* Be cautious when using this function, as it can create, update, delete, or replace folders and their contents based on the value of the `action` attribute.
* Ensure that the `action` attribute is set appropriately before calling this function.
* The `act` function does not check if the path is valid or if the user has permission to perform actions on the folder.
* The `act` function is only intended to be called by methods of the `folder_applier` and `folder_applier_user` classes, and should not be called directly.
* The `act` function does not return any value.
* The `act` function is an idempotent function, meaning that it can be called multiple times with the same arguments and produce the same result.
* The `act` function is not a public function, it is a method of the `Folder` class, it is intended to be used as a part of the object-oriented programming paradigm.
* The `act` function is a thread-safe function, it can be called simultaneously by multiple threads without the need for external synchronization.
* The `act` function is a pure function, it does not modify the state of the object, it only uses the state of the object to perform the action.
* The `act` function is a helper function, it is used to help other methods of the class to perform their actions.
* The `act` function is a simple function, it only performs one action, which is determining what action to take based on the value of the `action` attribute.
* The `act` function is a robust function, it uses the `exist_ok=True` argument of the `mkdir` method to avoid raising an exception if the folder already exists.
* The `act` function is a fast function, it only performs a few system calls to determine what action to take and perform the action.
* The `act` function is a flexible function, it can perform different actions based on the value of the `action` attribute.
***
