#!/bin/bash
set -e

pg_restore -c -U docker --dbname=docker /var/tmp/TestDatabase.sql
