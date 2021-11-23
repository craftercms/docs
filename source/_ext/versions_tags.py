"""
Sphinx extension to insert 'since' and 'last updated' tags.

USAGE:
  .. versions_tags::
    :since-version: 3.1.0
    :last-updated: 3.1.18

"""
from docutils import nodes, utils
from docutils.nodes import Body, Element
from docutils.parsers.rst import directives

from sphinx.util.nodes import set_source_info
from docutils.parsers.rst import Directive, directives

class versions(Body, Element):
   pass

class Versions(Directive):

    has_content = False
    optional_arguments = 1
    final_argument_whitespace = False
    option_spec = {
      'since-version': directives.unchanged,
      'last-updated': directives.unchanged,
      'float-right': directives.unchanged
    }

    def run(self):
        node = versions()
        node['since-version'] = self.options['since-version']
        node['last-updated'] = self.options['last-updated']
        return [node]

def html_versions(self, node):
    template= """
<span class="versions_tags inline">
  <span class="version">
    <span class="version__label">Since</span>
    <span class="version__number">%(since-version)s</span>
  </span>
  <span class="version">
    <span class="version__label">Updated on</span>
    <span class="version__number">%(last-updated)s</span>
  </span>
</span>
"""
    self.body.append(template%{'since-version': node['since-version'], 'last-updated': node['last-updated']})
    raise nodes.SkipNode


def setup(app):
    app.add_node(versions,
                 html=(html_versions, None))

    app.add_directive('versions_tags', Versions)