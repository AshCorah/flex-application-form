SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;
CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;
COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';
SET default_tablespace = '';
SET default_with_oids = false;

CREATE TABLE public."Applications" (
    "firstname" character varying,
    "surname" character varying NOT NULL,
    "cv" character varying NOT NULL
);

ALTER TABLE public."Applications" OWNER TO docker;

REVOKE ALL ON TABLE public."Applications" FROM PUBLIC;
REVOKE ALL ON TABLE public."Applications" FROM docker;
GRANT ALL ON TABLE public."Applications" TO docker;
GRANT SELECT ON TABLE public."Applications" TO docker;
GRANT SELECT ON TABLE public."Applications" TO docker;
GRANT SELECT ON TABLE public."Applications" TO docker;