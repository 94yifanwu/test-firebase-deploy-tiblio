/*
 * File: 	tiblioFrontEnd\src\connect.js
 * Author:	Tiblio Electron App Project Team
 *			
 * Description: Functions for querying the server. Uses JSON format to
 * query server for information in the form of a POST request.
 *
 *	Import this module in other js files with:
 *		import {postData} from './connect.js';
 */

/**
 *	Posts server for info. Input query in object form, and the request is
 *	converted to a POST request with query in JSON form. The reply is a
 *	JSON object.
 */
export async function postData(query){
	let req = 'http://localhost:3000/api';
	let res = "";
	await fetch(req, {
		method: 'POST',
		headers:{
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(query)
	}).then(function(rs){
		return rs.text().then(function(txt){
			res = JSON.parse(txt);
		});
	});
	return res;
}