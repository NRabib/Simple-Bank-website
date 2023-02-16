document.getElementById('btn-withdraw').addEventListener('click', function () {
	const withdrawField = document.getElementById('withdraw-field');
	const wdrawamountstring = withdrawField.value;
	const wdraw = parseFloat(wdrawamountstring);

	const wdrawAmount = document.getElementById('wdraw-amount');
	const totalwdrawString = wdrawAmount.innerText;
	const totalwdraw = parseFloat(totalwdrawString);
	withdrawField.value = '';

	if (isNaN(wdraw)) {
		alert('please type a number');
		return;
	}
	if (wdraw < totalwdraw) {
		alert('Insuficieant balance');
		return;
	}
	const curentwdraw = totalwdraw + wdraw;
	wdrawAmount.innerText = curentwdraw;
	const balancelmnt = document.getElementById('blnse-total');
	const balanceamountString = balancelmnt.innerText;
	const balanceamount = parseFloat(balanceamountString);

	balancelmnt.innerText = balanceamount - wdraw;
});
