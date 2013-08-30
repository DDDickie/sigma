create table if not exists entries (
		name string not null,
		studentid string not null primary key,
		sex string not null,
		specialty string not null,
		basic string not null,
		phone string not null,
		email string not null,
		others string not null
		);

