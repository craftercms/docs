"""
Sphinx theme for Crafter CMS docs.
From https://github.com/craftercms/craftercms-sphinx-theme.
"""

from os import path

def setup(app):
  app.add_html_theme('craftercms_sphinx_theme', path.abspath(path.dirname(__file__)))
