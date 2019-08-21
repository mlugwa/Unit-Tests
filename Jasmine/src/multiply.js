function multiply()
{
	var i = 0;
	var multi = 1;
	
	while (i < arguments.length)
		multi = multi * arguments[i++];

	return (multi);
}
