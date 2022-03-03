After upgrading your CrafterCMS install, you will need to recreate the Solr cores and reindex all content.

For Authoring environments, use the following commands to upgrade the Preview cores:

#.  Delete the existing core.
    
    .. code-block:: bash
      :linenos:
    
      curl --request POST \
        --url http://localhost:8080/crafter-search/api/2/admin/index/delete/SITE_NAME

#.  Create the new core.
    
    .. code-block:: bash
      :linenos:

      curl --request POST \
        --url http://localhost:8080/crafter-search/api/2/admin/index/create \
        --header 'content-type: application/json' \
        --data '{
        "id": "SITE_NAME-preview"
      }'

#.  Reindex all content.
    
    .. code-block:: bash
      :linenos:
    
      curl --request POST \
        --url http://localhost:9191/api/1/target/deploy/preview/SITE_NAME \
        --header 'content-type: application/json' \
        --data '{
        "reprocess_all_files": true
      }'

For Delivery environments that can have downtime during the upgrade you can use the following commands:

#.  Delete the existing core.
    
    .. code-block:: bash
      :linenos:
    
      curl --request POST \
        --url http://localhost:9080/crafter-search/api/2/admin/index/delete/SITE_NAME

#.  Create the new core.
    
    .. code-block:: bash
      :linenos:

      curl --request POST \
        --url http://localhost:9080/crafter-search/api/2/admin/index/create \
        --header 'content-type: application/json' \
        --data '{
        "id": "SITE_NAME"
      }'

#.  Reindex all content.
    
    .. code-block:: bash
      :linenos:
    
      curl --request POST \
        --url http://localhost:9192/api/1/target/deploy/default/SITE_NAME \
        --header 'content-type: application/json' \
        --data '{
        "reprocess_all_files": true
      }'

For Delivery environments that cannot have downtime you can follow the guide for :ref:`reindexing-content-in-prod`