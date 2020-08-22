"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=App;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _expoStatusBar=require("expo-status-bar");var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _Buttons=_interopRequireDefault(require("./Buttons"));var _Timer=_interopRequireDefault(require("./Timer"));var _jsxFileName="/home/heezjee/desktop/Desktop/cloud-computing_piaic/native-react/stopwatch/App.js";function App(){var initialTimer={hr:0,min:0,sec:0,ms:0};var _useState=(0,_react.useState)(initialTimer),_useState2=(0,_slicedToArray2["default"])(_useState,2),timer=_useState2[0],setTimer=_useState2[1];var _useState3=(0,_react.useState)(0),_useState4=(0,_slicedToArray2["default"])(_useState3,2),status=_useState4[0],setStatus=_useState4[1];var _useState5=(0,_react.useState)(),_useState6=(0,_slicedToArray2["default"])(_useState5,2),newInterval=_useState6[0],setNewInterval=_useState6[1];var start=function start(){run();setStatus(1);setNewInterval(setInterval(run,10));};var newHr=timer.hr,newMin=timer.min,newSec=timer.sec,newMs=timer.ms;var run=function run(){if(newMin===60){newHr++;newMin=0;}else if(newSec===60){newMin++;newSec=0;}else if(newMs===99){newSec++;newMs=-1;}newMs++;return setTimer({hr:newHr,min:newMin,sec:newSec,ms:newMs});};var pause=function pause(){clearInterval(newInterval);setStatus(2);};var resume=function resume(){setStatus(1);start();};var reset=function reset(){clearInterval(newInterval);setStatus(0);return setTimer({hr:0,min:0,sec:0,ms:0});};return _react["default"].createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:52,columnNumber:5}},_react["default"].createElement(_Timer["default"],{timer:timer,__source:{fileName:_jsxFileName,lineNumber:53,columnNumber:7}}),_react["default"].createElement(_Buttons["default"],{start:start,pause:pause,resume:resume,reset:reset,status:status,__source:{fileName:_jsxFileName,lineNumber:54,columnNumber:7}}));}var styles=_reactNative.StyleSheet.create({container:{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}});