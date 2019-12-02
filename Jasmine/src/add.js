function add()
{
	var i = 0;
	var sum = 0;

	while (i < arguments.length)
		sum = sum + arguments[i++];
	return (sum);
}

module.exports = add;
