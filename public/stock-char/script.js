//import { hello } from 'src/connect.js';
import {postData} from './connect.js';

async function testAddText() {
	let par1 = document.getElementById("testPara");
	
	par1.innerHTML += "Server echoed back following Object <br>";
	
	let query = {var1: 'test123'};
	let res = await postData(query);
	Object.keys(res).forEach(elem => {
		par1.innerHTML += elem + " = " + res[elem] + "<br>";
	});
}

testAddText();