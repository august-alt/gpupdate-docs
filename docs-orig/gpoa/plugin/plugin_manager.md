## ClassDef plugin_manager
 **plugin\_manager**: The function of plugin\_manager is to manage and run plugins.

**attributes**:
· plugins: A dictionary that stores plugins with their names as keys and plugin instances as values.

### FunctionDef __init__(self)
 **__init__**: The function of __init__ is to initialize the plugin manager object and load the 'adp' plugin.

**parameters**: This Function does not have any parameters.

**Code Description**:

The `__init__` method of the `plugin_manager` class initializes the class and loads the 'adp' plugin. It first creates an empty dictionary to store the plugins. Then, it logs a debug message using the `slogm` class, which formats messages with a timestamp, a message, and a dictionary of keyword arguments.

Next, it attempts to load the 'adp' plugin by creating an instance of the `adp` class. If the 'adp' package is not installed, a `PluginInitError` exception is raised with a specific error message. If the package is installed, it logs an informational message.

The `__init__` method is called by the `plugin_manager` class constructor to initialize the plugin manager object. It is responsible for loading the 'adp' plugin and storing it in the plugins dictionary.

From a functional perspective, the `__init__` method is called by the `plugin_manager` class constructor when an instance of the class is created. It initializes the class and loads the 'adp' plugin, which can then be accessed and managed by the plugin manager.

**Note**:

* The `__init__` method assumes that the 'adp' package is installed as an RPM package. If the package is installed in a different way, the `is_rpm_installed` function may need to be modified.
* The `__init__` method uses the `slogm` class to log messages. It is important to include any relevant keyword arguments in the kwargs parameter to provide additional context for debugging and troubleshooting.
* The `__init__` method does not handle any specific exceptions. If certain exceptions are expected, they should be caught and handled appropriately.

Here is an example of how the `__init__` method is used:
```python
from plugin_manager import PluginManager

# create a new plugin manager object
plugin_manager = PluginManager()

# access the 'adp' plugin
adp_plugin = plugin_manager.plugins['adp']
```
In this example, a new plugin manager object is created, which loads the 'adp' plugin. The 'adp' plugin can then be accessed and managed by the plugin manager.
***
### FunctionDef run(self)
 **run**: The function of run is to execute the plugins 'adp' and 'roles' in the system.

**parameters**: This function does not take any parameters.

**Code Description**:
The `run` function is a method of the `plugin_manager` class, which is defined in the `plugin_manager.py` file. This function is responsible for running the plugins 'adp' and 'roles' by creating instances of their respective classes and calling their `run` methods.

The `run` function first creates an instance of the `plugin` class for the 'adp' plugin by calling `plugin('adp')`. It then gets the 'adp' plugin from the `plugins` dictionary using the `get` method and calls its `run` method. The same process is repeated for the 'roles' plugin.

It is important to note that the `run` method in the `plugin` class is empty and should be implemented by the specific plugin classes. The `plugin` class is intended to be used as a base class for all plugins in the system, providing a consistent interface for plugin management and execution. When creating a new plugin, it is recommended to inherit from the `plugin` class and implement the `run` method to provide the plugin's functionality.

From a functional perspective, the `run` function in the `plugin_manager` class is responsible for managing and executing plugins in a unified manner. It provides a consistent interface for plugins, allowing them to be managed and executed in a unified manner.

**Note**:

* The `run` function does not take any parameters.
* The `run` method in the `plugin` class is empty and should be implemented by the specific plugin classes.
* The `plugin` class is intended to be used as a base class for all plugins in the system, providing a consistent interface for plugin management and execution.
* When creating a new plugin, it is recommended to inherit from the `plugin` class and implement the `run` method to provide the plugin's functionality.
* The `run` function in the `plugin_manager` class is responsible for managing and executing plugins in a unified manner. It provides a consistent interface for plugins, allowing them to be managed and executed in a unified manner.
***
