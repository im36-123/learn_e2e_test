import { Selector } from 'testcafe';

fixture`各 input 要素に自動入力する`
	.page`http://127.0.0.1:8080`;

// いろいろなセレクタを使ってみる
// id, class, attribute
test('input の操作と名前の送信テスト', async t => {
	const name = 'im36-123';
	await t
		.typeText('[name="text"]', name)
		.click('#radio3')
		.click('.check [value="2"]')
		.click('select').click('option[value="2"]')
		.click('#submit')
		.expect(Selector('h1').innerText).eql(name);
});

test('入力した text の削除', async t => {
	const inputText = Selector('[name="text"]');
	await t
		.typeText(inputText, '削除されるテキスト')
		.selectText(inputText, 0)
		.pressKey('delete')
		.expect(Selector(inputText).value).eql('');
});
