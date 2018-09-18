=======
Roadmap
=======

The detailed roadmap is maintained in our issue planning and tracking system, and you can find that here: https://github.com/craftercms/craftercms/milestones

At a high-level, we're pursuing the objectives listed below in order:

* SPA Support II
	- ICE (In-Context Editing) Pencils for React JS and Angular
	- Drag and Drop for React JS and Angular
* Crafter Studio features
	- Schedule an item for publishing and continue editing it (specific-version publishing)
	- Improved delete mechanics
	- Improved in-context editing including better drag and drop mechanics
	- Crafter Studio Marketplace for blueprints and new blueprints
	- Time-travel mechanics to preview sites across time
	- Crafter Studio UI NG (next generation UI for Crafter Studio built on Angular, code is here: https://github.com/craftercms/studio-ui-ng)
	- Integrate Crafter Profile Admin and Crafter Social Admin directly into Crafter Studio
* AWS Elastic Search support OOtB

Recently Completed
------------------

* SPA Support I
	- New JS library: basic JS all the way to Redux: https://www.npmjs.com/settings/craftercms/packages example application: https://github.com/craftercms/video-center-blueprint 
	- Node JS integration
	- React JS integration and seamless development
	- Angular integration and seamless development
* Crafter Studio features
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
