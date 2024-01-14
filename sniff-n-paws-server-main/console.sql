create type addr as object (
  city varchar2(30),
  street varchar2(30),
  house varchar2(30),
  order member function comp(address addr) return integer
);

create or replace type body ADDR as
    order member function comp(address addr) return integer is
begin
    if (self.CITY<>address.CITY) or (self.CITY=address.CITY and self.STREET<>address.STREET) or (self.CITY=address.CITY and self.STREET=address.STREET and self.HOUSE<>address.HOUSE) then
        return 1;
    else
        return -1;
    end if;
    end comp;
end;


create sequence feedback_serial;

create or replace function check_phone(phone varchar2) return boolean is
    len number;
    begin
        len:=length(phone);

        if len=11 then
            return true;
        else
            return false;
        end if;
    end;


create or replace function check_email(email varchar2) return boolean is
    begin
        if regexp_like(email,'^\w+(\.\w+)*+@\w+(\.\w+)+$') then
            return true;
        else
            return false;
        end if;
    end;


create table ADMIN(
    admin_id number generated by default as identity ,
    name varchar2(20) not null,
    email varchar2(50) not null,
    gender varchar2(10),
    address addr,
    dob date,
    salary number(10),
    designation varchar2(20),
    password varchar2(30),

    constraint pass_check check ( length(password)>=4 ),
    constraint pk_admin_id primary key (admin_id)
);

create index admin_email
on ADMIN(email);

create table ADMIN_PHONE(
    admin_id number,
    phone_no varchar2(11),

    constraint number_length check ( length(phone_no)=11 ),
    constraint fk_admin_id foreign key (admin_id) references ADMIN(admin_id) on delete cascade
);

create or replace trigger check_email_trigger_admin
    before insert on ADMIN
    for each row
    declare
        valid boolean;
        already boolean:=false;
        cnt number;

        not_a_valid_email EXCEPTION ;
        pragma exception_init ( not_a_valid_email, -20001 );
        email_already_exists exception;
        pragma exception_init ( email_already_exists, -20002 );
    begin
        valid:=check_email(:new.email);

        select count(*) into cnt from ADMIN where email=:new.email;

        if cnt>0 then
            already:=true;
        end if;

        if valid=false then
            raise_application_error(-20001, 'Not a valid email');
        end if;

        if already then
            raise_application_error(-20002, 'Email already exists');
        end if;
    end;


create or replace view admin_view as
    select ADMIN.ADMIN_ID, name, email, gender, ADMIN.address.house || ', ' || ADMIN.address.street || ', ' || ADMIN.address.city as Address, to_char(dob, 'dd-mm-yyyy') as "Date of Birth", floor(months_between(sysdate, dob)/12) as Age,
          designation ,listagg(PHONE_NO, ', ') as Phone
    from ADMIN JOIN ADMIN_PHONE on ADMIN.ADMIN_ID=ADMIN_PHONE.ADMIN_ID
    group by ADMIN.ADMIN_ID, name, email, gender, ADMIN.address.house || ', ' || ADMIN.address.street || ', ' || ADMIN.address.city, to_char(dob, 'dd-mm-yyyy'), floor(months_between(sysdate, dob)/12), designation
order by ADMIN.admin_id;



create table STAFF(
    staff_id number generated by default as identity,
    name varchar2(20) not null,
    email varchar2(50) not null,
    gender varchar2(10),
    address addr,
    dob date,
    salary number(10),
    specialization varchar2(20),
    password varchar2(30),

    constraint pass_check1 check ( length(password)>=4 ),
    constraint pk_staff_id primary key (staff_id)
);

create index STAFF_email
on STAFF(email);

create table STAFF_PHONE(
    staff_id number,
    phone_no varchar2(11),

    constraint number_length_1 check ( length(phone_no)=11 ),
    constraint fk_staff_id foreign key (staff_id) references staff(staff_id) on delete cascade
);

create or replace trigger check_email_trigger_sfaff
    before insert on STAFF
    for each row
    declare
        valid boolean;
        already boolean:=false;
        cnt number;

        not_a_valid_email EXCEPTION ;
        pragma exception_init ( not_a_valid_email, -20001 );
        email_already_exists exception;
        pragma exception_init ( email_already_exists, -20002 );
    begin
        valid:=check_email(:new.email);

        select count(*) into cnt from STAFF where email=:new.email;

        if cnt>0 then
            already:=true;
        end if;

        if valid=false then
            raise_application_error(-20001, 'Not a valid email');
        end if;

        if already then
            raise_application_error(-20002, 'Email already exists');
        end if;
    end;


create or replace view staff_view as
    select staff.staff_ID, name, email, gender, staff.address.house || ', ' || staff.address.street || ', ' || staff.address.city as Address, to_char(dob, 'dd-mm-yyyy') as "Date of Birth", floor(months_between(sysdate, dob)/12) as Age,salary,
           listagg(PHONE_NO, ', ') as Phone
    from staff JOIN staff_PHONE on STAFF.STAFF_ID=STAFF_PHONE.STAFF_ID
    group by staff.staff_ID, name, email, gender, staff.address.house || ', ' || staff.address.street || ', ' || staff.address.city, to_char(dob, 'dd-mm-yyyy'), floor(months_between(sysdate, dob)/12), salary
order by staff.staff_id;



create table CUSTOMER(
    customer_id number generated by default as identity,
    name varchar2(20) not null,
    email varchar2(50) not null,
    gender varchar2(10),
    address addr,
    dob date,
    password varchar2(30),

    constraint pass_check2 check ( length(password)>=4 ),
    constraint pk_customer_id primary key (customer_id)
);

create index CUSTOMER_email
on CUSTOMER(email);

create table CUSTOMER_PHONE(
    customer_id number,
    phone_no varchar2(11),

    constraint number_length_2 check ( length(phone_no)=11 ),
    constraint fk_cust_id foreign key (customer_id) references CUSTOMER(customer_id) on delete cascade
);

create or replace trigger check_email_trigger_customer
    before insert on CUSTOMER
    for each row
    declare
        valid boolean;
        already boolean:=false;
        cnt number;

        not_a_valid_email EXCEPTION ;
        pragma exception_init ( not_a_valid_email, -20001 );
        email_already_exists exception;
        pragma exception_init ( email_already_exists, -20002 );
    begin
        valid:=check_email(:new.email);

        select count(*) into cnt from CUSTOMER where email=:new.email;

        if cnt>0 then
            already:=true;
        end if;

        if valid=false then
            raise_application_error(-20001, 'Not a valid email');
        end if;

        if already then
            raise_application_error(-20002, 'Email already exists');
        end if;
    end;


create or replace view customer_view as
select CUSTOMER.CUSTOMER_ID, name, email, gender, CUSTOMER.address.house || ', ' || CUSTOMER.address.street || ', ' || CUSTOMER.address.city as Address, to_char(dob, 'dd-mm-yyyy') as "Date of Birth", floor(months_between(sysdate, dob)/12) as Age,
       listagg(PHONE_NO, ', ') as Phone
from CUSTOMER JOIN CUSTOMER_PHONE on CUSTOMER.CUSTOMER_ID=CUSTOMER_PHONE.CUSTOMER_ID
group by CUSTOMER.CUSTOMER_ID, name, email, gender, CUSTOMER.address.house || ', ' || CUSTOMER.address.street || ', ' || CUSTOMER.address.city, to_char(dob, 'dd-mm-yyyy'), floor(months_between(sysdate, dob)/12)
order by CUSTOMER.customer_id;



create table FEEDBACK(
    serial_no number generated by default as identity,
    feedback_subject varchar2(20) not null,
    f_date date,
    rating number,
    message varchar2(1000),
    customer_id number,

    constraint pk_serial_no primary key (serial_no),
    constraint fk_customer_id foreign key (customer_id) references CUSTOMER(customer_id) on delete set null
);

create or replace trigger feedback_increment
    before insert on FEEDBACK
    for each row
    begin
        select feedback_serial.nextval into :new.serial_no
        from DUAL;
    end;

create table DONATION(
    donation_no number generated by default as identity,
    name varchar2(20) not null,
    amount number not null,
    donation_date date,
    customer_id number,

    constraint pk_donation_no primary key (donation_no),
    constraint fk_d_customer_id foreign key (customer_id) references CUSTOMER(customer_id) on delete set null
);


create table DONATION_PHONE(
    donation_no number,
    phone_no varchar2(11),

    constraint number_length_3 check (length(phone_no)=11),
    constraint fk_don_id foreign key (donation_no) references DONATION(donation_no) on delete cascade
);



create table VETERINARIAN(
    vet_id number generated by default as identity,
    name varchar2(20) not null,
    email varchar2(50) not null,
    gender varchar2(10),
    address addr,
    dob date,
    salary number(10),
    qualification varchar2(20),
    password varchar2(30),

    constraint pass_check3 check ( length(password)>=4 ),
    constraint pk_vet_id primary key (vet_id)
);

create index vet_email
on VETERINARIAN(email);

create or replace trigger check_email_trigger_vet
    before insert on VETERINARIAN
    for each row
    declare
        valid boolean;
        already boolean:=false;
        cnt number;

        not_a_valid_email EXCEPTION ;
        pragma exception_init ( not_a_valid_email, -20001 );
        email_already_exists exception;
        pragma exception_init ( email_already_exists, -20002 );
    begin
        valid:=check_email(:new.email);

        select count(*) into cnt from VETERINARIAN where email=:new.email;

        if cnt>0 then
            already:=true;
        end if;

        if valid=false then
            raise_application_error(-20001, 'Not a valid email');
        end if;

        if already then
            raise_application_error(-20002, 'Email already exists');
        end if;
    end;

create table VET_PHONE(
    vet_id number,
    phone_no varchar2(11),

    constraint number_length_4 check ( length(phone_no)=11 ),
    constraint fk_veterinarian_id foreign key (vet_id) references VETERINARIAN(vet_id) on delete cascade
);

create table SHIFT(
    shift_name varchar2(20),
    start_time date not null,
    end_time date not null,

    constraint pk_shift_name primary key (shift_name)
);


create table WORKS_AT(
    vet_id number,
    shift_name varchar2(20),
    day varchar2(10),

    constraint fk_works_at_vet foreign key (vet_id) references VETERINARIAN(vet_id) on delete cascade,
    constraint fk_works_at_shift foreign key (shift_name) references SHIFT(shift_name) on delete cascade
);

create or replace view doctor_shift as
    select vet_id,name, listagg(day||': '||  shift_name || ' shift' ,';  ') "Duty"
from veterinarian natural join works_at
group by vet_id,name
order by vet_id;


create table RESCUER(
    rescuer_id number generated by default as identity,
    name varchar2(20) not null,

    constraint pk_rescuer_id primary key (rescuer_id)
);

create table RESCUER_PHONE(
    rescuer_id number,
    phone_no varchar2(11),

    constraint number_length_5 check ( length(phone_no)=11 ),
    constraint fk_resc_id foreign key (rescuer_id) references RESCUER(rescuer_id) on delete cascade
);


create table CABIN(
    cabin_no number generated by default as identity,
    cabin_size number not null,
    existing_quantity number not null,
    capacity number generated always as ( cabin_size-existing_quantity ),
    type varchar2(20),
    animal_type varchar2(20),

    constraint pk_cabin_no primary key (cabin_no)
);




create table HEALTH_RECORD(
    record_id number generated by default as identity,
    rabies varchar2(5),
    rabies_date date,
    flu varchar2(5),
    flu_date date,
    spay_neuter varchar2(5),
    animal_identifier varchar2(10) unique,

    constraint pk_record_id primary key (record_id)
);


create table DISEASES(
    health_record_id number,
    disease_name varchar2(20),

    constraint fk_hr_id foreign key (health_record_id) references HEALTH_RECORD(record_id) on delete cascade
);

create table RESCUED_ANIMAL(
    rescued_animal_id number generated by default as identity,
    age number not null,
    breed varchar2(20) not null,
    weight number not null,
    rate number not null,
    type varchar2(10) not null,
    rescued_from varchar2(10),
    is_adopted varchar2(5),
    adoption_date date,
    health_record_id number,
    cabin_no number,

    constraint pk_rescued_animal_id primary key (rescued_animal_id),
    constraint fk_health_record_id_1 foreign key (health_record_id) references HEALTH_RECORD(record_id) on delete cascade ,
    constraint fk_cabin_rescue foreign key (cabin_no) references CABIN(cabin_no) on delete cascade

);



create table DAYCARE_ANIMAL(
    daycare_animal_id number generated by default as identity,
    age number not null,
    breed varchar2(20) not null,
    weight number not null,
    rate number not null,
    type varchar2(10) not null,
    coming_date date not null,
    release_date date not null,
    cabin_no number,
    health_record_id number,
    customer_id number,


    constraint pk_daycare_animal_id primary key (daycare_animal_id),
    constraint fk_health_record_id foreign key (health_record_id) references HEALTH_RECORD(record_id) on delete cascade ,
    constraint fk_cabin_daycare foreign key (cabin_no) references CABIN(cabin_no) on delete cascade
);

create table CHECKUP_RESCUE(
    vet_id number,
    rescued_animal_id number,
    care_date date,

    constraint fk_checkup_rescue_to_vet foreign key (vet_id) references VETERINARIAN(vet_id) on delete set null,
    constraint fk_check_rescue_to_animal foreign key (rescued_animal_id) references RESCUED_ANIMAL(rescued_animal_id) on delete set null
);


create table CHECKUP_DAYCARE(
    vet_id number,
    daycare_animal_id number,
    care_date date,

    constraint fk_checkup_daycare_to_vet foreign key (vet_id) references VETERINARIAN(vet_id) on delete set null,
    constraint fk_check_daycare_to_animal foreign key (daycare_animal_id) references DAYCARE_ANIMAL(daycare_animal_id) on delete set null
);


create or replace view vet_view as
    select A.vet_id, A.name, A.checkup_count+B.checkup_count as "Total Checkups"
    from
        (select VETERINARIAN.vet_id, name, count(rescued_animal_id) as checkup_count
        from VETERINARIAN, CHECKUP_RESCUE
        where VETERINARIAN.vet_id=CHECKUP_RESCUE.vet_id(+)
        group by name, VETERINARIAN.vet_id
        ) A
    ,
    (select name, VETERINARIAN.vet_id, count(daycare_animal_id) as checkup_count
    from VETERINARIAN, CHECKUP_DAYCARE
    where VETERINARIAN.vet_id=CHECKUP_DAYCARE.vet_id(+)
    group by name, VETERINARIAN.vet_id) B
    where A.VET_ID=B.VET_ID;

create or replace view vet_v as
    select V.vet_ID, name, email, gender, V.address.house || ', ' || V.address.street || ', ' || V.address.city as Address, to_char(dob, 'dd-mm-yyyy') as "Date of Birth",
           floor(months_between(sysdate, dob)/12) as Age,salary, qualification, listagg(PHONE_NO, ', ') as Phone
    from VETERINARIAN V JOIN vet_PHONE on V.vet_ID=vet_PHONE.vet_ID
    group by V.vet_ID, name, email, gender, V.address.house || ', ' || V.address.street || ', ' || V.address.city, to_char(dob, 'dd-mm-yyyy'), floor(months_between(sysdate, dob)/12), salary, qualification
order by V.vet_id;



create table RESCUES(
    rescuer_id number,
    rescued_animal_id number,
    rescue_date date not null,

    constraint fk_rescuer_id foreign key (rescuer_id) references RESCUER(rescuer_id) on delete cascade,
    constraint fk_rescued_animal_id foreign key (rescued_animal_id) references RESCUED_ANIMAL(rescued_animal_id) on delete cascade
);


create table PENDING_ANIMAL(
    animal_identifier varchar2(10),
    request_date date,

    constraint pk_pending primary key (animal_identifier)
);


create or replace trigger insert_daycare_to_pending
    after insert on DAYCARE_ANIMAL
    for each row
declare
    temp_animal_id number;
    temp_animal_identifier varchar2(10);
begin
    temp_animal_id:=:new.daycare_animal_id;
    temp_animal_identifier:='d_'||temp_animal_id;

    insert into PENDING_ANIMAL (animal_identifier, request_date) values (temp_animal_identifier, to_date(to_char(sysdate, 'dd-mm-yyyy'), 'dd-mm-yyyy'));
end;

create or replace trigger insert_rescued_to_pending
    after insert on RESCUED_ANIMAL
    for each row
declare
    temp_animal_id number;
    temp_animal_identifier varchar2(10);
begin
    temp_animal_id:=:new.rescued_animal_id;
    temp_animal_identifier:='r_'||temp_animal_id;

    insert into PENDING_ANIMAL (animal_identifier, request_date) values (temp_animal_identifier, to_date(to_char(sysdate, 'dd-mm-yyyy'), 'dd-mm-yyyy'));
end;




create or replace trigger update_animal_trigger
    after insert on HEALTH_RECORD
    for each row
declare
    temp_animal_id number;
    temp_animal_type varchar2(10);
    healthy varchar2(15);
    found boolean:=false;

    not_enough_space_in_cabin EXCEPTION ;
begin
    temp_animal_id:=to_number(substr(:new.animal_identifier,3));

    if upper(:new.rabies)='YES' and upper(:new.flu)='YES' then
        healthy:='healthy';
    else
        healthy:='unvaccinated';
    end if;

    if :NEW.animal_identifier like 'd%'  then
        update DAYCARE_ANIMAL
            set health_record_id=:NEW.record_id
        where daycare_animal_id=temp_animal_id;

        select type into temp_animal_type
        from DAYCARE_ANIMAL
        where daycare_animal_id=temp_animal_id;

        for i in (select * from CABIN where lower(type)=healthy)
        loop
            if i.capacity>0 and upper(i.animal_type)=upper(temp_animal_type) then
                update DAYCARE_ANIMAL
                    set cabin_no=i.cabin_no
                where daycare_animal_id=temp_animal_id;

                update CABIN
                    set EXISTING_QUANTITY=existing_quantity+1
                where CABIN_NO=i.cabin_no;
                found:=true;

                exit;
            end if;
        end loop;

    elsif :new.animal_identifier like 'r%' then
        update RESCUED_ANIMAL
            set health_record_id=:NEW.record_id
        where rescued_animal_id=temp_animal_id;

        select type into temp_animal_type
        from RESCUED_ANIMAL
        where rescued_animal_id=temp_animal_id;

        for i in (select * from CABIN where lower(type)=healthy)
        loop
            if i.capacity>0 and upper(i.animal_type)=upper(temp_animal_type) then
                update RESCUED_ANIMAL
                    set cabin_no=i.cabin_no
                where rescued_animal_id=temp_animal_id;

                update CABIN
                    set EXISTING_QUANTITY=existing_quantity+1
                where CABIN_NO=i.cabin_no;
                found:=true;
                exit;
            end if;
        end loop;
    end if;

    if not found then
        raise not_enough_space_in_cabin;
    else
         delete from PENDING_ANIMAL where animal_identifier=:new.animal_identifier;
    end if;

    exception
        when not_enough_space_in_cabin then
            raise_application_error(-20001, 'Not enough space in cabin.');
end;




create or replace trigger update_disease_trigger
    after insert on DISEASES
    for each row
declare
    temp_id varchar2(10);
    temp_cabin_no number;
    temp_cabin_type varchar2(15);
    temp_animal_type varchar2(15);
    animal_id number;
    found boolean:=false;

    cursor iso_cabin is
    select * from CABIN where lower(type)='isolated';

    iso_table_row iso_cabin%rowtype;

    not_enough_space_in_cabin EXCEPTION ;
begin
    select animal_identifier into temp_id
    from HEALTH_RECORD
    where record_id=:new.health_record_id;

    animal_id:=to_number(substr(temp_id, 3));

    open iso_cabin;

    if temp_id like 'd%' then
        select cabin_no, type into temp_cabin_no, temp_animal_type
        from DAYCARE_ANIMAL
        where daycare_animal_id=animal_id;

        select type into temp_cabin_type
        from CABIN
        where cabin_no=temp_cabin_no;

        if temp_cabin_type!='isolated' then
            update CABIN
            set EXISTING_QUANTITY=existing_quantity-1
            where CABIN_NO=temp_cabin_no;

            loop
                fetch iso_cabin into iso_table_row;
                exit when iso_cabin%NOTFOUND;

                if iso_table_row.capacity>0 and upper(iso_table_row.animal_type)=upper(temp_animal_type) then
                    update DAYCARE_ANIMAL
                        set cabin_no=iso_table_row.cabin_no
                    where daycare_animal_id=animal_id;

                    update CABIN
                        set EXISTING_QUANTITY=existing_quantity+1
                    where CABIN_NO=iso_table_row.cabin_no;
                    found:=true;
                    exit;
                end if;
            end loop;
        else
            found:=true;
        end if;

    elsif temp_id like 'r%' then
        select cabin_no, type into temp_cabin_no, temp_animal_type
        from RESCUED_ANIMAL
        where rescued_animal_id=animal_id;

        select type into temp_cabin_type
        from CABIN
        where cabin_no=temp_cabin_no;

        if lower(temp_cabin_type)!='isolated' then
            update CABIN
            set EXISTING_QUANTITY=existing_quantity-1
            where CABIN_NO=temp_cabin_no;

            loop
                fetch iso_cabin into iso_table_row;
                exit when iso_cabin%NOTFOUND;

                if iso_table_row.capacity>0 and upper(iso_table_row.animal_type)=upper(temp_animal_type) then
                    update RESCUED_ANIMAL
                        set cabin_no=iso_table_row.cabin_no
                    where rescued_animal_id=animal_id;

                    update CABIN
                        set EXISTING_QUANTITY=existing_quantity+1
                    where CABIN_NO=iso_table_row.cabin_no;
                    found:=true;
                    exit;
                end if;
            end loop;
        else
            found:=true;
        end if;
    end if;

    close iso_cabin;

    if not found then
        raise not_enough_space_in_cabin;
    end if;
    exception
        when not_enough_space_in_cabin then
            raise_application_error(-20001, 'Not enough space in cabin.');
end;



create table login(
    serial number generated by default as identity ,
    email varchar2(50) ,
    user_type varchar2(20),
    status number(1),

    constraint pk_login primary key (serial)
);

CREATE OR REPLACE TRIGGER login_status
    BEFORE INSERT ON LOGIN
    FOR EACH ROW
DECLARE
    permit NUMBER:=0;
    cnt number;
    user_already_logged_in EXCEPTION;
    PRAGMA EXCEPTION_INIT(user_already_logged_in, -20003);
BEGIN
    select count(*) into cnt from LOGIN;

    if cnt>0 then
        SELECT status INTO permit
        FROM LOGIN
        WHERE serial = (SELECT MAX(serial) FROM LOGIN);
    end if;

    IF permit != 0 THEN
        RAISE user_already_logged_in;
    END IF;

EXCEPTION
    WHEN user_already_logged_in THEN
        raise_application_error(-20003, 'User already logged in');
END;


-- commit ;