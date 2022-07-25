/*
	The Cedric's Swiss Knife (CSK) - CSK libnotify

	Copyright (c) 2015 Cédric Ronvel 
	
	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





var ref = require( 'ref-napi' ) ;
var libnotify = require( '../lib/libnotify.js' ) ;






			/* Tests */



libnotify.setAppName( 'bob app' ) ;
console.log( '.getAppName():' , libnotify.getAppName() ) ;

console.log( '.getServerInfo():' , libnotify.getServerInfo() ) ;

var notif = libnotify.createNotification( {
	summary: 'Hello world!' ,
	body: 'This is a <i>Hello world</i> sample code. <b>Thanks for your attention...</b>' ,
	urgency: 1 ,
	timeout: 0 ,
	appName: 'bill app' ,
	category: 'idk' ,
	//iconPath: __dirname + '/log.png' ,
	iconPath: 'appointment-new' ,
	//*
	actions: {
		'default': {
			callback: function() { console.log( 'Default action!' ) ; }
		} ,
		'close': {
			callback: function() { console.log( 'Close action!' ) ; }
		} ,
		'ok': {
			label: 'OK!' ,
			callback: function() { console.log( '"OK" was clicked!' ) ; }
		}
	}
	//*/
} ) ;

notif.push( function() {
	console.log( 'Notification closed!' ) ;
} ) ;

//notif.close() ;

setTimeout( function() {
	notif.update( {
		summary: '!!!' ,
		//iconPath: __dirname + '/log.png' ,
		//*
		actions: {
			'default': {
				callback: function() { console.log( 'Default action!' ) ; }
			} ,
			'close': {
				callback: function() { console.log( 'Close action!' ) ; }
			} ,
			'ok': {
				label: 'OK!' ,
				callback: function() { console.log( '"OK" was clicked!' ) ; }
			}
		}
		//*/
	} ) ;
} , 2000 ) ;


return ;
