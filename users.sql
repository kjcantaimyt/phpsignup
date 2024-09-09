CREATE TABLE 'users'(
  'id' int(11) NOT NULL,
  'email' varchar(255) NOT NULL,
  'name' varchar(255) NOT NULL,
  'password' varchar(255) NOT NULL,
  'signup_date' datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


insert INTO 'users' ('id', 'email', 'name', 'password') VALUES
(1, 'test@test.com', 'Test User', '3019sf7sg7reg9dd7geg7');

--
ALTER TABLE 'users'
  ADD PRIMARY KEY ('id');

ALTER TABLE 'users'
  MODIFY 'id' int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;