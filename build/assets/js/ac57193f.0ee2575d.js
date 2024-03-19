"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[3370],{2233:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var n=s(4848),i=s(8453);const r={},d=void 0,o={id:"gpoa/frontend/appliers/systemd",title:"systemd",description:"ClassDef systemd_unit",source:"@site/docs/gpoa/frontend/appliers/systemd.md",sourceDirName:"gpoa/frontend/appliers",slug:"/gpoa/frontend/appliers/systemd",permalink:"/docs/gpoa/frontend/appliers/systemd",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"polkit",permalink:"/docs/gpoa/frontend/appliers/polkit"},next:{title:"util",permalink:"/docs/gpoa/frontend/appliers/util"}},c={},h=[{value:"ClassDef systemd_unit",id:"classdef-systemd_unit",level:2},{value:"FunctionDef <strong>init</strong>(self, unit_name, state)",id:"functiondef-initself-unit_name-state",level:3},{value:"FunctionDef apply(self)",id:"functiondef-applyself",level:3},{value:"FunctionDef _get_state(self)",id:"functiondef-_get_stateself",level:3}];function a(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"classdef-systemd_unit",children:"ClassDef systemd_unit"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"systemd_unit"}),": The function of systemd_unit is to manage systemd units, which are used to control the system services in a Linux system. This class enables the manipulation of the systemd units' state, such as enabling, disabling, starting, or stopping them."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Attributes"}),":\n\xb7 ",(0,n.jsx)(t.code,{children:"unit_name"}),": The name of the systemd unit.\n\xb7 ",(0,n.jsx)(t.code,{children:"state"}),": The desired state of the systemd unit. It can be either 1 (to enable and start the unit) or 0 (to disable and stop the unit)."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Code Description"}),":\nThe ",(0,n.jsx)(t.code,{children:"__init__"})," method initializes the class by connecting to the system's D-Bus system bus and getting the systemd manager object. It then sets the ",(0,n.jsx)(t.code,{children:"unit_name"})," and ",(0,n.jsx)(t.code,{children:"state"})," attributes and loads the unit's proxy object. The ",(0,n.jsx)(t.code,{children:"apply"})," method changes the state of the unit according to the ",(0,n.jsx)(t.code,{children:"state"})," attribute. If the ",(0,n.jsx)(t.code,{children:"state"})," is 1, the method enables, starts, and unmasks the unit. If the ",(0,n.jsx)(t.code,{children:"state"})," is 0, the method stops, disables, and masks the unit. The ",(0,n.jsx)(t.code,{children:"_get_state"})," method retrieves the current state of the unit."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"systemd_unit"})," class is used by the ",(0,n.jsx)(t.code,{children:"run"})," method of the ",(0,n.jsx)(t.code,{children:"systemd_applier"})," class in the ",(0,n.jsx)(t.code,{children:"gpoa/frontend/systemd_applier.py/systemd_applier"})," module. The ",(0,n.jsx)(t.code,{children:"run"})," method iterates over a list of systemd unit settings, creates a ",(0,n.jsx)(t.code,{children:"systemd_unit"})," object for each setting, and applies the state change to the unit."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"apply"})," method assumes that the ",(0,n.jsx)(t.code,{children:"state"})," attribute is either 1 or 0. If the ",(0,n.jsx)(t.code,{children:"state"})," attribute is not one of these values, the method may not work as expected."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"apply"})," method logs an error message if the unit's state is not as expected after the state change. However, it does not raise an exception or return an error code."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Output Example"}),":\nSuppose the ",(0,n.jsx)(t.code,{children:"systemd_unit_settings"})," list contains the following values:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-css",children:"[\n    {'hive_key': '\\\\system\\\\my_service\\\\state', 'data': '1'},\n    {'hive_key': '\\\\system\\\\my_timer\\\\state', 'data': '0'}\n]\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"run"})," method will create two ",(0,n.jsx)(t.code,{children:"systemd_unit"})," objects, one for ",(0,n.jsx)(t.code,{children:"my_service"})," and one for ",(0,n.jsx)(t.code,{children:"my_timer"}),". The ",(0,n.jsx)(t.code,{children:"apply"})," method of the ",(0,n.jsx)(t.code,{children:"my_service"})," object will enable, start, and unmask the unit, while the ",(0,n.jsx)(t.code,{children:"apply"})," method of the ",(0,n.jsx)(t.code,{children:"my_timer"})," object will stop, disable, and mask the unit. The ",(0,n.jsx)(t.code,{children:"run"})," method will log the following messages:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:"{'level': 'I4', 'unit': 'my_service'}\n{'level': 'I4', 'unit': 'my_timer'}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If there are any errors during the state change, the ",(0,n.jsx)(t.code,{children:"run"})," method will log an error message with the unit's name."]}),"\n",(0,n.jsxs)(t.h3,{id:"functiondef-initself-unit_name-state",children:["FunctionDef ",(0,n.jsx)(t.strong,{children:"init"}),"(self, unit_name, state)"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.strong,{children:"init"})}),": The function of ",(0,n.jsx)(t.strong,{children:"init"})," is to initialize the systemd unit object with a given unit name and desired state."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"parameters"}),":\n\xb7 unit_name: A string representing the name of the systemd unit.\n\xb7 state: A string representing the desired state of the systemd unit. It can be either 'start', 'stop', or 'restart'."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Code Description"}),":\nThe constructor initializes the system bus and gets the systemd dbus object and manager interface. It then sets the instance variables ",(0,n.jsx)(t.code,{children:"unit_name"})," and ",(0,n.jsx)(t.code,{children:"desired_state"})," with the given parameters. The ",(0,n.jsx)(t.code,{children:"LoadUnit"})," method of the manager interface is called with the ",(0,n.jsx)(t.code,{children:"unit_name"})," parameter to get the unit object, which is then used to get the unit proxy object. The ",(0,n.jsx)(t.code,{children:"org.freedesktop.systemd1.Unit"})," and ",(0,n.jsx)(t.code,{children:"org.freedesktop.DBus.Properties"})," interfaces are then obtained for the unit proxy object, which are stored in ",(0,n.jsx)(t.code,{children:"unit_interface"})," and ",(0,n.jsx)(t.code,{children:"unit_properties"})," instance variables respectively."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"unit_name"})," parameter should be a valid systemd unit name."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"state"})," parameter should be one of 'start', 'stop', or 'restart'. Any other value will result in an error."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"LoadUnit"})," method may raise a ",(0,n.jsx)(t.code,{children:"org.freedesktop.systemd1.UnitNotFound"})," error if the unit does not exist."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"unit_interface"})," and ",(0,n.jsx)(t.code,{children:"unit_properties"})," interfaces provide methods and properties to interact with the systemd unit. Refer to the systemd dbus documentation for more details."]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"functiondef-applyself",children:"FunctionDef apply(self)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"apply"}),": The function of apply is to manage the state of a systemd service based on the desired state specified."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Code Description"}),":\nThe ",(0,n.jsx)(t.code,{children:"apply"})," function is an instance method of the ",(0,n.jsx)(t.code,{children:"systemd_unit"})," class, which can be accessed through the ",(0,n.jsx)(t.code,{children:"self"})," parameter. It is responsible for setting the desired state of a systemd service, which can be either 'start' or 'stop'."]}),"\n",(0,n.jsx)(t.p,{children:"If the desired state is 'start' (represented by the value 1), the function performs the following operations:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Unmask the unit file for the service using the ",(0,n.jsx)(t.code,{children:"UnmaskUnitFiles"})," method of the ",(0,n.jsx)(t.code,{children:"systemd.Manager"})," object."]}),"\n",(0,n.jsxs)(t.li,{children:["Enable the unit file for the service using the ",(0,n.jsx)(t.code,{children:"EnableUnitFiles"})," method of the ",(0,n.jsx)(t.code,{children:"systemd.Manager"})," object. This sets the service to start automatically at boot time."]}),"\n",(0,n.jsxs)(t.li,{children:["Start the service using the ",(0,n.jsx)(t.code,{children:"StartUnit"})," method of the ",(0,n.jsx)(t.code,{children:"systemd.Manager"})," object."]}),"\n",(0,n.jsxs)(t.li,{children:["Log a message indicating the successful start of the service using the ",(0,n.jsx)(t.code,{children:"log"})," function."]}),"\n",(0,n.jsxs)(t.li,{children:["Check the state of the service using the ",(0,n.jsx)(t.code,{children:"_get_state"})," method of the same class. If the service state is not 'active' or 'activating', log an error message."]}),"\n",(0,n.jsx)(t.li,{children:"If the service has a corresponding timer unit, check its state as well. If it is not 'active' or 'activating', log an error message."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"If the desired state is 'stop' (represented by any value other than 1), the function performs the following operations:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Stop the service using the ",(0,n.jsx)(t.code,{children:"StopUnit"})," method of the ",(0,n.jsx)(t.code,{children:"systemd.Manager"})," object."]}),"\n",(0,n.jsxs)(t.li,{children:["Disable the unit file for the service using the ",(0,n.jsx)(t.code,{children:"DisableUnitFiles"})," method of the ",(0,n.jsx)(t.code,{children:"systemd.Manager"})," object. This prevents the service from starting automatically at boot time."]}),"\n",(0,n.jsxs)(t.li,{children:["Mask the unit file for the service using the ",(0,n.jsx)(t.code,{children:"MaskUnitFiles"})," method of the ",(0,n.jsx)(t.code,{children:"systemd.Manager"})," object. This prevents the service from being started manually or automatically."]}),"\n",(0,n.jsxs)(t.li,{children:["Log a message indicating the successful stop of the service using the ",(0,n.jsx)(t.code,{children:"log"})," function."]}),"\n",(0,n.jsxs)(t.li,{children:["Check the state of the service using the ",(0,n.jsx)(t.code,{children:"_get_state"})," method of the same class. If the service state is not 'stopped', 'deactivating', or 'inactive', log an error message."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"apply"})," function is intended to be called from outside the class."]}),"\n",(0,n.jsxs)(t.li,{children:["The function assumes that the ",(0,n.jsx)(t.code,{children:"self.desired_state"})," attribute is set to either 'start' or 'stop' before it is called."]}),"\n",(0,n.jsxs)(t.li,{children:["The function logs error messages using the ",(0,n.jsx)(t.code,{children:"log"})," function, which is not defined in the provided code."]}),"\n",(0,n.jsxs)(t.li,{children:["The function checks the state of the service and its corresponding timer unit, if any, using the ",(0,n.jsx)(t.code,{children:"_get_state"})," method of the same class. If the state is not as expected, an error message is logged."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"systemd.Manager"})," object is used to perform operations on systemd unit files. It is assumed to be available and initialized before the ",(0,n.jsx)(t.code,{children:"apply"})," function is called."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"logdata"})," dictionary is used to pass data to the ",(0,n.jsx)(t.code,{children:"log"})," function. It contains the name of the unit as a key and the error code as a value."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"dbus"})," module is used to interact with the systemd daemon. It is assumed to be imported before the ",(0,n.jsx)(t.code,{children:"apply"})," function is called."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"self.unit_name"})," attribute is the name of the unit file for the service."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"self.manager"})," attribute is an instance of the ",(0,n.jsx)(t.code,{children:"systemd.Manager"})," class."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"self.unit_properties"})," attribute is an object of the ",(0,n.jsx)(t.code,{children:"systemd.UnitFile"})," class, which is used to retrieve properties of the unit file for the service."]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"functiondef-_get_stateself",children:"FunctionDef _get_state(self)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"_get_state"}),": The function of ",(0,n.jsx)(t.code,{children:"_get_state"})," is to retrieve the string describing the current state of a systemd service."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"parameters"}),": This function does not take any parameters."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Code Description"}),":\n",(0,n.jsx)(t.code,{children:"_get_state"})," is an instance method of the ",(0,n.jsx)(t.code,{children:"systemd_unit"})," class, which can be accessed through the ",(0,n.jsx)(t.code,{children:"self"})," parameter. It uses the ",(0,n.jsx)(t.code,{children:"unit_properties"})," attribute of the instance, which is an object of the ",(0,n.jsx)(t.code,{children:"systemd.UnitFile"})," class, to call the ",(0,n.jsx)(t.code,{children:"Get"})," method. This method retrieves the value of the ",(0,n.jsx)(t.code,{children:"ActiveState"})," property of the systemd unit associated with the instance. The ",(0,n.jsx)(t.code,{children:"Get"})," method takes two string parameters: the first one is the interface name, and the second one is the property name. In this case, the interface name is ",(0,n.jsx)(t.code,{children:"'org.freedesktop.systemd1.Unit'"})," and the property name is ",(0,n.jsx)(t.code,{children:"'ActiveState'"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"_get_state"})," method is called in the ",(0,n.jsx)(t.code,{children:"apply"})," method of the same class to check the state of the service before and after applying the desired state. If the service state is not as expected, an error message is logged."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"_get_state"})," method is an internal method of the ",(0,n.jsx)(t.code,{children:"systemd_unit"})," class and is not intended to be called from outside the class."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"ActiveState"})," property may return different values depending on the current state of the service. The possible values are ",(0,n.jsx)(t.code,{children:"'active'"}),", ",(0,n.jsx)(t.code,{children:"'inactive'"}),", ",(0,n.jsx)(t.code,{children:"'activating'"}),", ",(0,n.jsx)(t.code,{children:"'deactivating'"}),", and ",(0,n.jsx)(t.code,{children:"'failed'"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Output Example"}),":"]}),"\n",(0,n.jsxs)(t.p,{children:["When the service is active, the output of ",(0,n.jsx)(t.code,{children:"_get_state"})," would be:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"'active'\n"})}),"\n",(0,n.jsx)(t.p,{children:"When the service is in the process of activating, the output would be:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"'activating'\n"})}),"\n",(0,n.jsx)(t.p,{children:"Similarly, when the service is inactive or deactivating, the output would be:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"'inactive'\n"})}),"\n",(0,n.jsx)(t.p,{children:"or"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"'deactivating'\n"})}),"\n",(0,n.jsx)(t.p,{children:"respectively."}),"\n",(0,n.jsx)(t.hr,{})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>o});var n=s(6540);const i={},r=n.createContext(i);function d(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);