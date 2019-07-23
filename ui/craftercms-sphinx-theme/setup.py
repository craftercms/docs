# -*- coding: utf-8 -*-
"""`craftercms_sphinx_theme` lives on `Github`_.

.. _github: https://github.com/craftercms/craftercms-sphinx-theme

"""
from io import open
from setuptools import setup
# from craftercms_sphinx_theme import __version__

setup(
    name='craftercms_sphinx_theme',
    description='Crafter CMS Docs theme for Sphinx Doc',
    version='1.0.0',
    url='https://github.com/craftercms/craftercms-sphinx-theme/',
    license='GPL 3.0',
    author='Roy Art',
    author_email='royart@me.com',
    long_description=open('README.rst', encoding='utf-8').read(),
    zip_safe=False,
    packages=['craftercms_sphinx_theme'],
    package_data={
      'craftercms_sphinx_theme': [
        'theme.conf',
        '*.html',
        'static/css/*.css',
        'static/js/*.js',
        'static/font/*.*',
        'static/img/*.*'
      ]
    },
    include_package_data=True,
    # See http://www.sphinx-doc.org/en/stable/theming.html#distribute-your-theme-as-a-python-package
    entry_points = {
        'sphinx.html_themes': [
            'craftercms_sphinx_theme = craftercms_sphinx_theme',
        ]
    },
    classifiers=[

        #   3 - Alpha
        #   4 - Beta
        #   5 - Production/Stable
        'Development Status :: 5 - Production/Stable',

        'License :: OSI Approved :: GPL 3.0',

        'Environment :: Console',
        'Environment :: Web Environment',

        'Intended Audience :: Developers',

        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',

        'Operating System :: OS Independent',

        'Topic :: Documentation',
        'Topic :: Software Development :: Documentation',
    ]
)
