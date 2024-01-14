--select tables generation
select 'select * from '||table_NAME||';' from USER_TABLES;
select * from LOGIN order by SERIAL;
select * from WORKS_AT;
select * from RESCUER;
select * from RESCUER_PHONE;
select * from CABIN order by CABIN_NO;
select * from HEALTH_RECORD;
select * from DISEASES;
select * from RESCUED_ANIMAL;
select * from DAYCARE_ANIMAL;
select * from CHECKUP_RESCUE;
select * from CHECKUP_DAYCARE;
select * from RESCUES;
select * from PENDING_ANIMAL;
select * from ADMIN;
select * from ADMIN_PHONE;
select * from STAFF;
select * from STAFF_PHONE;
select * from CUSTOMER;
select * from CUSTOMER_PHONE;
select * from FEEDBACK;
select * from DONATION;
select * from DONATION_PHONE;
select * from VETERINARIAN;
select * from VET_PHONE;
select * from SHIFT;


update login set status=0 where  serial=41;

select STATUS from LOGIN where serial=(select max(serial) from login);

--drop tables generation
select 'drop table '||table_name||' cascade constraints;' from user_tables;
drop table ADMIN cascade constraints;
drop table ADMIN_PHONE cascade constraints;
drop table STAFF cascade constraints;
drop table STAFF_PHONE cascade constraints;
drop table CUSTOMER cascade constraints;
drop table CUSTOMER_PHONE cascade constraints;
drop table FEEDBACK cascade constraints;
drop table DONATION cascade constraints;
drop table DONATION_PHONE cascade constraints;
drop table VETERINARIAN cascade constraints;
drop table VET_PHONE cascade constraints;
drop table SHIFT cascade constraints;
drop table WORKS_AT cascade constraints;
drop table RESCUER cascade constraints;
drop table RESCUER_PHONE cascade constraints;
drop table CABIN cascade constraints;
drop table HEALTH_RECORD cascade constraints;
drop table DISEASES cascade constraints;
drop table RESCUED_ANIMAL cascade constraints;
drop table DAYCARE_ANIMAL cascade constraints;
drop table CHECKUP_RESCUE cascade constraints;
drop table CHECKUP_DAYCARE cascade constraints;
drop table RESCUES cascade constraints;
drop table login;



--drop view
select 'drop view '||VIEW_NAME||';' from USER_VIEWS;
drop view ADMIN_VIEW;
drop view CUSTOMER_VIEW;
drop view VET_VIEW;
drop view DOCTOR_SHIFT;
drop view STAFF_VIEW;
drop view VET_V;
drop view SHIFT_VIEW;
drop view CABIN_INFO;
drop view DAYCARE_ANIMAL_HISTORY;
drop view RESCUED_ANIMAL_HISTORY;
drop view CUSTOMER_ANIMAL_CABIN;
drop view CUSTOMER_DONATION;
drop view NON_CUSTOMER_DONATION;
drop view FEEDBACK_VIEW;
drop view HEALTHY_DAYCARE_ANIMAL;
drop view HEALTHY_RESCUED_ANIMAL;
drop view UNVACCINATED_DAYCARE_ANIMAL;
drop view UNVACCINATED_RESCUED_ANIMAL;
drop view ISOLATED_DAYCARE_ANIMAL;
drop view ISOLATED_RESCUED_ANIMAL;
drop view RESCUER_ANIMAL_CABIN;
drop view STAFF_SPECIALIZATION;
drop view STAFF_REVIEW;
drop view ADMIN_REVIEW;
drop view MANAGER_REVIEW;
drop view SERVICE_REVIEW;
drop view VETERINARIAN_REVIEW;
drop view AVERAGE_RATING;
drop view RESCUE_INFO;
drop view TOTAL_DAYCARE_SERVICES;
drop view CUSTOMER_PRICING;
drop view VET_ANIMAL;
drop view DONATION_VIEW;



--drop function and type
drop function CHECK_EMAIL;
drop function  CHECK_PHONE;
drop type ADDR;
drop SEQUENCE feedback_serial;



--all views generation
select 'select * from '||VIEW_NAME||';' from USER_VIEWS;
select * from ADMIN_VIEW;
select * from STAFF_VIEW;
select * from CUSTOMER_VIEW;
select * from DOCTOR_SHIFT;
select * from VET_VIEW;
select * from CABIN_INFO;
select * from DAYCARE_ANIMAL_HISTORY;
select * from RESCUED_ANIMAL_HISTORY;
select * from CUSTOMER_DONATION;
select * from NON_CUSTOMER_DONATION;
select * from FEEDBACK_VIEW;
select * from HEALTHY_DAYCARE_ANIMAL;
select * from HEALTHY_RESCUED_ANIMAL;
select * from UNVACCINATED_DAYCARE_ANIMAL;
select * from UNVACCINATED_RESCUED_ANIMAL;
select * from ISOLATED_DAYCARE_ANIMAL;
select * from ISOLATED_RESCUED_ANIMAL;
select * from RESCUER_ANIMAL_CABIN;
select * from CUSTOMER_ANIMAL_CABIN;
select * from STAFF_SPECIALIZATION;
select * from STAFF_REVIEW;
select * from ADMIN_REVIEW;
select * from MANAGER_REVIEW;
select * from SERVICE_REVIEW;
select * from VETERINARIAN_REVIEW;
select * from AVERAGE_RATING;
select * from RESCUE_INFO;
select * from TOTAL_DAYCARE_SERVICES;
select * from CUSTOMER_PRICING;
select * from VET_ANIMAL;
select * from SHIFT_VIEW;
select * from DONATION_VIEW;
select * from VET_V;
select * from POSITIVE_FEEDBACK;
select * from NEGATIVE_FEEDBACK;
select * from DAYCARE_ANIMAL_RECORD_VIEW;
select * from RESCUED_ANIMAL_RECORD_VIEW;
select * from CUST_RESCUER;
select * from ALL_GEN_ADMIN_VIEW;
select * from ALL_GEN_VET_V;
select * from ALL_GEN_STAFF_VIEW;


commit ;