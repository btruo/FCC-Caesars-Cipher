

function rot13(str) {
	let ans="";
	if (str.length > 0) {
		console.log(str[0].charCodeAt())
		for (let i = 0; i < str.length; i++) {
			if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 77) {
				ans += (String.fromCharCode(str[i].charCodeAt() + 13));
			}
			else if (str[i].charCodeAt() >= 78 && str[i].charCodeAt() <= 90) {
				ans += (String.fromCharCode(str[i].charCodeAt() - 13));
			}
			else if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 109) {
				ans += (String.fromCharCode(str[i].charCodeAt() + 13));
			}
			else if (str[i].charCodeAt() >= 110 && str[i].charCodeAt() <= 122) {
				ans += (String.fromCharCode(str[i].charCodeAt() - 13));
			}
			else {
				ans += (str[i]);
			}
		}
	}
	console.log(ans);
	return (
		<div>
			{ans}
		</div>
	);
}

	export default rot13;