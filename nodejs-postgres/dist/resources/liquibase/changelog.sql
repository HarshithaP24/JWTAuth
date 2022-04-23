-- Table: public.eg_test_user_table

-- DROP TABLE public.eg_test_user_table;

CREATE TABLE IF NOT EXISTS public.eg_test_user_table
(
    title character varying(8) COLLATE pg_catalog."default",
    salutation character varying(5) COLLATE pg_catalog."default",
    dob timestamp without time zone,
    locale character varying(16) COLLATE pg_catalog."default",
    username character varying(180) COLLATE pg_catalog."default" NOT NULL,
    password character varying(64) COLLATE pg_catalog."default" NOT NULL,
    pwdexpirydate timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    mobilenumber character varying(150) COLLATE pg_catalog."default",
    altcontactnumber character varying(150) COLLATE pg_catalog."default",
    emailid character varying(300) COLLATE pg_catalog."default",
    createddate timestamp without time zone,
    lastmodifieddate timestamp without time zone,
    createdby bigint,
    lastmodifiedby bigint,
    active boolean,
    name character varying(500) COLLATE pg_catalog."default",
    gender smallint,
    pan character varying(65) COLLATE pg_catalog."default",
    aadhaarnumber character varying(85) COLLATE pg_catalog."default",
    type character varying(50) COLLATE pg_catalog."default",
    version numeric DEFAULT 0,
    guardian character varying(500) COLLATE pg_catalog."default",
    guardianrelation character varying(32) COLLATE pg_catalog."default",
    signature character varying(36) COLLATE pg_catalog."default",
    accountlocked boolean DEFAULT false,
    bloodgroup character varying(32) COLLATE pg_catalog."default",
    photo character varying(36) COLLATE pg_catalog."default",
    identificationmark character varying(300) COLLATE pg_catalog."default",
    tenantid character varying(256) COLLATE pg_catalog."default" NOT NULL,
    id bigint NOT NULL,
    uuid character(36) COLLATE pg_catalog."default",
    accountlockeddate bigint,
    CONSTRAINT eg_test_user_table_pkey PRIMARY KEY (id, tenantid),
    CONSTRAINT eg_test_user_table_user_name_tenant UNIQUE (username, type, tenantid)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.eg_test_user_table
    OWNER to egov_demo;
-- Index: idx_eg_test_user_table_active

-- DROP INDEX public.idx_eg_test_user_table_active;

CREATE INDEX idx_eg_test_user_table_active
    ON public.eg_test_user_table USING btree
    (active ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: idx_eg_test_user_table_mobile

-- DROP INDEX public.idx_eg_test_user_table_mobile;

CREATE INDEX idx_eg_test_user_table_mobile
    ON public.eg_test_user_table USING btree
    (mobilenumber COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: idx_eg_test_user_table_name

-- DROP INDEX public.idx_eg_test_user_table_name;

CREATE INDEX idx_eg_test_user_table_name
    ON public.eg_test_user_table USING btree
    (name COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: idx_eg_test_user_table_tenantid

-- DROP INDEX public.idx_eg_test_user_table_tenantid;

CREATE INDEX idx_eg_test_user_table_tenantid
    ON public.eg_test_user_table USING btree
    (tenantid COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: idx_eg_test_user_table_type

-- DROP INDEX public.idx_eg_test_user_table_type;

CREATE INDEX idx_eg_test_user_table_type
    ON public.eg_test_user_table USING btree
    (type COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: idx_eg_test_user_table_username

-- DROP INDEX public.idx_eg_test_user_table_username;

CREATE INDEX idx_eg_test_user_table_username
    ON public.eg_test_user_table USING btree
    (username COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: idx_eg_test_user_table_uuid

-- DROP INDEX public.idx_eg_test_user_table_uuid;

CREATE INDEX idx_eg_test_user_table_uuid
    ON public.eg_test_user_table USING btree
    (uuid COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;