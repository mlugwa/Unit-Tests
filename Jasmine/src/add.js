function add()
{
	var arr = [];
	var i = 0;
	var sum = 0;

	while (i < arguments.length)
	{
		arr[i] = arguments[i++];
	}
	i = 0;
	while (i < arr.length)
	{
		var num = arr[i++];
		num = Number(num);
		sum = sum + num;
	}
	return (sum);
}
