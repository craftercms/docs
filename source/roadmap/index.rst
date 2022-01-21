:is-up-to-date: True

.. index:: Roadmap

.. _roadmap:

=======
Roadmap
=======

The detailed roadmap is maintained in our issue planning and tracking system, and you can find that here: https://github.com/craftercms/craftercms/milestones

At a high-level, we're pursuing the objectives listed below in order:

* Crafter Engine features
	- Engine Plugin Marketplace: Pull in widgets for your app from the marketplace
	- Direct integration with Node JS
* Crafter Studio features
	- Crafter Studio Marketplace: Pull in authoring extensions for your site from the marketplace
	- New Sidebar navigator
	- Enhanced site translation mechanics
	- Direct management of Node JS scripts and artifacts
	- Page Builder: Improved in-context editing including
		- In-place editing
		- Out of the box and marketplace components
		- Improved drag and drop mechanics
	- Schedule an item for publishing and continue editing it (specific-version publishing)
	- Recycle Bin and improved delete mechanics
	- Time-travel mechanics to preview sites across time
	- Integrate Crafter Profile Admin and Crafter Social Admin directly into Crafter Studio

Recently Completed
------------------

* Enhanced Preview Proxy to connect to any remote server as the preview server
	- This allows easier authoring of sites built with other programming languages and technologies
* Managed Blob Stores
	- Manage external blob stores (S3) assets as if they're Crafter CMS assets with full workflow and multi-environment support
* GraphQL
	- Query content in Engine via GraphQL
	- GraphQL extensions: You can now change the GraphQL response and add in data from other sources with a small groovy script. GraphQL now pulls back data from Crafter CMS or other sources, and you can override whatever you like.
* Elasticsearch
	- Solr is no longer supported as of Crafter CMS 4.0.0
	- Full support for AWS Elasticsearch
* Serverless Crafter CMS
	- Full support for Kubernetes clustering vanilla or AWS EKS
	- Crafter Engine backed by AWS S3 (or compatible services)
	- Crafter CMS provided Docker images
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
