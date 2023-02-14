document.getElementById('btn-dpst').addEventListener('click', function () {
	const dpstField = document.getElementById('dpst-field');
	const amountstring = dpstField.value;
	const amount = parseFloat(amountstring);
	const dpstelemnt = document.getElementById('dpst-total');
	dpstField.value = '';
	const totalamountstring = dpstelemnt.innerText;
	const totalamount = parseFloat(totalamountstring);
	if (isNaN(amount)) {
		alert('please type a number');
		return;
	}
	const currenttotal = amount + totalamount;
	dpstelemnt.innerText = currenttotal;

	const balancelmnt = document.getElementById('blnse-total');
	const balanceamountString = balancelmnt.innerText;
	const balanceamount = parseFloat(balanceamountString);
	const curentbalance = amount + totalamount;
	balancelmnt.innerText = curentbalance + balanceamount;
});
