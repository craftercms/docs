"""
Sphinx extension to show a modal with an iframe as the content, providing the url.
USAGE:
  .. open_in_new_tab_button::
    :label: Open In New Tab
    :url: /url/to/page
"""

from docutils import nodes, utils
from docutils.nodes import Body, Element
from docutils.parsers.rst import directives

from sphinx.util.nodes import set_source_info
from docutils.parsers.rst import Directive, directives

class openIframeModalButton(Body, Element):
   pass

class OpenIframeModalButton(Directive):

    has_content = False
    optional_arguments = 0
    final_argument_whitespace = False
    option_spec = {
      'label': directives.unchanged,
      'url': directives.unchanged,
      'title': directives.unchanged
    }

    def run(self):
        node = openIframeModalButton()
        node['label'] = self.options['label']
        node['url'] = self.options['url']
        node['title'] = self.options['title']
        return [node]

def button(self, node):
    template= """
<!-- Button trigger modal -->
<button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#iframeModal">
  %(label)s
</button>

<!-- Modal -->
<div class="modal fade" id="iframeModal" tabindex="-1" aria-labelledby="iframeModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="iframeModalLabel">%(title)s</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <iframe src="%(url)s"></iframe>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-neutral" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
"""
    self.body.append(template%{'url': node['url'], 'label': node['label'], 'title': node['title']})
    raise nodes.SkipNode


def setup(app):
    app.add_node(openIframeModalButton,
                 html=(button, None))

    app.add_directive('open_iframe_modal_button', OpenIframeModalButton)
