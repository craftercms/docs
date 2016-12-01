===================
Backup and Recovery
===================

A hot backup should comprise of the following steps:
    * Backup Search Indexes (alf_data/solrBackup or alf_data/backup-lucene-indexes)
    * Backup SQL
    * Backup files (alf_data/contentstore, alf_data/contentstore.deleted)


.. note::  These steps should occur in this order, and should NOT overlap, otherwise the system could get in a corrupt state when restored from the backup. The backed up artifacts from step 1 through 3 should then be stored as a package, so that it can easily restored should this become necessary in the future.

As you can see above, there are data stores behind Crafter CMS that need to get backed up.  All of these stores are standard disk or database stores that can be backed up and managed with off-the-shelf enterprise backup packages.

----------------------
Scheduled Task / CRON
----------------------

By default you will set up your backup process to execute at 4AM. This is based on the fact that Alfresco backs up its search indexes every day at 3:00am.
Create / Clear your temporary backup location
Create a location where you will store the components of your backup. Inside that location create folders:
* Search Indexes
* metadata (SQL database)
* content (CMS repository)
* Solr or Lucene Backup

-------
Indexes
-------
On the Alfresco instance, most Crafter Studio installations are configured to use the Solr search engine,
with alf_data/solrBackup as its index backup folder. Those configured to use the Lucene search engine, the index backup
folder is alf_data/backup-lucene-indexes. Either folder contains daily backup created by Alfresco via scheduled job within
the running application that creates backups daily at 3:00 AM.

To backup the search index, move the contents of the alf_data/solrBackup or alf_data/backup-lucene-indexes directory to your temporary index backup location.

----------
SQL Backup
----------
Once the search index backup is completed, dump your database (metadata) to disk and move the dump to your temporary backup location/metadata.

--------------
Content backup
--------------

Once metadata have been stored, copy the contents of your repository (alf_data/contentstore, alf_data/contentstore.deleted) to your temporary backup location/content
Compress and store
Compress the temporary location

Initiate a backup management system to collect the new backup asset or store the compressed backup in a safe location according to your retention policies.

------------
Files Backup
------------

Once the database export has been transferred into the backup files location, the script will then use rsync to backup the alf_data/contentstore and alf_data/contentstore.deleted directories to a temporary backup location.
