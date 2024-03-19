## FunctionDef signal_handler(sig_number, frame)
 **signal\_handler**: The function of `signal_handler` is to manage signals received by the program and ensure a graceful exit while performing necessary cleanup tasks.

**parameters**:
· `sig_number` (integer): The signal number that was received.
· `frame` (frame): The current stack frame when the signal was received.

**Code Description**:
1. The function begins by printing an informational message indicating that a signal has been received and the program will exit gracefully.
2. It then ignores further signals of the same type by setting the signal handler to `SIG_IGN`.
3. Next, the `machine_kdestroy` function is called to clean up the Kerberos ticket cache for the machine. This ensures that any machine credentials are removed before the program exits.
4. Finally, the function calls `os._exit` with the exit code `ExitCodeUpdater.EXIT_SIGINT`. This ensures that the program exits immediately with the specified exit code, bypassing any remaining cleanup tasks or signal handlers.

**Note**:
- The `signal_handler` function should be used carefully, as it manages the program's response to received signals. Ensure that it is called appropriately in response to signals such as SIGINT.
- The function relies on the `machine_kdestroy` function to clean up the Kerberos ticket cache. Make sure that this function is working as expected, as incorrect behavior could lead to authentication issues.
- The function uses the `os._exit` function to exit the program immediately with the specified exit code. This bypasses any remaining cleanup tasks or signal handlers. Ensure that this is the desired behavior for the program's exit.
- The exit code `ExitCodeUpdater.EXIT_SIGINT` is used to indicate that the program received an interrupt signal and is exiting gracefully. Make sure that this exit code is handled appropriately by any calling processes or scripts.
