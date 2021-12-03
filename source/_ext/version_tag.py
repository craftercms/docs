"""
Sphinx extension to insert 'since' and 'last updated' tags.

USAGE:
  .. version_tag::
    :label: Version
    :version: 3.1.0

"""
from docutils import nodes, utils
from docutils.nodes import Body, Element
from docutils.parsers.rst import directives

from sphinx.util.nodes import set_source_info
from docutils.parsers.rst import Directive, directives

class versionTag(Body, Element):
   pass

class VersionTag(Directive):

    has_content = False
    optional_arguments = 0
    final_argument_whitespace = False
    option_spec = {
      'label': directives.unchanged,
      'version': directives.unchanged
    }

    def run(self):
        node = versionTag()
        node['label'] = self.options['label']
        node['version'] = self.options['version']
        return [node]

def html_version(self, node):
    template= """
<span class="version-tag inline">
  <span class="version__label">%(label)s</span>
  <span class="version__number">%(version)s</span>
</span>
"""
    self.body.append(template%{'version': node['version'], 'label': node['label']})
    raise nodes.SkipNode


def setup(app):
    app.add_node(versionTag,
                 html=(html_version, None))

    app.add_directive('version_tag', VersionTag)