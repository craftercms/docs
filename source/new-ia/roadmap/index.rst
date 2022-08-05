:is-up-to-date: True
:nosearch:

.. index:: Roadmap

.. _newIa-roadmap:

=======
Roadmap
=======

The detailed roadmap is maintained in our issue planning and tracking system, and you can find that here: https://github.com/craftercms/craftercms/milestones

At a high-level, we're pursuing the objectives listed below in order:

* Update all documentation to flow better and address use-cases more directly
* New dashboard system and new dashboards
* Content Modeling Tool: Modernize the content modeling tools
* Form Engine: Rewrite the form engine
* Improve Experience Builder (XB) support for SPA (React, Vue, Angular)
* Add Recycle Bin to the authoring system

Recently Completed
------------------

* Crafter Studio features
	- New Sidebar navigator
	- Page Builder: Improved in-context editing including
		- In-place editing
		- Out of the box and marketplace components
		- Improved drag and drop mechanics
	- Time-travel mechanics to preview sites across time
* Crafter Studio Marketplace: Pull in authoring extensions for your site from the marketplace
* Engine Plugin Marketplace: Pull in widgets for your app from the marketplace
* Enhanced Preview Proxy to connect to any remote server as the preview server
	- This allows easier authoring of sites built with other programming languages and technologies
* Managed Blob Stores
	- Manage external blob stores (S3) assets as if they're CrafterCMS assets with full workflow and multi-environment support
* GraphQL
	- Query content in Engine via GraphQL
	- GraphQL extensions: You can now change the GraphQL response and add in data from other sources with a small groovy script. GraphQL now pulls back data from CrafterCMS or other sources, and you can override whatever you like.
* Elasticsearch
       - Becomes the default search engine (Solr is no longer supported as of CrafterCMS v4.0)
* Serverless CrafterCMS
	- Full support for Kubernetes clustering vanilla or AWS EKS
	- Crafter Engine backed by AWS S3 (or compatible services)
	- CrafterCMS provided Docker images
	- Search is provided by Elasticsearch and is scaled separately
* SPA Support I
	- New JS library: basic JS all the way to Redux: https://www.npmjs.com/settings/craftercms/packages example application: https://github.com/craftercms/video-center-blueprint
	- Node JS integration
	- React JS integration and seamless development
	- Angular integration and seamless development
* SPA Support II
	- ICE (In-Context Editing) Pencils for React JS and Angular
	- Drag and Drop for React, Angular, and Vue
	- Example: https://github.com/craftercms/wordify-blueprint
* Crafter Studio features
	- Crafter Studio UI enhancements using React components that weave in
	- Crafter Studio Marketplace for blueprints and new blueprints
	- Advanced clustering for the authoring environment
	- New search backend based on Elasticsearch for better search in authoring
	- Advanced Git workflow mechanics
		- Specify a branch per site
		- Add remote repositories and pull/push from the GUI
	- Added support for a staging waypoint (an environment where you can stage your project before pushing it to production)
	- S3 connector for uploading large media assets
	- Box connector for uploading/linking to Box assets
	- WebDAV connector for uploading/linking to WebDAV assets
	- AWS Media Services integration for video processing (upload, transcode, stream ABR video)
* Crafter Engine
	- URL Rewrite a la Apache mod_rewrite using http://tuckey.org/urlrewrite/ (this is different from Crafter's URL Transformation Engine)