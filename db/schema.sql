create DATABASE burgers_db;

use burgers_db;

create table burgers(
    id int NOT NULL auto_increment,
    burger_name varchar(100) NOOT NULL,
    devoured boolean DEFAULT false,
    primary key(id)
);
