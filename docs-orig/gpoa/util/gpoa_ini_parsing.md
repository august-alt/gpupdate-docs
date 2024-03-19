## ClassDef GpoaConfigObj
 **GpoaConfigObj**: The function of GpoaConfigObj is to parse and process configuration files in the .ini format, providing methods to read, modify, and write configuration data.

**attributes**:
· `infile`: A string representing the content of the configuration file.
· `indent_type`: A string indicating the type of indentation used in the configuration file.
· `initial_comment`: A list of strings containing comments at the beginning of the configuration file.
· `final_comment`: A list of strings containing comments at the end of the configuration file.
· `_sectionmarker`: A compiled regular expression used to match section markers in the configuration file.
· `_valueexp`: A compiled regular expression used to match key-value pairs in the configuration file.
· `COMMENT_MARKERS`: A tuple containing comment markers ('#', ';') used in the configuration file.

**Code Description**:
GpoaConfigObj is a class that extends the ConfigObj class to provide additional functionality for handling .ini format configuration files. The class has several attributes, including `infile`, `indent_type`, `initial_comment`, `final_comment`, `_sectionmarker`, `_valueexp`, and `COMMENT_MARKERS`.

The `_sectionmarker` and `_valueexp` attributes are compiled regular expressions used to match section markers and key-value pairs, respectively. The `COMMENT_MARKERS` attribute is a tuple containing comment markers used in the configuration file.

The class has several methods, including `_handle_comment`, `_parse`, and `write`. The `_handle_comment` method is used to handle comments in the configuration file. The `_parse` method is used to parse the configuration file and populate the `config` attribute with the parsed data. The `write` method is used to write the configuration data to a file.

The `_parse` method uses the `_sectionmarker` and `_valueexp` attributes to match section markers and key-value pairs, respectively. The method iterates through each line in the configuration file and uses the regular expressions to match section markers and key-value pairs. If a section marker is matched, the method creates a new Section object and adds it to the parent object. If a key-value pair is matched, the method adds it to the current Section object.

The `write` method is used to write the configuration data to a file. The method takes an optional `outfile` parameter, which is the file object to write to. If `outfile` is not provided, the method writes to a string. The method iterates through each entry in the configuration data and writes it to the file. If the entry is a Section object, the method recursively calls itself to write the nested Section objects.

**Note**:
- The `unrepr` parameter in the constructor is used to control whether or not to use string representations for list values. If set to `True`, list values will be converted to strings.
- The `_handle_error` method is used to handle errors during parsing. The method takes several parameters, including `msg`, `error_type`, `infile`, and `cur_index`. The `msg` parameter is the error message, `error_type` is the type of error, `infile` is the configuration file content, and `cur_index` is the current index in the configuration file.

**Output Example**:
Suppose we have the following .ini format configuration file:
```makefile
; This is a comment
[section1]
key1 = value1
key2 = value2

[section2]
key3 = value3
key4 = value4
```
We can create a GpoaConfigObj object and parse the configuration file as follows:
```python
import os
from gpoa.util.gpoa_ini_parsing import GpoaConfigObj

ini_file = 'config.ini'
config = GpoaConfigObj(ini_file)
print(config['section1']['key1'])  # Output: value1
print(config['section2']['key3'])  # Output: value3
```
We can also modify the configuration data and write it back to the file:
```python
config['section1']['key1'] = 'new_value1'
config['section2']['key3'] = 'new_value3'
config.write()
```
The modified configuration file will look like this:
```makefile
; This is a comment
[section1]
key1 = new_value1
key2
### FunctionDef _handle_comment(self, comment)
 **_handle\_comment**: The function of `_handle_comment` is to process and format a given comment string based on certain conditions.

**parameters**:
· `self`: The instance of the class `GpoaConfigObj`
· `comment`: A string representing the comment to be processed

**Code Description**:
The function first checks if the `comment` parameter is empty or not. If it is empty, the function returns an empty string.

Next, it determines the starting indentation `start` for the comment based on the object's `indent_type` attribute. If the `comment` does not start with any of the comment markers specified in the `COMMENT_MARKERS` attribute, it adds the indentation and the default comment marker '# ' to the `start` variable.

Finally, it returns the processed `start` variable along with the stripped `comment` string.

The `_handle_comment` function is called in the `write` method of the `GpoaConfigObj` class. In the `write` method, the function is used to format and write the comments associated with each entry in the configuration object.

The `_handle_comment` function ensures that the comments are properly formatted and indented in the output file, making it easier to read and understand the configuration data.

**Note**:

* The `_handle_comment` function assumes that the `COMMENT_MARKERS` attribute of the `GpoaConfigObj` class is a tuple containing valid comment markers.
* The function does not handle any error cases, such as invalid comment markers or non-string inputs.

**Output Example**:
Given the following input:
```python
COMMENT_MARKERS = ('#', ';')
indent_type = '  '
comment = '! This is a comment'
```
The `_handle_comment` function would return:
```python
'  # ! This is a comment'
```
***
### FunctionDef _parse(self, infile)
 **_parse**: The function of `_parse` is to parse the configuration file and populate the `GpoaConfigObj` object with the corresponding key-value pairs and sections.

**parameters**:

· `self`: The instance of the `GpoaConfigObj` class.

· `infile`: A file object containing the configuration file to be parsed.

**Code Description**:

The method starts by initializing several variables, such as `temp_list_values`, `comment_list`, `done_start`, `this_section`, `maxline`, `cur_index`, `reset_comment`, and `comment_markers`. These variables are used throughout the method to keep track of the current section, line, and comment state.

The method then enters a while loop, which iterates over each line in the configuration file. If the current line is a comment, it is added to the `comment_list` and the loop continues to the next iteration. If the current line is not a comment, the method checks if it is a section marker. If it is, the method creates a new section object and adds it to the parent section. If the current line is not a section marker, the method assumes it is a valid `key = value` line and extracts the key and value. If the value is multiline, the method extracts the value and any inline comments. If the value is not multiline, the method extracts the value and any inline comments. The method then checks if the key already exists in the current section. If it does, the method raises a `DuplicateError`. If it does not, the method adds the key-value pair to the current section and continues to the next iteration.

After the while loop, the method sets the `indent_type` attribute if it has not been set. The method then checks if there are any initial or final comments and sets the corresponding attributes. Finally, the method restores the `list_values` attribute to its original value.

**Note**:

- The method assumes that the configuration file is correctly formatted and does not contain any syntax errors. If the configuration file contains syntax errors, the method will raise a `ParseError`, `NestingError`, or `DuplicateError`.
- The method supports both single-line and multiline values. Multiline values are indicated by triple quotes (`"""` or `'''`).
- The method supports inline comments, which are indicated by a `#` symbol at the beginning of the line.
- The method supports both indentation-based and non-indentation-based configuration files. If the configuration file uses indentation, the method will automatically detect the indentation type and use it to parse the file. If the configuration file does not use indentation, the method will set the `indent_type` attribute to an empty string.
- The method supports both quoted and unquoted keys and values. Quoted keys and values must be enclosed in single or double quotes. Unquoted keys and values must not contain any spaces or special characters.
- The method supports nested sections. Nested sections are indicated by a section marker that is nested inside another section.
- The method supports both ordered and unordered sections. Ordered sections are indicated by a section marker that contains a number. Unordered sections are indicated by a section marker that does not contain a number.
- The method supports both unrepr and repred values. Unrepr values are not parsed by the Python `repr` function, while repred values are parsed by the Python `repr` function. By default, the method supports unrepr values. If the `unrepr` attribute is set to `True`, the method will parse repred values instead of unrepr values.
***
### FunctionDef write(self, outfile, section)
 **write**: The function of write is to generate a formatted string representation of the configuration object and write it to a file.

**parameters**:
· `self`: The instance of the class `GpoaConfigObj`
· `outfile=None`: The file-like object to write the configuration to. If `None`, the function returns the formatted string representation instead.
· `section=None`: The section of the configuration object to write. If `None`, the entire configuration object is written.

**Code Description**:
The `write` function first initializes an empty list `out` to store the formatted lines of the configuration object. It then checks if the `indent_type` attribute of the object is set. If not, it sets it to the default indent type.

If the `section` parameter is `None`, the function writes the initial comment of the configuration object to `out`. It then iterates over all entries in the object (scalars and sections) and writes them to `out`. If an entry is a default value, it is skipped. For each entry, its comments and inline comments are written first, followed by the entry itself. If the entry is a section, the function calls itself recursively to write the nested section.

If the `section` parameter is not `None`, only the specified section is written to `out`.

After all entries have been written to `out`, the function writes the final comment of the configuration object to `out` (if the `section` parameter is the configuration object itself).

If `outfile` is `None`, the function returns the formatted string representation in `out`. Otherwise, it joins the lines in `out` with the correct newline character and writes the result to `outfile`. If the `filename` attribute of the object is not set, the function writes to `outfile`. Otherwise, it writes to a new file with the name specified in the `filename` attribute.

The `write` function is called in the `_create_action` and `_delete_action` methods of the `Ini_file` class in the `ini_file.py` module. In `_create_action`, the function is used to write the configuration object to a file after a new key-value pair has been added. In `_delete_action`, the function is used to write the configuration object to a file after a key-value pair has been deleted.

The `write` function ensures that the configuration object is properly formatted and written to a file, making it easy to read and understand the configuration data.

**Note**:

* The `write` function assumes that the `COMMENT_MARKERS` attribute of the `GpoaConfigObj` class is a tuple containing valid comment markers.
* The function does not handle any error cases, such as invalid file objects or non-string inputs.

**Output Example**:
Given the following input:
```python
config = GpoaConfigObj()
config['section1'] = {'key1': 'value1', 'key2': 'value2'}
config['section2'] = {'key3': 'value3', 'key4': 'value4'}
config.write(outfile='config.ini')
```
The `write` function would generate the following output:
```makefile
;
***
