create table if not exists entries (
		id integer primary key autoincrement,
		name string not null,
		xuehao string not null,
		sex string not null,
		class string not null,
		base string not null,
		phone string not null,
		email string not null,
		others string not null
		);

