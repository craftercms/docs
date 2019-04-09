After upgrading your Crafter CMS install, you will need to recreate the Solr cores and reindex all content.

For environments that can have downtime during the upgrade you can use the following commands:

#.  Delete the existing core
    
    .. code-block:: bash
      :linenos:
    
      curl --request POST \
        --url http://localhost:8080/crafter-search/api/2/admin/index/delete/SITE_NAME

#.  Create the new core
    
    .. code-block:: bash
      :linenos:

      curl --request POST \
        --url http://localhost:8080/crafter-search/api/2/admin/index/create \
        --header 'content-type: application/json' \
        --data '{
        "id": "SITE_NAME"
      }'

#.  Reindex all content
    
    .. code-block:: bash
      :linenos:
    
      curl --request POST \
        --url http://localhost:9191/api/1/target/deploy/preview/SITE_NAME \
        --header 'content-type: application/json' \
        --data '{
        "reprocess_all_files": true
        }'

For environments that cannot have downtime you can follow the guide for :ref:`reindexing-content-in-prod`