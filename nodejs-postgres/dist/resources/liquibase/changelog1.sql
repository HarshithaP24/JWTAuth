-- Table: public.eg_test_userrole_v1

-- DROP TABLE public.eg_test_userrole_v1;

CREATE TABLE IF NOT EXISTS public.eg_test_userrole_v1
(
    role_code character varying(50) COLLATE pg_catalog."default",
    role_tenantid character varying(256) COLLATE pg_catalog."default",
    user_id bigint,
    user_tenantid character varying(256) COLLATE pg_catalog."default",
    lastmodifieddate timestamp without time zone,
    CONSTRAINT fk_user_role_v1 FOREIGN KEY (user_id, user_tenantid)
        REFERENCES public.eg_user (id, tenantid) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.eg_test_userrole_v1
    OWNER to egov_demo;
-- Index: idx_eg_test_userrole_v1_rolecode

-- DROP INDEX public.idx_eg_test_userrole_v1_rolecode;

CREATE INDEX idx_eg_test_userrole_v1_rolecode
    ON public.eg_test_userrole_v1 USING btree
    (role_code COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: idx_eg_test_userrole_v1_roletenantid

-- DROP INDEX public.idx_eg_test_userrole_v1_roletenantid;

CREATE INDEX idx_eg_test_userrole_v1_roletenantid
    ON public.eg_test_userrole_v1 USING btree
    (role_tenantid COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: idx_eg_test_userrole_v1_userid

-- DROP INDEX public.idx_eg_test_userrole_v1_userid;

CREATE INDEX idx_eg_test_userrole_v1_userid
    ON public.eg_test_userrole_v1 USING btree
    (user_id ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: idx_eg_test_userrole_v1_usertenantid

-- DROP INDEX public.idx_eg_test_userrole_v1_usertenantid;

CREATE INDEX idx_eg_test_userrole_v1_usertenantid
    ON public.eg_test_userrole_v1 USING btree
    (user_tenantid COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;