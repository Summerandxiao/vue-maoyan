export function extendUrl(arr) {
	let imgarr = []
	
	for(var i = 0; i < arr.length; i++) {
		imgarr.push(arr[i].img)
		
		if(arr[i].version){
			arr[i].vers="3D"
			arr[i].max = "MAX"
			
		}
		
	}
	//console.log(imgarr)
	let newImg = []
	
	for(var i of imgarr) {
		let imgurl = "https" + i.substr(4, 18) + "170.230/" + i.split("/")[4] + "/" + i.split("/")[5]
		newImg.push(imgurl)
		
	}
	
	//console.log(newImg)
	for(var i = 0; i < arr.length; i++) {
		arr[i].imgUrl = newImg[i]

	}
}
export default {
	extendUrl
}