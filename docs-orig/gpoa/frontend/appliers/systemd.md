## ClassDef systemd_unit
 **systemd\_unit**: The function of systemd\_unit is to manage systemd units, which are used to control the system services in a Linux system. This class enables the manipulation of the systemd units' state, such as enabling, disabling, starting, or stopping them.

**Attributes**:
· `unit_name`: The name of the systemd unit.
· `state`: The desired state of the systemd unit. It can be either 1 (to enable and start the unit) or 0 (to disable and stop the unit).

**Code Description**:
The `__init__` method initializes the class by connecting to the system's D-Bus system bus and getting the systemd manager object. It then sets the `unit_name` and `state` attributes and loads the unit's proxy object. The `apply` method changes the state of the unit according to the `state` attribute. If the `state` is 1, the method enables, starts, and unmasks the unit. If the `state` is 0, the method stops, disables, and masks the unit. The `_get_state` method retrieves the current state of the unit.

The `systemd_unit` class is used by the `run` method of the `systemd_applier` class in the `gpoa/frontend/systemd_applier.py/systemd_applier` module. The `run` method iterates over a list of systemd unit settings, creates a `systemd_unit` object for each setting, and applies the state change to the unit.

**Note**:
- The `apply` method assumes that the `state` attribute is either 1 or 0. If the `state` attribute is not one of these values, the method may not work as expected.
- The `apply` method logs an error message if the unit's state is not as expected after the state change. However, it does not raise an exception or return an error code.

**Output Example**:
Suppose the `systemd_unit_settings` list contains the following values:
```css
[
    {'hive_key': '\\system\\my_service\\state', 'data': '1'},
    {'hive_key': '\\system\\my_timer\\state', 'data': '0'}
]
```
The `run` method will create two `systemd_unit` objects, one for `my_service` and one for `my_timer`. The `apply` method of the `my_service` object will enable, start, and unmask the unit, while the `apply` method of the `my_timer` object will stop, disable, and mask the unit. The `run` method will log the following messages:
```json
{'level': 'I4', 'unit': 'my_service'}
{'level': 'I4', 'unit': 'my_timer'}
```
If there are any errors during the state change, the `run` method will log an error message with the unit's name.
### FunctionDef __init__(self, unit_name, state)
 **__init__**: The function of __init__ is to initialize the systemd unit object with a given unit name and desired state.

**parameters**:
· unit\_name: A string representing the name of the systemd unit.
· state: A string representing the desired state of the systemd unit. It can be either 'start', 'stop', or 'restart'.

**Code Description**:
The constructor initializes the system bus and gets the systemd dbus object and manager interface. It then sets the instance variables `unit_name` and `desired_state` with the given parameters. The `LoadUnit` method of the manager interface is called with the `unit_name` parameter to get the unit object, which is then used to get the unit proxy object. The `org.freedesktop.systemd1.Unit` and `org.freedesktop.DBus.Properties` interfaces are then obtained for the unit proxy object, which are stored in `unit_interface` and `unit_properties` instance variables respectively.

**Note**:
- The `unit_name` parameter should be a valid systemd unit name.
- The `state` parameter should be one of 'start', 'stop', or 'restart'. Any other value will result in an error.
- The `LoadUnit` method may raise a `org.freedesktop.systemd1.UnitNotFound` error if the unit does not exist.
- The `unit_interface` and `unit_properties` interfaces provide methods and properties to interact with the systemd unit. Refer to the systemd dbus documentation for more details.
***
### FunctionDef apply(self)
 **apply**: The function of apply is to manage the state of a systemd service based on the desired state specified.

**parameters**: This function does not take any parameters.

**Code Description**:
The `apply` function is an instance method of the `systemd_unit` class, which can be accessed through the `self` parameter. It is responsible for setting the desired state of a systemd service, which can be either 'start' or 'stop'.

If the desired state is 'start' (represented by the value 1), the function performs the following operations:

1. Unmask the unit file for the service using the `UnmaskUnitFiles` method of the `systemd.Manager` object.
2. Enable the unit file for the service using the `EnableUnitFiles` method of the `systemd.Manager` object. This sets the service to start automatically at boot time.
3. Start the service using the `StartUnit` method of the `systemd.Manager` object.
4. Log a message indicating the successful start of the service using the `log` function.
5. Check the state of the service using the `_get_state` method of the same class. If the service state is not 'active' or 'activating', log an error message.
6. If the service has a corresponding timer unit, check its state as well. If it is not 'active' or 'activating', log an error message.

If the desired state is 'stop' (represented by any value other than 1), the function performs the following operations:

1. Stop the service using the `StopUnit` method of the `systemd.Manager` object.
2. Disable the unit file for the service using the `DisableUnitFiles` method of the `systemd.Manager` object. This prevents the service from starting automatically at boot time.
3. Mask the unit file for the service using the `MaskUnitFiles` method of the `systemd.Manager` object. This prevents the service from being started manually or automatically.
4. Log a message indicating the successful stop of the service using the `log` function.
5. Check the state of the service using the `_get_state` method of the same class. If the service state is not 'stopped', 'deactivating', or 'inactive', log an error message.

**Note**:

* The `apply` function is intended to be called from outside the class.
* The function assumes that the `self.desired_state` attribute is set to either 'start' or 'stop' before it is called.
* The function logs error messages using the `log` function, which is not defined in the provided code.
* The function checks the state of the service and its corresponding timer unit, if any, using the `_get_state` method of the same class. If the state is not as expected, an error message is logged.
* The `systemd.Manager` object is used to perform operations on systemd unit files. It is assumed to be available and initialized before the `apply` function is called.
* The `logdata` dictionary is used to pass data to the `log` function. It contains the name of the unit as a key and the error code as a value.
* The `dbus` module is used to interact with the systemd daemon. It is assumed to be imported before the `apply` function is called.
* The `self.unit_name` attribute is the name of the unit file for the service.
* The `self.manager` attribute is an instance of the `systemd.Manager` class.
* The `self.unit_properties` attribute is an object of the `systemd.UnitFile` class, which is used to retrieve properties of the unit file for the service.
***
### FunctionDef _get_state(self)
 **_get\_state**: The function of `_get_state` is to retrieve the string describing the current state of a systemd service.

**parameters**: This function does not take any parameters.

**Code Description**:
`_get_state` is an instance method of the `systemd_unit` class, which can be accessed through the `self` parameter. It uses the `unit_properties` attribute of the instance, which is an object of the `systemd.UnitFile` class, to call the `Get` method. This method retrieves the value of the `ActiveState` property of the systemd unit associated with the instance. The `Get` method takes two string parameters: the first one is the interface name, and the second one is the property name. In this case, the interface name is `'org.freedesktop.systemd1.Unit'` and the property name is `'ActiveState'`.

The `_get_state` method is called in the `apply` method of the same class to check the state of the service before and after applying the desired state. If the service state is not as expected, an error message is logged.

**Note**:

* The `_get_state` method is an internal method of the `systemd_unit` class and is not intended to be called from outside the class.
* The `ActiveState` property may return different values depending on the current state of the service. The possible values are `'active'`, `'inactive'`, `'activating'`, `'deactivating'`, and `'failed'`.

**Output Example**:

When the service is active, the output of `_get_state` would be:
```python
'active'
```
When the service is in the process of activating, the output would be:
```python
'activating'
```
Similarly, when the service is inactive or deactivating, the output would be:
```python
'inactive'
```
or
```python
'deactivating'
```
respectively.
***
