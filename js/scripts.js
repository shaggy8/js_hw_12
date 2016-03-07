jQuery(function () {
	var srul = {
		'surname': 'Сруль',
		'name': 'Генадій',
		'secondName': 'Федорович',
		'photo': 'rabbid.png',
		'profession': 'Студент заборобудівного університету',
		'reasons': ['Забори будувати не цікаво', 'Платять мало',
				'Доводиться працювати вночі'],
		'phone': '+380977777777',
		'fb': 'https://www.facebook.com/',
		'feedback': 'Якщо треба, то зроблю вам забор'
	}

	var roma = {
		'surname': 'Семенко',
		'name': 'Роман',
		'secondName': 'Сергійович',
		'photo': 'rabbid.png',
		'profession': 'Шалопай',
		'reasons': ['Хочу заробляти великі-превеликі гроші',
				'Мені фронтенд є дуже до смаку', 'Хочеться самореалізуватися',
				'Хочу бути корисним'],
		'phone': '+380977690000',
		'fb': 'https://www.facebook.com/',
		'feedback': 'Можу доглядати за вашими кактусами))'
	}

	// $('body').html( tmpl('profile', roma) );
	$('body').html( _.template( $('#profile').html() )(srul) );
});