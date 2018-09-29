ALTER TABLE houses ADD COLUMN image text, ADD COLUMN monthly_mortgage int, ADD COLUMN desired_rent int;

/* this was used to add the session id to the creatiion of the house */
ALTER TABLE houses ADD COLUMN userId text;