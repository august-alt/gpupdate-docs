## FunctionDef backend_factory(dc, username, is_machine, no_domain)
 **backend\_factory**: The function of backend\_factory is to create a backend object based on the specified domain and credentials.

**parameters**:
· `domain`: The domain of the Active Directory.
· `username`: The username of the user in the Active Directory.
· `password`: The password of the user in the Active Directory.
· `backend_name`: The name of the backend to be used.

**Code Description**:

The backend\_factory function first initializes the `creds` object using the `options.CredentialsOptions` class and the `get_credentials` method. It then initializes the `gp_config` object using the `GPConfig` class and the `get_config` method.

The function then checks if the specified `backend_name` is 'samba' or 'local'. If it is 'samba', the function initializes the `samba_backend` object using the `SambaBackend` class and the `__init__` method. It sets the `dc_fqdn` attribute of the `samba_backend` object to the value of the 'dc' key in the `gp_config` object. It then sets the `creds` attribute of the `samba_backend` object to the `creds` object.

If the specified `backend_name` is 'local', the function initializes the `nodomain_backend` object using the `NodomainBackend` class and the `__init__` method. It sets the `creds` attribute of the `nodomain_backend` object to the `creds` object.

Finally, the function returns the initialized backend object.

**Note**:

* The `options.CredentialsOptions` class and the `get_credentials` method are used to initialize the `creds` object.
* The `GPConfig` class and the `get_config` method are used to initialize the `gp_config` object.
* The `SambaBackend` class and the `__init__` method are used to initialize the `samba_backend` object.
* The `NodomainBackend` class and the `__init__` method are used to initialize the `nodomain_backend` object.

**Output Example**:

The output of the `backend_factory` function is an object of the `SambaBackend` or `NodomainBackend` class, depending on the specified `backend_name`. Here is an example output:
```python
<gpoa.backend.samba_backend.SambaBackend object at 0x7f8c6c2a3d60>
```
or
```python
<gpoa.backend.nodomain_backend.NodomainBackend object at 0x7f8c6c2a3d60>
```
Raw code:```
def backend_factory(domain, username, password, backend_name):
    creds = options.CredentialsOptions(parser).get_credentials(lp, fallback_machine=True)
    gp_config = GPConfig().get_config()

    if backend_name == 'samba':
        samba_backend = SambaBackend(gp_config['dc'], creds)
        return samba_backend

    if backend_name == 'local':
        nodomain_backend = NodomainBackend(creds)
        return nodomain_backend

```
