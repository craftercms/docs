
+-----------------+------------+-----------------------------------------------------------------+
|| Scope  || Category  || Permission || Description                                              |
+=================+============+=================================================================+


Global
Global>User
global_read_users
global_create_user   
global_edit_user
global_delete_user

Global>Project
global_read_projects
global_create_project
global_delete_project
global_edit_project

Global>Deployer
global_deployer_list
global_deployer_assign
global_deployer_remove


Organization>Project
org_create_project
org_edit_project
org_delete_project
org_duplicate_project

Organization>User
org_list_users
org_create_user
org_edit_user
org_delete_user

Org>Group
org_list_groups
org_create_group
org_edit_group
org_delete_group
org_assign_user_to_group
org_remove_user_from_group

Project>Role
project_list_roles
project_create_role
project_edit_role
project_delete_role
project_assign_role_to_group
project_remove_role_from_group

Project>Content
project_read_content
project_create_content
project_edit_content
project_delete_content
project_duplicate_content
project_move_content: Permission to move + read source, write destination, delete source: 3 perms + 3 regexes
project_copy_content: Permission to copy + read source, write destination: 2 perms + 2 regexes
project_change_content_type
project_create_folder
project_rename_folder
project_delete_folder
project_move_folder
project_copy_folder
project_duplicate_folder
project_revert_content
project_list_version_history
Project_list_dependencies

Project>Publish
project_publish_immediate
project_publish_scheduled
project_publish_via_workflow_immediate
project_publish_via_workflow_scheduled
project_publish_env_list
project_publish_env_create
project_publish_env_edit
project_publish_env_delete
project_publish_env_duplicate
project_publish_env_deployer_list
project_publish_env_deployer_assign
project_publish_env_deployer_remove



publishtoenv scope env:x

create env
edit env
delete env
list env

deployer perms

project_create_content_type
edit
delete


Project>User
Project>User
Project>User



Policy
{
	"Version" : "2017-04-14",
	"Statement" : [
		{
			"Effect" : "Allow",
			"Actions" : [
				"project:PublishImmediate",
				"project:PublishScheduled"
			],
			"Resource" : "urn:studio:project:mysite::\*"
		},
		{
			"Effect" : "Allow",
			"Actions" : [
				"project:read",
				"project:write",
				"project:delete",
				"project:duplicate",
				"project:move",
				"project:copy",
				"project:read_audit",
			],
			"Resource" : "urn:studio:project:mysite::\*"
		}
	]
}

urn:SUB-SYSTEM:SYSTEM OR PROJECT:NAME OF PROJECT:CONCERN OF PROJECT:PATH
urn:system:project:function:path

arn:partition:service:region:account-id:resource
arn:partition:service:region:account-id:resourcetype/resource
arn:partition:service:region:account-id:resourcetype:resource

can a user be assigned a role?
can a user be assigned a permission?












