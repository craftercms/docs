# -*- coding: utf-8 -*-
#   
# Configuration file for the Sphinx documentation builder.
#
# This file does only contain a selection of the most common options. For a
# full list see the documentation:
# http://www.sphinx-doc.org/en/master/config

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
import os
import sys
from datetime import date

sys.path.append(os.path.abspath("./_ext"))
# sys.path.insert(0, os.path.abspath('.'))


# -- Project information -----------------------------------------------------

project = u'CrafterCMS'
copyright = u"%s, Crafter Software Corporation"% str(date.today().year)
author = u'CrafterCMS'

# The short X.Y version.
version = u'4'
# The full version, including alpha/beta/rc tags.
release = u'4.2.2'


# -- General configuration ---------------------------------------------------

# If your documentation needs a minimal Sphinx version, state it here.
#
# needs_sphinx = '1.0'

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.doctest',
    'sphinx.ext.intersphinx',
    'sphinx.ext.todo',
    'sphinx.ext.coverage',
    'sphinx.ext.mathjax',
    'sphinx.ext.ifconfig',
    'edit_on_github',
    'sphinx.ext.extlinks',
    'version_tag',
    'sphinx_copybutton',
    'sphinxext.remoteliteralinclude',
    'sphinx_tabs.tabs',
    'open_iframe_modal_button'
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# The suffix(es) of source filenames.
# You can specify multiple suffix as a list of string:
#
# source_suffix = ['.rst', '.md']
source_suffix = '.rst'

# The master toctree document.
master_doc = 'index'

# The language for content autogenerated by Sphinx. Refer to documentation
# for a list of supported languages.
#
# This is also used if you do content translation via gettext catalogs.
# Usually you set "language" from the command line for these cases.
# language = 'en'

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
exclude_patterns = ['includes/*.rst']

# The name of the Pygments (syntax highlighting) style to use.
pygments_style = None

# If true, keep warnings as "system message" paragraphs in the built documents.
#keep_warnings = False

# If true, `todo` and `todoList` produce output, else they produce nothing.
todo_include_todos = True

# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = "sphinx_rtd_theme"
html_theme_path = ["_themes", ]
html_theme_options = {
    'logo_only': True,
    'style_nav_header_background': '#D70015',
    "navigation_depth": -1
}
html_css_files = ['theme/custom.css']

# Theme options are theme-specific and customize the look and feel of a theme
# further.  For a list of options available for each theme, see the
# documentation.
#
# html_theme_options = {}

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']

# Custom sidebar templates, must be a dictionary that maps document names
# to template names.
#
# The default sidebars (for documents that don't match any pattern) are
# defined by theme itself.  Builtin themes are using these templates by
# default: ``['localtoc.html', 'relations.html', 'sourcelink.html',
# 'searchbox.html']``.
#
# html_sidebars = {}


# -- Options for HTMLHelp output ---------------------------------------------

# Output file base name for HTML help builder.
htmlhelp_basename = 'CrafterCMSdoc'

html_logo = '_static/theme/logo.svg'

html_scaled_image_link = False

html_favicon = "_static/images/favicon.ico"

# Add versions for the bottom menu
html_context = {
    'versions': ['4', '4.1', '4.0', '3.1'],
    'docsUrl': '/docs'
}

# -- Options for LaTeX output ------------------------------------------------

latex_elements = {
    # The paper size ('letterpaper' or 'a4paper').
    #
    # 'papersize': 'letterpaper',

    # The font size ('10pt', '11pt' or '12pt').
    #
    # 'pointsize': '10pt',

    # Additional stuff for the LaTeX preamble.
    #
    # 'preamble': '',

    # Latex figure (float) alignment
    #
    # 'figure_align': 'htbp',
}

# Grouping the document tree into LaTeX files. List of tuples
# (source start file, target name, title,
#  author, documentclass [howto, manual, or own class]).
latex_documents = [
    (master_doc, 'CrafterCMS.tex', 'CrafterCMS Documentation',
     'CrafterCMS', 'manual'),
]


# -- Options for manual page output ------------------------------------------

# One entry per manual page. List of tuples
# (source start file, name, description, authors, manual section).
man_pages = [
    (master_doc, 'craftercms', 'CrafterCMS Documentation',
     [author], 1)
]


# -- Options for Texinfo output ----------------------------------------------

# Grouping the document tree into Texinfo files. List of tuples
# (source start file, target name, title, author,
#  dir menu entry, description, category)
texinfo_documents = [
    (master_doc, 'CrafterCMS', 'CrafterCMS Documentation',
     author, 'CrafterCMS', 'One line description of project.',
     'Miscellaneous'),
]


# -- Options for Epub output -------------------------------------------------

# Bibliographic Dublin Core info.
epub_title = project

# The unique identifier of the text. This can be a ISBN number
# or the project homepage.
#
# epub_identifier = ''

# A unique identification for the text.
#
# epub_uid = ''

# A list of files that should not be packed into the epub file.
epub_exclude_files = ['search.html']

# Configure Edit on Github
edit_on_github_project = 'craftercms/docs'
edit_on_github_branch = 'master'
edit_on_github_base_folder = 'source'

# Place substitution available in all files here
rst_prolog= """
.. include:: /includes/formatting.rst
"""

rst_epilog = """
.. |checkmark| unicode:: U+2713
.. |ex| unicode:: U+2718

.. |projectTools| image:: /_static/images/configuration-project-tools-icon.webp
                   :width: 10%

.. |mainMenu| image:: /_static/images/main-menu-button.webp
                   :width: 2%

.. |enterpriseOnly| image:: /_static/images/ee-only-badge.svg
                      :alt: Enterprise only feature
                      :class: ee-only-badge
                      :target: https://craftercms.com

.. # define a hard line break for HTML
.. |br| raw:: html

   <br />

.. # define a horizontal line for HTML
.. |hr| raw:: html

   <hr>

.. |js_sdk_desc| replace:: The JavaScript SDK allows access to CrafterCMS services from any SPA framework or direct JavaScript. The SDK also enables Experience Builder (In-Content Editing capabilities) for any project, including SPA projects.
.. |graphql_desc| replace:: The GraphQL API allows content retrieval and control over the shape of the response.
.. |rest_api_desc| replace:: The REST API allows content retrieval using the default REST API endpoints, and also allows the developer to define custom endpoints with full control over the shape of the response. To create custom endpoints, see the Groovy API indicated below.
.. |search_desc| replace:: The search API allows full text search, filtering, ranking and boosting across the entire project.
.. |groovy_desc| replace:: The Groovy API allows for writing server-side code that can perform business logic, content operations, and more. This layer also allows the developer to create custom REST endpoints with full control over the shape of the response.
.. |static_asset_desc| replace:: The Static Asset Access allows the developer to access static assets (images, videos, etc.) from internally managed or externally managed repositories.
.. |freemarker_desc| replace:: The FreeMarker API allows access to CrafterCMS services from FreeMarker templates for server-side rendered projects.

.. |js_sdk_link| replace:: :ref:`javascript-sdk`
.. |graphql_link| replace:: :ref:`graphql`
.. |rest_api_link| replace:: :ref:`rest-content-retrieval-api`
.. |search_link| replace:: :ref:`content-search`
.. |groovy_link| replace:: :ref:`groovy-java-api`
.. |static_asset_link| replace:: :ref:`static-content-access`
.. |freemarker_link| replace:: :ref:`templating-api`

"""


# Javadoc home and version
javadoc_base = 'http://javadoc.craftercms.org/'
javadoc_version = '4.2.2'

# Shorten external links
extlinks = {'javadoc_base_url': (javadoc_base + javadoc_version + '/%s', None ),
            'base_url': ('/docs/' + version + '/%s', None),
            'docs_base_url': ('/docs' + '/%s', None)
            }


#
# Open links in new tab
#
from sphinx.writers.html import HTMLTranslator
from docutils import nodes
from docutils.nodes import Element

class PatchedHTMLTranslator(HTMLTranslator):

    def visit_reference(self, node: Element) -> None:
        atts = {'class': 'reference'}
        if node.get('internal') or 'refuri' not in node:
            atts['class'] += ' internal'
        else:
            atts['class'] += ' external'
            # ---------------------------------------------------------
            # Customize behavior (open in new tab, secure linking site)
            atts['target'] = '_blank'
            atts['rel'] = 'noopener noreferrer'
            # ---------------------------------------------------------
        if 'refuri' in node:
            atts['href'] = node['refuri'] or '#'
            if self.settings.cloak_email_addresses and atts['href'].startswith('mailto:'):
                atts['href'] = self.cloak_mailto(atts['href'])
                self.in_mailto = True
        else:
            assert 'refid' in node, \
                'References must have "refuri" or "refid" attribute.'
            atts['href'] = '#' + node['refid']
        if not isinstance(node.parent, nodes.TextElement):
            assert len(node) == 1 and isinstance(node[0], nodes.image)
            atts['class'] += ' image-reference'
        if 'reftitle' in node:
            atts['title'] = node['reftitle']
        if 'target' in node:
            atts['target'] = node['target']
        self.body.append(self.starttag(node, 'a', '', **atts))

        if node.get('secnumber'):
            self.body.append(('%s' + self.secnumber_suffix) %
                             '.'.join(map(str, node['secnumber'])))

def setup(app):
    app.set_translator('html', PatchedHTMLTranslator)

