## ClassDef dbus_runner
 **dbus\_runner**: The `dbus_runner` class is responsible for running the Red Hat Global Policy Operating Agent (GPOA) via D-Bus, optionally supplying a username to trigger GPOA for a specific user running in a sysadmin context.

**attributes**:
- `_redhat_bus_name`: The Red Hat D-Bus bus name for GPOA.
- `_basealt_bus_name`: The alternative D-Bus bus name for GPOA.
- `_redhat_interface_name`: The Red Hat D-Bus interface name for GPOA.
- `_basealt_interface_name`: The alternative D-Bus interface name for GPOA.
- `_object_path`: The D-Bus object path for GPOA.
- `_synchronous_timeout`: The synchronous timeout for D-Bus calls, set to 10 minutes.
- `username`: The optional username to run GPOA for a specific user.
- `system_bus`: The D-Bus system bus.
- `bus_name`: The D-Bus bus name to use for GPOA.
- `interface_name`: The D-Bus interface name to use for GPOA.

**Code Description**:
The `dbus_runner` class initializes with an optional `username` parameter. It creates a D-Bus system bus and sets the initial `bus_name` and `interface_name` to the alternative values. The `check_dbus` method is then called to verify if the D-Bus service is available on the specified bus. If not, it falls back to the Red Hat bus.

The `run` method is responsible for running GPOA via D-Bus. If a `username` is provided, it checks if the current user is root and calls the `gpupdatefor` method on the D-Bus interface. If not, it calls the `gpupdate` method for the computer. If no `username` is provided, it calls the `gpupdate_computer` method directly.

**Note**:
- The `dbus_runner` class assumes that the D-Bus service is available on the system.
- The `gpupdatefor` method requires superuser privileges.
- The `gpupdate` and `gpupdate_computer` methods are used when the current user is not root.

**Output Example**:
The output of the `run` method would depend on the specific GPOA D-Bus methods' return values. It may include success or error messages, as well as any relevant data returned by the methods.
### FunctionDef __init__(self, username)
 **__init__**: The function of **__init__** is to initialize the dbus\_runner object with an optional username parameter.

**parameters**:
· **username** (optional): This parameter is used to specify the username for accessing the D-Bus. If not provided, the default system bus will be used.

**Code Description**:

The `__init__` function initializes the dbus\_runner object by setting the `username` attribute with the provided parameter or None if not provided. It then creates a `system_bus` object using the `dbus.SystemBus()` method, which represents the system message bus.

The `bus_name` and `interface_name` attributes are set to the Redhat specific bus and interface names, respectively, using the `_basealt_bus_name` and `_basealt_interface_name` attributes. These attributes are defined elsewhere in the code and are used to specify the bus and interface names required for accessing the D-Bus.

Finally, the `check_dbus` function is called to ensure that the system bus has the required bus and interface names. If the required bus name is not available on the system bus, the function switches to an alternative privileged operations bus. This is done to ensure that the dbus\_runner object has the necessary permissions to access the D-Bus.

Overall, the `__init__` function initializes the dbus\_runner object and sets up the necessary attributes and permissions for accessing the D-Bus.

**Note**:

* The `check_dbus` function may raise a `DBusException` if the specified bus is not available on the system bus. If this exception is not due to the service being unknown, it will be propagated up and can be caught and handled by the calling function.
* The `username` parameter is optional and if not provided, the default system bus will be used.
***
### FunctionDef check_dbus(self)
 **check\_dbus**: The function of check\_dbus is to check the availability of the specified DBus on the system bus and, if not available, switch to an alternative privileged operations bus.

**parameters**: This function does not take any parameters.

**Code Description**:

The function check\_dbus first tries to access the specified bus\_name on the system\_bus. If the bus is available, it returns without doing anything. If the bus is not available, it raises a DBusException. If the exception is not due to the service being unknown, it is propagated up. If the service is unknown, the function sets the bus\_name to the Redhat specific bus name and the interface\_name to the Redhat specific interface name. It then tries to access the new bus\_name on the system\_bus.

This function is used in the **gpoa/util/dbus.py/dbus\_runner/\_\_init\_\_** function to ensure that the system\_bus has the required bus\_name and interface\_name. If the required bus\_name is not available on the system\_bus, the function switches to an alternative privileged operations bus.

**Note**: None

**Output Example**:

The output of this function is not visible to the user as it does not return any value. However, if the function encounters an exception, it will be propagated up and can be caught and handled by the calling function.
***
### FunctionDef run(self)
 **run**: The function of run is to execute a gpupdate command using the D-Bus interface, with different variations depending on whether the current process has root permissions and whether a username is provided.

**parameters**:
· self: The instance of the dbus\_runner class that the method is called on.

**Code Description**:

The run function first checks if the username attribute has been set on the instance of the dbus\_runner class. If it has, it logs the username and proceeds to check if the current process has root permissions using the is\_root() function.

If the current process has root permissions, the function calls the gpupdatefor method on the system bus with the provided username as an argument. If the method call is successful, the function prints the result using the print\_dbus\_result function. If the method call raises a DBusException, the function logs the error message and re-raises the exception.

If the current process does not have root permissions, the function calls the gpupdate method on the system bus with no arguments. If the method call is successful, the function prints the result using the print\_dbus\_result function. If the method call raises a DBusException, the function logs the error message and re-raises the exception.

If the username attribute has not been set on the instance of the dbus\_runner class, the function calls the gpupdate\_computer method on the system bus with no arguments. If the method call is successful, the function prints the result using the print\_dbus\_result function. If the method call raises a DBusException, the function logs the error message and re-raises the exception.

The run function is used to execute a gpupdate command using the D-Bus interface. Depending on the permissions of the current process and the presence of a username attribute, different variations of the gpupdate command are executed. The function is designed to be used as a method of an instance of the dbus\_runner class.

**Note**:

* The run function relies on the is\_root() function to determine if the current process has root permissions.
* The run function relies on the print\_dbus\_result function to print the result of the gpupdate command.
* The run function relies on the dbus library to interact with the system bus and call methods on the oddjobd service.
* The run function may raise a DBusException if the gpupdate command fails.
***
## FunctionDef start_gpupdate_user
 **start\_gpupdate\_user**: The function of start\_gpupdate\_user is to enable and start the gpupdate-user.service at runtime. This function is necessary to perform user service start in case pam\_systemd.so is not present in the PAM stack.

**Parameters**: This function does not take any parameters.

**Code Description**:

The function starts by defining the unit name as 'gpupdate-user.service'. It then creates a session bus object using the dbus.SessionBus() method. This session bus object is used to connect to the systemd user bus.

Next, it gets the object for the systemd user bus using the get\_object() method of the session bus. The object path for the systemd user bus is '/org/freedesktop/systemd1'. It then gets the interface for the systemd user bus using the dbus\_interface parameter set to 'org.freedesktop.systemd1.Manager'.

The function then gets the unit object for gpupdate-user.service using the GetUnit() method of the systemd user interface. It also starts the unit using the StartUnit() method of the systemd user interface. The 'replace' argument passed to the StartUnit() method ensures that if the unit is already active, it will be restarted.

**Note**:

* This function should be called when it is necessary to perform user service start in case pam\_systemd.so is not present in the PAM stack.
* This function enables and starts the gpupdate-user.service at runtime, which may have implications for other parts of the system. It is important to ensure that the service is stopped when it is no longer needed.
* This function uses D-Bus to communicate with the systemd daemon. It is assumed that the systemd daemon is running and that the necessary D-Bus permissions are in place.
* This function does not return any value. It is designed to perform a specific action, rather than to return a value.
## FunctionDef is_oddjobd_gpupdate_accessible
 **is\_oddjobd\_gpupdate\_accessible**: The function of is\_oddjobd\_gpupdate\_accessible is to check if the 'oddjobd' service is running via systemd and if the 'oddjobd\_gpupdate' interface is accessible through D-Bus. This function returns a boolean value indicating whether 'oddjobd\_gpupdate' is accessible or not.

**Parameters**: This function does not take any parameters.

**Code Description**:

1. The function initializes a boolean variable `oddjobd_accessible` to `False`.
2. It then tries to connect to the system D-Bus using the `dbus.SystemBus()` method.
3. The function gets the object for the systemd manager using the D-Bus API.
4. It then checks if the 'oddjobd.service' unit is available and running by calling the `GetUnit()` method and checking the `ActiveState` property.
5. If the 'oddjobd.service' unit is running, the function tries to get the object for the 'oddjobd\_gpupdate' interface using the D-Bus API.
6. If the 'oddjobd\_gpupdate' interface object is obtained successfully, the function sets `oddjobd_accessible` to `True`.
7. If the 'oddjobd\_gpupdate' interface object cannot be obtained using the 'ru.basealt.oddjob\_gpupdate' name, the function tries to obtain it using the 'com.redhat.oddjob\_gpupdate' name.
8. Finally, the function returns the value of `oddjobd_accessible`.

**Note**:

* This function uses the D-Bus API to interact with system services. It requires the `dbus` module to be installed and available in the Python environment.
* The function may raise a `dbus.exceptions.DBusException` if there is an error while connecting to the D-Bus or while getting the object for the 'oddjobd.service' unit or the 'oddjobd\_gpupdate' interface.
* The function may return `False` even if the 'oddjobd.service' unit is running if the 'oddjobd\_gpupdate' interface is not accessible for some reason.

**Output Example**:

* `True` if 'oddjobd\_gpupdate' is accessible, `False` otherwise.
## FunctionDef print_dbus_result(result)
 **print\_dbus\_result**): The function of print\_dbus\_result is to print lines returned by oddjobd (called via D-Bus) to stdout.

**parameters**:
· result: The result returned by the oddjobd service via D-Bus.

**Code Description**:

The function first extracts the exit code and message from the result returned by the oddjobd service. The exit code is stored in the variable `exitcode` and the message is stored in the variable `message`.

Next, the function creates a dictionary `logdata` with the exit code as the value for the key 'retcode'. This dictionary is then passed as a parameter to the `log` function along with the message code 'D12' to log the exit code.

Finally, the function iterates over each line in the message and prints it to stdout if the line is not empty.

**Note**: This function is used to print the result of a D-Bus call to oddjobd service. It is used to print the lines returned by the service and log the exit code.

**Output Example**:

The output of this function will be the lines returned by the oddjobd service printed to stdout. For example, if the service returns the lines "Line 1", "Line 2", and "Line 3", the output of this function will be:

```
Line 1
Line 2
Line 3
```

This function is called by the `run` function in the `dbus_runner` module of the `dbus.py` file. The `run` function passes the result returned by the oddjobd service to this function to print the lines returned by the service and log the exit code.
## ClassDef dbus_session
 **dbus\_session**: The function of dbus\_session is to establish a connection with the D-Bus session bus and provide methods to interact with the D-Bus system.

**attributes**:

* `session_bus`: A `dbus.SessionBus()` object representing the D-Bus session bus.
* `session_dbus`: A `dbus.Object` representing the D-Bus session bus object.
* `session_iface`: A `dbus.Interface` to interact with the D-Bus session bus.

**Code Description**:

The `dbus_session` class initializes a connection with the D-Bus session bus upon instantiation. It catches any `dbus.exceptions.DBusException` during the initialization process and raises the exception to notify the user of the failure.

The `get_connection_pid` method takes a `connection` parameter and returns the process ID (PID) associated with the D-Bus connection. It catches any `dbus.exceptions.DBusException` during the execution of the method and logs the error message. If the exception is not related to the `org.freedesktop.DBus.Error.NameHasNoOwner` error, it raises the exception to notify the user of the failure.

The `dbus_session` class is used in the `with_privileges` function in the `gpoa/util/system.py` module. The `with_privileges` function drops the privileges of the current user and runs the D-Bus session daemon in order to make D-Bus calls. It then creates an instance of the `dbus_session` class and calls the `get_connection_pid` method to get the PID of the D-Bus connection.

**Note**:

* The `dbus_session` class should only be used after dropping the privileges of the current user and starting the D-Bus session daemon.
* The `get_connection_pid` method may raise a `dbus.exceptions.DBusException` if there is an error interacting with the D-Bus system.

**Output Example**:

Assuming the `with_privileges` function is called with the `username` parameter set to `'user'` and the `func` parameter set to a function that does not raise any exceptions, the `get_connection_pid` method will return the PID of the D-Bus connection. For example, the output may look like this:

```python
>>> session = dbus_session()
>>> session.get_connection_pid('ca.desrt.dconf')
1234
```

Here, `1234` is the PID of the D-Bus connection.
### FunctionDef __init__(self)
 **__init__**: The function of __init__ is to initialize the dbus\_session object and establish a connection to the system message bus using the D-Bus library.

**parameters**: This function does not take any parameters.

**Code Description**:

The __init__ function initializes the dbus\_session object by establishing a connection to the system message bus using the D-Bus library. It first imports the dbus module and creates a SessionBus object using the dbus.SessionBus() function. This SessionBus object represents a connection to the system message bus.

Next, the function calls the get\_object() method on the SessionBus object, passing in the bus name 'org.freedesktop.DBus' and the object path '/org/freedesktop/DBus' as arguments. This returns a proxy object that represents the D-Bus interface of the system message bus.

The function then calls the get\_interface() method on the proxy object, passing in the interface name 'org.freedesktop.DBus' as an argument. This returns a new object that provides the methods and properties of the 'org.freedesktop.DBus' interface.

Finally, the function assigns the SessionBus object, the proxy object, and the interface object to the instance variables self.session\_bus, self.session\_dbus, and self.session\_iface, respectively.

The function is enclosed in a try-except block to handle any exceptions that may occur during the initialization process. If a dbus.exceptions.DBusException is raised, the function logs the error message using the log() function and re-raises the exception.

**Note**: It is important to ensure that the D-Bus library is installed and available on the system before using this module. Additionally, the system message bus must be running for the connection to be established successfully. If the initialization process fails, the function will raise a dbus.exceptions.DBusException, which can be caught and handled by the calling code.
***
### FunctionDef get_connection_pid(self, connection)
 **get\_connection\_pid**: The function of get\_connection\_pid is to retrieve the Unix Process ID (PID) of a given DBus connection.

**parameters**:
· **connection**: A DBus connection object.

**Code Description**:

The function first initializes a variable `pid` to -1, which will hold the PID of the DBus connection. It then tries to get the PID of the connection using the `GetConnectionUnixProcessID` method of the `session_iface` object, passing the `connection` object as an argument. If the method call is successful, the PID is stored in the `pid` variable and logged using the `log` function with the message code 'D57'. If the method call raises a `DBusException`, the function checks if the exception is due to the name of the connection not having an owner. If the name does not have an owner, the function logs the connection object using the `log` function with the message code 'D58' and returns -1. If the exception is due to any other reason, the function logs the error message using the `log` function with the message code 'E32' and raises the exception.

The function returns the value of the `pid` variable, which is the PID of the DBus connection if the method call was successful, or -1 if the name of the connection did not have an owner.

**Note**:

* The function assumes that the `session_iface` object has been initialized and has the necessary methods and properties to interact with DBus connections.
* The function logs the PID and connection object using the `log` function, which is assumed to be implemented elsewhere in the codebase.

**Output Example**:

The output of the function is an integer representing the PID of the DBus connection. For example, if the PID of the connection is 1234, the function will return 1234. If the name of the connection does not have an owner, the function will return -1.
***
