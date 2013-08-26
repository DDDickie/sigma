drop table if exists entries;
create table entries (
		id integer primary key autoincrement,
		name string not null,
		xuehao string not null,
		sex string not null,
		class string not null,
		interest string not null
		);

