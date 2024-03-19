## FunctionDef get_child(parent, desires, list_data_pol)
 **get\_child**: The function of get\_child is to recursively traverse the XML tree structure and extract the value of the desired child elements.

**parameters**:
· parent: The current parent XML element in the tree structure.
· desires: A list of strings representing the desired child element tags in a hierarchical order.
· list\_data\_pol: A list that stores the extracted values of the desired child elements.

**Code Description**:
The function first checks if the current parent element's tag is 'decimal'. If yes, it extracts the value of the 'value' attribute and appends it to the 'list\_data\_pol'. If not, it iterates through all the child elements of the parent element. For each child element, it checks if the child element's tag matches the first element in the 'desires' list. If yes, it recursively calls the 'get\_child' function with the child element, the rest of the 'desires' list, and the same 'list\_data\_pol'. This process continues until the function extracts all the desired child elements' values in the XML tree structure.

**Note**:
- The 'desires' list should be in a hierarchical order, meaning the first element in the list is the immediate child element of the 'parent' element, and the rest of the elements in the list are the child elements of the previously extracted child element.
- The function only extracts the value of the 'decimal' type elements. If the desired child element is not of 'decimal' type, the function will not extract its value.

**Output Example**:
Suppose we have the following XML tree structure:
```xml
<parent>
  <child1>
    <decimal value="1"/>
    <child2>
      <decimal value="2"/>
    </child2>
  </child1>
  <child3>
    <decimal value="3"/>
  </child3>
</parent>
```
If we call the 'get\_child' function with the following parameters:
```python
parent = ET.fromstring(xml_string) # xml_string is the above XML tree structure as a string
desires = ['child1', 'decimal']
list_data_pol = []
```
The function will extract the value '1' and append it to the 'list\_data\_pol'. Therefore, 'list\_data\_pol' will be ['1'] after the function call.
