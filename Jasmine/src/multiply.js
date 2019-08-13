function multiply()
{
	var arr = [];
	var i = 0;
	var multi = 1;
	
	while (i < arguments.length)
		arr[i] = arguments[i++];
	i = 0;
	while (i < arr.length)
	{
		var num = arr[i++];
		num = Number(num);
		multi = multi * num;
	}
	return (multi);
}
