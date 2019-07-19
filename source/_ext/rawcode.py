import cgi
from docutils import nodes
from docutils.parsers.rst import Directive

from sphinx.locale import _
from sphinx.util.docutils import SphinxDirective

class rawcode(nodes.General, nodes.Element): pass

def visit_rawcode_node(self, node):

    div_attrs = {
        'class': 'code-container'
    }
    self.body.append(self.starttag(node, "div", **div_attrs))
    p_attrs = {
        
    }
    self.body.append(self.starttag(node, "pre", **p_attrs))
    code_attrs = {
        'class': 'prettyprint linenums' if node['linenums'] == ':lineos:' else 'prettyprint'
    }
    self.body.append(self.starttag(node, "code", **code_attrs))

    self.body.append(cgi.escape(''.join(node['content'])))

    self.body.append('</code></pre></div>')
    
def depart_rawcode_node(self, node):
    pass

class RawCode(Directive):
    has_content = True
    required_arguments = 0
    optional_arguments = 5
    final_argument_whitespace = False
    #TODO: make title an optional argument
    #option_spec = {
    #    'height': directives.unchanged,
    #    'theme_id': directives.unchanged,
    #    'slug': directives.unchanged,
    #    'user': directives.unchanged,
    #    'title': directives.unchanged
    #}

    def run(self):
        return [rawcode(type=self.arguments[0],
                        linenums=self.arguments[1],
                        content=self.content)]

def setup(app):
    app.add_node(rawcode, html=(visit_rawcode_node, depart_rawcode_node))
    app.add_directive("rawcode", RawCode)
